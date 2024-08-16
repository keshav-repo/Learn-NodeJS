import { createReadStream, createWriteStream } from "fs";
import { Transform } from "stream";
import csvParser from "csv-parser";

interface User {
    Name: string;
    Age: number;
    Email: string;
}

const inputFilePath = "./data/sample-users.csv";
const outputFilePath = "./data/transformed-users.csv";
const chunkSize = 5;

class BatchTransform extends Transform {
    private currentBatch: User[] = [];
    private writeStream = createWriteStream(outputFilePath, { flags: "a" });

    constructor() {
        super({ objectMode: true, highWaterMark: chunkSize });

        // Write headers to the CSV file
        this.writeStream.write("Name,Age,Email\n");
    }

    _transform(chunk: any, encoding: BufferEncoding, callback: Function) {
        const user: User = {
            Name: chunk.Name,
            Age: parseInt(chunk.Age, 10),
            Email: chunk.Email,
        };

        this.currentBatch.push(user);

        if (this.currentBatch.length >= chunkSize) {
            const processedBatch = this.currentBatch.map((user) => {
                return {
                    ...user,
                    Name: user.Name.toUpperCase(),
                };
            });

            this._writeBatch(processedBatch);
            this.currentBatch = [];
        }

        callback();
    }

    _flush(callback: Function) {
        if (this.currentBatch.length > 0) {
            const processedBatch = this.currentBatch.map((user) => {
                return {
                    ...user,
                    Name: user.Name.toUpperCase(),
                };
            });

            this._writeBatch(processedBatch);
        }

        this.writeStream.end(() => {
            console.log("Finished writing all batches to the CSV file.");
            callback();
        });
    }

    private _writeBatch(batch: User[]) {
        console.log(`Processing and writing batch of ${batch.length} records`);

        batch.forEach((user) => {
            const csvLine = `${user.Name},${user.Age},${user.Email}\n`;
            this.writeStream.write(csvLine);
        });
    }
}

const readStream = createReadStream(inputFilePath);
const transformStream = new BatchTransform();

readStream
    .pipe(csvParser())
    .pipe(transformStream)
    .on("error", (err) => {
        console.error("Error during processing:", err);
    });

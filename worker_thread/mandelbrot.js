// mandelbrot.js

const width = 10000;
const height = 10000;
const maxIterations = 1000;

const calculateMandelbrot = (x, y) => {
    let real = (x - width / 2.0) * 4.0 / width;
    let imag = (y - height / 2.0) * 4.0 / height;
    let cReal = real;
    let cImag = imag;
    let iterations = 0;

    while (real * real + imag * imag <= 4 && iterations < maxIterations) {
        let tempReal = real * real - imag * imag + cReal;
        imag = 2.0 * real * imag + cImag;
        real = tempReal;
        iterations++;
    }

    return iterations;
};

const generateMandelbrotSet = () => {
    const results = [];
    for (let y = 0; y < height; y++) {
        const row = [];
        for (let x = 0; x < width; x++) {
            row.push(calculateMandelbrot(x, y));
        }
        results.push(row);
    }
    return results;
};

console.time('Mandelbrot Calculation');
const mandelbrotSet = generateMandelbrotSet();
console.timeEnd('Mandelbrot Calculation');

// Optionally, print some of the results to verify
console.log('Sample of Mandelbrot Set:');
for (let y = 0; y < 10; y++) {
    console.log(mandelbrotSet[y].slice(0, 10).map((n) => (n === maxIterations ? '#' : '.')).join(' '));
}


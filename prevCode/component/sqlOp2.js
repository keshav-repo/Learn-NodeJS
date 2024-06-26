const mysql = require("mysql2/promise");
const Q = require("q");

async function insert(users, table) {
  // Connection configuration
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "secret@123",
    database: "booking",
    port: 3300,
  });

  // Connect to MySQL
  console.log("Connected!");

  // Extract keys (column names) from the first object
  const keys = Object.keys(users[0]);

  // Prepare values with placeholders
  values = users.map((user) => keys.map((key) => user[key]));

  // SQL statement with placeholders for multiple rows
  const sql = `INSERT INTO ${table} (${keys.join(",")}) VALUES ?`;

  // Execute the query
  try {
    const [rows, fields] = await connection.query(sql, [values]);
    console.log(`${rows.affectedRows} records inserted`);
  } catch (err) {
    console.error(err);
  } finally {
    // Close the connection after use
    await connection.end();
    console.log("Connection closed");
  }
}

const movie = [
  {
    movieId: 1,
    name: "Furiosa: A Mad Max Saga",
    language: "English, Hindi, Tamil, Telugu",
    about: `As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland, they come across the Citadel presided over by The Immortan Joe.
    While the two Tyrants fight for dominance, Furiosa must survive many trials as she puts together the means to find her way home.`,
    url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/furiosa-a-mad-max-saga-et00377865-1712650113.jpg",
    isActive: true,
  },
  {
    movieId: 2,
    name: "Turbo",
    language: "Malayalam",
    about: `Jose, a jeep driver from Idukki gets in trouble and is forced to relocate to Chennai where he gets entangled with Indhu and his best friend, Jerry. However, a bunch of surprises in the form of Vetrivel and others await Jose in Chennai!`,
    url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/turbo-et00396952-1714733887.jpg",
    isActive: true,
  },
  {
    movieId: 3,
    name: "Bhaiyya Ji",
    language: "Hindi",
    about: `After his younger brother is tragically killed over a petty argument, a feared and retired criminal Bhaiyya Ji, sets out to seek justice against the powerful Gujjar responsible, mobilizing his loyal comrades and igniting a wave of vengeance that threatens to shake the criminal underworld.`,
    url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bhaiyya-ji-et00392192-1716351098.jpg",
    isActive: true,
  },
];

const theatre = [
  {
    theatreId: 1,
    name: "Gopalan Cinemas: Bannerghatta Road",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    pin: "560076",
    addressLine1:
      "Near Jayadeva Hospital, Bannerghatta Road, Opp Shoppers Stop, Bengaluru, Karnataka 560076, India",
  },
  {
    theatreId: 2,
    name: "Cinephile HSR Layout: PNR Felicity Mall Haralur Rd",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    pin: "560102",
    addressLine1:
      "No.102, 2B, Haralur Main Road, Bengaluru, Karnataka 560102, India",
  },
  {
    theatreId: 3,
    name: "Cinepolis VIP: Lulu Mall, Bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    pin: "560023",
    addressLine1:
      "3rd Floor, Lulu Mall, Rajajinagar, Bengaluru, Karnataka 560023, India",
  },
  {
    theatreId: 4,
    name: " Cinepolis: Grand Venice Mall, Greater Noida",
    city: "Noida",
    state: "Uttar Pradesh",
    country: "India",
    pin: "201308",
    addressLine1:
      "Plot No SH 3, Site IV, Greater Noida, Near Pari Chowk, Greater Noida, NCR 201308, India",
  },
  {
    theatreId: 5,
    name: " Amba Cinema: Delhi",
    city: "Delhi",
    state: "Delhi",
    country: "India",
    pin: "110007",
    addressLine1:
      "GT Road, Ghanta Ghar, Subzi Mandi, Block 40, Shakti Nagar, Near Clock Tower, Delhi, NCR 110007, India",
  },
  {
    theatreId: 6,
    name: " Amba Cinema: Delhi",
    city: "Delhi",
    state: "Delhi",
    country: "India",
    pin: "110058",
    addressLine1:
      "Pankha Road, Block C 6A, Janakpuri, Delhi, NCR 110058, India",
  },
];

const screen = [
  {
    screenId: 1,
    screenName: "Screen I",
    theatreId: 1,
  },
  {
    screenId: 2,
    screenName: "Screen II",
    theatreId: 1,
  },
  {
    screenId: 3,
    screenName: "Screen I",
    theatreId: 2,
  },
  {
    screenId: 4,
    screenName: "Screen I",
    theatreId: 3,
  },
  {
    screenId: 5,
    screenName: "Screen I",
    theatreId: 4,
  },
  {
    screenId: 6,
    screenName: "Screen I",
    theatreId: 5,
  },
  {
    screenId: 7,
    screenName: "Screen I",
    theatreId: 6,
  },
];

/*
showId int NOT NULL AUTO_INCREMENT,
    screenId int not null,
    theatreId int not null,
    movieId int not null, 
    movieTiming DATETIME not null,
    durationInMin int,
    createdAt DATETIME not null,
    isActive TINYINT not null,
*/

/*
const shows = [
  {
    showId: 1,
    screenId: 1,
    movieId: 1,
    theatreId: 1,
    movieTiming: new Date(2024, 4, 24, 9, 30),
    durationInMin: 180,
    createdAt: new Date(2024, 4, 23, 22, 3),
    isActive: true,
  },
  {
    showId: 2,
    screenId: 2,
    movieId: 1,
    theatreId: 1,
    movieTiming: new Date(2024, 4, 24, 12, 30),
    durationInMin: 180,
    createdAt: new Date(2024, 4, 23, 22, 3),
    isActive: true,
  },
  {
    showId: 3,
    screenId: 1,
    movieId: 1,
    theatreId: 2,
    movieTiming: new Date(2024, 4, 24, 9, 30),
    durationInMin: 180,
    createdAt: new Date(2024, 4, 23, 22, 3),
    isActive: true,
  },
];
*/

const shows = [
  {
    showId: 4,
    screenId: 1,
    movieId: 2,
    theatreId: 1,
    movieTiming: new Date(2024, 4, 24, 12, 30),
    durationInMin: 180,
    createdAt: new Date(2024, 4, 23, 22, 3),
    isActive: true,
  },
];

Q(undefined)
  .then(function () {
    // insert(movie, "movie");
  })
  .then(function () {
    // insert(theatre, "theatre");
  })
  .then(function () {
    // insert(screen, "screen");
  })
  .then(function () {
    // insert(shows, "movieShow");
  })
  .catch(function () {});

console.log(JSON.stringify(theatre[0]));

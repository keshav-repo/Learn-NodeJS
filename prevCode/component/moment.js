const moment = require('moment');

// Create two moment objects representing the dates
const date1 = moment('2023-10-04T12:00:00');
// const date2 = moment('2023-10-01T15:30:00');

const d2 = moment().toISOString();
const date2 = moment(d2);

// Calculate the time difference in milliseconds
const timeDifferenceMilliseconds = date2.diff(date1);

console.log(timeDifferenceMilliseconds);
// Convert the time difference to a human-readable format (e.g., hours and minutes)
const duration = moment.duration(timeDifferenceMilliseconds);
const hours = duration.hours();
const minutes = duration.minutes();
const days = duration.days();

// console.log(duration);
console.log(`Time Difference: ${days}, days ${hours} hours and ${minutes} minutes`);


const timeDifferenceMinutes = date2.diff(date1, 'minutes');

console.log(`Overall Time Difference: ${timeDifferenceMinutes} minutes`);


// This file contains the functions to fetch and submit the booking data
// The functions are exported to be used in the Booking component

/* Function to generate a random number based on the date */
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}


/* Function to fetch available time slots for a given date */
const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};


// Function to submit the booking data
// This function is not implemented, it just returns true
const submitAPI = function(formData) {
    return true;
};

export { fetchAPI, submitAPI };
const leapYears = function (year) {
    // if year is divisible by 4
    // and divisible by 400
    // and not divisible by 100

    // (year % 4 === 0) &&
    // (year % 400 === 0 || !(year % 100 === 0))
    return (year % 4 === 0) && (year % 400 === 0 || !(year % 100 === 0))
};

// Do not edit below this line
module.exports = leapYears;

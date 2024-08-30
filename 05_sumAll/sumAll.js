const sumAll = function (from, to) {
    // Validation
    if ((from < 0 || to < 0) ||
        (!Number.isInteger(from) || !Number.isInteger(to))) {
        return "ERROR";
    }

    // Logic
    let sum = 0;
    const max = Math.max(from, to);
    const min = Math.min(from, to);

    for (let number = min; number <= max; number++) {
        sum += number
    }

    return sum
};



// Do not edit below this line
module.exports = sumAll;

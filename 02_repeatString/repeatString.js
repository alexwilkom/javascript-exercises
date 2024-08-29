const repeatString = function (string, num) {
    let output =
        num < 0 ? "ERROR" :
            num === 0 ? "" :
                string;
    for (let index = 1; index < num; index++) {
        output += string;
    }
    return output
};

// Do not edit below this line
module.exports = repeatString;

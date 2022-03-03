const sumAll = function (num1, num2) {
    var sumnum = 0;
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    } if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } if (num1 <= num2) {
        for (let x = num2; x >= num1; x--) {
            sumnum += x;
        }
    } if (num1 > num2) {
        for (let x = num2; x <= num1; x++) {
            sumnum += x;
        }
    }
    return sumnum
};

// Do not edit below this line
module.exports = sumAll;

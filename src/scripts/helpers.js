exports.baseToTen = function(numArray, base) {
    if (base <= 1 || !numArray.length) {
        return NaN;
    }

    var total = 0;
    for (var i = 0; i < numArray.length; i++) {
        total += numArray[i] * (base**i);
    }

    return total;
}

exports.tenToBase = function(num, base) {
    if (Number.isNaN(base) || base <= 1) { // To prevent infinite loops
        return [];
    } else if (!num) {
        return [0];
    }

    var resArray = [];
    // find largest base
    var i = Math.floor(getBaseLog(base, num))
    var largestBase = base**i;
    while (i >= 0) {
        resArray[i] = Math.floor(num/largestBase);
        num %= largestBase;
        i--;
        largestBase /= base;
    }

    return resArray;
}

function getBaseLog(base, y) {
    return Math.round(Math.log(y) / Math.log(base));
}

exports.standardBaseToArray = function(num, base) {
    return Array(String(parseInt(num, base)))
}

exports.convertBaseToBase = function(numArray, base, toBase) {
    // first convert to base 10
}
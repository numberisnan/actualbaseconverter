function baseToTen(numArray, base) {
    var total = 0;
    for (var i = 0; i < numArray.length; i++) {
        total += numArray[i] * (base**i);
    }

    return total;
}

function tenToBase(num, base) {
    var resArray = [];
    // find largest base
    var largestBase = Math.floor(getBaseLog(base, num))
    

}

function getBaseLog(base, y) {
    return Math.log(y) / Math.log(base);
}

exports.standardBaseToArray = function(num, base) {
    return Array(String(parseInt(num, base)))
}

exports.convertBaseToBase = function(numArray, base, toBase) {
    // first convert to base 10
}
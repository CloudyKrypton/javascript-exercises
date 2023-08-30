const sumAll = function(start, finish) {
    sum = 0;
    if (typeof(start) != "number" || typeof(finish) != "number" || start < 0 || finish < 0) {
        return ("ERROR");
    } else if (start <= finish) {
        for (i = start; i <= finish; i++) {
            sum += i;
        }
    } else {
        for (i = start; i >= finish; i--) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

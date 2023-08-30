const repeatString = function(string, num) {
    grandString = '';
    if (num < 0) {
        return "ERROR";
    } else{
        for (i = 0; i < num; i++) {
            grandString += string;
        }
        return grandString;
    }
};

// Do not edit below this line
module.exports = repeatString;

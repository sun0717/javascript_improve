// throw {
//     toString: function() {
//         return "I'm an object!"
//     }
// }
/* function UserException(message) {
    this.message = message;
    this.name = "UserException";
}

UserException.prototype.toString = function() {
    return this.name + ':"' + this.message + '"';
};

throw new UserException('Value too high'); */
function getMonthName(mo) {
    mo = mo - 1;
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    if (months[mo]) {
        return months[mo]; 
    } else {
        throw 'InvalidMonthNo';
    }
}

try {
    monthName = getMonthName(myMonth);
} catch(e) {
    monthName = "unknown";
    logMyErrors(e);
}
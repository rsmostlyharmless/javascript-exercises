const leapYears = function(leap) {
    if ((0 == leap % 4) && (0 != leap % 100) || (0 == leap % 400)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

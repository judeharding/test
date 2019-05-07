var die = {  // this is an object literal (even if it is empty)
    size: 6,
    totalRolls: 0,
    roll: function () {
        var result = Math.ceil(this.size * Math.random());
        // console.log("THIS IS " + this);
        this.totalRolls += 1;
        return result;
    }
};

exports.die = die;  // exports this result to another js page
exports.name = "my dice exports ";
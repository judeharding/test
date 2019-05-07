var book = require("./lib/grades.js").book;


// MY answer (works)
// exports["setUp"] = function (callback) {
//     book.reset();
//     callback();
// }

// exports["can average grades"] = function (test) {
//     book.addGrade(90);
//     book.addGrade(85);
//     book.addGrade(72);

//     var average = book.getAverage();

//     test.equal(Math.round(average), 82);
//     test.done();
// };

// PROCESS THE AVERAGE OF GRADES ENTERED IN THE TERMINAL
// for (var i = 2; i < process.argv.length; i++) {
//     book.addGrade(parseInt(process.argv[i])); // now i can add grades on the terminal line node program.js 70 80 90
// }
// console.log(book.getAverage());


// STARTING EXPRESS JS
var express = require("express");
var app = express();



app.get("/", function (req, res) {
    res.send("Hello World!!!");
});

app.get("/grade", function (req, res) {
    // res.send("Hello Grade!!!");
    var grades = req.query.grades.split(","); // turns into an array
    for (let i = 0; i < grades.length; i++) {
        book.addGrade(parseInt(grades[i]));
    }
    var average = book.getAverage();
    var letter = book.getLetterGrade();

    res.send("Your average is " + average + " grade " + letter);
});


app.listen(3000);
console.log("The server is ready and listening...");
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

for (var i = 2; i < process.argv.length; i++) {
    book.addGrade(parseInt(process.argv[i])); // now i can add grades on the terminal line node program.js 70 80 90
}
console.log(book.getAverage());


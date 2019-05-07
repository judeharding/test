var book = require("../lib/grades.js").book;

exports["setUp"] = function (callback) {
    book.reset();
    callback();
}

exports["can average grades"] = function (test) {
    book.addGrade(100);
    book.addGrade(50);

    var average = book.getAverage();

    test.equal(average, 75);
    test.done();
};

exports["can compute letter grade of A "] = function (test) {
    book.addGrade(100);
    book.addGrade(90);

    var result = book.getLetterGrade();

    test.equal(result, 'A');
    test.done();
};

exports["can compute letter grade of B "] = function (test) {
    book.addGrade(80);
    book.addGrade(85);

    var result = book.getLetterGrade();

    test.equal(result, 'B');
    test.done();
};

exports["can compute letter grade of C "] = function (test) {
    book.addGrade(78);
    book.addGrade(70);

    var result = book.getLetterGrade();

    test.equal(result, 'C');
    test.done();
};

exports["can compute letter grade of D"] = function (test) {
    book.addGrade(69);
    book.addGrade(61);

    var result = book.getLetterGrade();

    test.equal(result, 'D');
    test.done();
};

exports["can compute letter grade of FFFF "] = function (test) {
    book.addGrade(59);
    book.addGrade(42);

    var result = book.getLetterGrade();

    test.equal(result, 'F');
    test.done();
};


exports["Can add new grade"] = function (test) {
    book.addGrade(90);
    var count = book.getCountOfGrades();
    test.equal(count, 1);
    test.done();
};

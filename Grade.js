function grade(marks) {


    switch (true) {
        case (marks >= 90 && marks < 100):
            console.log("Grade A");
            return "A";

        case (marks >= 80 && marks < 90):
            console.log("Grade B");
            return "B";

        case (marks === 100):
            console.log("Grade A+");
            return "A+";

        default:
            console.log("Grade C");
            return "C";
    }
}

let studentScore = 100;
grade(studentScore)
//console.log(`Your Grade is ${grading}`);





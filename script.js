function solve() {

    var a1 = parseInt(document.getElementById('a').value);
    var b1 = parseInt(document.getElementById('b').value);
    var c1 = parseInt(document.getElementById('c').value);

    var x1 = document.getElementById("no");
    var x21 = document.getElementById("root1");
    var x22 = document.getElementById("root2");
    var x3 = document.getElementById("eq");

    var validData;

    if (isNaN(a1) || isNaN(b1) || isNaN(c1)) {
        x1.innerHTML = "Please enter valid Data.";
        x21.innerHTML = "";
        x22.innerHTML = "";
        x3.innerHTML = "";
        document.getElementById("root").reset();
    }
    else {

        var a = parseInt(a1);
        var b = parseInt(b1);
        var c = parseInt(c1);

        var determinant = b * b - 4 * a * c;

        if (determinant < 0) {
            x1.innerHTML = "There is no solution for this problem.";
            x21.innerHTML = "";
            x22.innerHTML = "";
            x3.innerHTML = "";
        }
        else if (determinant == 0) {
            var answer = -b/(2*a);
            x1.innerHTML = "";
            x21.innerHTML = "";
            x22.innerHTML = ""; 
            x3.innerHTML = "Both roots are equal to: " + (answer);
        }
        else {
            var answer1 = (-b + Math.sqrt(determinant)) / (2 * a);
            var answer2 = (-b - Math.sqrt(determinant)) / (2 * a);
            x1.innerHTML = "";
            x21.innerHTML = "Value of Root 1 is: " + (answer1);
            x22.innerHTML = "Value of Root 2 is: " + (answer2);
            x3.innerHTML = "";
        }
    }
}
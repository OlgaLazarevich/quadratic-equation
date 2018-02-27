module.exports = function solveEquation(equation) {
    var arr = equation.split(' ');

    let a = arr[0],
        c, b;

    arr[3] == '-' ? b = '-' + arr[4] : b = arr[4];

    arr[7] == '-' ? c = '-' + arr[8] : c = arr[8];

    var d = Math.pow(b, 2) - 4 * a * c;

    var first = (-(b) + Math.sqrt(d)) / (2 * a);
    var second = (-(b) - Math.sqrt(d)) / (2 * a);

    let solutions = []

    if (first < second) {
        solutions = [first, second];
    } else { solutions = [second, first]; }



    return solutions
}
module.exports = function solveEquation(equation) {
    const REVERSE_COMPARATOR = (left, right) => left - right;
    let splitted = equation.split(" ");

    let a = splitted[0];
    let b = checkToken(splitted[4], splitted[3]);
    let c = checkToken(splitted[splitted.length - 1], splitted[splitted.length - 2]);

    let d = Math.sqrt(b * b - 4 * a * c);
    
    return [Math.round((-b - d)/(2 * a)), Math.round((-b + d)/(2 * a))].sort(REVERSE_COMPARATOR);
}


function checkToken(numeral, token) {
    if(token == "-") {
        return -numeral;
    }

    return numeral;
}

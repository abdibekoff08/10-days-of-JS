/*Day 0: Hello, World!*/
function greeting(parameterVariable) {
    console.log('Hello, World!');
    console.log(parameterVariable);
}

/*Day 0: Data Types*/
function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    console.log(firstInteger + Number(secondInteger))
    console.log(firstDecimal + Number(secondDecimal))
    console.log(firstString + secondString)
}

/*Day 1: Arithmetic Operators*/
function getArea(length, width) {
    let area;
    area = length * width;
    return area;
}
function getPerimeter(length, width) {
    let perimeter;
    perimeter = (length + width) * 2;
    return perimeter;
}

/*Day 1: Functions*/
function factorial(n) {
    if (n<3) return n;
    return factorial(n-1) * n;
}

/*Day 1: Let and Const*/
function main() {
    const PI = Math.PI;
    let radius = readLine();
    let area = PI * (radius * radius); //Shynar and i can use Math.pow)
    let perimeter = 2 * PI * radius;
    
    console.log(area);
    console.log(perimeter);

    try {    
        PI = 0;
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}


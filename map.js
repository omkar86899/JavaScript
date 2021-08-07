function squareNumber(number){
    return number*number;
}

function cubeNumber(number){
    return number*number*number;
}

function add10toIt(number){
    return number+10;
}

var numbers = [2,3,4,5,6];
function map(numbers,predicateFunction){
    var mappedNumbers = [];
    for (let index = 0; index < numbers.length; index++) {
        mappedNumbers.push(predicateFunction(numbers[index]));
    }
    return mappedNumbers;
}

console.log(map(numbers,squareNumber));
console.log(map(numbers,cubeNumber));
console.log(map(numbers,add10toIt));
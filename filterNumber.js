function isOdd(number){
    return number%2!=0;
}

function isGreaterThan25(number){
    return number>25;
}

var numbers = [10,20,30,40,51];
function filterNumbers(numbers,predicateFunction){
    var filteredNumbers = [];
    for (let index = 0; index < numbers.length; index++) {
        if(predicateFunction(numbers[index])){
            filteredNumbers.push(numbers[index]);
        }
    }
    return filteredNumbers;
}

console.log(filterNumbers(numbers,isOdd));
console.log(filterNumbers(numbers,isGreaterThan25));
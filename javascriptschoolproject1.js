/*let ages = [3, 9, 23, 64, 2, 8, 28, 93]

console.log(ages[ages.length -1] - ages[0]);

ages.push(73);

console.log(ages[ages.length -1] - ages[0]);

var sum = 0

for(let i = 0; i < ages.length; i++){
    sum += ages[i];
    
}

var avg = sum / ages.length;

console.log(avg);*/























// For problem 2, 5, 6
/*let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

var sum = 0;


for(let i = 0; i < names.length; i++ ){
    var string = names[i];
    sum += string.length; 
}

var avg = sum / names.length;

console.log(avg);

var combined = ''

for(let i = 0; i < names.length; i++ ){
    var string = names[i];
    combined += ' ' + string; 

}

console.log(combined);

namesLength = []

for( let i = 0; i < names.length; i++){
    var string = names[i];
    namesLength.push(string.length);
}

var result = 0

for(let i = 0; i < namesLength.length; i++){
    result += namesLength[i];
}

console.log(result);*/











//7
/*function problem(n, word){
    var combined = '';
    for(let i = 0; i < n; i++){
        combined += word;
    }
    return combined;
}

console.log(problem(3, 'goodbye'));*/

//8
/*function returnFullName(firstName, lastName){
    var fullName = firstName + ' ' + lastName;
    return fullName;
}
console.log(returnFullName('John', 'Person'));*/









//9
/*let numbersArray = [50, 51]

function checkNumbersArray(arrayOfNumbers){
    var numberSum = 0
    for (let i = 0; i < arrayOfNumbers.length; i++){
        numberSum += arrayOfNumbers[i];
    }
    if(numberSum > 100){
        return true;
    }else{
        return false;
    }
}
console.log(checkNumbersArray(numbersArray));*/






//10

/*let numbersArray = [1, 2, 3, 4]

function getAverageOfElements(arrayOfNumbers){
    var numberSum = 0
    for(let i = 0; i < arrayOfNumbers.length; i++){
        numberSum += arrayOfNumbers[i];

    }
    var avg = numberSum / arrayOfNumbers.length;

    return avg;
}
console.log(getAverageOfElements(numbersArray));*/















//11
/*let greaterNumbersArray = [8, 8, 9, 9]

let lesserNumbersArray = [1, 2, 3, 4]

function checkNumbersArrayAverage(arrayOne, arrayTwo){
    var numSumOne = 0
    var numSumTwo = 0
    for(let i = 0; i < arrayOne.length; i++){
        numSumOne += arrayOne[i];

    }
    var avgOne = numSumOne / arrayOne.length;

    for(let i = 0; i < arrayTwo.length; i++){
        numSumTwo += arrayTwo[i];

    }
    var avgTwo = numSumTwo / arrayTwo.length;

    if(avgOne > avgTwo){
        return true;
    }else{
        return false;
    }
}

console.log(checkNumbersArrayAverage(greaterNumbersArray, lesserNumbersArray));*/



//12
/*var money = 11;

var isHotOutside = true;

function willBuyDrink(isHotOutside, moneyInPocket){
    if(moneyInPocket > 10.50 && isHotOutside == true){
        return true;
    }else{
        return false;
    }
}
console.log(willBuyDrink(isHotOutside, money));*/


















/*
This function takes two parameters, the money in the account and the cost of the game

The reason I wrote this code is because it's a real life situation that I've come across before. 
And I can see how you could actually use this in a website to help determine if a customer can buy a certain product.*/

/*var costOfGame = 29;

var moneyInAccount = 100;

function buyGame(moneyInAccount, costOfGame){
    if(moneyInAccount > costOfGame){
        return 'I can buy this game!';
    }else{
        return 'I need to save up.';
    }
}
console.log(buyGame(moneyInAccount, costOfGame));*/

// дз 1
function factorialIterative(n){
    if(n === 0){
        return 1;
    }else{
        return n * factorialIterative(n -1)
    }
}
const number = 5
const factoiral = factorialIterative(number)
console.log(`Факториал ${number} равен ${factoiral}`);


//дз 2
const textw = "My name 457 is Alex"
const search = /\D/g
const resultq = textw.match(search)
console.log(resultq);


//дз 3
const main = "Hello\tWorld\nTest"
const poisk = /\s/g
const otvet = main.match(poisk)
console.log(otvet);

//дз 4

function countChar(str, targetChar) {
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === targetChar) {
        count++;
    }
}
return count;
}

const inputString = 'loremipsumdolor';
const targetCharacter = 'o';

const result = countChar(inputString, targetCharacter);
console.log(`Количество повторов '${targetCharacter}': ${result}`);




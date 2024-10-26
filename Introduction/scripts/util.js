// export let apiKey = 'abcd';
// export default "klm";
console.log('Hello world!');


function greet(){
    console.log("Hello world")
}

greet();

function Razem(a1, a2, a3){
    console.log(a1+a2+a3)
}

Razem(1,3,5)

// const callMe = function(name){
//     console.log(name);
// }
const callMe = name => {
    return name;
}

// const returnMe = name => {
//     return name;
// }
const returnMe = name => name;

const array1 = [1,4,9,16];
const map1 = array1.map((x)=>x*2);
console.log(map1);

const found = array1.find((Element)=> Element>10);
console.log(found)

const array2 = [1,2,3,4]
const initialValue = 0
const sumWIthInitial= array2.reduce((accumulator, currentValue)=> accumulator+currentValue, initialValue)
console.log(sumWIthInitial)
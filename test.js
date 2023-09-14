const str='hello';
const str2='World';
const str3 = 'hi';
const str4 = 'man';

const arr = [];

arr.push(str);
arr.push(str2);
arr.push(str3);
arr.push(str4);

console.log(Array.isArray(arr));

for( let item of arr){
    console.log(typeof item);
}
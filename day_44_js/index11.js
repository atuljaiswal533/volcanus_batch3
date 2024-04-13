// function addition(a,b,c){
//     return a+b+c;
// }
// console.log(addition(1,2,3));

function add(a){
    return function(b){
    return function(c){
        return a+b+c;
    }


    }
}
let sum =add(2);
let sum1 =sum(3);
let sum2 =sum1(4);
console.log(sum2);


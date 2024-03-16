// for - number of iteration know 
//while - numbre of iteraarioon unknow
//do-while- atleast run once
//for in- key value{object}
//for of-to iterate the array
//for each- element,index,array

// let number = 10
// let sum =0;
// while(number !==0){
//     sum +=number;
//     number--
// }

// console.log("sum is =" +sum);

let number =456789
let result =0

while(num ==0){
    let reminder = num%10
    console.log("reminder at this point",reminder)
    result += reminder
    console.log("sum  at this point",result)
    num = Math.floor(num/10)
    
}
console.log("final sum =", result)
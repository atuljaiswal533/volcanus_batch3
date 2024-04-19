const arr =[17,29,53,7,31,155];

let high = arr[0];
let SecondHigh;

for(let i=1; i<arr.length;i++ ){

    if (arr[i]>High){
        SecondHigh = High;
        High = arr[i];
    }
}
console.log(SecondHigh);


// merging an array
// dividing an array 
// finding lowest value 
//traversing and loging the array
// finding second highest 
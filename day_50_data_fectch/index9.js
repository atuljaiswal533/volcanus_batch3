let arr=[10,20,"superman", "spideramn",20.345,true, false]
// for in looop

for(let i=0; i<Array.length; i++){
    console.log(arr[i])
}

// while looop
let i=0;
while (i < arr.length) { 
console.log(arr[i]); 
i++; 
} 
arr.forEach((index,value,arr)=>console.log(index))

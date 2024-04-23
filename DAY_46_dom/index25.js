const sum = () =>{
    let a =10;
    let b =20;
 console.log(`sum of ${a} and ${b} =${a+b}`);

const multiply = () => {
    
    let c =20;

    console.log(`multiplication of a+b and c =${(a+b)*c}`);
    return (a+b)*c;

};
return multiply;// sum fumction koo return kar diya multiplly

multiply()

};
const result =sum();
console.log(result())
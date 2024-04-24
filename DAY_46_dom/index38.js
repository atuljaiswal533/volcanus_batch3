// const p = new Promise((resolve,reject)=>{

    let aadhar = true;
    let panCard = true;
    let minBalance = 1000;


    const bankAC = new Promise((resolve,reject)=>{

    if(aadhar && panCard && minBalance){
        resolve({ minBalance, msg: 
        "you can open bank account" });
    }else{
        reject("you are not eligible ");
    }
});

bankAC.then((msg) => msg.minBalance)
.then((data) => console.log(` total amount ${data +100}`))
.then((error) => console.log(error));


// bankAC.then((msg)=>console.log(msg)).catch((error) => console.log(error))
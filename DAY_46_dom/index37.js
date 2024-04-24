// promise has three stage 
// 1.pending
//2. resolve => fulfill => .then()
//3. reject => .catch()

const p = new Promise((resolve,reject)=>{

    const age =10 
    if(age == 20){
        resolve("age is 20, my promise resolve");
    }else{
        reject("age is not 20, my promise rejected");
    }
});

p.then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))
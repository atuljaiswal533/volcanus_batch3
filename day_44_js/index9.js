//volume of cylender


const r = 5;

const h = 10;
const vol = (1 / 3) * Math.PI * Math.pow(r, 2) * h;
console.log(vol);

// compound inetrest ,formala 

const principal = 2000;
const time = 5;
const rate = .08;
const n = 12;
const compoundInterest = (p, t, r, n) => {
   const amount = p * (Math.pow((1 + (r / n)), (n * t)));
   const interest = amount - p;
   return interest;
};
console.log(compoundInterest(principal, time, rate, n));
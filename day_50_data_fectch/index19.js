class tv{
    tvprice=()=>1000
}
class samsung extends tv{
    tvprice=()=>2000
}
class LG extends tv{
    tvprice=()=>30000
}
class Realme extends tv{
    tvprice=()=>50000;
}


console.log(`the price of realme tv is ${ new Realme().tvprice}`);


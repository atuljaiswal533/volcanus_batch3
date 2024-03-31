// const str = "$@S#";

// console.log(str.substring(2,3))

const str ="121"   

let start = 0;
let end = str.length -1;

while (start <end){
    if(str.charAt(start) != str.charAt(end)){
        flag = false 
        break;

    }
    start++;
    end--
}if(flag){
    console.log()
}
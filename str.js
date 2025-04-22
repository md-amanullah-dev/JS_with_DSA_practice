// 1. if check string is polindrome string

const str = "AAAA";

let j = str.length-1;
for(i=0;i<str.length;i++){
    if(str[i] != str[j]){
        console.log("Not polindrome")
        return false;

    }else{

        console.log("polindrome")
    }
    
}
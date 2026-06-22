
console.log("true");

let haystack = "sadbutsad"
let needle = "sad"

let n=needle.length;

for (let i=0;i<haystack.length-n;i++){
    if(haystack.substring(i,i+n)===needle){
       console.log(i)
        return ;
    }
}
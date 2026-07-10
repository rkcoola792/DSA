

let haystack = "asadbutsad"
let needle = "sad"

let n=needle.length;

for (let i=0;i<haystack.length-n;i++){
    if(haystack.substring(i,i+n)===needle){
       console.log(i)
        return ;
    }
}
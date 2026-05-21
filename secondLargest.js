let n=16

function power(n){
    if(n==1)
        return true
    else if(n<0|| n%2!=0){
        return false
    }

    return power(n/2)
}

console.log(power(n))
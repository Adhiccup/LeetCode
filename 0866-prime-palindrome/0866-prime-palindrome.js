/**
 * @param {number} n
 * @return {number}
 */
var primePalindrome = function(n) {
if( n <= 2) return 2; 

if(n>=1e7 && n<=1e8) {
    return 100030001
}
if (n % 2 === 0 ){
    n ++;
}

for(let v = n ; v < 99999999999 ; v = v + 2){
let z = v.toString();
let x = 0;
let c = z.length-1;
let isPal = true;
let isPrime = true;
    if(v > 1){
        while(x < c){
        if(z[x] !== z[c]){
            isPal = false;
            break;
        }else{
            x ++;
            c --;
        }
    }
    }else{
        isPal = false;
    }

    if(isPal){
        for(let b = 2 ; b <= Math.sqrt(v); b++){
            if(v % b === 0 ){
                isPrime = false;
                break;
            }
        }
    }else{
        isPrime = false;
    }
    
    if(isPrime){
        return v
    }
}
};

function isPrime(n){ 
 if(n === 1) {      
     return true;}
 var i = n / 2;
 var j = 2;
 while(j <= i) {
   if(n % j==0) { 
      return false
   } else {
   j++;  
  }
 }
 return true;
}
console.log(isPrime(98));
console.log(isPrime(97));
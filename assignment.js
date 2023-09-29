//get an array and read thefirst element of an array.check whether it is prime or not
//------------------------------------------------------------------------------------
let array1=[2,,4,6,8,10];
console.log(array1[0]);
function findPrime(array1) {
        let factor=0;
         if(array1[0] % i ==0){
            factor++;
         }
         if(factor==2){
            console.log(i+"is a prime number");
         }
        }
//find the most frequrnt item of an array
//------------------------------------------
let array2 = ['a','b','c','d','e','f','c','g','c','f'];
let item;
let mfi=1;
let x=0;
for(let i=0;i<array2.length;i++){
    for(let j=i;j<array2.length;j++){
        if(array2[i]==array2[j]){
            x++;
        }
        if(x>mfi){
            x=mfi;
            item=array2[i];
        }
    }
    x=0;
}
console.log("most frequent item ="+item);
//for loop that iterate from 0 to 15.check if the current number is odd or even
//-----------------------------------------------------------------------------
for(let i=0;i<=15;i++){
    if( i % 2 !=0){
        console.log(i+"  is odd");
    }else{
        console.log(i+"  is even");
    }
}
//find the sum of squares of elements of an array
//-------------------------------------------
function sum_sq(array) {
    var sum=0,
    i=array.length;
    while(i--)
    sum+=Math.pow(array[i],2);
     return sum;   
}
console.log(sum_sq([0,1,2,3,4,5]));
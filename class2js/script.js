// console.log(x);
// var x=20;
// function add(x,y){
//     return x + y;
    
// }console.log(add(12,13))

// const name1 =  function(str){
//    return str;
// }
// console.log(name1("ritik"));

// let x = 0;
// function impure(){
//     x++;
//     return x;
    
// }
// console.log(impure());
// console.log(impure());
// console.log(impure());
// console.log(impure());
// console.log(impure());
// console.log(impure());
// let rows=6;
// let pattern="";
// for(let i = 1;i<=rows;i++){
  
//     pattern+=i;
// }    console.log(pattern)  

// loops+fun+conditional statement

// function evenNum(n){
//     for(let i =1;i<=n;i++){
//         if(n%2===0){
//             console.log("even",i);
//         }
//         else{
//             console.log("odd",i);
//         }
//     }
// }
// evenNum(7);

// function printTable(n){
//   for(let i=1;i<=10;i++){
//     console.log(`${n}*${i} = ${n*i}\n`);
//   }
// }

// function printTable_1_to_10(){
//     for(let i=2;i<=10;i++){
//         printTable(i)
//     }
// }printTable_1_to_10()


// find prime num
// function isprime(num){
// for(let i=2;i<=num;i++){
//     if(num%i!=0){
//         console.log("is prime",i);
//     }
//     else{
//         console.log("is not prime",i)
//     }
// }
// }
// for(let i =1;i<20;i++){
//     isprime(i)
// }


//maximum num finding 

// function isMinimum(num1,num2,num3){
//     if(num1<num2&&num1<num3){
//         console.log("num1 is minimum",num1)
//     }
//     else if(num2<num1&&num2<num3){
//         console.log("num 2 is minimum",num2)
//     }
//     else{
//         console.log("num3 is minimum",num3)
//     }
// } 
// isMinimum(2,7,1)

//fabbonicc series - last two numbers ka sum starts with 0,1
// let num1=0;
// let num2=1;
// for(let i=2;i<=10;i++){
//     let nextnum=num1+num2;
//     console.log(nextnum);
//     num1=num2;
//     num2=nextnum;
// }

//prime num logic
//jo sirf 1 se or khud se divide ho

// function isprime(num){
//     for(let i=2;i<=Math.sqrt(num);i++){
//     if(num%i===0){
//         console.log("is not prime",i)
//     }
//     else{
//         console.log("is prime",i)
//     }
  
//   }
// }
// for(let i =2;i<10;i++){
//     isprime(num)
// }

// function isprime(num){
// let p = 0;
// for(let i =2;i<num;i++){
//   if(num%i===0){
//     p+=1;
//   }
// }
// }
// for(let i = 1;i<20;i++){
// isprime(i);
// }

// function isprime(num){
// for(let i =2;i<num;i++){
//   if(num%i===0){
//    console.log(i,"is prime")
//     return true;
//   }
//   else{
//     console.log("not prime",i)
//     return false;
//   }
// }
// }
// for(let i = 1;i<20;i++){
// isprime(i);
// }

// function reverseNumber(n){
//     let rev = 0;
//     while(n > 0){
//         let digit = n % 10;
//         rev = rev * 10 + digit;
//         n = Math.floor(n / 10);
//     }
//     console.log("Reversed =", rev);
// }
// reverseNumber(45678);

//stronge number  

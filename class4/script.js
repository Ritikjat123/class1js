//array destructing

// const numbers = [100,200,300];
// const [a,v,c]=numbers;
// console.log(a,v,c)

//object destructuring

// const user={
//     name:"ritik",
//     age:"22",
//     address:"indore"
// }
// let row="";

// for(let i=5;i>0;i--){
//   row+="# "
//   console.log(row)
//     } 
let row="";
for(let i =1;i<=5;i++){
     row+="*";
     for(let j=1;j<=5;j++){
         row+="*";
         console.log(" ")
     }
console.log(row)
}

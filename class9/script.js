// const promise=new Promise ((resolve,reject)=>{


//     let age=Math.floor(Math.random()*100)

//     setTimeout(function(){

  
//     if(age>=18){
//         resolve("you can vote");
//     }
//     else{
//         reject("not elegible")
//     }
//       },2000);
// });
// let a=promise.then((op)=>console.log(op)).catch((e)=>console.log(e));

// console.log(a)

// fulsilled
const promise=new Promise ((resolve,reject)=>{


    let age=Math.floor(Math.random()*100)


  
    if(age>=18){
        resolve("you can vote");
    }
    else{
        reject("not elegible")
    }
  
});
let a=promise.then((op)=>console.log(op)).catch((e)=>console.log(e));
    setTimeout(function(){
   console.log(a)},2000);
//this keyword
//this keyword bydefault: widow object ko refer krta hai
// console.log(this);
// function getUser(){
//     console.log(this);
// }
// getUser();

//new case  -- refer empty object
// new getUser();
// chal jayega
// let obj={
//     fname:"ritik",
//     id:"101",
//     age:23,
//     getadress:function(){
//         console.log(this);
//     }
// }
// obj.getadress();

// let obj={
//     fname:"ritik",
//     id:"101",
//     age:23,
//     getadress:function(){
//           function nestedFun(){
//                    console.log(this);
//         }
//         nestedFun();
       
//     }
// }
// obj.getadress();


// let obj={
//     age:23,

//     data:function(){
//         const arrowfun=()=>{
//             age:23,
//     console.log(this)
// }
//     arrowfun();
// }
// }
// obj.data();

// let obj={
//     age:23,

    
//     data:()=>{
//     console.log(this)
// }
// }

// obj.data();


//for each ,dom

const obj1={
    username:"ritik",
    age:22,
    city:{
        pincode:4657879
    }
}
// console.log("original",obj1)
// const obj2=obj1;
// console.log("duplicate",obj2)

// obj2.age=23;
// console.log("i made change by duplicate,original change ho jayega",obj1)
// console.log("now duplicate",obj2)

const obj2=Object.assign({},obj1)
obj2.age=25;
obj2.city.pincode="harda";
console.log(obj1,"obj1")
console.log(obj2,"obj2")
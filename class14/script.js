// let divEle=document.getElementById("div1");
// console.log(divEle);

// const btnEle=document.getElementById("btn1");
// btnEle.addEventListener("click",()=>{
//     let pEle=document.createElement("p");
//     pEle.textContent="this is a para";
//     divEle.append(pEle);
// })

let divEle=document.getElementById("div1");

//access

let addbtn=document.getElementById("btn1");
let delbtn=document.getElementById("btn2");

addbtn.addEventListener("click",()=>{
    // adding para
    let pEle=document.createElement("p");
    pEle.textContent="this is a para";
    divEle.append(pEle);
    console.log("clicked")

// creating update and del
let updatebtn=document.createElement("button");
updatebtn.textContent=('update');
pEle.appendChild(updatebtn);

updatebtn.addEventListener("click",()=>{
    pEle.textContent=("para updated");
    pEle.style.backgroundColor="yellow";
    pEle.appendChild(updatebtn);
    pEle.appendChild(delbtn);
})

let delbtn=document.createElement("button");
delbtn.textContent='delete';
console.log(delbtn);
pEle.appendChild(delbtn);

delbtn.addEventListener("click",()=>{
    pEle.remove();

})

// updatebtn.addEventListener("click",()=>{
//     pEle.textContent="para updated";
//     pEle.appendChild(delbtn);
   
// //creating del btn
// let delbtn=document.createElement("button");
// delbtn.addEventListener("click",()=>{
 
//     pEle.remove();
   
//   divEle.appendChild(updatebtn)


// })


})

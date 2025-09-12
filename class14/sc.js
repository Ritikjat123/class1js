// acceing elements
let divEle = document.getElementById("div1");
let addbtn = document.getElementById("btn1");
let delbtn = document.getElementById("btn2");


//creating btn
addbtn.addEventListener("click", () => {
    console.log("add btn clicked");

    divEle.style.backgroundColor="red"

    //creating para

    let pEle = document.createElement("p");
    pEle.textContent = "this is a paragraph which is available to update "
    divEle.appendChild(pEle);
    

         //update btn
     let updatebtn=document.createElement("button");
    updatebtn.textContent="update";
    divEle.append(updatebtn);

    updatebtn.addEventListener("click",()=>{
        pEle.textContent="text content updated";
        pEle.append(updatebtn);
        pEle.style.backgroundColor="yellow"

    })


//delete btn
    let deltask = document.createElement("button");
         deltask.textContent = "delete"
         divEle.append(deltask);

         deltask.addEventListener("click", () => {
          pEle.remove();
         deltask.remove();
         updatebtn.remove();

})
delbtn.addEventListener("click",()=>{
    console.log("whole delete");
    divEle.remove();
    
})

})
let main = document.getElementsByClassName("main");

async function apicall() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let ans = await response.json();
    console.log("data", ans);


   let rating = document.getElementById("rating");
        let price = document.getElementById("price");
        let cat = document.getElementById("cat");
        let all = document.getElementById("active")
        let buybtn = document.getElementById("buybtn");

    ans.map((singleobject)=>{
         cat.removeAttribute("id");
            rating.removeAttribute("id");
            price.removeAttribute("id");
            all.setAttribute("id", "active")

            main[0].innerHTML +=`<div class="items">
            <img src="${singleobject?.image}" alt="">
            <p><b>Title</b> ${singleobject?.title.substring(0, 10)}</p>
            <p<b>Discription </b>${singleobject?.description.substring(0, 20)
                }</p>
            <p><b>Price </b>${singleobject?.price
                }</p>
            <p><b>Rating</b>   ${singleobject?.rating?.rate}</p>
            <button id="buybtn">BUY</button>
        </div>`
    })
  } catch (err) {
    console.log("err", err);
  }
}


apicall();


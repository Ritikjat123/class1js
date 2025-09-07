// async function fname(){
//     let ans = await fname("https://jsonplaceholder.typicode.com/posts");
//     console.log(ans)
// }
// fname();


// callApiViaXHR("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
//     console.log("Post-Data", data);
//     let id = data[0].id;
//     console.log("post id", id)
//     callApiViaXHR("GET", `https://jsonplaceholder.typicode.com/posts/${id}`, (data) => {
//         console.log("Single Post-Data", data);
//         callApiViaXHR("GET", `https://jsonplaceholder.typicode.com/posts/${id}/comments`, (data) => {
//             console.log("Comments", data);

//             callApiViaXHR("GET", `https://jsonplaceholder.typicode.com/posts/${id}/comments`, (data) => {
//                 console.log("Comments", data);

//             })

//         })
//     })
// })

//promise via xhrobj
let arr = [];
console.log(fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
))
fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
).then(
    (data) => {
        console.log("post-data", data);
        
        for (let i = 0; i < data.length; i++) {
            arr.push(data[i]);
        }
        console.log("arr",arr)
        // id initialized
        let id = data[0].id;

        //fetching single data
        return  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }).then((response)=>response.json())
    .then((singlepost)=>{
        console.log("single post data",singlepost);
        arr.push(singlepost);
        console.log("arr",arr)
        let commentsid=singlepost.id;
        return fetch(`https://jsonplaceholder.typicode.com/posts/${commentsid}/comments`)
    }).then((response)=>response.json())
    .then((commentsid)=>{
        console.log("comments data",commentsid);
        arr.push(commentsid);
        console.log('arr',arr)

        //initialize cingle comment id
        let singleCommentsid=commentsid[0].id;
        //fetching single comment data
         return fetch(`https://jsonplaceholder.typicode.com/comments/${singleCommentsid}`);
    }).then((response)=>response.json())
    .then((singleCommentsid)=>{
        console.log('single comments data',singleCommentsid);
        arr.push(singleCommentsid);
        console.log("arr",arr)
    })
    .catch((error) => {
        console.log("getting error", error)
    })
console.log("arr", arr)


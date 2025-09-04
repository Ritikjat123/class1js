
// for(let i=1;i<=4;i++){
//   let row="";
//     for(let j=1;j<=4;j++){
//       row+="5";
//     }  
//      console.log(row);
// }


// for(let i=1;i<=4;i++){
//   let row="";
//     for(let j=1;j<=i;j++){
//       row+=i;
//     }  
//      console.log(row);
// }

// for(let i=1;i<=5;i++){
//   let row="";
//     for(let j=1;j<=5-i+1;j++){
//       row+=i;
//     }  
//      console.log(row);
// }


// for(let i=1;i<=5;i++){
//   let row="";
//     for(let j=1;j<=5-i+1;j++){
//       row+=j;
//     }  
//      console.log(row);
// }


// for(let i=0;i<5;i++){
//     let ans="";
//     for(let j=0;j<5-i;j++){
        
//         ans+=j;
//     }
//     let spaces=""
//     for(let k=0;k<i;k++){
//      spaces+="-";
//     }
//     console.log(spaces+ans)
// }


// for(let i=1;i<=5;i++){
//     let ans="";
//     for(let j=1;j<=i*2-1;j++){
//         ans+="* ";
//     }
//     let spaces="";
//     for(let k=1;k<=5-i;k++){
//        spaces+="  "
//     }
//     console.log(spaces+" "+ans+" "+spaces)
// }


//hollow square
// for(let i=1;i<=4;i++){
//     let ans=""
//     let sp=""
//     for(let j=1;j<=4;j++){
//           if(i==1||j==1||i==4||j==4){
//             ans+="*"
//     }
//     else{
//         ans+=" "
//     }
//   }
//   console.log(ans);
// }

// for(let i=1;i<=5;i++){
//     let ans="";
//     let sp="";
//     for(let j=1;j<=5;j++){
//      ans+="8"
//   }
//   console.log(ans);
// }

// for(let i=1;i<=5;i++){
//   let ans="";
//   let sp="";
// for(let sp1=1;sp1<=5-i;sp1++){
//     sp+="-";
// }
// let sp2="";
//     for(let j=1;j<=2*i-1;j++){
//         if(j==1||j==2*i-1||j==i){
//               ans+="+";
//         }
//         else{
//             for(let k=2;k<2*j;k++)
//                  sp2+=" ";
            
//         }
        
       
//     }  
//      console.log(sp+ans);
// }

//sathiya pattern

// for(let i=1;i<=10;i++){
//     let ans=""
//     for(let j=1;j<=10;j++){
//         if(i==5||j==5){
//             ans+="$";
//         }
//         else if((i==10&&j<6)||(j==1&&i<6)||(j==10&&i>5)||(i==1&&j>5)){
//              ans+="$";
//         }
//         else{
//             ans+=" "
//         }

//     }
//     console.log(ans);
// }

// let arr=[2,3,4,[22,33,567],23,56];
// let arr2=arr.flat();
// console.log(arr2)

// let arr=[2,3,4,[22,33,567],23,56];
// let [a,b,c,[d,e,f],g,h] = arr; 
// let arr2=arr[3].unshift(17);
// console.log(arr)

//  let arr=[2,3,4,[22,33,567],23,56];
//  let arr2=arr.splice(0,4);
//  console.log(arr)

//  let arr=[2,3,4,[22,33,567],23,56];
//  let arr2=arr[3].slice(0,2);
//  console.log(arr2)

// let arr=["vijay","ritik","abhishek","ankit"];
// let arr2=arr.map((w)=>{
//    return w.charAt().toUpperCase()+w.slice(1)
// })

// let arr3=arr2.map((w)=>{return w.slice(0,-1)+w.charAt(w.length-1).toUpperCase()
// })
// console.log(arr3)
// let arr=[1,2,3,4,6,8,0,"jay ho"];
// let arr2=arr.filter((w)=>w=="jay ho");
// console.log(arr2);
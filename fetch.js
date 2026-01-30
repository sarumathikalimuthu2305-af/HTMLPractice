// let data=fetch('https://fakestoreapi.com/products');

// // data.then((res)=>{
// //     console.log(res);
// //     console.log(res.json());

// // });


// // data.then((res)=>{
// //     let response=res.json();

// //     response.then((data)=>{
// //         console.log(data);
        
// //     });
// // });

// let data2=fetch("https://api.escuelajs.co/api/v1/products");

// console.log(data2);
// // data2.then((res)=>{
// //   console.log(res);
  
// // });

// data2.then((res)=>{
//     let response=res.json();

//     response.then ((data2)=>{
//         console.log(data2);
        
//     })
// })

// let data3=fetch(" https://www.shoppersstack.com/shopping/products/alpha");

// data3.then((res)=>{
//     let response=res.json();

//     response.then((e)=>{
//         console.log(e);
        
//     });
// });

// let section=Document.queryselector("section");+



// async function abc(){
//    let res1=await fetch('https://fakestoreapi.com/products');
//    let data1=await res1.json();
//    console.log(data1);
   
// }
// abc();


// async function ab(){
//     let res2=await fetch("https://api.escuelajs.co/api/v1/products");
//     let data2=await res2.json();
//     console.log(data2);
// }
// ab();

// async function a(){
//     let res3=await fetch(" https://www.shoppersstack.com/shopping/products/alpha");
//     let data3=await res3.json();
//     console.log(data3);
    
// }
// a();
// let section=document.querySelector("section");
// async function abc(){
//     let res1=await fetch('https://fakestoreapi.com/products');
//     let data1=await res1.json();
//     console.log(data1);
//     data1.forEach((e,i,arr)=>{
//         let myHead =document.createElement("hi");
//         myHead.innerHTML=e.title;
//         let myImg=document.createElement("img");
//         myImg.src=e.image;


//         let myPrice=document.createElement("h3");
//         myPrice.innerHTML= `Price: Rs ${e.price}`;
//         section.append(myHead,myImg,myPrice);
//     })
// } 
// abc();


let getBtn=document.querySelectorAll("button")[0];
let postBtn=document.querySelectorAll("button")[1];
let putBtn=document.querySelectorAll("button")[2];
let delBtn=document.querySelectorAll("button")[3];

console.log(getBtn,postBtn,putBtn,delBtn);

getBtn.addEventListener("click", async()=>{
   let res= await fetch("https://6929608f9d311cddf3494506.mockapi.io/users/4");
   let data=await res.json();
   console.log(data);
   
})



postBtn.addEventListener("click",async()=>{
    let  newUser={
        name:"vignesh",
    };
    let res= fetch("https://6929608f9d311cddf3494506.mockapi.io/users/",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(newUser)
    });
    let dataSend=(await res).json();
    console.log(dataSend);
});






























































































































































































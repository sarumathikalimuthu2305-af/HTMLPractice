//execute same set of function again and again we will go for loop 

//for loop
for(let i=1;i<=10;i++){
console.log(i);
}

for(let i=10;i>=1;i--){
    console.log(i);
}

//while loop
let a=1;
while(a<=10){
    if(a%2==0){
        console.log(a);
        
    }
    a++;
}


for(let i=1;i<=10;i++){
    if(i%2!=0){
        console.log(i);
        
    }
}

let e=1; 
while(e<=10){
    if(e%2!=0){
        console.log(e);
        
    }
    e++;
}

let color=["blue","black","white","red","green","yellow","orange","violet","brown","pink"];

for(let i=0;i<=color.length;i++){
 console.log(color[i]);
 
}

//---for of loop----

for(let ele of color){
    console.log(ele);
}

let name=["charu","divi","sowmi","mani","muthu","kavya","vaishu"];

for(let ele of name){
    console.log(ele);
}


//---for in loop----

let obj1={
    name:"charu",
    age:24,
    skill:"java",
    place:"chennai"
}
for( let key in obj1){
    console.log(key);
    console.log(obj1[key]); 
}

//number

let a1=10;//
let b1=20.5;//decimal
//let c1=04;//optal way ..we cant use this because it doesnot return proper value
let d1=new Number(10);//number constructor

console.log(a1);
console.log(b1);
// console.log(c1);
console.log(d1);

//we can declare string in 4 ways
let s1='charu';//single quote
let s2="saru";//double quote
let s3=`sarumathi`;//backticks
let s4=new String("chikky");//String constructor

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);



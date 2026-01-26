let text=document.querySelector("textarea")
let btn=document.querySelector("button")
let select=document.querySelector("select")
let allvoices=null

speechSynthesis.addEventListener("voiceschanged",()=>{
    allvoices=speechSynthesis.getVoices()//reassigning
    allvoices.forEach((e)=>{
        console.log(e);
        let opt=document.createElement("option")//crreate html element in js
        opt.innerHTML=e.name
        opt.value=e.name
        select.append(opt)//to get dropdown append in select option
    })
})

btn.addEventListener("click",()=>{
    //  console.log(text.value);//the function will be executed again so we are using inside addeventlistener
   let audio=new SpeechSynthesisUtterance(text.value)
   let onevoice=allvoices.find((e)=>{
    if(e.name==select.value){//to connect with selected voice
        return e
    }
   })
    audio.voice=onevoice
//    audio.voice=allvoices[4]//we get the customized voice based on index from starting only
//    console.log(audio);

//    let allVoices=speechSynthesis.getVoices()//

//    if(allVoices.length>0){//first one is default ...so length>0
//     audio.voice=allVoices[2]//to get specified voice
//    }

//    console.log(allVoices);//to show all voices in your pc

   speechSynthesis.speak(audio)
   
})

let arr=[1,2,3,4,5,6]

arr.forEach((e)=>{
    console.log(e);
    
})
let ul=document.getElementById("listContainer")
let input=document.getElementById("input")


function add(){
   
   let list= document.createElement("li")
    list.innerHTML=input.value+ "<button onClick='del(event)'>Delete</button>"
    ul.append(list)
    

}

function del(event){
    
    event.target.parentElement.remove()
}
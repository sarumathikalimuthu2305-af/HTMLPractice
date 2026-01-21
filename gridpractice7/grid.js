let question = document.querySelectorAll(".question");
// let answer = document.querySelector(".answer");
// let icon=document.querySelector(".icon");

question.forEach(function(q){

q.addEventListener("click", function(){

   let answer = this.nextElementSibling;
   let icon = this.querySelector(".icon");


answer.classList.toggle("active");

  if(answer.classList.contains("active")){
      icon.innerText = "➖";
  } 
  else {
    icon.innerText = "➕";
  }
});
});


console.log(question[0].classList.toggle);

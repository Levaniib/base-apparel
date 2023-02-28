let email = document.getElementById("email")
let submit = document.getElementById("submit")
let content = document.querySelector(".content")
let p1=  document.createElement("p")
content.appendChild(p1)

submit.addEventListener("click", function(){
    
    if(email.value.includes("@")){
        p1.innerHTML = "Email is valid"
        p1.style.color = "green"
    }else{
        p1.innerHTML = "Please provide a valid email address"
        p1.style.color = "red"
    }
})
 

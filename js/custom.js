
let player1 = document.querySelector(".player1")
let live = document.querySelector(".live")
let play1 = document.querySelector(".play1")
let play2 = document.querySelector(".play2")

let inp1 = document.querySelector(".inp1")
let btn1 = document.querySelector(".btn1")
let error1 = document.querySelector(".error1")

let inp2 = document.querySelector(".inp2")
let btn2 = document.querySelector(".btn2")
let error2 = document.querySelector(".error2")
let error3 = document.querySelector(".error3")
let success = document.querySelector(".success")
let score= 10

btn1.addEventListener("click", function(){
    
    if(inp1.value ==""){
        error1.innerHTML = "Enter a Number" 
    } else if(inp1.value > 10){
        error1.innerHTML = "Enter the Number less than 10"
    }else{
        play1.style.display = "none"
        play2.style.display = "block"
        player1.innerHTML = "Player Two:"
    }
})

btn2.addEventListener("click", function(){
    
    if(inp2.value ==""){
        error2.innerHTML = "Enter a Number" 
    } else if(inp2.value > 10){
        error2.innerHTML = "Enter the Number less than 10"
    }else{
       if(inp1.value == inp2.value){

        success.innerHTML = "Wow ! You Win!"
        play2.style.display ="none"
       }else{
        score--
        live.innerHTML = "live " + score 
           error2.innerHTML = "Try Again"
           if(score == 0){
               error3.innerHTML ="Game is Over !"
               play2.style.display ="none"
           }
       }
    }

})
"use strict"


// let clikBtn = document.querySelector(".click-btn");

// clikBtn.addEventListener("click", function(){
//     alert("Hello p139")
// })

// clikBtn.addEventListener("dblclick", function(){
//     alert("Hello p139")
// })

// clikBtn.addEventListener("mouseover", function(){
//     console.log("over");
// })

// clikBtn.addEventListener("mouseout", function(){
//     console.log("out");
// })

// clikBtn.addEventListener("mouseover", function(){
//     this.classList.remove("btn-primary")
//     this.classList.add("btn-warning")
// })

// clikBtn.addEventListener("mouseout", function(){
//     this.classList.remove("btn-warning")
//     this.classList.add("btn-success")
// })

// clikBtn.addEventListener("mousedown", function(){
//     this.classList.remove("btn-primary")
//     this.classList.add("btn-warning")
// })

// clikBtn.addEventListener("mouseup", function(){
//     this.classList.remove("btn-warning")
//     this.classList.add("btn-success")
// })


// let input = document.getElementById("text-input");

// input.addEventListener("keyup", function(){
//     console.log(this.value);
// })


// let h1 = document.querySelector("h1");

// input.addEventListener("keyup", function(){
//     h1.innerText = this.value
// })


// let twitterIcon = document.querySelector(".twitter");

// let linkedinIcon = document.querySelector(".linkedin");

// let elem = document.querySelector("a");


// twitterIcon.addEventListener("click", function(){
//     if(elem.hasAttribute("href")){
//         elem.setAttribute("href","https://twitter.com/")
//     }
// })

// linkedinIcon.addEventListener("click", function(){
//     if(elem.hasAttribute("href")){
//         elem.setAttribute("href","https://www.linkedin.com/")
//     }
// })


// let input1 = document.querySelector(".input1");

// let span1 = document.querySelector(".span1");

// let input2 = document.querySelector(".input2");

// let span2 = document.querySelector(".span2");

// let button = document.querySelector("button")



// let inputs = document.querySelector("input");

// let button = document.querySelector("button");

// inputs.forEach(input => {
//     input.addEventListener("keyup", function(){
//         validation(this,this.nextElementSibling);

//         inputs.forEach(element => {
//             if(!element.value.includes("@")  || element.value === ""){
//                 button.setAttribute("disabled", "true")
//             }else{
//                 button.removeAttribute("disabled")
//             }
//         });
//     })
// });


// function validation(element,span) {
//     if(element.value.trim() === ""){
//         span.innerText = "Don't be empty"
//         span.classList.remove("d-none");

//     }else if (!element.value.includes("@")) {
//         span.innerText = "Email format is wrong";
//         span.classList.remove("d-none")
//     }else{
//         span.classList.add("d-none")
//     }
// }


let tabHeaders = document.querySelectorAll(".tab-header .item");
let tabContents = document.querySelectorAll(".tab-content .item");

tabHeaders.forEach(tabHeader => {
    tabHeader.addEventListener("click", function(){
        document.querySelector(".active-tab").classList.remove("active-tab");
         this.classList.add("active-tab")

         tabContents.forEach(content => {
             if(content.getAttribute("data-id") == this.getAttribute("data-id")){
                 content.classList.remove("d-none")
             }else{
                 content.classList.add("d-none")
             }
         });
    })
});
// =========================
// TYPING ANIMATION
// =========================

const words = [

"Software Engineer",

"Python Developer",

"MCA Student",

"Web Developer"

];

let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;


function typeEffect(){

const typing = document.getElementById("typing");

const currentWord = words[wordIndex];


if(isDeleting){

typing.innerHTML =

currentWord.substring(0,charIndex--);

}

else{

typing.innerHTML =

currentWord.substring(0,charIndex++);

}



let speed = isDeleting ? 70 : 120;



if(!isDeleting && charIndex === currentWord.length+1){

speed = 1500;

isDeleting = true;

}


else if(isDeleting && charIndex===0){

isDeleting = false;

wordIndex++;


if(wordIndex>=words.length){

wordIndex=0;

}

}


setTimeout(typeEffect,speed);

}


typeEffect();




// =========================
// CERTIFICATE FULLSCREEN
// =========================

function openImage(src){

const modal = document.getElementById("imgModal");

const image = document.getElementById("modalImg");


modal.style.display="flex";

image.src=src;

}



function closeImage(){

document.getElementById("imgModal")

.style.display="none";

}



// Close popup by clicking outside

const modal = document.getElementById("imgModal");


modal.addEventListener("click",function(e){

if(e.target===modal){

closeImage();

}

});




// =========================
// SCROLL TO TOP BUTTON
// =========================

const topBtn =

document.getElementById("topBtn");


window.onscroll=function(){


if(

document.body.scrollTop>300 ||

document.documentElement.scrollTop>300

){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

}



function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}




// =========================
// SECTION FADE ANIMATION
// =========================

const sections =

document.querySelectorAll("section");


const observer =

new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


},

{

threshold:0.15

}

);



sections.forEach(section=>{


section.classList.add("hidden");

observer.observe(section);


});





// =========================
// PROJECT POPUP DATA
// =========================

const projects =

document.querySelectorAll(".project-card");


projects.forEach(card=>{


card.addEventListener("click",()=>{


const title =

card.querySelector("h3").innerText;


let description = "";


if(title.includes("Hotel")){


description =

`Hotel Management System

Technologies:

• Python

• SQL

• HTML

• CSS


Features:

✓ Room Booking

✓ Customer Records

✓ Billing System`;

}


else if(title.includes("Women")){


description =

`Women Safety Hackathon

Technologies:

• Python

• HTML

• CSS


Features:

✓ Emergency Alert

✓ Safety Assistance

✓ User Friendly Interface`;

}


else{


description =

`Portfolio Website

Technologies:

• HTML

• CSS

• JavaScript


Features:

✓ Responsive Design

✓ Typing Animation

✓ Certificate Popup

✓ Modern UI`;

}


alert(description);


});


});




// =========================
// SMOOTH SCROLL
// =========================

document

.querySelectorAll('nav a')

.forEach(anchor=>{


anchor.addEventListener(

'click',

function(e){


e.preventDefault();


document

.querySelector(

this.getAttribute('href')

)

.scrollIntoView({

behavior:'smooth'

});


});


});




// =========================
// CONSOLE MESSAGE
// =========================

console.log(

"🚀 Premium Portfolio Loaded Successfully"

);

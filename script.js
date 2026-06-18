// Typing Animation

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

    let currentWord = words[wordIndex];

    if(isDeleting){

        typing.innerHTML =
        currentWord.substring(0,charIndex--);

    }
    else{

        typing.innerHTML =
        currentWord.substring(0,charIndex++);

    }


    let speed = isDeleting ? 80 : 120;


    if(!isDeleting && charIndex === currentWord.length + 1){

        speed = 1500;

        isDeleting = true;

    }

    else if(isDeleting && charIndex === 0){

        isDeleting = false;

        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex = 0;

        }

    }

    setTimeout(typeEffect,speed);

}

typeEffect();




// Scroll To Top Button

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}




// Certificate Popup

function openImage(src){

document.getElementById("imgModal").style.display="flex";

document.getElementById("modalImg").src=src;

}



function closeImage(){

document.getElementById("imgModal").style.display="none";

}



// Close when clicking outside image

const modal=document.getElementById("imgModal");

modal.addEventListener("click",function(e){

if(e.target===modal){

closeImage();

}

});




// Show Top Button only after scrolling

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300 ||

document.documentElement.scrollTop>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

};




// Hide button initially

topBtn.style.display="none";




// Fade In Sections

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});


sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition="all .8s ease";

observer.observe(section);






function openImage(src){

    document.getElementById("imgModal").style.display="flex";

    document.getElementById("modalImg").src=src;

}


function closeImage(){

    document.getElementById("imgModal").style.display="none";

}


// Close when clicking outside image

document.getElementById("imgModal")
.addEventListener("click",function(e){

    if(e.target===this){

        closeImage();

    }

});




});
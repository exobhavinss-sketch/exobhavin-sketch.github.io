// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});
});
});


// dark mode
document.getElementById("darkToggle").onclick=()=>{
document.body.classList.toggle("dark");
};


// lightbox gallery
const images=document.querySelectorAll(".gallery img");
const lightbox=document.getElementById("lightbox");
const lightImg=document.getElementById("lightbox-img");

images.forEach(img=>{
img.onclick=()=>{
lightbox.style.display="flex";
lightImg.src=img.src;
}
});

document.getElementById("close").onclick=()=>{
lightbox.style.display="none";
};

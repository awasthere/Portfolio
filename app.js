const moon=document.getElementById('moon');
const sun=document.getElementById('sun');
const body=document.querySelector('body');
const para=document.querySelector('p');
const navlink=document.querySelectorAll('a');
const menuicon=document.getElementById('menu-icon');


moon.addEventListener('click',()=>{
    console.log("moon");
    body.style.backgroundColor='black';
    para.style.color='white';
    document.querySelector('h2').style.color='white';
    navlink.forEach((element)=>{
        element.style.color="white";
    })
    sun.style.color="orange";
    moon.style.color="gray";
    menuicon.style.color="white";
})

sun.addEventListener('click',()=>{
    console.log("moon");
    body.style.backgroundColor='white';
    para.style.color='black';
    document.querySelector('h2').style.color='black';
    navlink.forEach((element)=>{
        element.style.color="black";
    })
    sun.style.color="gray";
    moon.style.color="black";
    menuicon.style.color="black";
})





let btnMenu = document.getElementById('btn-mobile');
let header = document.getElementById('header');
let linksMenu = document.querySelectorAll('#header ul li a');

function menuFunction(){
    header.classList.toggle('active');
}

btnMenu.addEventListener('click', menuFunction);


linksMenu.forEach (link=>{
    link.addEventListener('click', menuFunction);
})

console.log(header)

let navElements = document.querySelectorAll('.hover');
navElements.forEach((e)=>{
   e.addEventListener('mouseover',()=>{
       e.style.borderBottomWidth = '3px'
   })
   e.addEventListener('mouseleave',()=>{
    e.style.borderBottomWidth = '0px'
})
   
})

function positionChanger () {

  if(this.scrollY > window.innerHeight/1.5  ){
    let navy = document.querySelector('nav');
    //top.style.display ='block';
    navy.style.opacity ='0.8';
    navy.style.height ='9vh';
  }
  else {
    let navy = document.querySelector('nav');
    //top.style.display ='block';
    navy.style.opacity ='1';
    navy.style.height ='13vh';
  }}
  window.addEventListener('scroll',positionChanger);

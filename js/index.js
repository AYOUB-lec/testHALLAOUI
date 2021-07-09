
/*slide text animation */

let component = document.querySelectorAll('.slide');
component.forEach((e)=>{
if(e.classList.contains('Fa')){
e.style.transform = 'translateX(0px)'
}
})
function positionChanger () {
    if(this.scrollY >= window.innerHeight/4  ){
      let img = document.querySelector('.Sa');
      img.style.opacity = '1'
      
    }
    if(this.scrollY >= 2.4*window.innerHeight  ){
        let imgs = document.querySelectorAll('.Ta');
         imgs.forEach((e)=>{
             e.style.opacity = '1'
         })
      }
      if(this.scrollY >= 2.7*window.innerHeight  ){
        let T_imgs = document.querySelectorAll('.FRa');
         T_imgs.forEach((e)=>{
             e.style.opacity = '1'
         })
      }
      if(this.scrollY > 3.3*window.innerHeight  ){
         let SM = document.querySelector('.socialMedia')
         SM.style.opacity = '1'
         SM.style.transform = 'translateY(-20px)'
         setTimeout(function(){ SM.style.transform = 'translateY(0px)' }, 500);
      }
      if(this.scrollY > 1.2*window.innerHeight  ){
       let top = document.querySelector('#topS');
       //top.style.display ='block';
       top.style.opacity ='1';
     }
     else{
        let top = document.querySelector('#topS');
       //top.style.display ='none'; 
       top.style.opacity ='0';
     }
   
}
window.addEventListener('scroll',positionChanger);

let animationBox = document.querySelector('.image-animation-box img');
setInterval(()=>{ 

     
    setTimeout(() => {
        animationBox.style.opacity = '0'
        setTimeout(()=>{
            animationBox.style.opacity = '1'  
            animationBox.src = "../images/acceuill/ouvrages-d-art-tanger-2016.jpg"
        },200)
        animationBox.src = "../images/acceuill/ouvrages-d-art-tanger-2016.jpg"
    }, 5000);

    setTimeout(() => {
        animationBox.style.opacity = '0'
        setTimeout(()=>{
            animationBox.style.opacity = '1'  
            animationBox.src = "../images/acceuill/tr-mie-sur-place-ligue-arabe-.jpg"
        },200)
    }, 10000);

    setTimeout(() => {
        animationBox.style.opacity = '0'

        setTimeout(()=>{
            animationBox.style.opacity = '1'  
            animationBox.src = "../images/acceuill/20180907_103010.jpg"
        },200)
    }, 15000);
 

}, 15000);




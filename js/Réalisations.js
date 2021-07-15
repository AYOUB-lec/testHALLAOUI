let alert = document.querySelector('.alert');
let opa = document.querySelector('.opa');
setTimeout(() => {
    alert.style.transform='translateX(0)'
    opa.style.opacity='0.5'
}, 1000);
setTimeout(() => {
    alert.style.transform='translateX(-1000px)'
    opa.style.opacity='1'
}, 5000);

function positionChanger () {
   
    if(this.scrollY > window.innerHeight  ){
       let SM = document.querySelector('.socialMedia')
       SM.style.opacity = '1'
       SM.style.transform = 'translateY(-40px)'
       setTimeout(function(){ SM.style.transform = 'translateY(-20px)' }, 500);
    }
      
        if(this.scrollY > window.innerHeight/4  ){
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

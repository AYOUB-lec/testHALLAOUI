function positionChanger () {
   
    if(this.scrollY > window.innerHeight  ){
       let SM = document.querySelector('.socialMedia')
       SM.style.opacity = '1'
       SM.style.transform = 'translateY(-40px)'
       setTimeout(function(){ SM.style.transform = 'translateY(0px)' }, 500);
    }
        if(this.scrollY > window.innerHeight/4  ){
          let top = document.querySelector('#topS');
          //top.style.display ='block';
          top.style.opacity ='1';
          console.log('top')
        }
        else{
           let top = document.querySelector('#topS');
          //top.style.display ='none'; 
          top.style.opacity ='0';
        }
       
    
}
window.addEventListener('scroll',positionChanger);

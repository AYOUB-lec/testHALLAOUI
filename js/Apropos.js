function positionChanger () {
   
      if(this.scrollY > window.innerHeight  ){
         let SM = document.querySelector('.socialMedia')
         SM.style.opacity = '1'
         SM.style.transform = 'translateY(-40px)'
         setTimeout(function(){ SM.style.transform = 'translateY(-20px)' }, 500);
      }
          //photo A propos
          if(this.scrollY > window.innerHeight/4.3  ){
            let photo = document.querySelector('.Apropos section img');
            //top.style.display ='block';
            photo.style.opacity ='1';
            
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
         
         if(this.scrollY > window.innerHeight/1.2  ){
          console.log('hoo')
          let DA = document.querySelector('.DA');
          let stats = document.querySelector('.stats');
          DA.style.opacity='1'
          DA.style.transform='translateY(0)'
          stats.style.opacity='1'
          stats.style.border ='2px solid gray'
          stats.style.borderRadius ='5px'
        }
}
window.addEventListener('scroll',positionChanger);

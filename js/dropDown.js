
// drop down menu 
   // moyens
   
   let moyens = document.querySelectorAll('.dropM');
   let DRM = document.querySelector('.DRM');
   console.log(moyens);
   moyens.forEach((e)=>{
      e.addEventListener('mouseover',()=>{
        
         DRM.style.height='100px'
         DRM.style.borderTop = '2px solid yellow';
        
      })
   
   })
   moyens.forEach((e)=>{
     e.addEventListener('mouseleave',()=>{
       
        DRM.style.height='0px'
        DRM.style.border = 'none';
       
     })
   })
   /*recrutements*/
      
   let recrut = document.querySelectorAll('.dropR');
   let DRR = document.querySelector('.DRR');
   console.log(moyens);
   recrut.forEach((e)=>{
      e.addEventListener('mouseover',()=>{
        
         DRR.style.height='100px'
         DRR.style.borderTop = '2px solid yellow';
        
      })
   
   })
   recrut.forEach((e)=>{
     e.addEventListener('mouseleave',()=>{
       
        DRR.style.height='0px'
        DRR.style.border = 'none';
       
     })
   })
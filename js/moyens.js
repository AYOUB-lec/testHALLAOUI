//declarations
let img = document.querySelector('.first img');
let btn = document.querySelector('.first button');
let tab = document.querySelector('#tab');
let cancel = document.querySelector('.cancel .container');
let first = document.querySelector('#f')
let second = document.querySelector('#s')
let slider =  document.querySelector('.second')
//scroll animation
   first.addEventListener('click',()=>{
      if(! first.classList.contains("checked")){
          console.log('first')
        slider.style.transform = 'translateY(0vh)';
        first.classList.add("checked");
        second.classList.remove("checked");
      }
   })
   second.addEventListener('click',()=>{
    if(! second.classList.contains("checked")){
        console.log('second')
      slider.style.transform = 'translateY(-87vh)';
      second.classList.add("checked");
      first.classList.remove("checked");
    }
 })
//slide animation
let right = document.querySelector('#right')
let left = document.querySelector('#left')
let SL = document.querySelector('.glide')
let etat = 0;
left.addEventListener('click',()=>{
     if(etat == 0){
        console.log('first')
        SL.style.opacity='0'
        etat = 1;
     }
      
 })
right.addEventListener('click',()=>{
    if(etat == 1){
        console.log('second')
        SL.style.opacity='1'
        etat = 0;
     }
   
})


//over
img.addEventListener('mouseover',()=>{
    btn.style.opacity = '1';
    img.style.filter='grayscale(1.2)'
} )
//leave
img.addEventListener('mouseleave',()=>{
    btn.style.opacity = '0';
    img.style.filter='grayscale(0)'
} )
// button hover
btn.addEventListener('mouseover',()=>{
    btn.style.opacity = '1';
    img.style.filter='grayscale(1.2)'
} )
// button clicked
btn.addEventListener('click',()=>{
   tab.style.transform="translateX(0)"
})
//cancel button
cancel.addEventListener('click',()=>{
    tab.style.transform="translateX(-1000px)"
 
})
    console.log('test')
   let SM = document.querySelector('.socialMedia')
   SM.style.opacity = '1'
   SM.style.transform = 'translateY(-60px)'

// final animation
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let hum = document.querySelector('.hum')
let section = document.querySelector('section')
let arrows = document.querySelector('.arrows')
let tit = document.querySelector('.tit')

btn1.addEventListener('click',()=>{
     hum.style.display="flex"
    section.style.display='none'
    arrows.classList.remove("display")
    tit.classList.remove("display")
})
btn2.addEventListener('click',()=>{
    section.style.display='flex'

})
btn3.addEventListener('click',()=>{
    section.style.display='none'
    hum.style.display="none"
    arrows.classList.add("display")
    tit.classList.add("display")


})

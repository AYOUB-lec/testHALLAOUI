function positionChanger () {
/*if(this.scrollY > window.innerHeight  ){
        let SM = document.querySelector('.socialMedia')
        SM.style.opacity = '1'
        SM.style.transform = 'translateY(-40px)'
        setTimeout(function(){ SM.style.transform = 'translateY(-20px)' }, 500);
     }*/
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
//this is for the first image
if(this.scrollY > window.innerHeight/9  ){
  let img = document.querySelector('.container .one img');
  img.style.display='block'
  setTimeout(() => {
    img.style.transform='translateX(0)'
  }, 200);

}
if(this.scrollY > window.innerHeight/3  ){
  let img = document.querySelector('.container .two img');
  setTimeout(() => {
    img.style.display='block'
    setTimeout(() => {
      img.style.transform='translateX(0)'
    }, 200);
  }, 500);

}
//social media
if(this.scrollY > 1.5*window.innerHeight  ){
  let SM = document.querySelector('.socialMedia')
  SM.style.opacity = '1'
  SM.style.transform = 'translateY(-40px)'
  setTimeout(function(){ SM.style.transform = 'translateY(-20px)' }, 500);
  //console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhh')
}
}
  window.addEventListener('scroll',positionChanger);

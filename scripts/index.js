window.onload = function(){
  var sence = document.getElementById('sence'),el,code,
  time=0, hasJiShuqi = false,timerId,
  timel = document.getElementById('time');
  for ( var i = 0;  i < 50;  i++){
    code =  65 + Math.floor( Math.random()*(122-65) ) ;
    while(code >= 91 && code <= 96){
      code =  65 + Math.floor( Math.random()*(122-65) ) ;
    }
    el = document.createElement('div');       el.setAttribute('class','key');
    el.innerHTML = String.fromCharCode(code); sence.appendChild(el);
  }
  
  document.onkeydown = function(e){
    var top = sence.firstElementChild;
    if( e.shiftKey ){
      if( e.keyCode !== top.innerHTML.charCodeAt(0) )      return;
    }else{
      if( e.keyCode + 32 !== top.innerHTML.charCodeAt(0) ) return;
    }
    if(!hasJiShuqi){
      timerId = setInterval(function(){
        time++;
        timel.innerHTML = time;
      },1000);
      hasJiShuqi = true;
    }
   
    if(top == null){
      clearInterval(timerId);alert(time);
      location.reload()
    }
    sence.removeChild(top);
  }; 
};
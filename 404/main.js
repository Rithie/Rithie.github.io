(function () {
 var timeLeft = 10, cinterval;
 var timeDec = function (){
  timeLeft--;
  document.querySelector('#countdown').innerHTML = timeLeft;
  
  if(timeLeft === 0){ 
   clearInterval(cinterval);
   location.href = '../app.html'; // index page here
  }
 };

 cinterval = setInterval(timeDec, 1000);
})();
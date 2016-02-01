var daysTilXmas = function() {
  
  var today = new Date();
  var xmas = new Date();         
  xmas.setMonth(11, 25);
  xmas.setYear(2016);
  
  var timeLeft = xmas - today;
  timeLeft = (((timeLeft/1000)/60)/60)/24;
  
  return timeLeft;
}

var place = document.getElementById('days');

place.innerHTML = daysTilXmas();
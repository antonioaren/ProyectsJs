var counter = 0;
var timeLeft =3;

function convertSeconds(s) {
  //Convierte los segundos en minutos redondeando.
  var min = floor (s/60);
  //Necesitamos el resto para poder poner los segundos.
  var sec = s % 60;
  //nf new format, para poner un número mínimo de 2.
  return nf(min,2) + ':' + nf(sec,2);
}




function setup(){
  noCanvas();

  var params = getURLParams();
  if (params.minute){
    console.log(params);
    var min = params.minute;
    timeLeft = min * 60;
  }


  //La manera de indentificar un elemento del html con js.
  var timer = select ('#timer');
  //Cambiar el texto a lo que tu quieras usando el .html.
  timer.html(convertSeconds(timeLeft - counter));

  setInterval (timeIt,1000);

  function timeIt(){
    if (counter - timeLeft == 0) {
      counter = 0;
      timeLeft = 0;
      timer.html('Time has expired');
    } else {
      counter++;
      timer.html(convertSeconds(timeLeft - counter));
    }

    // if (counter == timeLeft) {
    //   counter = 0;
    // }
  }
}

function draw(){

}

//JavaScript
var audio;
$(document).ready(function(e){

$("#main").height( $("#page").height() );


document.addEventListener("deviceready",function(){	

/*audio = window.plugins.LowLatencyAudio;	
audio.preloadFX('mario', 'audio/mario.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg ); });	

    $('#Beep').bind( "tap",
function(e){
	navigator.notification.beep(1);
  });//click Beep
   $('#Vibrar').bind( "tap",
function(e){
	navigator.notification.vibrate(1000);
  });//click Vibrar
    $('#Play').bind( "tap",
function(e){
		navigator.notification.vibrate(1000);
		 audio.play('mario');
//	audio.play('mario');
  });//click Vibrar
*/
  	function play(nota) {

document.getElementById(nota).className = 'nota tocada';

}

function touchEnd(event) {

event.target.className = 'nota';
}
	

  });
});//ready
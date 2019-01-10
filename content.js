/* var canvas = document.createElement('canvas');
canvas.style.width='100%';
canvas.style.height='100%';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.position='absolute';
canvas.style.left=0;
canvas.style.top=0;
canvas.style.zIndex=100000;
// canvas.style.pointerEvents='none'; // uncomment if you want to be able to blindly click through it
document.body.appendChild(canvas); //Append canvas to body element

var context = canvas.getContext('2d');
context.rect(50, 50, canvas.width-100, canvas.height-100);
context.fillStyle = 'yellow';
context.fill();
*/ 
var overlay = jQuery('<div id="overlay"> <div id="text"><h2>GET BACK TO WORK!</h2></div> </div>');
//var overlayText =jQuery('<div id="text"><h2>Overlay with Text</h2></div>');
overlay.appendTo(document.body)
//overlayText.appendTo(document.body)




var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);
$overlay.append($caption);

$("body").append($overlay);

$("#gallerywrapper a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);

  $overlay.show();

  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

$overlay.click(function(){
  $overlay.hide();
});

////////canvas/////////

var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//On mouse events on the canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  //Draw lines
  if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
  context.save();
});

$("button").click(function() {
  context.clearRect(0, 0, 500, 500);
});











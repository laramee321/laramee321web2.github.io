record();
reset();
hide();
speed(0);

$("#button-save").on("click",function() {
 downloadRecording();
});

$("#button-replay").on("click",function() {
 replay();
});

$("#button-pen").on("click",function() {
 tool='pen';
  $(this).addClass("selected");
  $('#button-eraser').removeClass("selected");
 $('#stamp1').removeClass("selected");
 $('#stamp2').removeClass("selected");
 $("#black").addClass("selected");
 lineColor('black');
 $("#red").removeClass("selected");
$("#blue").removeClass("selected");
$("#yellow").removeClass("selected");
 
});

$("#button-eraser").on("click",function() {
  $(".tool.selected").removeClass("selected");
  $(this).addClass("selected");
  tool = "eraser";
 lineColor("white");
 $('#button-pen').removeClass("selected");
 $('#stamp1').removeClass("selected");
 $('#stamp2').removeClass("selected");
 $("#black").removeClass("selected");
 $("#red").removeClass("selected");
 $("#blue").removeClass("selected");
 $("#yellow").removeClass("selected");
});

$("#stamp1").on("click",function() {
   if(tool == "eraser") { 
  $('#black').addClass("selected");
 tool='stamp1';
  lineColor('black');
 $(this).addClass("selected");
 $('#button-eraser').removeClass("selected");
 $('#button-pen').removeClass("selected");
 $('#stamp2').removeClass("selected");
} else { 
  tool='stamp1';
  lineColor('black');
 $(this).addClass("selected");
 $('#button-eraser').removeClass("selected");
 $('#button-pen').removeClass("selected");
 $('#stamp2').removeClass("selected");
 $("#red").removeClass("selected");
$("#blue").removeClass("selected");
$("#yellow").removeClass("selected");
  $('#black').addClass("selected");
 }
});

$("#stamp2").on("click",function() {
   if(tool == "eraser") { 
  $('#black').addClass("selected");
 tool='stamp2';
  lineColor('black');
 $(this).addClass("selected");
 $('#button-eraser').removeClass("selected");
 $('#button-pen').removeClass("selected");
 $('#stamp1').removeClass("selected");

} else { 
  tool='stamp2';
  lineColor('black');
 $(this).addClass("selected");
 $('#button-eraser').removeClass("selected");
 $('#button-pen').removeClass("selected");
 $('#stamp1').removeClass("selected");
 $("#red").removeClass("selected");
$("#blue").removeClass("selected");
$("#yellow").removeClass("selected");
  $('#black').addClass("selected");
 }
});

var stamping = false;
var drawing = false;
var tool = "pen";


$('canvas').on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "pen" || tool =="eraser") { 
    drawing = true;
  } else if(tool =="stamp1") {
  star(30);
  } else if(tool =="stamp2") {
  square(30);
  }
});

$('canvas').on("mousemove",function(e) {
  e.preventDefault();
  if(drawing) {
    lineTo(e.pageX,e.pageY);
  }
});

$('canvas').on("mouseup",function(e) {
  e.preventDefault();
  drawing = false;
});


//two stamp tools

function star(size) {
rotate(36);
forward(size);
rotate(-108);
forward(size);
rotate(36);
forward(size);
rotate(-108);
forward(size);
rotate(36);
forward(size);
rotate(-108);
forward(size);
rotate(36);
forward(size);
rotate(-108);
forward(size);
rotate(36);
forward(size);
rotate(-108);
forward(size);
}

function square(size) {
forward(size);
rotate(90);
forward(size);
rotate(90);
forward(size);
rotate(90);
forward(size);
}


//four color options
$(".color").on("click",function(e) {
  var color = $(this).data("color");
  lineColor(color);
  $(".color").removeClass('selected');
  $(this).addClass('selected');
  if(tool == "eraser") { 
  $('#button-eraser').removeClass("selected");
  $('#button-pen').addClass("selected");
}
});



//three line widths
$(".line").on("click",function(e) {
  var currentWidth = $(this).data("width");
	lineWidth(currentWidth);
  $(".line").removeClass('selected');
  $(this).addClass('selected');
});



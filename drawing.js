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
  tool='stamp1';
  lineColor('black');
 $(this).addClass("selected");
 $('#button-eraser').removeClass("selected");
 $('#button-pen').removeClass("selected");
 $('#stamp2').removeClass("selected");
 }
});

var drawing = false;
var tool = "pen";


$(document).on("mousedown",function(e) {
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

$(document).on("mousemove",function(e) {
  e.preventDefault();
  if(drawing) {
    lineTo(e.pageX,e.pageY);
  }
});

$(document).on("mouseup",function(e) {
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
$("#black").on("click",function(e){ 
lineColor('black');
$(this).addClass("selected");
$("#red").removeClass("selected");
$("#blue").removeClass("selected");
$("#yellow").removeClass("selected");
  if(tool == "eraser") { 
  $('#button-eraser').removeClass("selected");
  $('#button-pen').addClass("selected");
}
});

$("#red").on("click",function(e){ 
lineColor('red');
$(this).addClass("selected");
$("#black").removeClass("selected");
$("#blue").removeClass("selected");
$("#yellow").removeClass("selected");
  if(tool == "eraser") { 
  $('#button-eraser').removeClass("selected");
  $('#button-pen').addClass("selected");
}
});

$("#blue").on("click",function(e){ 
lineColor('blue');
$(this).addClass("selected");
$("#red").removeClass("selected");
$("#black").removeClass("selected");
$("#yellow").removeClass("selected");
  if(tool == "eraser") { 
  $('#button-eraser').removeClass("selected");
  $('#button-pen').addClass("selected");
}
});

$("#yellow").on("click",function(e){ 
lineColor('yellow');
$(this).addClass("selected");
$("#red").removeClass("selected");
$("#blue").removeClass("selected");
$("#black").removeClass("selected");
  if(tool == "eraser") { 
  $('#button-eraser').removeClass("selected");
  $('#button-pen').addClass("selected");
}
});



//three line widths
$("#thick").on("click",function(e){ 
  lineWidth(10);
  $(this).addClass("selected");
$("#default").removeClass("selected");
$("#thin").removeClass("selected");

});

$("#default").on("click",function(e){ 
  lineWidth(5);
  $(this).addClass("selected");
$("#thin").removeClass("selected");
$("#thick").removeClass("selected");
});

$("#thin").on("click",function(e){ 
  lineWidth(1);
  $(this).addClass("selected");
$("#default").removeClass("selected");
$("#thick").removeClass("selected");
});


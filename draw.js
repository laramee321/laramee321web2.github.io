lineWidth(5);

$("#forward").on("click",function(e){ 
  forward(20);
});

$("#left").on("click",function(e){ 
  rotate(-90);
});

$("#right").on("click",function(e){ 
  rotate(90);
});

$("#black").on("click",function(e){ 
lineColor('black');
});

$("#red").on("click",function(e){ 
lineColor('red');
});

$("#blue").on("click",function(e){ 
lineColor('blue');
});

$("#yellow").on("click",function(e){ 
lineColor('yellow');
});

$("#thick").on("click",function(e){ 
  lineWidth(10);
});

$("#default").on("click",function(e){ 
  lineWidth(5);
});

$("#thin").on("click",function(e){ 
  lineWidth(0);
});

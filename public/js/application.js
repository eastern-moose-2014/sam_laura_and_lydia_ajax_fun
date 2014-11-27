$(document).ready(function() {
  bindSquareOneListener();
  bindSquareTwoListener();
  bindSquareThreeListener();
  bindSquareFourListener();
  // create a function to bind a listener for square two here...
  // it doesn't have to be a click event listener... you could play with ".mouseover"; what else?

  // and square three... etc etc

});

function bindSquareFourListener(){
  $("#square-4").on("mouseover", function() {
    if ($(this).html() === "") {
      squareFourFirstClick();
    }else{
      squareFourSecondClick();
    }
  });
}

function squareFourFirstClick() {
  var toSend = 2
  var request = $.ajax ({
    type: "POST",
    url: 'sams_fun_route',
    data: {cool_thing: toSend},
    dataType:  "html"
  }).done(function(response){
    $("#square-4").html(response)
    $("#square-4").css("width", "100%", "background-color", "black", "color", "white")
  });
}

function squareFourSecondClick() {
  $('#square-4').html("");
  $('#square-4').css("width", "100", "background-color", "#2f9");
}

function bindSquareThreeListener() {
  $("#square-3").on("click", function() {
    if ($(this).html() === "") {
      squareThreeFirstClick();
    }else{
      squareThreeSecondClick();
    }
  });
}

function squareThreeFirstClick() {
  var toSend = 100
  var request = $.ajax({
    type: "POST",
    url: 'sams_fun_route',
    data: {cool_thing: toSend},
    dataType: "html"
  }).done(function(response){
    $('#square-3').html(response);
    $('#square-3').css("opacity", "50%");
  });
}

function squareThreeSecondClick() {
  $('#square-3').html("");
  $('#square-3').css("opacity", "100%");
}

function bindSquareTwoListener() {
  $("#square-2").on("mouseover", function(){
    if ($(this).html() === "") {
      squareTwoFirstClick();
      $("img").css("visibility", "visibility");
    }else{
      squareTwoSecondClick();
    }
  });
}

function squareTwoFirstClick() {
  var toSend = 88
  var request = $.ajax({
    type: "POST",
    url: "/sams_fun_route",
    data: {cool_thing: toSend},
    dataType:"html"
  }).done(function(response){
    $("img").css("visibility", "hidden");
    $("#square-2").html(response);
    $("#square-2").css("transform", "rotateY(-180deg)");

  });
}

function squareTwoSecondClick() {
  $("#square-2").html("");
  $("#square-2").css("transform", "rotateY(180deg)");
}


function bindSquareOneListener() {
  $("#square-1").on("click", function(){
    if ($(this).html() === "") {
      squareOneFirstClick();
      $("img").css("visibility", "visible");
    } else {
      squareOneSecondClick();
    }
  });
}

function squareOneFirstClick() {
  var toSend = 42
  var request = $.ajax({
    type: "POST",
    url: "/sams_fun_route",
    data: {cool_thing: toSend},
    dataType: "html"
  }).done(function(response) {
        $("img").css("visibility", "hidden");
        $("#square-1").html(response);
        $("#square-1").css({width: "300", height: "300"});
    });
}

function squareOneSecondClick() {
  $("#square-1").html("");
  $("#square-1").css({width: "100", height: "100"});
}

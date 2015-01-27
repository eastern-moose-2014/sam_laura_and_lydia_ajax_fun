$(document).ready(function() {
  bindSquareOneListener();
  bindSquareTwoListener();
  bindArrowKeysListener();

});


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


function bindSquareTwoListener() {
  $("#square-2").on("mouseover", function(){
    if ($(this).html() === "") {
      squareTwoMouseover();
      $("img").css("visibility", "visible");
    } else {
      squareTwoSecondMouseover();
    }
  });
}

function squareTwoMouseover() {
  var toSend = 55
  var request = $.ajax({
    type: "POST",
    url: "/sams_fun_route",
    data: {cool_thing: toSend},
    dataType: "html"
  }).done(function(response) {
      $("img").css("visibility", "hidden");
      $("#square-2").html(response);
      $("#square-2").css({width: "300", height: "300"});
    });
}

function squareTwoSecondMouseover() {
  $("#square-2").html("");
  $("#square-2").css({width: "100", height: "100"});
}

function bindArrowKeysListener() {
  $(document).keydown(function(arrowKey) {
    key = arrowKey.which;
    target = "";

    switch(key) {
      case 37:  // Key left
        target = "#square-3";
        keyedSquare(target);
        break;
      case 38:  // Key up
        target = "#square-4";
        keyedSquare(target);
        break;
      case 39:  // Key right
        target = "#square-5";
        keyedSquare(target);
        break;
      case 40:  // Key down
        target = "#square-6";
        keyedSquare(target);
        break;
    }
    
  })
}

function keyedSquare(square) {
  $("img").css("visibility", "visible");
  if ($(square).html() === "") {
    var toSend = 22
    var request = $.ajax({
      type: "POST",
      url: "/sams_fun_route",
      data: {cool_thing: toSend},
      dataType: "html"
    }).done(function(response) {
        $("img").css("visibility", "hidden");
        $(square).html(response);
        $(square).css({width: "300", height: "300"});
      });

  } else {
    revertKeyedSquare(square);
  };
}

function revertKeyedSquare (square) {
  $("img").css("visibility", "hidden");  
  $(square).html("");
  $(square).css({width: "100", height: "100"});
}

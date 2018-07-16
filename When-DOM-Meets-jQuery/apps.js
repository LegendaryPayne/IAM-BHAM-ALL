$(document).ready( function (){
    $(document.body).prepend('<button id="btn1">Click Me</button>');

    $('#btn1').click( function (){
        alert("Hello World");
    });
$('#divBox').css({
    'height': '100px',
    'background-color': 'red'
});
$('#divBox').mouseover( function(){
    let randomColor = getRandomColor();
    $('#divBox').css("background-color", randomColor);    
});
$('#divBox').mouseout( function(){
    $('#divBox').css("background-color", 'red');    
});
$('p').click( function (){
    let randomColor = getRandomColor();
    $('p').css("color", randomColor);     
});
$('#submit').click(function(){
    alert($('input:text').val());
});
$('#btn2').click(function(){
    $('#nameHere').append('<span>Jimmie Lee Payne III</span>');
})
$('#btn3').click(function(){
    $('.list').append('<li>Sorry, I have No Friends</li>');
})
});

function getRandomColor() {
    let letters = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ];
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
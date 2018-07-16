$(document).ready(function() {
  $(document.body).append(
    '<div class="newDiv" id="divNew"><ul class= "newUl"><ul></div>'
  );
  $("form >input").keyup(function() {
    let empty = false;
    $("form > input").each(function() {
      if ($(this).val() === "") {
        empty = true;
      }
    });
    if (empty) {
      $("#submit").attr("disabled", "disabled");
      console.log(empty);
    } else {
      $("#submit").removeAttr("disabled");
      console.log(empty);
    }
  });

  $("#submit").click(function() {
    $(".newUl").append('<li class="li">' + $("input:text").val() + "</li>");
    $(".li").click(function() {
      console.log("clicked");
      let randomColor = getRandomColor();
      $(this).css({
        "background-color": randomColor
      });
    });
    $(".li").dblclick(function() {
      $(this).remove();
    });
  });
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

let sentences = [
    "ten ate neite ate nee enet ite ate inet ent eate",
    "Too ato too nOt enot one totA not anot tOO aNot",
    "oat itain oat tain nate eate tea anne inant nean",
    "itant eate anot eat nato inate eat anot tain eat",
    "nee ene ate ite tent tiet ent ine ene ete ene ate"
  // "test",
  // "hello",
  // "great",
  // "four",
  // "legendary"
];
let wordcount = 0

let start = 0;
let end = 0;

$(document).ready(function() {
  let upperKeys = $("#keyboard-upper-container");
  let lowerKeys = $("#keyboard-lower-container");
  let sentenceCounter = 0; // -- counter for the sentences

  let theSentence = sentences[sentenceCounter]; // -- creates a single array for a sentence
for (i=0; i< sentences.length; i++){
  let val1 =sentences[i]
  let val2 = val1.split(" ");
wordcount = wordcount+ val2.length
} 

  let sentenceArray = theSentence.split(""); // -- splitting the array for a character count

  let letterCounter = 0; // -- counter for the target letter

  upperKeys.hide(); // -- hides the Uppercase keyboard in the beginning

  $("#yellow-block").hide(); // -- hides the yellow block in the beginning

  let mistakeCounter = 0; // -- counter for how many mistakes was made

  let fdbtn = document.createElement("div"); // -- feedback

  // -- Hides and Shows the Two Different leb boards -- //
  $(document).keyup(function(event) {
    if (event.which === 16) {
      upperKeys.hide();
      lowerKeys.show();
    }
  });
  $(document).keydown(function(event) {
    if (event.which === 16) {
      upperKeys.show();
      lowerKeys.hide();
    }
  });

  // ----------------------------------------------------------

  // -- Locates id with the following numbers and make the responding block yellow when key is press down, with changes the block color back when key is not longer press //

  $(document).keypress(function(event) {
    let key = "#" + event.which;
    $(key).css("background-color", "yellow");
    $(document).keyup(function(event) {
      $(key).css("background-color", "#f5f5f5");
    });
  });

  // --------------------------------------------------------------------------- //

  // -- The Beginning Sentence --//

  for (i = 0; i < sentenceArray.length; i++) {
    let character = document.createElement("span");
    character.id = i + "char" + theSentence.charCodeAt(i);
    character.innerHTML = sentenceArray[i];
    $("#sentence").append(character);
  }
  // -------------------------------------------------------------//

  //-- beginning feedback -- //
  fdbtn.innerHTML = "Begin";
  fdbtn.style.color = "white";
  fdbtn.style.backgroundColor = "lightblue";
  fdbtn.style.borderRadius = "25px";
  $("#feedback").append(fdbtn);
  // ------------------------------------------------------------- //

  // -- the First Target Letter --//
  let letter = document.createElement("span");
  letter.className = theSentence.charCodeAt(0);
  letter.innerHTML = sentenceArray[0];
  $("#target-letter").append(letter);
  $(`#${0}char${116}`).css("background-color", "yellow");

  // -----------------------------------------//

  $(document).keypress(function(event) {
    if (start === 0) {
      start = new Date().valueOf();
    }

    if (sentenceCounter < sentences.length - 1) {
      if (letterCounter < sentenceArray.length - 1) {
        if (event.keyCode === theSentence.charCodeAt(letterCounter)) {
          $("#target-letter").empty();
          $("#feedback").empty();
          $("#sentence span").css("background-color", "white");

          letterCounter++;
          letter.className = theSentence.charCodeAt(letterCounter);
          letter.innerHTML = sentenceArray[letterCounter];
          $("#target-letter").append(letter);
          $(
            `#${letterCounter}char${theSentence.charCodeAt(letterCounter)}`
          ).css("background-color", "yellow");
          fdbtn.innerHTML = "Correct";
          fdbtn.style.color = "white";
          fdbtn.style.backgroundColor = "green";
          fdbtn.style.borderRadius = "25px";
          $("#feedback").append(fdbtn);
        } else {
          madeAmistake ()
        }
      } else {
        letterCounter = 0;
        sentenceCounter++;
        $("#target-letter").empty();
        $("#sentence").empty();
        theSentence = sentences[sentenceCounter];
        sentenceArray = theSentence.split("");

        for (i = 0; i < sentenceArray.length; i++) {
          let character = document.createElement("span");
          character.id = i + "char" + theSentence.charCodeAt(i);
          character.innerHTML = sentenceArray[i];
          $("#sentence").append(character);

          letter.className = theSentence.charCodeAt(0);
          letter.innerHTML = sentenceArray[0];
          $("#target-letter").append(letter);
          $(
            `#${letterCounter}char${theSentence.charCodeAt(letterCounter)}`
          ).css("background-color", "yellow");
          console.log(
            `#${letterCounter}char${theSentence.charCodeAt(letterCounter)}`
          );
        }
      }
    } else {
      if (letterCounter < sentenceArray.length - 1) {
        if (event.keyCode === theSentence.charCodeAt(letterCounter)) {
          $("#target-letter").empty();
          $("#feedback").empty();
          $("#sentence span").css("background-color", "white");

          letterCounter++;
          letter.className = theSentence.charCodeAt(letterCounter);
          letter.innerHTML = sentenceArray[letterCounter];
          $("#target-letter").append(letter);
          $(
            `#${letterCounter}char${theSentence.charCodeAt(letterCounter)}`
          ).css("background-color", "yellow");
          fdbtn.innerHTML = "Correct";
          fdbtn.style.color = "white";
          fdbtn.style.backgroundColor = "green";
          fdbtn.style.borderRadius = "25px";
          $("#feedback").append(fdbtn);
        } else {
          madeAmistake ()
        }
      } else {
        if (event.keyCode === theSentence.charCodeAt(letterCounter)) {
          $("#target-letter").empty();
          $("#feedback").empty();
          $("#sentence span").css("background-color", "white");
          $("#sentence").empty();
          $("#target-letter").append("Finished");
          let character = document.createElement("div");
          letterCounter++;
          character.id = "score";
          end = new Date().valueOf();
          let mins = Math.floor((end - start)/60000);
          let wpm = ((wordcount/mins))          
          character.innerHTML = "Your WPM is " + (wpm - (2*mistakeCounter));
          character.style.textAlign = "center";
          $("#sentence").append(character);

          console.log(start);
          console.log(end);
          console.log(mins);
          fdbtn.innerHTML = "Click Here to Play Again";
          fdbtn.style.color = "white";
          fdbtn.style.backgroundColor = "lightgray";
          fdbtn.style.borderRadius = "25px";
          $(fdbtn).click(function() {
            mistakeCounter = 0;
            letterCounter = 0;
            sentenceCounter = 0;
            start = 0;
            end = 0;
            $("#target-letter").empty();
            $("#feedback").empty();
            $("#sentence").empty();
            theSentence = sentences[sentenceCounter];
            sentenceArray = theSentence.split("");
            for (i = 0; i < sentenceArray.length; i++) {
              let character = document.createElement("span");
              character.id = i + "char" + theSentence.charCodeAt(i);
              character.innerHTML = sentenceArray[i];
              $("#sentence").append(character);
            }
            fdbtn.innerHTML = "Begin";
            fdbtn.style.color = "white";
            fdbtn.style.backgroundColor = "lightblue";
            fdbtn.style.borderRadius = "25px";
            $("#feedback").append(fdbtn);
            let letter = document.createElement("span");
            letter.className = theSentence.charCodeAt(0);
            letter.innerHTML = sentenceArray[0];
            $("#target-letter").append(letter);
            $(`#${0}char${116}`).css("background-color", "yellow");
          });
          $("#feedback").append(fdbtn);
        } else {
          if (letterCounter === sentenceArray.length) {
            console.log(mistakeCounter);
          } else {
            madeAmistake ()
          }
        }
      }
    }
  });
  function madeAmistake() {
    mistakeCounter++;
    fdbtn.innerHTML = "Incorrect";
    fdbtn.style.color = "white";
    fdbtn.style.backgroundColor = "red";
    fdbtn.style.borderRadius = "25px";
    console.log(mistakeCounter);
  } 
});




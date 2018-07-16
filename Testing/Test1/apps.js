let numArray = [];

$(document).ready( function (){
   let name = $('<h1>Jimmie Lee Payne III</h1>');
   $(name).click( function (){
    let randomColor = getRandomColor();
    $(name).css('color', randomColor);
   });
   $('body').append(name);
   let input = document.createElement('input');
   input.id = 'theNum';
   input.type = 'text';
   input.name = 'number';
   input.placeholder = 'Enter Number Here';
   $(document.body).append(input);
   $(document.body).append('<button id="btn1">Click to Add </button>');
   $(document.body).append('<br><br><div id="sum">When Clicked, the Sum of All The Numbers Will Show Here!</div>');

   $('#btn1').click( function (){
       
       let num = +document.getElementById("theNum").value;
       if(isNaN(num)) {
         alert("Please Enter A Number")
         input.value= '';
       } else {
        numArray.push(num);      
        input.value= '';
        $('#sum').empty();
        let sentence = 'The Sum of '
        let numSum = 0
        for(i=0;i<numArray.length;i++) {
            if(i === numArray.length-1){
                sentence += numArray[i];  
            } else {
            sentence += numArray[i] +' + ';    
            }
            numSum = numSum+numArray[i];
        }
        sentence += ' is: '+numSum;
        $('#sum').append(sentence);
       }


   })
})
function getRandomColor() {
    let letters = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];

    }
    return color;
}
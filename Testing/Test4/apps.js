
let cardArray;
let cardCounter = 0;
let addId=0

class Character {
    constructor(props) {
        if(props.poster.includes(".jpg") === true || props.poster.includes(".png") === true) {
            console.log(props.poster.includes(".jpg"))
            this.poster = props.poster
        } else {
            this.poster = "https://www.computerhope.com/jargon/b/black.jpg"
        }
        this.title = props.title
        this.div = document.createElement("div");
        this.div.classList= 'col my-2 mx-auto';
        this.div.setAttribute("id", props.addId)
    this.div.innerHTML = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src=${this.poster} style="height: 400px">
        <div class="card-header text-center">
        ${props.title.toUpperCase()}
      </div>
        <div class="card-body text-center">
            <h6 class="card-subtitle mb-2 text-muted">${props.director.toCapt}</h6>
            <button class="btn btn-primary text-center" id="deleteButton${props.addId}">Click to Remove</button>
        </div>
    </div>
</div>`;
$(`.row`).append(this.div);
this.button =document.getElementById(`deleteButton${props.addId}`);
this.button.addEventListener('click', () => {
    this.deleteCard();
})

}
deleteCard() {
    if(cardCounter > 0) {
        console.log(`removed: ${this.title}`)
        this.div.remove()
  cardCounter--;
} 
} 
}

function idCheck(props) {
    let randomId = randomval(props.length);
    let test = $(`#${randomId}`).attr("id");
    while (randomId === +test) {
        randomId = randomval(props.length);
        test = $(`#${randomId}`).attr("id");
    }
    return randomId;
}

function insertCard() {
    if (cardCounter < cardArray.length) {
        addId = idCheck(cardArray);
        console.log(addId)
        let stateAddedCard = cardArray[addId]
        console.log(`Added: ${stateAddedCard.title}`);
        return theCard({...stateAddedCard, addId})
      } else {
        alert(`Sorry, No more Characters`);
      }
    }

function randomval(max) {
    return Math.floor(Math.random() * max);
  }

function theCard(results) {
    let d = new Character(results);
    cardCounter++;
  }

function addtoData () {
    let newTitle = document.getElementById('newTitle').value;
    let newPoster = document.getElementById('newPoster').value;
    let newDirector = document.getElementById('newDirector').value;
    console.log(`got here and going to update data`)
    api.add(newTitle, newPoster, newDirector).then(results => {
        console.log('changed the data and here it is');
        cardArray = results
        return(console.log(cardArray))
    });
    $('.form-control').val("");
}

function getStarted(results) {
    $(`.row`).empty();
    if(cardArray === undefined) {
    cardArray = results    
    }
    $(`#createButton`).click(insertCard);
    $(`#addtoData`).click(addtoData);
    }
    
    $(document).ready(function() {
        $(`.row`).append(`<h1 class="text-center"> One Moment Please </h1>`)
        console.log(`got here and going to get data`)
        api.all().then(results => { 
            console.log('got the data and here it is');
            console.log(results);
            return (getStarted(results));
        });
      });
      $(`#inputContainer`).append(`<div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="newdata">Please enter Title, Poster URL, and Director name</span>
        </div>
        <input type="text" class="form-control"  id="newTitle" value="">
        <input type="text" class="form-control" id="newPoster" value="">
        <input type="text" class="form-control" id="newDirector" value="">
        <button id="addtoData">Submit</button>
      </div>`)
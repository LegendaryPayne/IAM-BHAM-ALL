let cardArray;

function randomval(min, max) {
    return Math.floor(Math.random() * (max - min)+ min);
  }

class Character {
    constructor(test) {
      this.id = test.id;
      this.name = test.name;
      this.title = test.title;

      this.createACard();
    }
createACard() {
    let card = `<div class="col my-2 mx-auto" id="${this.id}">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${this.title}</h6>
        </div>
    </div>
</div>`
    $(`.row`).append(card)
  }
}
cardCounter = 0;
let addId=0

function idCheckForAdd(results) {
    let randomId = randomval(1, results.length + 1);
    let test = $(`#${randomId}`).attr("id");
    console.log(randomId);
    while (randomId === +test) {
      randomId = randomval(1, results.length + 1);
      test = $(`#${randomId}`).attr("id");
      console.log(randomId);
    }
    return randomId;
  }
  

function theCard(results) {
  let d = new Character(results);
  cardCounter++;
}

function idCheckForRemoval() {
    let randomId = randomval(1, cardArray.length+1);
    let test = $(`#${randomId}`).attr("id");
    while (randomId !== +test) {
      randomId = randomval(1, cardArray.length+1);
      test = $(`#${randomId}`).attr("id");
    }
    return randomId;
}

function insertcard() {
        if (cardCounter < cardArray.length) {
            addId = idCheck(cardArray, add);
            let stateAddedCard = cardArray.find(function(obj) {
              return obj.id === addId;
            });
            console.log(`Added: ${stateAddedCard.name}`);
            return theCard(stateAddedCard)
          } else {
            alert(`Sorry, No more Characters`);
          }
        }

function removeCard() {
            if(cardCounter > 0) {
          let removedId = idCheck();
          $(`#${removedId}`).remove();
          let stateremovedcard = cardArray.find(function(obj) {
            return obj.id === removedId;
          });
          console.log(`Removed: ${stateremovedcard.name}`);
          cardCounter--;
        } else {
            alert(`Sorry, No more Characters`);
          }
        } 
function getStarted(results) {
if(cardArray === undefined) {
cardArray = results    
}
$(`#createButton`).click(insertcard);
$(`#deleteButton`).click(removeCard);
}

$(document).ready(function() {
    console.log(cardArray)
    console.log(`got here and going to get data`)
    api.all().then(results => { 
        console.log('got the data and here it is');
        console.log(results);
        return (getStarted(results));
    }).catch((err) => {
        console.log(err);
        console.log('Please refresh page');
    });
  });
  
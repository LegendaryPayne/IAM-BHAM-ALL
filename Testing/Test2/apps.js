cardArray = [];
DragonBallZ = [
  {
    id: 0,
    name: `Goku`,
    race: `Saiyan`,
    image: `https://vignette.wikia.nocookie.net/dragonball/images/9/95/Universe_Mission_Goku.png/revision/latest?cb=20180301003238`,
    summary: `Goku is a Saiyan originally sent to Earth as an infant with the mission to destroy it, an accident alters his memory, allowing him to grow up to become Earth's greatest defender, as well as the informal leader of the Dragon Team.`,
    wikiLink: `http://dragonball.wikia.com/wiki/Goku`
  },
  {
    id: 1,
    name: `Vegeta`,
    race: `Saiyan`,
    image: `https://vignette.wikia.nocookie.net/dragonball/images/3/33/VegetaSMSagaEp205.png/revision/latest?cb=20101109154900`,
    summary: `Vegeta is the prince of the fallen Saiyan race and the deuteragonist of the Dragon Ball series. He is easily one of the most prominent characters in the series, receiving more character development after being introduced than a number of other characters.`,
    wikiLink: `http://dragonball.wikia.com/wiki/Vegeta`
  },
  {
    id: 2,
    name: `Gohan`,
    race: `Saiyan  Hybrid`,
    image: `https://vignette.wikia.nocookie.net/dragonball/images/d/db/DBSuper_88_3.jpg/revision/latest?cb=20170430130720`,
    summary: `Gohan is the first hybrid (half-Earthling, half-Saiyan) to appear in the series. He is named after Goku's adoptive grandfather, Gohan.`,
    wikiLink: `http://dragonball.wikia.com/wiki/Gohan`
  },
  {
    id: 3,
    name: `Trunks`,
    race: `Saiyan Hybrid`,
    image: `https://vignette.wikia.nocookie.net/dragonball/images/d/d1/Dragon-ball-z-bojack-unbound-cart-b.jpg/revision/latest?cb=20111212155155`,
    summary: `Trunks hails from an alternate timeline in which Future Androids murdered the Z Fighters and proceeded to create apocalyptic hell on Earth. Trained by Future Gohan as a teenager, he becomes a gifted fighter, swordsman and a Super Saiyan; traits that aid him against the Androids after traveling back in time in order to save his own future.`,
    wikiLink: `http://dragonball.wikia.com/wiki/Future_Trunks`
  },
  {
    id: 4,
    name: `Freiza`,
    race: `Frost Demon`,
    image: `https://vignette.wikia.nocookie.net/dragonball/images/4/47/Screenshot_18-0.png/revision/latest?cb=20170624140005`,
    summary: `Frieza is the catalyst antagonist of the entire franchise, as it is his actions that led to Goku arriving on Earth. He has made several comebacks since his fight with Goku on Namek, including multiple invasions of Earth.`,
    wikiLink: `http://dragonball.wikia.com/wiki/Frieza`
  },
  {
    id: 5,
    name: `Krillin`,
    race: `Human`,
    image: `https://vignette.wikia.nocookie.net/dragonball/images/5/55/DBS_84_-_4857844.png/revision/latest?cb=20170505213624`,
    summary: `Krillin is courageous, a faithful ally and good-natured. He is a prominent Z Fighter, despite usually being overpowered by the major enemies.`,
    wikiLink: `http://dragonball.wikia.com/wiki/Krillin`
  },
  {
    id: 6,
    name: `Piccolo`,
    race: `Namakian`,
    image: `https://vignette.wikia.nocookie.net/dragonball/images/1/1a/Vlcsnap-2017-01-25-15h07m58s425.png/revision/latest?cb=20170125201829`,
    summary: `Piccolo is a Namekian and also the final child and reincarnation of the Demon King Piccolo, later becoming the reunification of the Nameless Namekian after fusing with Kami. Piccolo is part of the Dragon Clan, who were the original creators of the Dragon Balls.`,
    wikiLink: `http://dragonball.wikia.com/wiki/Piccolo`
  }
];

function randomval(max) {
  return Math.floor(Math.random() * max);
}

class Character {
  constructor(test) {
    this.id = test.id;
    this.name = test.name;
    this.race = test.race;
    this.summary = test.summary;
    this.image = test.image;
    this.wikiLink = test.wikiLink;
    this.createACard();
  }

  createACard() {
    this.div = document.createElement("div");
    this.div.classList += "col my-2 mx-auto";
    this.div.setAttribute("id", this.id);
    this.divCard = document.createElement("div");
    this.divCard.classList += "card ";
    this.divCard.style.width = `400px`;
    this.imageElement = document.createElement("img");
    this.imageElement.classList += `card-img-top `;
    this.imageElement.src = this.image;
    this.imageElement.style.height = `200px`;
    this.divCard.appendChild(this.imageElement);
    this.divCardBody = document.createElement("div");
    this.divCardBody.classList += "card-body ";
    this.divCardBody.style.height = `250px`;
    $(this.divCardBody).append(`<h5 class="card-title">${this.name}</h5>`);
    $(this.divCardBody).append(
      `<h6 class="card-subtitle mb-2 text-muted">${this.race}</h6>`
    );
    $(this.divCardBody).append(`<p class="card-text">${this.summary}</p>`);
    this.divCard.appendChild(this.divCardBody);
    $(this.divCard).append(
      `<div class="card-body text-center"><a href="${
        this.wikiLink
      }" class="btn btn-primary">Learn More</a></div>`
    );
    this.div.appendChild(this.divCard);
    $(`.row`).append(this.div);
  }
}

i = 0;
let addId = 0;

function theCard() {
  let c = DragonBallZ[addId];
  console.log()
  let d = new Character(c);
  cardArray.push(d);
  i++;
}

function insertcard() {
  if (i < DragonBallZ.length) {
    if (i === 0) {
      theCard();
    } else {
      addId = idCheckForAdd();
      theCard();
    }
    let stateaddedcard = DragonBallZ.find(function(obj) {
      return obj.id === addId;
    });
    console.log(`Added: ${stateaddedcard.name}`);
  } else {
    alert(`Sorry, No more Characters`);
  }
}
function idCheckForRemoval() {
    let randomId = randomval(DragonBallZ.length);
    let test = $(`#${randomId}`).attr("id");
    while (randomId !== +test) {
      randomId = randomval(DragonBallZ.length);
      test = $(`#${randomId}`).attr("id");
    }
    return randomId;
}

function idCheckForAdd() {
  let randomId = randomval(DragonBallZ.length);
  let test = $(`#${randomId}`).attr("id");
  while (randomId === +test) {
    randomId = randomval(DragonBallZ.length);
    test = $(`#${randomId}`).attr("id");
  }
  return randomId;
}

function removeCard() {
    if(i > 0) {
  let removedId = idCheckForRemoval();
  $(`#${removedId}`).remove();
  let removedindex = cardArray.indexOf(removedId);
  cardArray.splice(removedindex, 1);
  let stateremovedcard = DragonBallZ.find(function(obj) {
    return obj.id === removedId;
  });
  console.log(`Removed: ${stateremovedcard.name}`);
  i--;
} else {
    alert(`Sorry, No more Characters`);
  }
}
$(document).ready(function() {
  $(`#createButton`).click(insertcard);
  $(`#deleteButton`).click(removeCard);
});

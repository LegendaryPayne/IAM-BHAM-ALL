$(document).ready( function (){
    var friendName = ['Jimmie', 'Legendary', "Kira", 'Jay', 'Payne'];
    var weaponName = ['throwing knife', 'katana', 'teacup', 'Blades of Chaos', 'Amaterasu', 'Ka-Me-Ha-Me-Ha', 'Power of Friendship', 'piture of Donald Trump', `Mida's Touch`, '???', 'Gjallarhorn', 'facts of life', 'speed of light', 'subscribe button', 'MOAB', `5'oclock shadow`,'YMCA','Death Note',`People's Elbow`, 'Sound of Revenge'];
    var locationName = [`River of Styx`, 'Sins of the Past', 'Wizard of Oz', 'Matrix', 'void', 'Nether', 'Age of Ultron', 'Tower', 'World Tornament', 'Flashpoint']

    for(i=1; i < 101; i++){
    $('.container').append('<h3>Accusation '+i+'</h3>')
    
    var alertMessage = accusation(i);
    $('h3').click(alertMessage);
    };

function accusation(a) {
    var nameCounter = Math.floor((((a)-1)/20));
    var weaponCounter = ((a)-1)-(20*nameCounter);
    var locationCounter = Math.floor(weaponCounter/2);
    
    return function () {
        alert((this.innerHTML) +': I accuse '+ friendName[nameCounter] +', of killing with the '+ weaponName[weaponCounter] +' in the '+ locationName[locationCounter] + '!');
    }
}

});


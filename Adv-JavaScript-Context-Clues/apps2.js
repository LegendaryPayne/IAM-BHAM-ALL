$(document).ready( function (){
    var friendName = ['Jimmie', 'Legendary', "Kira", 'Jay', 'Payne'];
    var weaponName = ['throwing knife', 'katana', 'teacup', 'Blades of Chaos', 'Amaterasu', 'Ka-Me-Ha-Me-Ha', 'Power of Friendship', 'piture of Donald Trump', `Mida's Touch`, '???', 'Gjallarhorn', 'facts of life', 'speed of light', 'subscribe button', 'MOAB', `5'oclock shadow`,'YMCA','Death Note',`People's Elbow`, 'Sound of Revenge'];
    var locationName = [`River of Styx`, 'Sins of the Past', 'Wizard of Oz', 'Matrix', 'void', 'Nether', 'Age of Ultron', 'Tower', 'World Tornament', 'Flashpoint']

    for (i = 0; i < 100; i++) {
        var h3 = $('<h3>Accusation ' + (i+1) + '</h3>');
        $('.container').append(h3)
        var alertMessage = accusation(i);
        h3.click(alertMessage);
    }
    function accusation(num) {


            let f = Math.floor(Math.random()*5);
            console.log(f);
            let l = Math.floor(Math.random()*10);
            console.log(l);
            let w = Math.floor(Math.random()*2);
            console.log(w);
        return function () {
            alert("I accuse " + friendName[f] + ",  of killing with the " + weaponName[w] + " in the " + locationName[l] + " !");
        }
    }

});

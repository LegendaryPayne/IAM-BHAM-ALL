$(document).ready( function (){
    var friendName = ['Jimmie', 'Legendary', "Kira", 'Jay', 'Payne'];
    var weaponName = ['throwing knife', 'katana', 'teacup', 'Blades of Chaos', 'Amaterasu', 'Ka-Me-Ha-Me-Ha', 'Power of Friendship', 'piture of Donald Trump', `Mida's Touch`, '???', 'Gjallarhorn', 'facts of life', 'speed of light', 'subscribe button', 'MOAB', `5'oclock shadow`,'YMCA','Death Note',`People's Elbow`, 'Sound of Revenge'];
    var locationName = [`River of Styx`, 'Sins of the Past', 'Wizard of Oz', 'Matrix', 'void', 'Nether', 'Age of Ultron', 'Tower', 'World  Martial Arts Tornament', 'Flashpoint']

    for (i = 0; i < 100; i++) {
        var h3 = $('<h3 id="'+ (i+1) +'">Accusation ' + (i+1) + '</h3>');
        $('.container').append(h3)
        var alertMessage = accusation();
        h3.click(alertMessage);
    }
    function accusation() {


            let f = Math.floor(Math.random()*friendName.length);

            let l = Math.floor(Math.random()*locationName.length);

            let w = Math.floor(Math.random()*weaponName.length);
            console.log(friendName[f],weaponName[w],locationName[l])
        return function () {
            alert("Accusation " + (this.id) + ": I accuse " + friendName[f] + ", of killing with the " + weaponName[w] + " in the " + locationName[l] + "!");
        }
    }

});

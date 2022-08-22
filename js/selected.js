const playerArray = [];

function display(player){

    for(let i = 0; i < player.length; i++){

        const name = playerArray[i].name;

        console.log(playerArray[i].name);
    }


}

function addToTable(element){

    const playersName = element.parentNode.parentNode.children[0].innerText;
    
    const playersObj = {
        name: playersName
    }

    playerArray.push(playersObj);

    console.log(playerArray.length);

    display(playerArray);
}
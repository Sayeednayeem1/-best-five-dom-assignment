const playerArray = [];

function display(player){

    const tableBody = document.getElementById('selected-players-list');
    tableBody.innerHTML = "";

    for(let i = 0; i < player.length; i++){

        const name = playerArray[i].name;
        const li = document.createElement('li');
            li.innerHTML= `
            <th>${i + 1}</th>
            <td>${name}</td>

            `;
            tableBody.appendChild(li);
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
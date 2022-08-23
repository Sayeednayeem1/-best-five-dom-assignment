


function getInputFieldValueById(inputFieldId){

    const perPlayerInputField = document.getElementById(inputFieldId);
    const perPlayerValueString = perPlayerInputField.value;
    const currentValue = parseInt(perPlayerValueString);
    perPlayerInputField.value = '';
    return currentValue

} 

function textExpenseField(textFieldId){

    const totalExpenseField = document.getElementById(textFieldId);
    const totalExpenseString = totalExpenseField.innerText;
    const previousTotalExpenses = parseInt(totalExpenseString);
    return previousTotalExpenses;
}

function calculateCurrentTotalExpenses(elementId, newValue){

    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}


document.getElementById('btn-calculate').addEventListener('click', function(){

    const currentPerPlayerValue = getInputFieldValueById('per-player-input');
    const currentTotalPlayersExpenses = currentPerPlayerValue * 5;

    calculateCurrentTotalExpenses('total-players-exp', currentTotalPlayersExpenses);
  
    if(isNaN(currentPerPlayerValue)){

        alert("please provide a valid number");
        return;

    }

})


document.getElementById('btn-calc-total').addEventListener('click', function(){

    const previousTotalExpenses = textExpenseField('total-players-exp');

    const totalManagerExpenses = getInputFieldValueById('managerial-exp');

    const totalCoachExpenses = getInputFieldValueById('coach-exp');

    const totalManagerialExpenses = totalManagerExpenses + totalCoachExpenses;
    

    const totalExpense = totalManagerialExpenses + previousTotalExpenses;


    calculateCurrentTotalExpenses('total-expense', totalExpense);

    if(isNaN(totalManagerExpenses) || isNaN(totalCoachExpenses)){

        alert('please provide a valid number');
        return;
    }

})
function totalExpense(){
    //Get expenses value
    //get food value
    const foodField = document.getElementById('food-field');
    const foodCoast = parseInt(foodField.value);
    if(isNaN(foodCoast) || foodCoast < 0){
        foodField.value = '';
        return alert('Error! please input a valid amount of money');
    }
    //get rent value
    const rentField = document.getElementById('rent-field');
    const rentCoast = parseInt(rentField.value);
    if(isNaN(rentCoast) || rentCoast < 0){
        rentField.value = '';
        return alert('Error! please input a valid amount of money');
    }
    //get clothes value
    const clothesField = document.getElementById('clothes-field');
    const clothesCoast = parseInt(clothesField.value);
    if(isNaN(clothesCoast) || clothesCoast < 0){
        clothesField.value = '';
        return alert('Error! please input a valid amount of money');
    }
    // total coast
    let totalCoast = foodCoast + rentCoast + clothesCoast;
    //Get Total Expenses
    const totalExpenseField = document.getElementById('total-expenses');
     const totalExpenses = totalExpenseField.innerText;
    //  Get income and balance value
    const incomeField = document.getElementById('income-field');
    const income = parseInt(incomeField.value)
    if(isNaN(income) || income < 0){
        incomeField.value = '';
        return alert('Error! please input a valid amount of money');
    }
    const balanceField = document.getElementById('Balance');
    const previousBalance = balanceField.innerText;
    //Update Expenses
    if(totalCoast > income){
        return alert('Insufficiant balance, please input vaild amount of money')
    }
    totalExpenseField.innerText = totalCoast;

     //  Update Balance
    let updateBalance = income - totalCoast;
    balanceField.innerText = updateBalance;
}
// Saving function

function totalSave(){
    //Get Percentage value
    const savingfield = document.getElementById('saving-field');
    savingPercentage = parseInt(savingfield.value);
    if(isNaN(savingPercentage) ||savingPercentage < 0 || savingPercentage >100 ){
        savingfield.value = '';
        return alert('Error! please input a valid Percentage');
    }
    //Get Saving Amount and Remaining Balance
    const savingAmount = document.getElementById('saving-amount');
    const savingAmountValue = savingAmount.innerText;
    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceValue = remainingBalance.innerText;
    //get balance
    const updateBalance = parseInt(document.getElementById('Balance').innerText);

    //Update Saving Amount
    savingAmount.innerText = (updateBalance * savingPercentage) / 100;
    savingBalance = parseInt(savingAmount.innerText);
    //Update Remaining balance
    remainingBalance.innerText = updateBalance - savingBalance;
}

document.getElementById('calculate-button').addEventListener('click',function(){
   totalExpense() 
})

document.getElementById('saving-button').addEventListener('click',function(){
    totalSave()
})
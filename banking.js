// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {

    //Get the amount deposited
    const depositFeild = document.getElementById('deposit-input');
    const newDepositAmountText = depositFeild.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // Update Deposit Total


    depositFeild.value = '';  // Clear the deposite Field

    // Set Deposit Total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // Update Balance Account

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


});

// handle withdraw button event

document.getElementById('withdraw-button').addEventListener('click', function () {

    //Get the amount deposited

    const withdrawFeild = document.getElementById('Withdraw-input');
    const newWithdrawAmountText = withdrawFeild.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);


    // Set Withdraw Total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    withdrawFeild.value = '';  // Clear the withdraw Field

    //update Balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;


});


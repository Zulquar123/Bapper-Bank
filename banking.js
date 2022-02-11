// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {

    //Get the amount deposited
    const depositFeild = document.getElementById('deposit-input');
    const newDepositAmountText = depositFeild.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // Update Deposit Total


    depositFeild.value = '';  // Clear the deposite Field


    // Update Balance Account

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
});

// handle withdraw button event

document.getElementById('withdraw-button').addEventListener('click', function () {

    //Get the amount deposited
    const withdrawFeild = document.getElementById('Withdraw-input');
    const newWithdrawAmountText = withdrawFeild.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

});


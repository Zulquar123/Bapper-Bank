// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    //Get the amount deposited
    const depositFeild = document.getElementById('deposit-input');
    const depositAmount = depositFeild.value;

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmount;
    console.log(depositAmount);
})
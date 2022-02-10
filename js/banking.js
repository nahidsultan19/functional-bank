function doubleIt(num) {
    const result = num * 2;
    return result;
}

function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;
    // clear input field
    depositInput.value = '';
    return newDepositAmount;
}


document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('deposit button clicked');
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmount = depositInput.value;
    // console.log(newDepositAmount);
    const depositAmount = getInputValue();
    // update deposit amount
    const depositTotal = document.getElementById('deposit-total');
    const prevDeposit = depositTotal.innerText;
    const newDepositTotal = parseFloat(prevDeposit) + parseFloat(depositAmount);
    // console.log(newDepositTotal);
    depositTotal.innerText = newDepositTotal;


    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const prevBalanceTotal = balanceTotal.innerText;

    const newBalanceTotal = parseFloat(prevBalanceTotal) + newDepositTotal;
    balanceTotal.innerText = newBalanceTotal;




});

// handle withdraw

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;
    // console.log(newWithdrawAmount)
    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const prevWithdrawAmount = withdrawTotal.innerText;
    const newTotalWithdraw = parseFloat(prevWithdrawAmount) + parseFloat(newWithdrawAmount);
    withdrawTotal.innerText = newTotalWithdraw;


    // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const prevBalanceTotal = balanceTotal.innerText;

    const newBalanceTotal = parseFloat(prevBalanceTotal) - newTotalWithdraw;
    balanceTotal.innerText = newBalanceTotal;

    // clear input field

    withdrawInput.value = '';
});
let totalDeposite = document.getElementById("totalDeposite");
let totalWithdraw = document.getElementById("totalWithdraw");
let balance = document.getElementById("balance");

let depositeAmount = document.getElementById("depositeAmount");
let withdrawAmount = document.getElementById("withdrawAmount");


document.getElementById("depositeBtn").addEventListener("click", calDeposite);
document.getElementById("withdrawBtn").addEventListener("click", calWithdraw);



function calDeposite() {
    totalDeposite.innerHTML = "$" + (parseFloat(depositeAmount.value) + parseFloat(totalDeposite.innerHTML.split("$")[1]));
    balance.innerHTML = "$" + (parseFloat(depositeAmount.value) + parseFloat(balance.innerHTML.split("$")[1]));
}

function calWithdraw() {
    if (parseFloat(withdrawAmount.value) > parseFloat(balance.innerHTML.split("$")[1])) {
        alert("SORRY! Insufficient Balance !!!");
    }
    else {
        totalWithdraw.innerHTML = "$" + (parseFloat(withdrawAmount.value) + parseFloat(totalWithdraw.innerHTML.split("$")[1]));
        balance.innerHTML = "$" + (parseFloat(balance.innerHTML.split("$")[1]) - parseFloat(withdrawAmount.value));
    }
}



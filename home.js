document.getElementById('add-btn').addEventListener('click', function (event) {
  event.preventDefault();

  const addAmount = document.getElementById('add-amount').value;
  const pin = document.getElementById('pin').value;

  if (pin === '1234') {
    const balance = document.getElementById('balance').innerText;

    const addmoneynumber = parseFloat(addAmount);
    const balanceNumber = parseFloat(balance);

    const newbalance = addmoneynumber + balanceNumber;

    document.getElementById('balance').innerText = newbalance;

    document.getElementById('add-amount').value = '';
    document.getElementById('pin').value = '';
  } else {
    alert('samiya tumi bul korso');
  }
});

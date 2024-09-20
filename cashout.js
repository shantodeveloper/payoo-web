document
  .getElementById('cash-out-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const cashout = document.getElementById('cash-out').value;
    const cashpin = document.getElementById('cash-out-pin').value;

    if (cashpin === '1234') {
      const balance = document.getElementById('balance').innerText;
      const balancenumber = parseFloat(balance);
      const cashoutnumber = parseFloat(cashout);

      const cashoutbalance = balancenumber - cashoutnumber;

      document.getElementById('balance').innerText = cashoutbalance;
    } else {
      alert('wrong');
    }
  });

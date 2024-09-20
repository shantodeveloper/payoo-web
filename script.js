document
  .getElementById('login-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const phnumber = document.getElementById('number-get').value;
    const pinNumber = document.getElementById('pin-input').value;

    if (phnumber === '5' && pinNumber === '1234') {
      window.location.href = './home.html';
    } else {
      alert('wrong phone number or pin');
    }
  });

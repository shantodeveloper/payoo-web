document
  .getElementById('login-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const phnumber = document.getElementById('number-get');

    console.log(phnumber.value);
  });

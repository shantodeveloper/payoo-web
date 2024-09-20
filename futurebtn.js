document.getElementById('btn-show').addEventListener('click', function () {
  document.getElementById('add-amount-from').classList.add('hidden');

  document.getElementById('cash-out-from').classList.remove('hidden');
});

document
  .getElementById('add-amount-show')
  .addEventListener('click', function () {
    document.getElementById('cash-out-from').classList.add('hidden');
    document.getElementById('add-amount-from').classList.remove('hidden');
  });

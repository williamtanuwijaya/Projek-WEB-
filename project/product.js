// Simpan transaksi yang dipilih
var transactions = [];

// Ambil elemen-elemen yang diperlukan
var addToCartButtons = document.querySelectorAll('.add-to-cart');
var transactionItems = document.getElementById('transaction-items');
var transactionTotal = document.querySelector('.transaction-total');
let transactionPajak = document.querySelector('pajak');

// Tambahkan event listener untuk tombol "Tambahkan ke Keranjang"
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var card = this.closest('.card');
    var title = card.querySelector('.card-title').innerText;
    var price = parseFloat(card.querySelector('.card-price').innerText.replace('Harga: $', ''));
    
    // Cek apakah transaksi sudah ada dalam daftar
    var existingTransaction = transactions.find(function(transaction) {
      return transaction.title === title;
    });

    // Jika ada, tambahkan jumlahnya
    if (existingTransaction) {
      existingTransaction.quantity++;
      existingTransaction.total = existingTransaction.quantity * price;
    } else {
      // Jika belum ada, buat transaksi baru
      var newTransaction = {
        title: title,
        quantity: 1,
        price: price,
        total: price
      };
      transactions.push(newTransaction);
    }

    // Perbarui tampilan transaksi
    renderTransactions();
  });
});

// Render tampilan transaksi
function renderTransactions() {
  transactionItems.innerHTML = '';
  var total = 0;

  transactions.forEach(function(transaction) {
    var itemText = transaction.title + ' - $' + transaction.price.toFixed(2) + ' x ' + transaction.quantity;
    var itemTotal = transaction.total.toFixed(2);
    total += transaction.total;
    
    var itemElement = document.createElement('div');
    itemElement.classList.add('transaction-item');
    itemElement.innerText = itemText + ' = $' + itemTotal;
    transactionItems.appendChild(itemElement);
  });

  var totalWithTax = total * 1.1; // Harga total dengan pajak 10%
  transactionTotal.innerText = 'Total: $' + totalWithTax.toFixed(2);
}
// Simpan transaksi yang dipilih
let transactions = [];

// Ambil elemen-elemen yang diperlukan
let addToCartButtons = document.querySelectorAll('.add-to-cart');
let transactionItems = document.getElementById('transaction-items');
let transactionTotal = document.querySelector('.transaction-total');
let transactionPajak = document.querySelector('pajak');

// Tambahkan event listener untuk tombol "Tambahkan ke Keranjang"
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    let card = this.closest('.card');
    let title = card.querySelector('.card-title').innerText;
    let price = parseFloat(card.querySelector('.card-price').innerText.replace('Harga: Rp ', ''));
    
    // Cek apakah transaksi sudah ada dalam daftar
    let existingTransaction = transactions.find(function(transaction) {
      return transaction.title === title;
    });

    // Jika ada, tambahkan jumlahnya
    if (existingTransaction) {
      existingTransaction.quantity++;
      existingTransaction.total = existingTransaction.quantity * price;
    } else {
      // Jika belum ada, buat transaksi baru
      let newTransaction = {
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
  let total = 0;

  transactions.forEach(function(transaction) {
    let itemText = transaction.title + ' - Rp ' + transaction.price.toFixed(2) + ' x ' + transaction.quantity;
    let itemTotal = transaction.total.toFixed(2);
    total += transaction.total;
    
    let itemElement = document.createElement('div');
    itemElement.classList.add('transaction-item');
    itemElement.innerText = itemText + ' = Rp ' + itemTotal;
    transactionItems.appendChild(itemElement);
  });

  let totalWithTax = total * 1.1; // Harga total dengan pajak 10%
  transactionTotal.innerText = 'Total: Rp ' + totalWithTax.toFixed(2);
}
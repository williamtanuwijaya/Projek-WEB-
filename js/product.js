// PRIMARY KEY ID PRODUK
let idProduk = '00';
// VARIABEL UNTUK Menampilkan Card Confirm
let confirm_SourceImg ;
let confirm_namaProduk;
let confirm_hargaProduk;

// Tambah Produk
document.addEventListener('DOMContentLoaded', function () {
  tambahProduk('./assets/Jordan Series ES.jpg', 'Jordan Series ES', '1.399.000');
  tambahProduk("./assets/Nike Blazer Low '77 Jumbo.jpg", "Nike Blazer Low '77 Jumbo", '2.199.000');
  tambahProduk('./assets/Nike Pegasus 40.jpg', 'Nike Pegasus 40', '2.399.000');
  tambahProduk('./assets/Nike Tanjun Racer Lifestyle Shoes.jpg', 'Nike Tanjun Racer', '1.990.000');
  tambahProduk('./assets/Jumpman MVP.jpg', 'Jumpman MVP', '1.099.000');
  tambahProduk('./assets/Jumpman Two Trey.jpg', 'Jumpma Two Grey', '1.799.000');
  tambahProduk('./assets/Nike Air Max 90.jpg', 'Nike Air Max 90', '1.799.000');
  tambahProduk("./assets/Zion 2 'Full Moon' PF.jpg", "Zion 2 'Full Moon", '1.799.000');
  tambahProduk("./assets/Nike Air Force 1 '07.jpg", "Nike Air Force '07'", '1.299.000');
  tambahProduk('./assets/Nike GT Jump.png', 'Nike GT Jump', '1.799.000');
  tambahProduk('./assets/Nike React Phantom Run Flyknit 2.jpg', 'Phantom Run Flyknit 2', '1.799.000');
  tambahProduk('./assets/KD Trey 5 X EP.jpg', 'KD Trey 5 X EP ', '1.999.000');
  tambahProduk('./assets/Jordan Stadium 90.jpg', 'Jordan Stadium 90', '1.499.000');
  tambahProduk('./assets/Jordan Stay Loyal 2.png', 'Jordan Stay Loyal', '1.799.000');
  tambahProduk('./assets/Nike ACG Watercat+.png', 'Nike ACG Watercat', '2.299.000');
  tambahProduk('./assets/Nike Air Flight Lite Mid.png', 'Nike Air Flight Lite Mid', '2.199.000');
  tambahProduk('./assets/Nike Cosmic Unity 2.png', 'Nike Cosmic Unity 2', '2.099.000');
  tambahProduk('./assets/Nike Dunk High Retro Premium.png', 'Nike Dunk High Retro Premium', '1.699.000');
  tambahProduk('./assets/Nike Elevate 3.png', 'Nike Elevate 3', '1.999.000');
  tambahProduk('./assets/Nike Go FlyEase.png', 'Nike Go FlyEase', '1.999.000');
  tambahProduk('./assets/Nike Killshot 2 Leather.png', 'Nike KillShot 2 Leather', '2.009.000');
  tambahProduk('./assets/Nike Tech Hera.png', 'Nike Tech Hera', '1.699.000');
  tambahProduk('./assets/Nike Tempo.png', 'Nike Tempo', '2.199.000');
  tambahProduk('./assets/Nike Vomero 16.png', 'Nike Vomero 16', '1.599.000');
  tambahProduk('./assets/Nike SuperRep Go.jpg', 'Nike SuperPrep Go', '1.099.000');
  tambahProduk('./assets/Nike Impact 4.jpg', 'Nike Impact 4', '1.349.000');
  tambahProduk('./assets/Air Jordan 1 Mid.jpg', 'Air Jordan 1 Mid', '1.939.000');
  tambahProduk('./assets/Nike Air VaporMax 2023 Flyknit.jpg', 'Nike Air VaporMax 2023 FlyNit', '3.269.000');
  tambahProduk('./assets/Nike Air Max Plus 3.jpg', 'Nike Air Max Plus 3', '2.989.000');
  tambahProduk('./assets/Nike Air Presto.jpg', 'Nike Air Presto', '2.199.000');
});

let cartItems = [];

function tambahProduk(sourceImg, namaProduk, hargaProduk) {
  let divCard = document.createElement('div');
  let divCardContent = document.createElement('div');
  let divCardTitle = document.createElement('div');
  let divCardPrice = document.createElement('div');
  let imgCardImage = document.createElement('img');
  let divCardOverlay = document.createElement('div');
  let divCardOverlayContent = document.createElement('div');
  let p = document.createElement('p');
  let buttonAddToCart = document.createElement('button');

  idProduk++; // Increment idProduk

  divCard.setAttribute('id', 'produk-' + idProduk);

  divCard.classList.add('card');
  divCardContent.classList.add('card-content');
  divCardTitle.classList.add('card-title');
  divCardPrice.classList.add('card-price');
  imgCardImage.classList.add('card-image');
  divCardOverlay.classList.add('card-overlay');
  divCardOverlayContent.classList.add('card-overlay-content');
  p.classList.add('overlay-content');
  buttonAddToCart.classList.add('add-to-cart');

  divCardTitle.textContent = namaProduk;
  divCardPrice.textContent = 'Harga: Rp ' + hargaProduk;
  p.textContent = namaProduk;
  buttonAddToCart.textContent = 'Tambah ke keranjang';

  imgCardImage.setAttribute('src', sourceImg);
  imgCardImage.setAttribute('alt', namaProduk);

  buttonAddToCart.setAttribute('type','button');
  buttonAddToCart.setAttribute('data-bs-toggle','modal');
  buttonAddToCart.setAttribute('data-bs-target','#staticBackdrop');

  divCardOverlayContent.appendChild(p);
  divCardOverlayContent.appendChild(buttonAddToCart);
  divCardOverlay.appendChild(divCardOverlayContent);
  divCardContent.appendChild(divCardTitle);
  divCardContent.appendChild(divCardPrice);
  divCardContent.appendChild(imgCardImage);
  divCard.appendChild(divCardOverlay);
  divCard.appendChild(divCardContent);

  let container = document.getElementById('containers');
  container.appendChild(divCard);

  buttonAddToCart.addEventListener('click', function () {

    let idCard = this.getAttribute('data-id');
    let namaProduk = document.getElementById('produk-' + idCard).querySelector('.card-title').textContent;
    let hargaProduk = document.getElementById('produk-' + idCard).querySelector('.card-price').textContent;
    let sourceImg = document.getElementById('produk-' +idCard).querySelector('.card-image').getAttribute('src');

    hargaProduk = hargaProduk.replace('Harga: Rp ', '').replace(/\D/g, '');
    hargaProduk = parseFloat(hargaProduk);

    let divPajak = document.getElementById('pajak');
    let transactionItems = document.getElementById('transaction-items');

    let existingItem = cartItems.find((item) => item.namaProduk === namaProduk);

    if (existingItem) {
      existingItem.jumlah++;
      existingItem.hargaTotal = existingItem.jumlah * hargaProduk;
      document.getElementById('item-' + existingItem.id).textContent = `${existingItem.namaProduk} - ${existingItem.jumlah} barang - Rp ${existingItem.hargaTotal.toLocaleString('id-ID')}.00`;

      // Mengisi variabel dari confirm card
     confirm_SourceImg = sourceImg;
     confirm_hargaProduk = hargaProduk;
     confirm_namaProduk = existingItem.namaProduk;

     console.log(confirm_SourceImg);
     console.log(confirm_namaProduk);
     console.log(confirm_hargaProduk);

    //  let modalConfirm_btnClose = document.createElement("button");
    //  let modalConfirm_btnFooterTambahKeranjang = document.createElement("button");
    //  let modalConfirm_btnFooterBeli = document.createElement("button");

    //  let modalConfirm_div_modalFade = document.createElement("div");
    //  let modalConfirm_div_modalDialog = document.createElement("div");
    //  let modalConfirm_div_modalContent = document.createElement("div");
    //  let modalConfirm_div_modalHeader = document.createElement("div");
    //  let modalConfirm_div_modalBody = document.createElement("div");
    //  let modalConfirm_div_modalFooter = document.createElement("div");
    //  let modalConfirm_div_modalFooter_containertxtcenter = document.createElement("div");
    //  let modalConfirm_div_modalFooterRow = document.createElement("div");
    //  let modalConfirm_h1_modalTitle = document.createElement("h1");
     
    //  let modalConfirmCardBody = document.createElement("div");
    //  let modalConfirmCardBody_img = document.createElement("img");
    //  let modalConfirmCardBody_h5 = document.createElement("h5");
    //  let modalConfirmCardBody_p = document.createElement("p");

    



    } else {
      let idDetailTransaksi = cartItems.length + 1;
      let newCartItem = {
        id: idDetailTransaksi,
        namaProduk: namaProduk,
        jumlah: 1,
        hargaTotal: hargaProduk,
      };
      cartItems.push(newCartItem);
      let detailTransaksi = document.createElement('p');
      detailTransaksi.setAttribute('id', 'item-' + idDetailTransaksi);
      detailTransaksi.textContent = `${newCartItem.namaProduk} - ${newCartItem.jumlah} barang - Rp ${newCartItem.hargaTotal.toLocaleString('id-ID')}.00`;
      transactionItems.appendChild(detailTransaksi);
    }

    

    // Menampung jumlah barang
    let totalBarang = 0;

    let logoTotalBarang = 0;
    // Proses Jumlah Barang semua id barang
    cartItems.forEach((item) => {
      totalBarang += item.jumlah;
      logoTotalBarang += item.Jumlah;
    });

    if (totalBarang >= 100) {
      logoTotalBarang = '99+';
    } else {
      logoTotalBarang = totalBarang;
    }
    // Menampilkan hasil total barang
    let jumlahBarang = document.getElementById('jumlahbarang');
    let tempatJumlahBarang = document.createElement('p');
    jumlahBarang.textContent = logoTotalBarang;
    jumlahBarang.appendChild(tempatJumlahBarang);

    let totalBayar = 0;
    cartItems.forEach((item) => {
      totalBayar += item.hargaTotal;
    });

    let pajak = (totalBayar * 10) / 100;
    divPajak.textContent = `Pajak : Rp. ${pajak.toLocaleString('id-ID')}.00`;
    totalBayar += pajak;

    let transactionTotal = document.getElementById('transaction-total');
    transactionTotal.textContent = `Total : Rp. ${totalBayar.toLocaleString('id-ID')}.00`;
  });

  buttonAddToCart.setAttribute('data-id', idProduk);
}

function confirmCard(){

}

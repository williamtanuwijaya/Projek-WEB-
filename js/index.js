//Tambah Produk

document.addEventListener('DOMContentLoaded', function () {
  //tambahProduk(sourceImg,namaProduk,HargaProduk)

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

function tambahProduk(sourceImg, namaProduk, HargaProduk) {
  //Deklarasi document create element, yang di simpan di variabel
  let divCard = document.createElement('div');
  let divCardContent = document.createElement('div');
  let divCardTitle = document.createElement('div');
  let divCardPrice = document.createElement('div');
  let imgCardImage = document.createElement('img');
  let divCardOverlay = document.createElement('div');
  let divCardOverLayContent = document.createElement('div');
  let p = document.createElement('p');
  let buttonAddToCart = document.createElement('button');

  //deklarasi nama class yang ada di boostrap
  divCard.classList.add('card');
  divCardContent.classList.add('card-content');
  divCardTitle.classList.add('card-title');
  divCardPrice.classList.add('card-price');
  imgCardImage.classList.add('card-image');
  divCardOverlay.classList.add('card-overlay');
  divCardOverLayContent.classList.add('card-overlay-content');
  p.classList.add('OverlayKontent');
  buttonAddToCart.classList.add('add-to-cart');

  //inisialisasi text content
  divCardTitle.textContent = namaProduk;
  divCardPrice.textContent = 'Harga : Rp ' + HargaProduk;
  p.textContent = namaProduk;
  buttonAddToCart.textContent = 'Tambah ke keranjang';

  //deklarasi atribut dari element yang dibuat
  imgCardImage.setAttribute('src', sourceImg);
  imgCardImage.setAttribute('alt', namaProduk);

  //add child pada parent div atau parent elementnya

  divCardOverLayContent.appendChild(p);
  divCardOverLayContent.appendChild(buttonAddToCart);

  divCardOverlay.appendChild(divCardOverLayContent);

  divCardContent.appendChild(divCardTitle);
  divCardContent.appendChild(divCardPrice);
  divCardContent.appendChild(imgCardImage);

  divCard.appendChild(divCardOverlay);
  divCard.appendChild(divCardContent);

  let container = document.getElementById('container');
  container.appendChild(divCard);
}
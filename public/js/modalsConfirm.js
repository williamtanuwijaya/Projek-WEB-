let confirm = document.getElementById('confirmCardModals');

confirm.innerHTML = "<button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>Launch static backdrop modal</button>"+
"<div class='modal fade' id='staticBackdrop' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>"+
"<div class='modal-dialog modal-dialog-centered'>"+
 " <div class='modal-content'>"+
 "   <div class='modal-header'>"+
  "    <h1 class='modal-title fs-5' id='staticBackdropLabel'>Modal title</h1>"+
  "    <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>"+
  "  </div>"+
  "  <div class='modal-body'>"+
    
   "     <img src='/assets/Adidas-Gazelle.jpg' class='card-img-top' alt='...'>"+
 "       <div class='card-body'>"+
   "       <h5 class='card-title'>Card title</h5>"+
   "       <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>"+
          
   "   </div>"+
   " </div>"+
  "  <div class='modal-footer'>"+
  "    <div class='container text-center'>"+
   "     <div class='row'>"+
    "      <button type='button' class='btn btn-primary col m-1' data-bs-toggle='modal' data-bs-target='#staticBackdrops' data-bs-dismiss='modal'>"+
    "        Tambahkan ke Keranjang "+
   "       </button>"+
   "       <button type='button' class='btn btn-primary col m-1' data-bs-toggle='modal' data-bs-target='#staticBackdrops' data-bs-dismiss='modal'>"+
   "         Beli Sekarang "+
   "       </button>"+
   "     </div>"+
   "   </div>"+
  "  </div>"+
"  </div>"+
"</div>"+
"</div>"

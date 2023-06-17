function showPage(pageId) {
  // Menyembunyikan semua halaman
  let pages = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  
  // Menampilkan halaman yang dipilih
  let pageToShow = document.getElementById(pageId);
  if (pageToShow) {
    pageToShow.style.display = "block";
  }
}

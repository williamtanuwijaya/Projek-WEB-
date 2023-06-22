const valueEmail = document.getElementById('email').value;
const valuePassword = document.getElementById('password').value;

if (valueEmail === '' || valuePassword === '') {
  window.open('../index.html', '_blank');
} else {
  window.open('not found', '_blank');
}

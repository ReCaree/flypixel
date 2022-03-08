const mobileMenuBtn = document.getElementById('MobileMenuBtn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const clipboard = document.querySelector('.clipboard');

function setClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // success
      Swal.fire('Sucsess To Copy Ip', '', 'success');
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    });
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('hidden');
  mobileMenuClose.classList.toggle('hidden');
  mobileMenuBtn.classList.toggle('hidden');
}

function toggleMobileMenuClose() {
  mobileMenu.classList.add('hidden');
  mobileMenuClose.classList.add('hidden');
  mobileMenuBtn.classList.remove('hidden');
}

clipboard.addEventListener('click', function () {
  setClipboard('play.flypixel.tk');
});

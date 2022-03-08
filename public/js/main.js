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

document.addEventListener('keyup', (e) => {
  e.preventDefault()
  if (e.ctrlKey && e.key === "i") {
    setClipboard('play.flypixel.tk');
  } else if (e.ctrlKey && e.key === "c") {
    Swal.fire({
      icon: 'success',
      title: '<strong>Just Test</strong>',
      html: "<strong>Just Test</strong><u> Don't Expect To Much</u>",
    });
  }
})
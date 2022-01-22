const mobileMenuBtn = document.getElementById('MobileMenuBtn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobileMenuClose');

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


function scrollToMenu() {
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

function showAlert() {
  alert('Thank you for choosing LFC Cafe! ');
}

// Cart functionality
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let item = cart.find(item => item.name === name);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
  updateCartCount();
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let count = cart.reduce((sum, item) => sum + item.quantity, 0);
  // Update cart count in nav if exists
  let cartLink = document.querySelector('a[href="cart.html"]');
  if (cartLink) {
    cartLink.textContent = `Cart (${count})`;
  }
}

// Sign-in form submission (only if exists)
if (document.getElementById('signin-form')) {
  document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sign in successful! Welcome to LFC Cafe.');
  });
}

// Register form submission (only if exists)
if (document.getElementById('register-form')) {
  document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Registration successful! Welcome to LFC Cafe.');
  });
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);
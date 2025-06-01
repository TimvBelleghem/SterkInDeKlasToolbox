// js/script.js

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('[data-collapse-toggle="mobile-menu"]');
    const menu = document.getElementById('mobile-menu');
  
    if (toggleButton && menu) {
      toggleButton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }
  });
  
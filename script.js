const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Change icon from ☰ to ✖ dynamically
    menuToggle.textContent = navLinks.classList.contains('active') ? '✖' : '☰';
  });
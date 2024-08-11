function loadNav() {
  const navContainer = document.getElementById('nav-container');
  fetch('include/adminNav.html')
    .then(response => response.text())
    .then(navHtml => {
      navContainer.innerHTML = navHtml;
    });
}

document.addEventListener('DOMContentLoaded', loadNav);
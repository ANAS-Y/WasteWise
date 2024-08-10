const userRole = localStorage.getItem("userRole");
function loadNav() {
if(userRole=="admin"){

  const navContainer = document.getElementById('nav-container');
  fetch('include/adminNav1.html')
    .then(response => response.text())
    .then(navHtml => {
      navContainer.innerHTML = navHtml;
    });
}
else{
  const navContainer = document.getElementById('nav-container');
  fetch('include/userNav.html')
    .then(response => response.text())
    .then(navHtml => {
      navContainer.innerHTML = navHtml;
    });
}
}
document.addEventListener('DOMContentLoaded', loadNav);
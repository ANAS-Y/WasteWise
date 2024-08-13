

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
else if(userRole=="staff"){
  const navContainer = document.getElementById('nav-container');
  fetch('include/staffNav.html')
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


function loadUserName() {
  const user = localStorage.getItem("user");
  document.getElementById("userName").innerHTML = user;
}

document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.navbar-toggler');
  const sidebar = document.querySelector('.sidebar');

  toggler.addEventListener('click', function () {
      sidebar.classList.toggle('active');
  });
});

fetch('nav-bar.html')
  .then(response => response.text())
  .then(navBarHtml => {
    document.getElementById('nav-bar-container').innerHTML = navBarHtml;
  });
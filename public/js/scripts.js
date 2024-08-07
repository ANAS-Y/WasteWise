  // Function to show the loading animation
  function showLoading() {
    document.getElementById('loadingAnimation').style.display = 'flex';
}

// Function to hide the loading animation
function hideLoading() {
    document.getElementById('loadingAnimation').style.display = 'none';
}

setTimeout(function () {
    hideLoading();
}, 3000); // 3 seconds delay for demonstration


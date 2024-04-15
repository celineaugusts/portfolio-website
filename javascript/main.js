document.addEventListener('DOMContentLoaded', function() {
    // Get the height of the navigation bar
    const navHeight = document.querySelector('.nav-container').offsetHeight;
    // Set the top margin of the body to be equal to the height of the navigation bar
    document.body.style.marginTop = `${navHeight}px`;
    document.documentElement.style.setProperty('--scroll-padding', navHeight - 1 + "px");
});
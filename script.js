document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

    anchor.addEventListener('mouseover', function() {
        this.style.color = 'brown';  // Change text color to brown on hover
        this.style.fontSize = '20px';  // Increase font size on hover
    });

    anchor.addEventListener('mouseout', function() {
        this.style.color = '';  // Revert to original text color
        this.style.fontSize = '';  // Revert to original font size
    });
});

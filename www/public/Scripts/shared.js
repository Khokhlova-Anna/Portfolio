$(document).ready(() => {

    var scrollTopButton = document.getElementById("btn-back-to-top");

    window.onscroll = function () {
        scrollFunction();
    };

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function scrollFunction() {
        if (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    }

    setTimeout(bounceButtons, 60000);
    scrollTopButton.addEventListener("click", backToTop);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function openEmail() {
    //TODO: change subject.
    window.open("mailto:annette.khokhlova@gmail.com?subject=Contact", '_blank');
}

function navigate(url) {
    window.location = url;
}

var timeout = undefined;

function bounceButtons() {
    clearTimeout(timeout);
    doBounce($("#hit-me-up-button"), 3, "20px", 50);
    timeout = setTimeout(bounceButtons, 60000);
}

function doBounce(element, times, distance, speed) {
    element.stop();
    for (var i = 0; i < times; i++) {
        element.animate({ marginLeft: "-=" + distance }, speed, "linear")
            .animate({ marginLeft: "+=" + distance }, speed, "linear");
    }
}



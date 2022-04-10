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

    scrollTopButton.addEventListener("click", backToTop);
});

function openEmail() {
    //TODO: change subject.
    window.open("mailto:annette.khokhlova@gmail.com?subject=Contact", '_blank')
}

function navigate(url) {
    window.location = url;
}


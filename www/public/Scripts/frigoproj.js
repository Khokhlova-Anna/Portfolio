$(document).ready(() => {
    var splide1 = new Splide('#splide1', {
        type: 'loop',
        perPage: 3,
        drag: 'free',
        focus: 'center',
        autoWidth: true,
    });
    splide1.mount();
    var splide2 = new Splide('#splide2', {
        type: 'loop',
        perPage: 3,
        drag: 'free',
        focus: 'center',
        autoWidth: true,
    });
    splide2.mount();
});
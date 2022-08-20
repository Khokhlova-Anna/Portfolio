$(document).ready(() => {
    var splide1 = new Splide('#splide1', {
        type: 'loop',
        perPage: 2,
        focus: 'left',
        snap: false,
        start: 3
});
    splide1.mount();
    var splide2 = new Splide('#splide2', {
        type: 'loop',
        perPage: 3,
        perMove: 2,
        focus: 'center',
        autoWidth: true,
        snap: true,
    });
    splide2.mount();
    setTimeout(() => {
        resizeUsabilityTestPlayer();
    }, 10);

});


$(window).resize(function () {
    resizeUsabilityTestPlayer();
});

function resizeUsabilityTestPlayer() {

    var baseWidth = 512;
    var baseHeight = 287;
    var baseColumnWidth = 532;
    var baseColumnPadding = 24;

    var $player = $("#usability-test-player");
    var $playerColumn = $(".usability-test-player-column");

    var coef = ($playerColumn.outerWidth() - baseColumnPadding) / (baseColumnWidth - baseColumnPadding);

    $player.width(baseWidth * coef);
    $player.height(baseHeight  * coef);
}
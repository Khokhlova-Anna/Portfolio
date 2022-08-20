function resizeFlyUxPreview() {

    var $flyuxImage1 = $("#flyux-preview-image-1");
    var $flyuxImage2 = $("#flyux-preview-image-2");
    var $flyuxImage3 = $("#flyux-preview-image-3");
    var $flyuxImage4 = $("#flyux-preview-image-4");
    var $flyuxImage5 = $("#flyux-preview-image-5");

    $flyuxImage1.addClass("stop-transition");
    $flyuxImage2.addClass("stop-transition");
    $flyuxImage3.addClass("stop-transition");
    $flyuxImage4.addClass("stop-transition");
    $flyuxImage5.addClass("stop-transition");

    var baseColumnWidth = 1056;
    var baseImageWidth = 260;

    var image1Left = 36;
    var image1Top = -40;

    var image2Left = -54;
    var image2Top = -20;

    var image3Left = -134;
    var image3Top = 0;

    var image4Left = -214;
    var image4Top = -20;

    var image5Left = -304;
    var image5Top = -40;

    var $flyUXPreviewColumn = $("#flyux-preview-container");
    var coef = $flyUXPreviewColumn.outerWidth() / baseColumnWidth;

    // Calculate size of the images.

    $flyuxImage1.width(baseImageWidth * coef);
    $flyuxImage2.width(baseImageWidth * coef);
    $flyuxImage3.width(baseImageWidth * coef);
    $flyuxImage4.width(baseImageWidth * coef);
    $flyuxImage5.width(baseImageWidth * coef);

    // Reposition images.
    $flyuxImage1.css("top", image1Top * coef + "px");
    $flyuxImage1.css("left", image1Left * coef + "px");

    $flyuxImage2.css("top", image2Top * coef + "px");
    $flyuxImage2.css("left", image2Left * coef + "px");

    $flyuxImage3.css("top", image3Top * coef + "px");
    $flyuxImage3.css("left", image3Left * coef + "px");

    $flyuxImage4.css("top", image4Top * coef + "px");
    $flyuxImage4.css("left", image4Left * coef + "px");

    $flyuxImage5.css("top", image5Top * coef + "px");
    $flyuxImage5.css("left", image5Left * coef + "px");

    setTimeout(() => {
        $flyuxImage1.removeClass("stop-transition");
        $flyuxImage2.removeClass("stop-transition");
        $flyuxImage3.removeClass("stop-transition");
        $flyuxImage4.removeClass("stop-transition");
        $flyuxImage5.removeClass("stop-transition");
    }, 10);
}

function resizeUsabilityTestPlayer() {

    var $player = $("#usability-test-player");
    var $playerColumn = $("#ux-research-image-player-item");

    $player.width($playerColumn.outerWidth());
    $player.height($playerColumn.outerHeight());
}

$(window).resize(function () {
    resizeFlyUxPreview();
    resizeUsabilityTestPlayer();
});

$(document).ready(() => {
    var i = 0;
    setInterval(() => {
            if (i == 6) i = 0;
            i++;
            $("#ux-research-image-player-item").attr("src", `../images/flyux/flyux${i}.png`);
      
    }, 1000);

    var splide1 = new Splide('#splide1', {
        type: 'loop',
        perPage: 3,
        perMove: 2,
        focus: 'center',
        autoWidth: true,
        snap: true,
    });
    splide1.mount();

    resizeFlyUxPreview();
    resizeUsabilityTestPlayer();
});


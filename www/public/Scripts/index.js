function resizeFlyUxPreview() {

    var $flyuxImage1 = $("#flyux-preview-image-1");
    var $flyuxImage2 = $("#flyux-preview-image-2");
    var $flyuxImage3 = $("#flyux-preview-image-3");
    var $flyuxImage4 = $("#flyux-preview-image-4");
    var $flyuxImage5 = $("#flyux-preview-image-5");

    var baseColumnWidth = 798;
    var baseContainerWidth = 700;
    var baseContainerHeight = 420;
    var baseImageWidth = 165;
    var baseAnimationStep = 67.2;
    var baseAnimationSpeed = 500;
    var baseAnimationType = "linear";

    var image1Left = 158.2;
    var image1Top = 273;

    var image2Left = -26;
    var image2Top = 14;

    var image3Left = 9;
    var image3Top = 217;

    var image4Left = -175;
    var image4Top = -42;

    var image5Left = 287;
    var image5Top = -119;

    var $flyUXPreviewColumn = $("#flyux-preview-column");
    var coef = $flyUXPreviewColumn.outerWidth() / baseColumnWidth;

    // Calculate size of the images.
    var $flyuxImageContainer = $(".flyux-preview-container");
    $flyuxImageContainer.width(baseContainerWidth * coef);
    $flyuxImageContainer.height(baseContainerHeight * coef);

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

    var animateValue = Math.cos(Math.PI / 4) * baseAnimationStep * coef;

    // On Enter
    $("#flyux-preview-featurette").mouseenter(() => {
        $flyuxImage1.stop().animate({
            left: `${image1Left * coef - animateValue}`,
            top: `${image1Top * coef - animateValue}`
        },
            baseAnimationSpeed, baseAnimationType);
        $flyuxImage2.stop().animate({
            left: `${image2Left * coef + animateValue}`,
            top: `${image2Top * coef + animateValue}`
        },
            baseAnimationSpeed, baseAnimationType);
        $flyuxImage3.stop().animate({
            left: `${image3Left * coef + animateValue}`,
            top: `${image3Top * coef + animateValue}`
        },
            baseAnimationSpeed, baseAnimationType);
        $flyuxImage4.stop().animate({
            left: `${image4Left * coef - animateValue}`,
            top: `${image4Top * coef - animateValue}`
        },
            baseAnimationSpeed, baseAnimationType);
        $flyuxImage5.stop().animate({
            left: `${image5Left * coef - animateValue}`,
            top: `${image5Top * coef - animateValue}`
        },
            baseAnimationSpeed, baseAnimationType);

    });

    // On leave
    $("#flyux-preview-featurette").mouseleave(() => {
        $flyuxImage1.stop().animate({
            left: `${image1Left * coef}`,
            top: `${image1Top * coef}`
        },
            baseAnimationSpeed,
            baseAnimationType);
        $flyuxImage2.stop().animate({
            left: `${image2Left * coef}`,
            top: `${image2Top * coef}`
        },
            baseAnimationSpeed,
            baseAnimationType);
        $flyuxImage3.stop().animate({
            left: `${image3Left * coef}`,
            top: `${image3Top * coef}`
        },
            baseAnimationSpeed,
            baseAnimationType);
        $flyuxImage4.stop().animate({
            left: `${image4Left * coef}`,
            top: `${image4Top * coef}`
        },
            baseAnimationSpeed,
            baseAnimationType);
        $flyuxImage5.stop().animate({
            left: `${image5Left * coef}`,
            top: `${image5Top * coef}`
        },
            baseAnimationSpeed,
            baseAnimationType);
    });
}

function resizeFrigoPreview() {
    var $frigoVideo = $("#frigo-preview-video-3");
    var $frigoImage1 = $("#frigo-preview-image-1");
    var $frigoImage2 = $("#frigo-preview-image-2");

    var baseColumnWidth = 798;
    var baseContainerWidth = 700;
    var baseContainerHeight = 420;
    var baseImage1Width = 700;
    var baseImage2Width = 126;
    var baseVideoWidth = 536;
    var baseVideoHeight = 336;

    var video1Left = -65;
    var video1Top = -384;

    var image2Left = 557;
    var image2Top = -462;

    var $frigoPreviewColumn = $("#frigo-preview-column");
    var coef = $frigoPreviewColumn.outerWidth() / baseColumnWidth;

    // Calculate size of the images.
    var $frigoImageContainer = $(".frigo-preview-container");
    $frigoImageContainer.width(baseContainerWidth * coef);
    $frigoImageContainer.height(baseContainerHeight * coef);

    $frigoImage1.width(baseImage1Width * coef);
    $frigoImage2.width(baseImage2Width * coef);
    $frigoVideo.width(baseVideoWidth * coef);
    $frigoVideo.height(baseVideoHeight * coef);

    $frigoVideo.css("top", video1Top * coef + "px");
    $frigoVideo.css("left", video1Left * coef + "px");

    $frigoImage2.css("top", image2Top * coef + "px");
    $frigoImage2.css("left", image2Left * coef + "px");
}

function resizeHelferPreview() {
    var $helferImage1 = $("#helfer-preview-image-1");
    var $helferImage2 = $("#helfer-preview-image-2");
    var $helferImage3 = $("#helfer-preview-image-3");
    var $helferImage4 = $("#helfer-preview-image-4");
    var $helferImage5 = $("#helfer-preview-image-5");
    var $helferImage6 = $("#helfer-preview-image-6");
    var $helferImage7 = $("#helfer-preview-image-7");

    var baseColumnWidth = 798;
    var baseContainerWidth = 700;
    var baseContainerHeight = 420;
    var baseImageWidth = 203;

    var $helferPreviewColumn = $("#helfer-preview-column");
    var coef = $helferPreviewColumn.outerWidth() / baseColumnWidth;

    // Calculate size of the images.
    var $helferImageContainer = $(".helfer-preview-container");
    $helferImageContainer.width(baseContainerWidth * coef);
    $helferImageContainer.height(baseContainerHeight * coef);
    $helferImageContainer.css("perspective", baseContainerWidth * coef * 2);


    $helferImage1.width(baseImageWidth * coef);
    $helferImage2.width(baseImageWidth * coef);
    $helferImage3.width(baseImageWidth * coef);
    $helferImage4.width(baseImageWidth * coef);
    $helferImage5.width(baseImageWidth * coef);
    $helferImage6.width(baseImageWidth * coef);
    $helferImage7.width(baseImageWidth * coef);

    $helferImage1.css("left", baseImageWidth * coef * 2.5 + "px");
    $helferImage2.css("left", baseImageWidth * coef * 1.75 + "px");
    $helferImage3.css("left", baseImageWidth * coef + "px");
    $helferImage5.css("left", -baseImageWidth * coef + "px");
    $helferImage6.css("left", -baseImageWidth * coef * 1.75 + "px");
    $helferImage7.css("left", -baseImageWidth * coef * 2.5 + "px");
}

$(window).resize(function () {
    resizeFlyUxPreview();
    resizeFrigoPreview();
    resizeHelferPreview();
});

$(document).ready(() => {
    setTimeout(() => {
        resizeFlyUxPreview();
        resizeFrigoPreview();
        resizeHelferPreview();
    },10);
});
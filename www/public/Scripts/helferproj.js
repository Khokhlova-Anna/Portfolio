$(document).ready(() => {
    var splide1 = new Splide('#splide1',
        { cover: true,
            heightRatio: 0.476439791,
            type: 'loop',
            snap: true,
        });
    splide1.mount();

    document.getElementById("helfer-video-1").playbackRate  = 2.0;

    setTimeout(() => {
        resizeHelferPreview();
        resizeHelferScreenVideos();
    }, 10);
});

function resizeHelferPreview() {
    var $helferTrainerImage1 = $("#helfer-trainer-preview-image-1");
    var $helferTrainerImage2 = $("#helfer-trainer-preview-image-2");
    var $helferTrainerImage3 = $("#helfer-trainer-preview-image-3");
    var $helferTrainerImage4 = $("#helfer-trainer-preview-image-4");
    var $helferTrainerImage5 = $("#helfer-trainer-preview-image-5");
    var $helferTrainerImage6 = $("#helfer-trainer-preview-image-6");
    var $helferTrainerImage7 = $("#helfer-trainer-preview-image-7");

    var $helferTraineeImage1 = $("#helfer-trainee-preview-image-1");
    var $helferTraineeImage2 = $("#helfer-trainee-preview-image-2");
    var $helferTraineeImage3 = $("#helfer-trainee-preview-image-3");
    var $helferTraineeImage4 = $("#helfer-trainee-preview-image-4");
    var $helferTraineeImage5 = $("#helfer-trainee-preview-image-5");
    var $helferTraineeImage6 = $("#helfer-trainee-preview-image-6");
    var $helferTraineeImage7 = $("#helfer-trainee-preview-image-7");

    var baseColumnWidth = 1320;
    var baseContainerHeight = 525;
    var baseImageWidth = 188;

    var $helferPreviewColumn = $("#helfer-preview-container");
    var coef = $helferPreviewColumn.outerWidth() / baseColumnWidth;


    $helferPreviewColumn.css("perspective", baseColumnWidth * coef);


    $helferTrainerImage1.width(baseImageWidth * coef);
    $helferTrainerImage2.width(baseImageWidth * coef);
    $helferTrainerImage3.width(baseImageWidth * coef);
    $helferTrainerImage4.width(baseImageWidth * coef);
    $helferTrainerImage5.width(baseImageWidth * coef);
    $helferTrainerImage6.width(baseImageWidth * coef);
    $helferTrainerImage7.width(baseImageWidth * coef);

    $helferTraineeImage1.width(baseImageWidth * coef);
    $helferTraineeImage2.width(baseImageWidth * coef);
    $helferTraineeImage3.width(baseImageWidth * coef);
    $helferTraineeImage4.width(baseImageWidth * coef);
    $helferTraineeImage5.width(baseImageWidth * coef);
    $helferTraineeImage6.width(baseImageWidth * coef);
    $helferTraineeImage7.width(baseImageWidth * coef);
}

function resizeHelferScreenVideos() {
    var $helferScreen1 = $("#helfer-screen-1");
    var $helferStatusbar1 = $("#helfer-statusbar-1");
    var $helferVideo1 = $("#helfer-video-1");
    var $helferScreen2 = $("#helfer-screen-2");
    var $helferStatusbar2 = $("#helfer-statusbar-2");
    var $helferVideo2 = $("#helfer-video-2");
    var $helferScreen3 = $("#helfer-screen-3");
    var $helferStatusbar3 = $("#helfer-statusbar-3");
    var $helferVideo3 = $("#helfer-video-3");
    var $helferScreen4 = $("#helfer-screen-4");
    var $helferStatusbar4 = $("#helfer-statusbar-4");
    var $helferVideo4 = $("#helfer-video-4");
    var $helferScreen5 = $("#helfer-screen-5");
    var $helferStatusbar5 = $("#helfer-statusbar-5");
    var $helferVideo5 = $("#helfer-video-5");
    var $helferScreen6 = $("#helfer-screen-6");
    var $helferStatusbar6 = $("#helfer-statusbar-6");
    var $helferVideo6 = $("#helfer-video-6");

    var baseColumnWidth = 432;
    var baseScreenWidth = 368;
    var baseStatusbarTop = -1658;
    var baseStatusbar2Top = -1656;
    var baseStatusbar3Top = -1657;
    var basePhoneTop = -847;
    var basePhoneWidth = 408;
    var baseVideoLeft = -1.5;
    var baseVideoHeight = 827.56;

    var $helferScrenColumn = $(".helfer-screen-player-container");
    var coef = $helferScrenColumn.outerWidth() / baseColumnWidth;

    $helferScreen1.width(basePhoneWidth * coef);
    $helferStatusbar1.width(baseScreenWidth * coef);
    $helferVideo1.width(baseScreenWidth * coef);
    $helferVideo1.height(baseVideoHeight * coef);

    $helferScreen2.width(basePhoneWidth * coef);
    $helferStatusbar2.width(baseScreenWidth * coef);
    $helferVideo2.width(baseScreenWidth * coef);
    $helferVideo2.height(baseVideoHeight * coef);

    $helferScreen3.width(basePhoneWidth * coef);
    $helferStatusbar3.width(baseScreenWidth * coef);
    $helferVideo3.width(baseScreenWidth * coef);
    $helferVideo3.height(baseVideoHeight * coef);

    $helferScreen4.width(basePhoneWidth * coef);
    $helferStatusbar4.width(baseScreenWidth * coef);
    $helferVideo4.width(baseScreenWidth * coef);
    $helferVideo4.height(baseVideoHeight * coef);

    $helferScreen5.width(basePhoneWidth * coef);
    $helferStatusbar5.width(baseScreenWidth * coef);
    $helferVideo5.width(baseScreenWidth * coef);
    $helferVideo5.height(baseVideoHeight * coef);

    $helferScreen6.width(basePhoneWidth * coef);
    $helferStatusbar6.width(baseScreenWidth * coef);
    $helferVideo6.width(baseScreenWidth * coef);
    $helferVideo6.height(baseVideoHeight * coef);

    $helferStatusbar1.css("top", baseStatusbarTop * coef + "px");
    $helferScreen1.css("top", basePhoneTop * coef + "px");
    $helferVideo1.css("left", -baseVideoLeft * coef + "px");

    $helferStatusbar2.css("top", baseStatusbar2Top * coef + "px");
    $helferScreen2.css("top", basePhoneTop * coef + "px");
    $helferVideo2.css("left", -baseVideoLeft * coef + "px");

    $helferStatusbar3.css("top", baseStatusbarTop * coef + "px");
    $helferScreen3.css("top", basePhoneTop * coef + "px");
    $helferVideo3.css("left", -baseVideoLeft * coef + "px");

    $helferStatusbar4.css("top", baseStatusbarTop * coef + "px");
    $helferScreen4.css("top", basePhoneTop * coef + "px");
    $helferVideo4.css("left", -baseVideoLeft * coef + "px");

    $helferStatusbar5.css("top", baseStatusbar2Top * coef + "px");
    $helferScreen5.css("top", basePhoneTop * coef + "px");
    $helferVideo5.css("left", -baseVideoLeft * coef + "px");

    $helferStatusbar6.css("top", baseStatusbar3Top * coef + "px");
    $helferScreen6.css("top", basePhoneTop * coef + "px");
    $helferVideo6.css("left", -baseVideoLeft * coef + "px");
}

$(window).resize(function () {
    resizeHelferPreview();
    resizeHelferScreenVideos();
});
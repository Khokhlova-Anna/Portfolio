$(document).ready(() => {
    var i = 0;
    setInterval(() => {
        if ($("#ux-research-image-player-item").closest(".image-col").css('display') != 'none') {
            if (i == 6) i = 0;
            i++;
            $("#ux-research-image-player-item").attr("src", `./images/flyux${i}.png`);
        }
        else {
            i = 0;
        }
    }, 1000);
});
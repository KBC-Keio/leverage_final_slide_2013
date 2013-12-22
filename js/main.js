/*
 * Main client file
 */
"use strict"

/*
 * Initialize method
 */
$(function(){
    impress().init();
    var api = impress();
    var $video = $("#intro>video");
    var endTime = 12.5;
    var played = false;
    $video.bind("timeupdate", function(){
        if(endTime > 0 && $video[0].currentTime > endTime){
            endTime = 0;
            api.next();
        }
    });
    $(window).keydown(function(e){
        if(!played && e.keyCode == 13){
            played = true;
            $video.css("opacity", "1");
            $video[0].play();
        }
    });
});

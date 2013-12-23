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
    var $audio = $("#audio");
    var endTime = 12.5;
    $video.bind("timeupdate", function(){
        if(endTime > 0 && $video[0].currentTime > endTime){
            endTime = 0;
            api.next();
        }
    });
    $(window).keydown(function(e){
        var $present = $(".present");
        if(e.keyCode == 13){
            switch($present.attr("id")){
                case "intro":
                    $video.css("opacity", "1");
                    $video[0].play();
                    break;
                case "number":
                    $audio.bind("ended", function(){
                        $("#number>div.counter").append($("<h2>").append("4チーム"));
                    });
                    $audio[0].load();
                    $audio[0].play();
                    break;
                case "first":
                    $audio.bind("ended", function(){
                        var $target = $("#first>div.counter");
                        $target.append($("<h2>").append("燃え燃えきゅん"));
                        $target.append($("<h3>").append("メンター三田会賞"));
                    });
                    $audio[0].load();
                    $audio[0].play();
                    break;
                case "second":
                    $audio.bind("ended", function(){
                        var $target = $("#second>div.counter");
                        $target.append($("<h2>").append("STREET"));
                        $target.append($("<h3>").append("ブロードバンドタワー賞"));
                        $target.append($("<h3>").append("D2C賞"));
                    });
                    $audio[0].load();
                    $audio[0].play();
                    break;
                case "third":
                    $audio.bind("ended", function(){
                        var $target = $("#third>div.counter");
                        $target.append($("<h2>").append("MRS"));
                        $target.append($("<h3>").append("ディー・ティー・ピー賞"));
                        $target.append($("<h3>").append("野心満々賞"));
                        $target.append($("<h3>").append("情報産業三田会賞"));
                    });
                    $audio[0].load();
                    $audio[0].play();
                    break;
                case "forth":
                    $audio.bind("ended", function(){
                        var $target = $("#forth>div.counter");
                        $target.append($("<h2>").append("Wiki-Art"));
                        $target.append($("<h3>").append("KBC賞"));
                    });
                    $audio[0].load();
                    $audio[0].play();
                    break;
            }
        }
    });
});

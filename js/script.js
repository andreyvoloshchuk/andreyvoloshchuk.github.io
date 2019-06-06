$(document).ready(function () {
    var bar = new ProgressBar.Circle('#container1', {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1600,
        color: '#ed1c24',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    var bar1 = new ProgressBar.Circle('#container2', {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1600,
        color: '#ed1c24',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });

    function animation(startBtn, activeClass, circle, delay, vars, px, animationBlock, animationBlockBg) {
        $("." + startBtn).on('click', function () {
            if ($(this).hasClass(activeClass)) {
                $(this).removeClass(activeClass);
                TweenMax.to($('#' + circle), 0, {display: "block"});
                TweenMax.to($('.' + animationBlock), 1.4, {left: px, delay: 0.2});
                if (startBtn === "second-play_btn") {
                    TweenMax.to($('.point-des-block'), 0.3, {display: "block", autoAlpha: 1, delay: 1.5});
                }
                TweenMax.to($('.' + animationBlockBg), 0.2, {display: "block", autoAlpha: 1});
                vars.animate(1.0);
                TweenMax.to($("." + startBtn), 0, {
                    background: "url(\"images/icon-play-off.png\") no-repeat center",
                    delay: delay
                });
                TweenMax.to($('#' + circle), 0, {display: "none", delay: delay});
            }
        });
    }

    animation("play_btn", "active", "container1", 1.4, bar, "-810px", "animation-block1", "bar1-animation");
    animation("second-play_btn", "second-active", "container2", 1.4, bar1, "-240px", "animation-block2", "bar2-animation");

});

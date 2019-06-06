$(document).ready(function () {
    $("#slider").roundSlider({
        radius: 122,
        width: '5',
        handleSize: "40",
        circleShape: "full",
        handleShape: "dot",
        sliderType: "min-range",
        value: 0,
        max: 30,
        startAngle: "+90",
        keyboardAction: false,
        editableTooltip: false
    });

    $("#slider").roundSlider({
        drag: function (e) {
            GetValue(e.value);
            var Q = parseInt(e.value);
            $("#surveyForm").find("input[type='number']").attr("value", Q);
            if (e.value > 0 && $(".no_act_cr").length == 0) {
                $(".bt_sv").fadeIn(300);
                $(".bt_sv").fadeIn(300);
            } else {
                $(".bt_sv").fadeOut(300);
            }
        },
        change: function (e) {
            GetValue(e.value);


        }
    });
    window.bar = new ProgressBar.Circle(load_button, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 2000,
        color: '#ED1C24',
        trailColor: '#fff',
        trailWidth: 1,
        svgStyle: null
    });

    // SwipeVeeva($('#animate_container'), "UA_ua_702_Stroke_19_1_07", "right", 600);


    $(".bt_sv").on("click", function () {
        $(this).fadeOut(300);
        $("#load_button").fadeIn(300).addClass("no_act_cr");
        bar.animate(1.0);
        $(".content_sl").css({ "opacity": "0.9" });
        setTimeout(function () {
            $(".done_load").fadeIn(300);
            $("#submitButton").trigger("click");
            setTimeout(function () {

                $("#load_button").fadeOut(300);

                setTimeout(function () {
                    $(".done_load").fadeOut(0);
                    $("#load_button").removeClass("no_act_cr");
                    bar.animate(0, function () {
                        bar.animate(0);
                    });
                }, 300);
            }, 2000);
        }, 1750);
    });

});

function GetValue(n) {
    $('.on').hide();
    for (var i = 0; i <= n; i++) {
        $('.on' + i).show();
    }
}



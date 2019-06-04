$(document).ready(function () {
    BackgroundAnimation();
    Navigation();

    $("#nav_btn").on("click", function () {
        RightNavigation($(this));
    });
    /*
    var size = [document.documentElement.clientWidth,document.documentElement.clientHeight];
    window.onresize = function(){
        document.body.style.zoom = document.documentElement.clientWidth / size[0];
    }
    */

})

function RightNavigation(btn) {
    var menu_class = "active_menu";
    var btn_class = "close_menu";
    var Menu = $(".menu_cnt");
    if (!Menu.hasClass(menu_class)) {
        Menu.addClass(menu_class);
        btn.addClass(btn_class);
    } else {
        Menu.removeClass(menu_class);
        btn.removeClass(btn_class);
    }
}
/*Background animation*/
function BackgroundAnimation() {
    // particlesJS('animate_container',
    //     {
    //         "particles": {
    //             "number": {
    //                 "value": 25,
    //                 "density": {
    //                     "enable": true,
    //                     "value_area": 800
    //                 }
    //             },
    //             "color": {
    //                 "value": "#9D9D9D"
    //             },
    //             "shape": {
    //                 "type": "circle",
    //                 "stroke": {
    //                     "width": 0,
    //                     "color": "#000000"
    //                 },
    //                 "polygon": {
    //                     "nb_sides": 5
    //                 },
    //                 "image": {
    //                     "src": "img/github.svg",
    //                     "width": 100,
    //                     "height": 100
    //                 }
    //             },
    //             "opacity": {
    //                 "value": 0.8,
    //                 "random": false,
    //                 "anim": {
    //                     "enable": false,
    //                     "speed": 1,
    //                     "opacity_min": 0.1,
    //                     "sync": false
    //                 }
    //             },
    //             "size": {
    //                 "value": 5,
    //                 "random": true,
    //                 "anim": {
    //                     "enable": false,
    //                     "speed": 40,
    //                     "size_min": 0.1,
    //                     "sync": false
    //                 }
    //             },
    //             "line_linked": {
    //                 "enable": true,
    //                 "distance": 300,
    //                 "color": "#9D9D9D",
    //                 "opacity": 0.3,
    //                 "width": 1
    //             },
    //             "move": {
    //                 "enable": true,
    //                 "speed": 2,
    //                 "direction": "none",
    //                 "random": false,
    //                 "straight": false,
    //                 "out_mode": "out",
    //                 "attract": {
    //                     "enable": false,
    //                     "rotateX": 600,
    //                     "rotateY": 1200
    //                 }
    //             }
    //         },
    //         "interactivity": {
    //             "detect_on": "canvas",
    //             "events": {
    //                 "onhover": {
    //                     "enable": true,
    //                     "mode": "repulse"
    //                 },
    //                 "onclick": {
    //                     "enable": true,
    //                     "mode": "push"
    //                 },
    //                 "resize": true
    //             },
    //             "modes": {
    //                 "grab": {
    //                     "distance": 400,
    //                     "line_linked": {
    //                         "opacity": 1
    //                     }
    //                 },
    //                 "bubble": {
    //                     "distance": 400,
    //                     "size": 40,
    //                     "duration": 2,
    //                     "opacity": 8,
    //                     "speed": 3
    //                 },
    //                 "repulse": {
    //                     "distance": 200
    //                 },
    //                 "push": {
    //                     "particles_nb": 4
    //                 },
    //                 "remove": {
    //                     "particles_nb": 2
    //                 }
    //             }
    //         },
    //         "retina_detect": true,
    //
    //     }
    // );
}


function Navigation() {
    /*home*/
    $("#n_bt_2").on("click", function () {
        com.veeva.clm.gotoSlide("UA_ua_702_Stroke_19_main.zip", "");
    });

    /*flow 1*/
    $(".bt_goto_f1").on("click", function () {
        com.veeva.clm.gotoSlide("UA_ua_702_Stroke_19_1_01.zip", "");
    });

    /*flow 2*/
    $(".bt_goto_f2").on("click", function () {
        com.veeva.clm.gotoSlide("UA_ua_702_Stroke_19_2_01.zip", "");
    });

    /*flow 1 menu*/
    $("#m_bt_1").on("click", function () {
        com.veeva.clm.gotoSlide("UA_ua_702_Stroke_19_3_01.zip", "");
    });
    $("#m_bt_2").on("click", function () {
        com.veeva.clm.gotoSlide("UA_ua_702_Stroke_19_3_02.zip", "");
    });
    $("#m_bt_3").on("click", function () {
        com.veeva.clm.gotoSlide("UA_ua_702_Stroke_19_3_03.zip", "");
    });
    $("#m_bt_4").on("click", function () {
        com.veeva.clm.gotoSlide("UA_ua_702_Stroke_19_3_06.zip", "");
    });
    $("#m_bt_5").on("click", function () {
        com.veeva.clm.gotoSlide("UA_ua_702_Stroke_19_3_10.zip", "");
    });
    $("#m_bt_7").on("click", function () {
        if (!$(this).hasClass("no_act_f1")) {
            com.veeva.clm.gotoSlide("UA_ua_702_Stroke_19_1_01.zip", "");
        }
    });

    /*flow 2 menu*/
    $("#m_bt_8").on("click", function () {
        if (!$(this).hasClass("no_act_f2")) {
            com.veeva.clm.gotoSlide("UA_ua_702_Stroke_19_2_01.zip", "");
        }
    });
    //


    /*flow 1 nav*/
    $(".time-bg").on("click", function () {
        setTimeout(function () {
            com.veeva.clm.gotoSlide("UA_ua_702_Stroke_19_1_02.zip", "");
        }, 300);
    });
    $(".arrow-bg").on("click", function () {
        setTimeout(function () { 
            com.veeva.clm.gotoSlide("UA_ua_702_Stroke_19_1_03.zip", "");
        }, 300);
    });
    $(".head-bg").on("click", function () {
        setTimeout(function () { 
            com.veeva.clm.gotoSlide("UA_ua_702_Stroke_19_1_04.zip", "");
        }, 300);
    });
    $(".run-bg").on("click", function () {
        setTimeout(function () { 
            com.veeva.clm.gotoSlide("UA_ua_702_Stroke_19_1_05.zip", "");
        }, 300);
    });
    //

    /*flow 2 nav*/
    $("#gt_f2_sl_1").on("click", function () {
        setTimeout(function () {
            com.veeva.clm.gotoSlide("UA_ua_702_Stroke_19_2_02.zip", "");
        }, 300);
    });
    $("#gt_f2_sl_2").on("click", function () {
        setTimeout(function () {
            com.veeva.clm.gotoSlide("UA_ua_702_Stroke_19_2_06.zip", "");
        }, 300);
    });
    $("#gt_f2_sl_3").on("click", function () {
        setTimeout(function () {
            com.veeva.clm.gotoSlide("UA_ua_702_Stroke_19_2_05.zip", "");
        }, 300);
    });
    $("#gt_f2_sl_4").on("click", function () {
        setTimeout(function () {
            com.veeva.clm.gotoSlide("UA_ua_702_Stroke_19_2_04.zip", "");
        }, 300);
    });
    $("#gt_f2_sl_5").on("click", function () {
        setTimeout(function () {
            com.veeva.clm.gotoSlide("UA_ua_702_Stroke_19_2_07.zip", "");
        }, 300);
    });
}

// function SwipeVeeva(container, gotoSlide, swipe, move) {
//     $(".content").prepend("<input type='range' class='swipe_range' />");
//     container.mousedown(function (e) {
//         var pos = $(this).offset(),
//             X = e.pageX - pos.left;
//         //Y = e.pageY / 0.25;
//         //$(".test").text(Y);
//         //$(".swipe_range").css({ "padding-top": Y + "px" });
//         $(this).mousemove(function (e) {
//             //Y = e.pageY / 0.6;
//             //$(".swipe_range").css({ "padding-top": Y + "px" });
//             if (swipe == "right") {
//                 if (e.pageX > X) {
//                     var leftGOContent = -(X - e.pageX);
//                     $(this).css({ "left": leftGOContent + "px" });
//                 }
//                 if (e.pageX >= (X + move)) {
//                     /*right*/
//                     console.log("ok");
//                     com.veeva.clm.gotoSlide(gotoSlide + ".zip", "");
//
//                 }
//             } else if (swipe == "left") {
//                 if (e.pageX < X) {
//                     var leftGOContent = -(X - e.pageX);
//                     $(this).css({ "left": leftGOContent + "px" });
//                 }
//                 if (e.pageX <= (X + move)) {
//                     /*left*/
//                     com.veeva.clm.gotoSlide(gotoSlide + ".zip", "");
//                 }
//             }
//
//
//         }).mouseup(function () {
//             $(this).unbind('mousemove');
//             $(this).animate({ "left": "0px" }, 300);
//         });
//     });
// }
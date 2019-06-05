$(document).ready(() => {
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
})

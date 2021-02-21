$(document).ready(function() {
    // это можно просто в hover сделать в css
    // $('.navigation').mouseenter( function() {
    //     // var max_toggleWidth = $("#burger_mn").width(280);
    //     $('#burger_mn').animate({ width: "280px" }, 400);
    // });
    // $('.navigation').mouseleave( function() {
    //     // var min_toggleWidth = $("#burger_mn").width(40);
    //     $('#burger_mn').animate({ width: "40px" }, 400);
    // });

    $('#burger_btn').click( function() {
        $('.navigation').toggleClass('open_menu');
        $('.content').toggleClass('open_menu');
        $('.header').toggleClass('open_menu');
    });
});

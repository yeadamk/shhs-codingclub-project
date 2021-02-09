$(document).ready(function(){
    $(window).scroll(function(){
        $(".title-container").css("opacity", 1 - $(window).scrollTop() / 150);
    });
});
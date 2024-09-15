$(document).ready(function(){
    $(".plu").click(function(){
        $(this).toggleClass("fa-xmark");
        $(".button a").toggle(500);
    });
    $(window).resize(function(){
        if(screen.width > 350)
            $(".button a").show();
    });
});
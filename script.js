// script JS
$(function(){
    $('.dropdown-toggle').dropdown()
// lancemement du jeu
    $("#boutonStart").click(function(){
        $(this).hide(1000);
    });

    $("#trou_init img.anim").each( function (index) {
        $(this).addClass("step"+(index+1));
    });

    $(".trou").each(function () {
        $(this).html($("#trou-init").html());
    });
    

    




});
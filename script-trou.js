// script JS
$(function(){
    moteur = (function () {
        return {  // retourne un objet
            demarrer : function(){ console.log("moteur.demarrer()");},
            stopper :  function() { console.log("moteur.stopper()");}
            };
    })();
    // lancemement du jeu
    
        $("#trou_init img.anim").each( function (index) {
            $(this).addClass("step"+(index+1));
        });
    
        $(".trou").each(function () {
            $(this).html($("#trou-init").html());
        });


    $("#btnJeuDemarrer").click(moteur.demarrer);
    $("#btnJeuArreter").click(moteur.stopper);
    
    });
$(function(){
   
    var espaceTrous = document.getElementById("espaceTrous");
    var trou1 = document.getElementById("trou1");
    var txtImageTrouTaupe = '[{"filename":"trou-taupe-0.png"},{"filename":"trou-taupe-1.png"},{"filename":"trou-taupe-2.png"},{"filename":"trou-taupe-3.png"},{"filename":"trou-taupe-4.png"},{"filename":"trou-taupe-5.png"}]';
    var imageTrouTaupe = JSON.parse(txtImageTrouTaupe);
    console.log(imageTrouTaupe);
    var btnDemarrer = document.getElementById('boutonStart');
    
    
    //au click du bouton démarrer
    btnDemarrer.addEventListener('click',function(){alert('Go baby Go')},false);    
    
    btnDemarrer.addEventListener('click',apparitionTaupe,false); 
    // btnDemarrer.addEventListener('click',changementTaupe,false); 

    function apparitionTaupe (){
        var imageTaupe = document.createElement("img");            imageTaupe.src = "assets/trou-taupe-0.png";
        document.querySelector("#trou1").appendChild(imageTaupe);
        trou1.classList.toggle("visible");
        setInterval(function(){
            trou1.classList.toggle("visible");
        },2000);
    };    

    var changementTaupe = setInterval(function(){
        trou1.classList.toggle("visible");
    },2000);
    // var interval = setInterval(trou1.classList.toggle("visible"),3000);

    //remplir le trou1 avec la taupe 0

    //passer un delai de 1 seconde, 
    
    //supprimer l'image actuelle
    
    //la remplacer avec une nouvelle



    









});
$(function(){
   
    var espaceTrous = document.getElementById("espaceTrous");
    var trou1 = document.getElementById("trou1");
    var trou2 = document.getElementById("trou2");
    var imageTrouTaupe = ["trou-taupe-0.png","trou-taupe-1.png","trou-taupe-2.png","trou-taupe-3.png","trou-taupe-4.png","trou-taupe-5.png"];
    console.log(imageTrouTaupe);
    var btnDemarrer = document.getElementById('boutonStart');
    
    
   
    btnDemarrer.addEventListener('click',function(){alert('Go baby Go')},false);    
    
    btnDemarrer.addEventListener('click',apparitionTaupe,false); 
    

    function apparitionTaupe (){
        var imageTaupe = document.createElement("img");            
        var imageTaupe2 = document.createElement("img");
        imageTaupe.src = "assets/trou-taupe-0.png";
        document.querySelector("#trou1").appendChild(imageTaupe);
        trou1.classList.toggle("visible");   

        imageTaupe2.src = "assets/trou-taupe-3.png";
        document.querySelector("#trou2").appendChild(imageTaupe2);
        trou2.classList.toggle("visible");
        var interval = setInterval(function(){
            trou1.classList.toggle("visible");
        },2000);
        var interval2 = setInterval(function(){
            trou2.classList.toggle("visible");
        },4000);
            setTimeout(function(){ 
                clearInterval(interval),
                clearInterval(interval2)
            },20000);
    };    
                  
       

       
        
        
 


});
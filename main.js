// Created by Khan tahir and adam prince


$(document).ready(function(event){
   
    $('body').on('click', '.key', function(event){
            var $el = $(".key"),
            x = 250,
            originalColor = $el.css("color");
            $el.css("color", "white");
            setTimeout(function(){
            $el.css("color", originalColor);
            }, x);
        PlaySound();
        $('.key').css("color","white");
        $(this).css({
   'color' : randomColors,
   'box-shadow' : randomColors});
   event.preventDefault();
   });
    
    $('body').on('click', '#caps', function(event){
        $('.clight').toggleClass('con');
        $('#l2').toggleClass('on');
    });


    $('body').on('click', '.section-m', function(event){
        $('#l1').toggleClass('on');
    });
    
    $('body').on('click', '#scroll', function(event){
        $('#l3').toggleClass('on');
    });
    
    $('body').on('change', '#colbar', function(event){
        $('.section-m, .section-a, .section-b').css("background" , "none");
        $('.section-m, .section-a, .section-b').css("background-color", randomColors);
   event.preventDefault();
    });
});

function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function PlaySound() {
          var sound = document.getElementById("audio");
          sound.play()
}




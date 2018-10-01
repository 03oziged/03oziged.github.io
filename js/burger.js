 $(function() {
   $('#burger_item').click(function( e ) {
       /*
           вместо $("selector").click( observer ) можно использовать синтаксис вида
                  $("selector").on( 'click', observer );
       */
       // отменяем стандартное поведение

       // изменение стиля в нашем случае можно сделать так
       // этот способ быстрее всего, но применять его лучше не надо
       // хотя если сильно важна производительность - пишите так
      
     //  document.getElementByID("#mobile_menu").style.display = 'block';

       // или так
     // $("#mobile_menu").css("display","block");
     $("#nav_mobile").stop().fadeToggle();
    
     
     $('#close').click(function( e ) {
        $("#nav_mobile").stop().fadeToggle();
       
    });
       // или так
       //$("#enterblock").show();
   });
}); 


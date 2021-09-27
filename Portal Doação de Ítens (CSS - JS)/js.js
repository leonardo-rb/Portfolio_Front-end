$(document).ready(function() {
 var botao = $('.menuint');
 var dropDown = $('.lista-secundaria');    

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

$(document).ready(function() {


    $('#form-tarefa').on('submit', function(event) {
       
        event.preventDefault();

        const inputTarefa = $('#nome-tarefa');
        const nomeDaTarefa = inputTarefa.val().trim();

      
        if (nomeDaTarefa) {
          
            $('#lista-tarefas').append($('<li></li>').text(nomeDaTarefa));
            
          
            inputTarefa.val('');
        }
    });

 
    $('#lista-tarefas').on('click', 'li', function() {
      
        $(this).toggleClass('concluida');
    });

});
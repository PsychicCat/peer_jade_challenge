$(document).ready(function(){
    $('.messageSend').on('click', function(e){
        e.preventDefault();
        var $form = $(this).parent().parent().parent();
        var id = $form.data('id');
        var message  = $form.find('input.message').val();
        sendMessage({"message": message, "id": id});
    })
});

function sendMessage(obj){
    $.ajax({
        type: 'POST',
        url: '/postMessage',
        data: obj,
        complete: function(){
            console.log("ajax complete!");
        },
        success: function(data){
            console.log(data);
        },
        error: function(){
            console.log('Error!');
        }
    });
}
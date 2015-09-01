$(document).ready(function(){

    getAllMessages();

    $('.messageSend').on('click', function(e){
        e.preventDefault();

        var $form = $(this).parent().parent();
        var id = $form.data('id');
        var message  = $form.find('input.message').val();
        sendMessage({"message": message, "id": id});
        $(this).parent().next('.messagebox').append(message);

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

        },
        error: function(){
            console.log('Error!');
        }
    });
}

function getAllMessages(obj){
    $.ajax({
        type: 'POST',
        url: '/postMessage',
        data: obj,
        complete: function(){
            console.log("ajax complete!");
        },
        success: function(data){
            $('.container').each(function(){
                var $messages = $('<div>').attr('class','messagebox');
                var $div = $(this);
                var $id = $(this).data('id');

                data.forEach(function(elem){
                    if(elem.id == $id){
                        console.log(elem.id + " " + elem.message);
                        var $p = $('<p>').text(elem.message);
                        $messages.append($p);
                        $div.append($messages);
                    }
                })
            });
        },
        error: function(){
            console.log('Error!');
        }
    });
}


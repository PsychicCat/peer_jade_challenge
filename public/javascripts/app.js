$(document).ready(function(){

    getAllMessages();

    $('.messageSend').on('click', function(e){
        e.preventDefault();

        var $form = $(this).parent().parent();
        var id = $form.data('id');
        var message  = $form.find('input.message').val();
        sendMessage({"message": message, "id": id});
        $(this).parent().next('.messagebox').append(message);

       //var id = $(this).children(["name=message"]).attr('id');


    });
    $('.messageDelete').on('click', function(e){
        e.preventDefault();
        //deleteMessage();
        var $messageBox = $(this).parent().next('.messagebox');
        $messageBox.last('p').remove();


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
            console.log("Message Posted.");
        },
        error: function(){
            console.log('Error!');
        }
    });
}

function getAllMessages(){
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/getMessages',
        complete: function(){
            console.log("ajax complete!");
        },
        success: function(data){
            console.log(data);
            $('.container').each(function(){
                var $messages = $('<div>').attr('class','messagebox');
                var $div = $(this);
                var $id = $(this).data('id');

                data.forEach(function(elem){
                    if(elem.id == $id){
                        console.log(elem.id + " " + elem.message);
                        var $p = $('<p>').text(elem.message);
                        $p.attr('class', 'message animated slideInDownBig');
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


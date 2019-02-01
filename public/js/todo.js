// TODO LIST WITH DATABASE FUNCTIONALITY

$(function(){

        $('.fa-plus').click(function(e){
        $("#mainInput").fadeToggle();
        $("#mainInput").focus();
        });

    $("input[type='text']").keypress(function (e) { 
        if(e.which === 13){
            e.preventDefault();
            let task = $(this).val();
            // console.log(task);

            let li = $("<li>",{
                "class":"list-item",
                "text": task,
                "id":"toDolistli",
                "name": "tasks"
            });

            let span = $("<span>",{"class":"trash"});
            let i = $('<i>',{"class":"fas fa-trash-alt"});
            span.append(i);
            li.prepend(span);
            $('#mainUl').append(li);
            $('input').val('');

            $('#mainUl').on('click','li',function(){
                $(this).toggleClass('completed');
            });
        
            $('#mainUl').on('click','.trash',function(){
                $(this).parent().fadeOut(400,function(){
                    $(this).remove();
                })})
                

            
            $.post('/todo',{
                toDo :  task   
            })
            .done(()=>{
                console.log('Post Successful');
            })
            .catch(()=>{
                console.log('error');
            })


}})})
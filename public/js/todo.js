$(function(){
    $('.fa-plus').click(function(e){
        $("#mainInput").fadeToggle();
        $("#mainInput").focus();
    });

    $("input[type='text']").keypress(function (e) { 
        if(e.which === 13){
            e.preventDefault();
            let task = $(this).val();

            // make li element
            let li = $("<li>",{
                "class":"list-item",
                "text": task,
                "id":"toDolistli",
                "name": "tasks"
            });

            // create form
            // let form = $("<form>",{
            //     "id": "todo-form",
            //     "action": "/todo",
            //     "method": "POST"
            // });

            // let submit = $("<button>", {
            //     "id": "todo-submit",
            //     "type": "submit", 
            //     "value": "submit",
            //     "text":"Submit"
            // })

            // form.append(li);
            // form.append(submit);

            let span = $("<span>",{"class":"trash"});
            let i = $('<i>',{"class":"fas fa-trash-alt"});
            span.append(i);
            li.prepend(span);
            $('#mainUl').append(li);
            $('input').val('');
            
        }
    });

    // $('#submitButton').on('click',function(event){
    //     let ingredients = '';
    //     for (var j=0; j<(('#mainField ul li').length);j++){
    //         var li = $('#mainField ul li')[j];
    //         if (li !== undefined){
    //             var text = li.innerText;
    //             ingredients += text;
    //             ingredients += ',';
    //             window.location='result.html';
    //             // window.location.pathname = '/new'
    //         }
    //     }
    // ingredients = ingredients.slice(0,-1);
    // // console.log(ingredients);
    // localStorage.ingredientArr=JSON.stringify(ingredients)
    // });

    $('#mainUl').on('click','li',function(){
        $(this).toggleClass('completed');
    });

    $('#mainUl').on('click','.trash',function(){
        $(this).parent().fadeOut(400,function(){
            $(this).remove();
        })
    });
});
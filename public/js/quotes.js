$(function(){
    var url = 'http://quotes.rest/qod.json'

    $.get(url)
    .done((result)=>{
        let quoteAuthor = result.contents.quotes[0].author;
        let quote = result.contents.quotes[0].quote;

        var $randomQuote = $('#randomquote');

        var $authorDiv = $('<div>', {
            'id' : 'quoteAuthor',
            'text' : quoteAuthor
        });
        var $quoteDiv = $('<div>', {
            'id' : 'quoteDiv',
            'text' : quote
        });

        $randomQuote.append($quoteDiv);
        $randomQuote.append($authorDiv);
        
        return $randomQuote
    })
})

// Stock API
$('#stockButton').click(function(){
    var company = $('#stockQuery').val();
    var alphaAPI = 'DSORZL6DK0TYSLAP'
    var url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + company + '&apikey=' + alphaAPI;
    $.get(url)
    .done((result)=>{
        let data = result
        var symbol =result['Global Quote']['01. symbol'];
        var price = result['Global Quote']['05. price'];
        var changePercent = result['Global Quote']['10. change percent'];

        var $list = $('#stocklist');
        var $symList = $('<li>', {
            'id' : 'symbol',
            'text' : symbol
        });
        var $priceList = $('<li>', {
            'id' : 'price',
            'text' : price
        });
        var $changePercent = $('<li>', {
            'id' : 'change',
            'text' : changePercent
        });

        $list.append($symList);
        $list.append($priceList);
        $list.append($changePercent);

        return $list
    })

})

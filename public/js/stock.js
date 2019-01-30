// Stock API

// Jean API Key: NP69UHME13SQ492L
// Anuj API Key: DSORZL6DK0TYSLAP


$('#stockButton').click(function(){
    var company = $('#stockQuery').val();
    var alphaAPI = 'NP69UHME13SQ492L'
    var url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + company + '&apikey=' + alphaAPI;
    $.get(url)
    .done((result)=>{
        let data = result
        var symbol =result['Global Quote']['01. symbol'];
        var open =result['Global Quote']['02. open'];
        var price = result['Global Quote']['05. price'];
        var change = result['Global Quote']['09. change'];
        var changePercent = result['Global Quote']['10. change percent'];

        // var $list = $('#stocklist');
        // var $symList = $('<li>', {
        //     'id' : 'symbol',
        //     'text' : symbol
        // });
        // var $priceList = $('<li>', {
        //     'id' : 'price',
        //     'text' : price
        // });
        // var $changePercent = $('<li>', {
        //     'id' : 'change',
        //     'text' : changePercent
        // });

        // $list.append($symList);
        // $list.append($priceList);
        // $list.append($changePercent);


        $('#cstock01').html(symbol)
        $('#cstock02').html(open)
        $('#cstock03').html(price)
        $('#cstock04').html(change)
        $('#cstock05').html(changePercent)

        function clearFields() {
            document.getElementById("stockQuery").value = "";
        }
        clearFields()
        

        // return $list
    })

})

$(document).ready(function () {  

    $.get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=tsla&apikey=DSORZL6DK0TYSLAP')
    .done((result)=>{
        $('#tesla01').append(result['Global Quote']['01. symbol'])
        $('#tesla02').append(result['Global Quote']['02. open'])
        $('#tesla03').append(result['Global Quote']['05. price'])
        $('#tesla04').append(result['Global Quote']['09. change'])
        $('#tesla05').append(result['Global Quote']['10. change percent'])
    })

    $.get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=aapl&apikey=DSORZL6DK0TYSLAP')
    .done((result)=>{
        $('#apple01').append(result['Global Quote']['01. symbol'])
        $('#apple02').append(result['Global Quote']['02. open'])
        $('#apple03').append(result['Global Quote']['05. price'])
        $('#apple04').append(result['Global Quote']['09. change'])
        $('#apple05').append(result['Global Quote']['10. change percent'])
    })

    $.get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=msft&apikey=DSORZL6DK0TYSLAP')
    .done((result)=>{
        $('#msft01').append(result['Global Quote']['01. symbol'])
        $('#msft02').append(result['Global Quote']['02. open'])
        $('#msft03').append(result['Global Quote']['05. price'])
        $('#msft04').append(result['Global Quote']['09. change'])
        $('#msft05').append(result['Global Quote']['10. change percent'])
    })

    $.get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=qcom&apikey=DSORZL6DK0TYSLAP')
    .done((result)=>{
        $('#qcom01').append(result['Global Quote']['01. symbol'])
        $('#qcom02').append(result['Global Quote']['02. open'])
        $('#qcom03').append(result['Global Quote']['05. price'])
        $('#qcom04').append(result['Global Quote']['09. change'])
        $('#qcom05').append(result['Global Quote']['10. change percent'])
    })

    $.get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=twtr&apikey=DSORZL6DK0TYSLAP')
    .done((result)=>{
        $('#twtr01').append(result['Global Quote']['01. symbol']) 
        $('#twtr02').append(result['Global Quote']['02. open'])
        $('#twtr03').append(result['Global Quote']['05. price'])
        $('#twtr04').append(result['Global Quote']['09. change'])
        $('#twtr05').append(result['Global Quote']['10. change percent'])
    })
})
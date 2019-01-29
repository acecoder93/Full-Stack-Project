$(document).ready(function () {        
    
    // Query format per topic
    // https://newsapi.org/v2/top-headlines?q=trump&apiKey=API_KEY

    //API CALL
    $.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=6afdb077c1994657ab9284882c5c296e')
    .done((result)=>{
        
        for (var i=0;i<=10;i++){   
            
            //Data in Variables
            let newsTitle = ((result.articles[i].title))
            let newsDescription = (result.articles[i].description).substring(0,90)+'..'
            let newsSourceName = (result.articles[i].source.name)
            let newsImageUrl = ((result.articles[i].urlToImage))
            let newsUrl = ((result.articles[i].url))

            
        html = `<div style="display:flex; height: 90px; margin-bottom: 5px; background-color:transparent">
        <div style="width: 20%; background-image:url('${newsImageUrl}'); background-size:cover; background-repeat:no-repeat; height:90px; width:90px;"></div>
        
        <div style="width: 80%">
            <ul style="list-style: none; width: 100%; margin-left: -30px; margin-top: -5px; line-height: 2px;">
                <li style="overflow: hidden; font-size: 14px; margin-bottom:-25px"><a href="${newsUrl}" target="_blank"><b>${newsTitle}</b></a></li>
                <li style="font-size: 14px; margin-bottom:-10px"><i>${newsSourceName}</i></li>
                <li style="font-size: 14px; line-height: 16px;">${newsDescription} </li>
        </ul>
        </div>
        </div>`
    
        $('#box01').append(html)
            
    }}) // End of Loop

}); // End of Document Ready


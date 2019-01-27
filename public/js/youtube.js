$(function(){

    // Youtube API 
    var youtubeAPIkey = 'AIzaSyAAY8PfuRZux7Uw06bjgWK6MCEz6Uho1TE';
    var query = 'javascript';
    var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + query + '&type=video&key=' + youtubeAPIkey;
    
    $.get(url)
    .done((result)=>{
        // console.log(result);
        var output = result.items[0].id.videoId
    
        var $youtubeDiv =$('#youtubeDivID');
        var $youtubeFrame =  $('<iframe>', {
            'width': '500px',
            'height': '281px',
            'src': `https://www.youtube.com/embed/${output}`,
            'frameborder': '0',
            'allow': 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        });
        return $youtubeDiv.append($youtubeFrame);
        // console.log(output);
        // console.log($youtubeDiv);
    })
    })

  $(function(){
        // Youtube API - Setup URL
        var youtubeAPIkey = 'AIzaSyAAY8PfuRZux7Uw06bjgWK6MCEz6Uho1TE';
        // Query needs to be based off of user input
        var query = 'design';


        $.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + query + '&type=video&key=' + youtubeAPIkey)
        .done((result)=>{
            var output = result.data.items[0].id.videoId;  
            

            var $youtubeDiv =$('#youtubeDivID');

            var $youtubeFrame =  $('<iframe>', {
                'width': '50%',
                'height': 'auto',
                'src': `https://www.youtube.com/embed/${output}`,
                'frameborder': '0',
                'allow': 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            });

            $youtubeDiv.append($youtubeFrame);
            
            console.log(output);
            console.log($youtubeDiv);

        })
})
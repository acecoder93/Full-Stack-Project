// Youtube API
$('#youtubeButton').click(function(){
    var query = $('#youtubeQuery').val();
    console.log(query);
    var youtubeAPIkey = 'AIzaSyAAY8PfuRZux7Uw06bjgWK6MCEz6Uho1TE';
    var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + query + '&type=video&key=' + youtubeAPIkey;
    
    $.get(url)
    .done((result)=>{
        var output = result.items[0].id.videoId
        var $youtubeDiv =$('#youtubeDivID');
        var $youtubeFrame =  $('<iframe>', {
            'width': '500px',
            'height': '281px',
            'src': `https://www.youtube.com/embed/${output}`,
            'frameborder': '0',
            'allow': 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        });

        function clearFields() {
            document.getElementById("youtubeQuery").value = "";
        }
        clearFields()
        
        return $youtubeDiv.append($youtubeFrame);
})});
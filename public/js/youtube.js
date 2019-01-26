
// console.log('Here is the index.js page');


// $(function(){

//         // Youtube API 
//         var youtubeAPIkey = 'AIzaSyAAY8PfuRZux7Uw06bjgWK6MCEz6Uho1TE';
//         // Query needs to be based off of user input
//         var query = 'design';
//         var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + query + '&type=video&key=' + youtubeAPIkey;

//         $.get(url)
//         .done((result)=>{
//             var output = result.data.items[0].id.videoId;
//             console.log(output);  
//             var $youtubeDiv =$('#youtubeDivID');
//             var $youtubeFrame =  $('<iframe>', {
//                 'width': '1000%',
//                 'height': 'auto',
//                 'src': `https://www.youtube.com/embed/${output}`,
//                 'frameborder': '0',
//                 'allow': 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
//             });
//             return $youtubeDiv.append($youtubeFrame);
//             // console.log(output);
//             // console.log($youtubeDiv);
//         })
//     })
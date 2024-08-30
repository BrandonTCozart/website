$(document).ready(function () {
    $("#transcript-button").on("click", function(){
        document.getElementById("reuseable-modal").classList.toggle("hide");
    });
    $("#modal-close").on("click", function(){
        document.getElementById("reuseable-modal").classList.toggle("hide");
    })
});


window.onload = async function () {

    const apiKey = 'AIzaSyBVSXGKQAFnlnW0kUW7j6fqDxPrZzwEy3E';
    const clientID = '941814250597-hlf4k084up839jc3os6qk0p8ds4odpk9.apps.googleusercontent.com';
    const scope = 'https://www.googleapis.com/auth/youtube';


    gapi.load('client:auth2', function() {
        gapi.client.init({
          apiKey: apiKey,
          clientId: clientID,
          scope: scope
        }).then(function() {
          // API is ready!
        });
      });

      const videoData = {
        snippet: {
          title: 'My New Video',
          description: 'This is a description of my video.',
          tags: ['tag1', 'tag2', 'tag3'],
          categoryId: 1 // Replace with the desired category ID
        },
        status: {
          privacyStatus: 'public' // 'public', 'private', or 'unlisted'
        }
      };


      function insert(){
        gapi.client.youtube.videos.insert({
            part: 'snippet,status',
            resource: videoData
          }).then(function(response) {
            console.log('Video inserted successfully:', response);
            // Handle the video insertion response (e.g., get the video ID)
          }).catch(function(error) {
            console.error('Error inserting video:', error);
          });
      }

      
      
}
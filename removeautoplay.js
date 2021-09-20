<a id="play-video" href="#">Play Video</a><br />

<iframe id="video" src="https://www.youtube.com/embed/PcbHi6OIIIY" frameborder="0"></iframe>


$(document).ready(function() {
  $('#play-video').on('click', function(ev) {

   $("#video")[0].src += "&autoplay=1";
   ev.preventDefault();

  });
});

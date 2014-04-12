var addSentences = function(object) {
	// console.log(object+' im inside the addSentences function') //this works
	for (var count = 0; count < object.length; count++) {
		$('body').find('#results').append('<p>'+object[count]+'</p>');
	}
}



$(document).ready(function(){
	$('#loading').toggle();
	$('#urlGetter').on('submit', function(){
		$('#results').html(''); //clear old stuff
		$('#loading').toggle();
		var url = $(this).find('input[name="url"]').val();
		console.log(url); //just for debug
		getTunes(url);
		getPhotos(url);
		getVideos(url);
	});
})


var getTunes = function(inputUrl) {
	$.ajax('https://api.soundcloud.com/tracks', {
		data: { client_id: '6e8f5a859bbe32ac1435a97456ff829d',
				q: inputUrl},

		headers: { 'Accept': 'application/json' },

		success: function(response) {
			// console.log(response);
			console.log(response[0]);
			$('#loading').toggle();
			showTunes(response[0].uri);
		},

		error: function() {
			console.log('fuck');
		},

		type: "GET",
	})
}


var showTunes = function(track) {
	$('#soundcloud-results').html('<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url='
		+track+'&amp;auto_play=false&amp;hide_related=false&amp;visual=true"></iframe>');
};


var getPhotos = function(tag) {
	$.ajax('https://api.instagram.com/v1/tags/'+tag+'/media/recent', {
		data: { client_id: 'ede6ebd3466c4a8ea772cb12c3410723'},

		success: function(response) {
			console.log(response.data[0]);
			showPhotos(response.data[0].images.standard_resolution.url);
		},

		type: 'GET',

		dataType: 'jsonp'

	})
};

var showPhotos = function(url) {
	$('#photo').html('<img src="'+url+'"/>');
};

var getVideos = function(query) {
	$.ajax('https://www.googleapis.com/youtube/v3/search', {
			data: { 'q': query, 'key': 'AIzaSyABsfRIDy4Wct-rrP0niL6OiOSabVKCt2k',
			part: 'snippet', maxResults: 10 },

			type: 'GET',

			dataType: 'jsonp',

			success: function(response) {
				console.log(response);
			}
		});
};
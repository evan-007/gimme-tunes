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
		// getArticle(url);
	});
})


var getTunes = function(inputUrl) {
	$.ajax('https://api.soundcloud.com/tracks', {
		data: { client_id: '6e8f5a859bbe32ac1435a97456ff829d',
				q: inputUrl},

		success: function(response) {
			console.log(response);
		},

		error: function() {
			console.log('fuck');
		},

		type: "GET",
	})
}


var getSentences = function(inputUrl) {
	$.ajax('https://aylien-text.p.mashape.com/summarize', {

		headers: { "X-Mashape-Authorization": 'M2sq25zthb1e6XHg6JNmJgS8rZEn7IAM' },

		data: { url: inputUrl },

		success: function(response){
			console.log(response); //debug
			// console.log(response.sentences[0]+' this is sentence 1');
			addSentences(response.sentences);
		},

		type: "GET",

		timeout: 10000,

		complete: function() {
			$('#loading').toggle();
		}
	}

)}

var getArticle = function(inputUrl) {
	$.ajax('https://aylien-text.p.mashape.com/extract'), {

		headers: { "X-Mashape-Authorization": 'M2sq25zthb1e6XHg6JNmJgS8rZEn7IAM' },

		data: { url: inputUrl },

		success: function(response){
			console.log(response); //debug
			console.log('this is the title: '+response.title);
			console.log('this is the article: '+response.article);
		},

		type: "GET",

		timeout: 10000,

	}
};

var getLocation = function(inputUrl) {
	
}
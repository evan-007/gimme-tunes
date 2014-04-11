var addSentences = function(object) {
	console.log(object+' im inside the addSentences function') //this works
	for (var count = 0; count < object.length; count++) {
		$('body').find('.container').append('<p>'+object[count]+'</p>');
	}
	// var results = $('.template').clone();
	// for (var n = 0; n > object.length; n++) {

	// 	console.log(object[n]);
	// 	$('body').append('<p>'+object[n]+'</p>');
	// };
}



$(document).ready(function(){
	$('#urlGetter').on('submit', function(){
		var url = $(this).find('input[name="url"]').val();
		console.log(url); //just for debug
		getSummary(url);
	});
})




var getSummary = function(inputUrl) {
	$.ajax('https://aylien-text.p.mashape.com/summarize', {

		headers: { "X-Mashape-Authorization": 'M2sq25zthb1e6XHg6JNmJgS8rZEn7IAM' },

		data: { url: inputUrl },

		success: function(response){
			console.log(response); //debug
			console.log(response.sentences[0]+' this is sentence 1');
			addSentences(response.sentences);
		},

		type: "GET"
	}

)};



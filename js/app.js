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
			console.log(response);
		},

		type: "GET"
	}
)};
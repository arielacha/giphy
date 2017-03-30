$(document).ready(function(){

	get_results('q=lobi');

	new Clipboard('.copy-url');

	$('.s_form').submit(function(e){
		e.preventDefault();
		var data = $(this).serialize();
		get_results(data);
	});
	function get_results(query){

		var s_query = query.replace('%20', '+');

		$.get('https://api.giphy.com/v1/gifs/search?'+s_query+'&api_key=dc6zaTOxFJmzC', function(res) {
			if(res) {
				$('.results').empty();
				$('.loading').delay(4000).addClass('loaded');
				$.each( res.data , function ( index , data ){
					$('.results').delay(300).append('<div class="result-cards animated slideInUp">'
									+ ' <img src="'+data.images.fixed_height.url+'" alt="" />' 
									+ ' <input id="result'+index+'" type="text" value="'+data.images.fixed_height.url+'"/>'
									+ ' <button class="copy-url" data-clipboard-target="#result'+index+'"><i class="fa fa-files-o" aria-hidden="true"></i></button>'
									+ ' </div>').delay(300);
				});
				$('.search-form').delay(2000).fadeIn('slow');
			}
		});
	}
});
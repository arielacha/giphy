$(document).ready(function(){
	$.get('http://api.giphy.com/v1/gifs/search?q=giphy&api_key=dc6zaTOxFJmzC', function(res) {
		if(res) {
			$('.loading').delay(4000).addClass('loaded');
			$.each( res.data , function ( index , data ){
				$('.results').delay(300).append('<div class="result-cards">'
												+ ' <img src="'+data.images.fixed_height.url+'" alt="" />' 
												+ ' <input id="result'+index+'" type="text" value="'+data.embed_url+'"/>'
												+ ' <button class="copy-url" data-clipboard-target="#result'+index+'"><i class="fa fa-files-o" aria-hidden="true"></i></button>'
												+ ' </div>'
												);
			});
		}
	});

	new Clipboard('.copy-url');
});
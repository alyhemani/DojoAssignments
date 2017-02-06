var carded ='';
$(document).ready(function(){
	$('form').submit(function(){
		console.log('fish');
		var first = $('#first').val();
		var last = $('#last').val();
		var description = $('#description').val();
		var html_str = '';
		html_str += '<div id="card">';
		html_str += '<div class="front">';
		html_str += '<h4>';
		html_str += first;
		html_str += ' ';
		html_str += last;
		html_str += '</h4>';
		html_str += 'Click here for Description';
		html_str += '</div>';
		html_str += '<div class="back">'
		html_str += description;
		html_str += '</div>';
		html_str += '</div>';
		carded = $(html_str);
		$('#right').append(carded);
		carded.flip({
  			trigger: 'click'
		});
		return false;
	});
});
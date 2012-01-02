$('.word_count').each(function() {
    var input =  this.id;
    
    //$(count).show();
    word_limit(input, 10);
    $(this).keyup(function() { word_limit(input, 10) });
 });


function word_limit(field, limit) {
		
	var count = "#"+ field + '_count';
	var fieldSelector = "#"+ field
	var words = $(fieldSelector).val().split(/\b[\s,\.-:;]*/);
   	var number = words.length;
	
	if ($(count).length) {
		$(count).text(number + '/50 word' + (number != 1 ? 's' : '') );
	} else {
   		$(fieldSelector).parent().append('<div class="help-block" id="'+field+'_count">'+number + '/50 word' + (number != 1 ? 's' : '') + '</div>');
	}
	if (number > limit) {
	
		$(fieldSelector).parent().parent().addClass('error');
		$(fieldSelector).next('.help-inline').innerHtml = "Only 10 Words"
		
		alert('This field only allows for '+limit+' words');
		var wordCount = 1;
		var newString = "";
		
		for (i=0;i<limit;i++) {
		
			if (i == 0) {
				newString = words[i];
			} else {
				newString += " "+ words[i];
			
			}
			
		}
		$(fieldSelector).val(newString);
	} else {
		$(fieldSelector).parent().parent().removeClass('error');

	}
}

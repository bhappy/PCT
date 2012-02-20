// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function() {
	    var open = true;
	    $('#footerSlideButton').click(function() {
	        if(open === false) {
	            $('#footerSlideContent').animate({ height: '200px' });
	            $(this).css('backgroundPosition', 'bottom left');
	            open = true
	        } else {
	            $('#footerSlideContent').animate({ height: '15px' });
	            $(this).css('backgroundPosition', 'top left');
            open = false;
        }
	    });
});
	
$(function(){
	$('div#footerSlideContent').droppable( { drop : handleDropEvent } );
  $('.draggable').draggable( {
		//stack: 'div',
		cursor: 'move',
		containment: 'document',
		opacity: .75,
		//helper: 'clone',
		revert: true,
		zindex: 200
	}	);	

})	

function handleDropEvent( event, ui ){
	var draggable = ui.draggable;
	//alert("product url: " + draggable.attr('id') + "!");
		$.ajax({
			url: "/collections/add?url=" + draggable.attr('id') + "&thumbnail=" + draggable.attr('src'),
			cache: false,
			//success: function(html){
				//$("#shopping_cart").append(html);
				//alert("product url: " + draggable.attr('id') + "!");			
			//}	
		});
}




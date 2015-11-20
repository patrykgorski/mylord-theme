
/*ALERT INFO*/

$('.status-info')
  .popup({
    popup : $('.custom.popup'),
    on    : 'click',
    position : 'bottom center'
 });

$('.page-nav-button').on('click', function(){
	if($(this).hasClass('alert-button')){
		$('span.info-ico').hide();
		$('.status-info')
		  .popup({
		    popup : $('.custom.popup'),
		    on    : 'dblclick',
		    position : 'bottom center'
		 });
	}

	if($(this).hasClass('active')){

	}else{
		$('.page-nav-button').removeClass('active');
		$(this).addClass('active');
		var lenli = $('.page-nav-button').length;
		for (var i = 0; i <= lenli-1; i++) {
			if($('.page-nav-button').eq(i).hasClass('active')){
				$('.sub-menu').hide();
				$('.sub-menu').eq(i).show();
			}
		}
	}
})


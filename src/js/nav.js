$('.page-nav-button').on('click', function(){
	if($(this).hasClass('alert-button')){
		$('span.info-ico').hide();
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


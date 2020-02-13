$(function(){
  
  let floatingInput = $('.floating__input'),
      floatingLabel = $('.floating__label'),
      passwordBtn = $('.js-password-btn'),
      passwordInput = $('.create__input-password'),
      formTab = '.tabs__radio-input',
      tabsProgress = $('.tabs__progress-active');

  floatingInput.on('focus', function(){
    $(this).next(floatingLabel).addClass('active');
  });
  
  floatingInput.on('blur', function(){
    if($(this).val() == 0) {
      $(this).next(floatingLabel).removeClass('active');
    }
  });

  floatingInput.each(function(){
    if($(this).val().length > 0) {
      $(this).next(floatingLabel).addClass('active');
    }
  });
  
  passwordBtn.on('click', function(e){
    e.preventDefault;
    
    let inputType = passwordInput.attr('type');
    if(inputType === 'text') {
      passwordInput.attr('type', 'password');
      $(this).removeClass('active');
    } else {
      passwordInput.attr('type', 'text');
      $(this).addClass('active');
    }
  });

  $(formTab).on('change', function(){
    let progressWidth = $(this).attr('data-progress');
    if($(this) + ':checked'){
      tabsProgress.css('width', progressWidth + '%');
      let tabsId = $(this).attr('id');
      $('.signin-block').addClass('is-hidden');
      $('.signin-' + tabsId).removeClass('is-hidden');
    }
  });

  $('.overlay').on('click', function(){
    $(this).fadeOut(300);
    $('.popup').fadeOut(300);
  });

  $('.create__form').submit(function() {
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			data: $(this).serialize()
		}).done(function() {
      $('.overlay').fadeIn(300);
      $('.popup').fadeIn(300);
		});
		return false;
	});

});
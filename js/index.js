$(function(){ 
    $('.slider').slick({
        dots: true,
        dotsClass: 'slider__dots',
        infinite: true,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false
            }
            }
        ]
    });

    $('.seo-text__button').on('click', function(){
        $('.seo-text__more').show();
        $(this).hide();
    });
});
  
    
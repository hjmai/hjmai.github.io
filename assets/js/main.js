$('.seeMore').hover(function(){
    $(this).children().removeClass('fa-arrow-right');
    $(this).children().addClass('fa-arrow-down');
}, function(){
    $(this).children().removeClass('fa-arrow-down');
    $(this).children().addClass('fa-arrow-right');
});

$('.seeMore').on('click', function(){
    $('html, body').animate({
        scrollTop: $('.about-me').offset().top
    }, 800)
});
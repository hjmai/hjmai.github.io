$('.seeMore').hover(function(){
    $(this).children().removeClass('fa-arrow-right');
    $(this).children().addClass('fa-arrow-down');
}, function(){
    $(this).children().removeClass('fa-arrow-down');
    $(this).children().addClass('fa-arrow-right');
});
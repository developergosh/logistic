var header = $('.header'),
    scrollPrev = 0;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 100 && scrolled > scrollPrev ) {
        header.removeClass('out');
        header.addClass('visible');

    } else {

        header.addClass('out');
    }
    scrollPrev = scrolled;
});



$( () => {


    //Toggle Menu
    $('#menu-toggle').on('click', () => {
        $('#menu-toggle').toggleClass('closeMenu');
        $('ul').toggleClass('showMenu');

        $('li').on('click', () => {
            $('ul').removeClass('showMenu');
            $('#menu-toggle').removeClass('closeMenu');
        });
    });

});


$(document).ready(function()
{"use strict";
    $('.slider').slick({
        arrows:false,
        dots: true,
        slidesToShow:1,
        autoplay:true,
        speed:2000,
        autoplaySpeed:2000,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 370,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});

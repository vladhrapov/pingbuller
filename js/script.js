window.onload = function () {
    $(function() {

            $(".menu .menu__item:first-child").click(function () {
                if($(document).width() < 768)
                {
                    $('.menu__item').toggle();
                    $('.menu__item:first-child').toggle();
                }

            });

    });
};
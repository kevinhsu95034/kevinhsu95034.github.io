$(function() {

    $('.navbar-toggle').click(function() {
        $(this).toggleClass('act');
            if($(this).hasClass('act')) {
                $('.main-menu').addClass('act');
            }
            else {
                $('.main-menu').removeClass('act');
            }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.site-header',
        offset: 10
    });


    // Navigation overlay
    var s = skrollr.init({
            forceHeight: false,
            smoothScrolling: false,
            mobileDeceleration: 0.004,
            mobileCheck: function() {
                //hack - forces mobile version to be off
                return false;
            }
    });
    

    // Animated timeline
    var items = document.querySelectorAll("li");

    function isItemInView(item){
    var rect = item.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
        if (isItemInView(items[i])) {
            items[i].classList.add("show");
        }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
});
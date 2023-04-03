// Select all links with hashes
$('.nav-item')
    .click(function (event) {
    // On-page links
    var target = $(this).find("a").attr("href")
    if (target) {
        // Figure out element to scroll to
        target = $(target);
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500, function () {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                }
                ;
            });
        }
    }
});

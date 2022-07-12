// ----- FACTS COUNTER -----
"use strict"; 
let show = true;
let countbox = ".about__us-facts";
$(window).on("scroll load resize", function (e) {
    if (!show) return false; 
    let w_top = $(window).scrollTop(); 
    let e_top = $(countbox).offset().top; 
    let w_height = $(window).height(); 
    let d_height = $(document).height(); 
    let e_height = $(countbox).outerHeight(); 
    if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.number_increment').css('opacity', '1');
        $('.number_increment').spincrement({
        thousandSeparator: "",
        duration: 5000
        });
        show = false;
    }
    e.preventDefault();
});
"use strict";

$('.menu__list').on('click', function(e){
    e.preventDefault();
    let menu__list = this.hash;
    let coords = $(menu__list)[0].getBoundingClientRect();
    let top = 0;
    if(document.documentElement.clientWidth > 854){
        if(menu__list == "#service"){
        top = coords.top + window.pageYOffset - 74;
        }
        else top = coords.top + window.pageYOffset - 60;
    }
    else top = coords.top + window.pageYOffset;
    window.scrollTo(0, top);
});
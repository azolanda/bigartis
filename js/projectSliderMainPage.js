"use strict";

$(document).ready(function () {
    let slideIndex = 1;

    $('.popup_link').on('click', function (e) {
        slideIndex = parseInt($(this.parentNode).data('item'));

        $('.slide__title')[0].innerHTML = "Заголовок: " + $('.preview__item p')[slideIndex - 1].innerHTML;

        let hrefAboutProject = this.nextElementSibling.href;

        $('.read')[0].href = hrefAboutProject;

        e.preventDefault();
    });

    $('.popup_link').magnificPopup({
        closeOnContentClick: false,
        closeOnBgClick: false,
        showCloseBtn: false,
        callbacks: {
            open() {
                $('.slider').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: true,
                    speed: 800,
                    variableWidth: true,
                    infinite: true,
                    focusOnSelect: true,
                    initialSlide: slideIndex-1,
                    cssEase: 'linear',
                    touchMove: true,
                    lazyLoad: 'ondemand',
                    prevArrow: '<button class="arrow-prev"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490.4 490.4" style="enable-background:new 0 0 490.4 490.4;" xml:space="preserve"><g><g><path d="M245.2,490.4c135.2,0,245.2-110,245.2-245.2S380.4,0,245.2,0S0,110,0,245.2C0,380.4,110,490.4,245.2,490.4z M245.2,24.5c121.7,0,220.7,99,220.7,220.7s-99,220.7-220.7,220.7s-220.7-99-220.7-220.7S123.5,24.5,245.2,24.5z"/><path d="M198.9,322.8c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-48-48h183.4c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3H168.3l48-48c4.8-4.8,4.8-12.5,0-17.3s-12.5-4.8-17.3,0l-68.9,68.9c-4.8,4.8-4.8,12.5,0,17.3L198.9,322.8z"/></g></g></svg></button>',
                    nextArrow: '<button class="arrow-next"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 54 54" style="enable-background:new 0 0 54 54;" xml:space="preserve"><g><path d="M27,0C12.112,0,0,12.112,0,27s12.112,27,27,27s27-12.112,27-27S41.888,0,27,0z M27,52C13.215,52,2,40.785,2,27S13.215,2,27,2s25,11.215,25,25S40.785,52,27,52z"/><path d="M29.293,17.707L37.586,26H13c-0.552,0-1,0.447-1,1s0.448,1,1,1h24.586l-8.293,8.293l1.414,1.414L41.414,27L30.707,16.293L29.293,17.707z"/></g></svg></button>',
                });

                let arrow = $('.slick-arrow');

                $('.item, .slick-track').on('mousedown touchstart', function (e) {
                    arrow.addClass('no-visible');
                    $('.slide__title').addClass('no-visible-title');
                });


                
                $('.item, .slick-track').on('mouseup touchend', function (e) {
                    setTimeout(() => arrow.removeClass('no-visible'), 1300);
                    setTimeout(() => $('.slide__title').removeClass('no-visible-title'), 1200);
                    onAfterChangeSlide();
                });
                
                arrow.on("click", function () {
                    arrow.addClass('no-visible');
                    setTimeout(() => arrow.removeClass('no-visible'), 1300);
                
                    $('.slide__title').addClass('no-visible-title');
                
                    setTimeout(() => $('.slide__title').removeClass('no-visible-title'), 1200);
                
                    onAfterChangeSlide();
                });
            },
            
            close(){
                $('.slider').slick('unslick');
            }
        }
    });
});
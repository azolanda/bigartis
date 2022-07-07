"use strict";
$(document).ready(function () {
    
    // let arrow = $('.slick-arrow');

    let slideIndex = 1;

    $('.popup_link').on('click', function (e) {
        slideIndex = parseInt($(this.parentNode).data('item'));
        
        // arrow.addClass('no-visible');
        // setTimeout(() => arrow.removeClass('no-visible'), 1300);
        
        // $('.slider').slick('slickSetOption', {
        //         initialSlide: slideIndex - 1,
        // });

        // $('.slider').slick('slickGoTo', slideIndex - 1);
        // $('.slick-slider').slick('setPosition');

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

                $('.item').on('mousedown', function (e) {
                    arrow.addClass('no-visible');
                    $('.slide__title').addClass('no-visible');
                });
                
                $('.item').on('mouseup', function (e) {
                    setTimeout(() => arrow.removeClass('no-visible'), 1300);
                    setTimeout(() => $('.slide__title').removeClass('no-visible'), 1200);
                    onAfterChangeSlide();
                });
                
                arrow.on("click", function () {
                    arrow.addClass('no-visible');
                    setTimeout(() => arrow.removeClass('no-visible'), 1300);
                
                    $('.slide__title').addClass('no-visible');
                
                    setTimeout(() => $('.slide__title').removeClass('no-visible'), 1200);
                
                    onAfterChangeSlide();
                });
            },
            
            close(){
                $('.slider').slick('unslick');
            }
        }
    });

    $('.client_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 3,
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        speed: 1000,
        infinite: true,
        cssEase: 'linear',
        touchMove: true,
        lazyLoad: 'ondemand',
        // vertical: false,
        autoplay: true,
        prevArrow: '<button class="client__arrow-prev"> <svg width="38px" height="38px" viewBox="0 -6.5 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="icons" stroke-width="1"><g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-341.000000, -1910.000000)"><g id="4" transform="translate(50.000000, 1871.000000)"><path d="M317.812138,39.5802109 L328.325224,50.0042713 L328.41312,50.0858421 C328.764883,50.4346574 328.96954,50.8946897 329,51.4382227 L328.998248,51.6209428 C328.97273,52.0514917 328.80819,52.4628128 328.48394,52.8313977 L328.36126,52.9580208 L317.812138,63.4197891 C317.031988,64.1934036 315.770571,64.1934036 314.990421,63.4197891 C314.205605,62.6415481 314.205605,61.3762573 314.990358,60.5980789 L322.274264,53.3739093 L292.99947,53.3746291 C291.897068,53.3746291 291,52.4850764 291,51.3835318 C291,50.2819872 291.897068,49.3924345 292.999445,49.3924345 L322.039203,49.3917152 L314.990421,42.4019837 C314.205605,41.6237427 314.205605,40.3584519 314.990421,39.5802109 C315.770571,38.8065964 317.031988,38.8065964 317.812138,39.5802109 Z" id="left-arrow" transform="translate(310.000000, 51.500000) scale(-1, 1) translate(-310.000000, -51.500000) "></path></g></g></g></svg></button>',
        nextArrow: '<button class="client__arrow-next"><svg width="38px" height="38px" viewBox="0 -6.5 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="icons" stroke-width="1"><g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-211.000000, -1910.000000)"><g id="4" transform="translate(50.000000, 1871.000000)"><path d="M187.812138,39.5802109 L198.325224,50.0042713 L198.41312,50.0858421 C198.764883,50.4346574 198.96954,50.8946897 199,51.4382227 L198.998248,51.6209428 C198.97273,52.0514917 198.80819,52.4628128 198.48394,52.8313977 L198.36126,52.9580208 L187.812138,63.4197891 C187.031988,64.1934036 185.770571,64.1934036 184.990421,63.4197891 C184.205605,62.6415481 184.205605,61.3762573 184.990358,60.5980789 L192.274264,53.3739093 L162.99947,53.3746291 C161.897068,53.3746291 161,52.4850764 161,51.3835318 C161,50.2819872 161.897068,49.3924345 162.999445,49.3924345 L192.039203,49.3917152 L184.990421,42.4019837 C184.205605,41.6237427 184.205605,40.3584519 184.990421,39.5802109 C185.770571,38.8065964 187.031988,38.8065964 187.812138,39.5802109 Z" id="right-arrow"></path></g></g></g></svg></button>',

                responsive: [                        
                    {
                        breakpoint: 769,
                        settings: {
                        slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                        slidesToShow: 1,
                        }
                    },
                ]
    });

        // FORM MASKS
        $("#name").inputmask({ regex: "^[a-zA-Zа-яА-я- \-]*$", showMaskOnHover: false});

        $("#phone").inputmask({
            mask: ["+7 (X99) 999-99-99"],
            definitions: {
                "X": {
                    validator: "[0|1|3|4|5|6|9]",
                }
            }
        });

        $("#email").inputmask({ alias: "email"});

        $("#website").inputmask({ regex: "^(https:\\//)[a-zA-Zа-яА-я][0-9a-zA-Zа-яА-я-\-\.\_\@\%]*$"});
        
        $("#company").inputmask({ regex: "^[0-9a-zA-Zа-яА-я- \-\.\+\"\_\@\,\#\!\(\)\№\&\/]*$", showMaskOnHover: false});

        $("#town").inputmask({ regex: "^[0-9a-zA-Zа-яА-я- \-\.]*$", showMaskOnHover: false});

        $("#service_id").inputmask({ regex: "^[0-9a-zA-Zа-яА-я- \-\.\,]*$", showMaskOnHover: false});

        $("#budget").inputmask({regex: "^[0-9]{0,3} [0-9]{0,3} [0-9]{1,3} р\\.$", numericInput: true, showMaskOnHover: false});
    });

    let imgs = $('.slider img');
    imgs.each(function () {
        let item = $(this).closest('.item');
        item.css({
        'background-image': 'url(' + $(this).attr('src') + ')',
        'background-position': 'center',
        '-webkit-background-size': 'cover',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'width': '50vw',
        });
        $(this).hide();
    });

    function onAfterChangeSlide() {
        $('.slider').on('afterChange', function () {
            let dataIndex = $('.slick-current').attr("data-slick-index");

            let hrefAboutProject = $('.preview__heading-link')[parseInt(dataIndex)].href;

            $('.slide__title')[0].innerHTML = "Заголовок: " + $('.preview__item p')[parseInt(dataIndex)].innerHTML;

            $('.read')[0].href = hrefAboutProject;
        });
    }

    function closePopup() {
        $.magnificPopup.close();
    }

    $('.contacts__button').on('click', function (e) {
        let form = $('#contact__form');
        form[0].classList.remove('no-visible');
        e.preventDefault();
    });

    // ----- SELECTED LANG BUTTON -----
    $('.selected__button-eng').on('click', function(e){
        $('.eng__check').each(function (index, value){
            value.checked = true;
        });
        $('.rus__check').each(function (index, value){
            value.checked = false;
        });
    });

    $('.selected__button-rus').on('click', function(e){
        $('.eng__check').each(function (index, value){
            value.checked = false;
        });
        $('.rus__check').each(function (index, value){
            value.checked = true;
        });
    });

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

    let menuCheckbox = document.getElementById("menu__checkbox");

    function closeMenuMobile() {
        let menuMobile = document.getElementById("menu_site");
        menuMobile.style.right = '-100vw';
        menuMobile.style.transition = 'right 1s';
        menuCheckbox.checked = false;
    }

    // function closeMenuMobileOnChoice() {
    //     closeMenuMobile();
    //     $('#header__site').addClass('extra__padding');
    //     $('#top__ornament').addClass('extra__padding');
    // }

    function closeForm() {
        let form = $('#contact__form');
        // -----------------------------------
        let message = $('#contact__form__message');
        message[0].classList.remove('no-visible');
        // -----------------------------------
        form.addClass('no-visible');      
    }

    function closeMess() {
        let mess = $('#contact__form__message');
        mess.addClass('no-visible');
    }

    // ----- FACTS COUNTER ----- 
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

    const ref = window.location.pathname;
        
    window.addEventListener("unload", function(){
        menuCheckbox.checked = false;
        window.location.replace(ref);
    });
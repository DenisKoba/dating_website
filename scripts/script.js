

/**************************************************** BX_SLIDER *******************************************************/

var slide = $(".js-slide");

$(document).ready(function(){
    var slider = $('.slider').bxSlider({
        auto: false,
        pagerCustom: '#bx-pager'
    });

    $('a.pager-prev').click(function () {
        var current = slider.getCurrentSlide();
        slider.goToPrevSlide(current) - 1;
    });
    $('a.pager-next').click(function () {
        var current = slider.getCurrentSlide();
        slider.goToNextSlide(current) + 1;
    });
});

/**************************************************** APPENDING PROFILE CARDS INTO SLIDER *******************************************************/

var data = {
    "response": [
    {
        "photo": "12",
        "rating": "ТОП",
        "ratingStyle": " profile-rating ",
        "name": "Кристиночка, 28",
        "location": "Санкт-Петербург, Россия",
        "url": "src/dating_big_eight.png",
        "href": "#",
        "status":" top online-now new ",
        "indicator": " online-indicator "
    },
    {
        "photo": "3",
        "rating": "ТОП",
        "ratingStyle": " profile-rating ",
        "name": "Диана, 20",
        "location": "Самара, Россия",
        "url": "src/dating_big_four.png",
        "href": "#",
        "status":" top online-now new ",
        "indicator": " online-indicator "
    },
    {
        "photo": "145",
        "rating": "ТОП",
        "ratingStyle": " profile-rating ",
        "name": "Аня, 18",
        "location": "Ростов-на-Дону, Россия",
        "url": "src/dating_big_three.png",
        "href": "#",
        "status":" top online-now new ",
        "indicator": " online-indicator "
    },
    {
            "photo": "17",
            "rating": "",
            "ratingStyle": "",
            "name": "Анжелика, 27",
            "location": "Чебоксары, Росси",
            "url": "src/dating_big_one.png",
            "href": "#",
            "status":" new ",
            "indicator": ""
        },
    {
            "photo": "12",
            "rating": "",
            "ratingStyle": "",
            "name": "Лариса, 32",
            "location": "Москва, Россия",
            "url": "src/dating_big_seven.png",
            "href": "#",
            "status":" new online-now ",
            "indicator": " online-indicator "
        },
    {
            "photo": "3",
            "name": "Настя, 21",
            "rating": "",
            "ratingStyle": "",
            "location": "Зеленоград, Россия",
            "url": "src/dating_big_five.png",
            "href": "#",
            "status":" new ",
            "indicator": ""
        },
    {
            "photo": "4",
            "name": "Евгения, 30",
            "rating": "",
            "ratingStyle": "",
            "location": "Ростов-на-Дону, Россия",
            "url": "src/dating_big_two.png",
            "href": "#",
            "status":" new ",
            "indicator": ""
        },
    {
            "photo": "28",
            "name": "Ольга, 25",
            "rating": "",
            "ratingStyle": "",
            "location": "Казань, Россия",
            "url": "src/dating_big_six.png",
            "href": "#",
            "status":" new ",
            "indicator": ""
        }
  ]
}

for (var i = 0; i < data.response.length; i++) {
    $(slide).append(
        "<div class='slider__slide_profile" + data.response[i].status + "'>" +
            "<div class='absolute'>" +
                "<span class='profile-photos'>" +
                    "<img src='src/dating-camera-icon.png' class='profile-photos__icon'>" +
                    "<p class='profile-photos__number'>" + data.response[i].photo + "</p>"+
                "</span>" +
                "<span class='" + data.response[i].ratingStyle + "'>" + data.response[i].rating + "</span>" +
            "</div>" +
            "<a href='" + data.response[i].href + "'>" +
                "<div class='slider__slide_profile_photo'>" +
                    "<img src='" + data.response[i].url +"'>" +
                "</div>" +
            "</a>" +
            "<div class='slider__slide_profile_action'>" +
                "<div class='favorite'>" +
                    "<div class='favorite__content js-favorite'>" +
                        "<span class='star'></span>" +
                        "<span class='selected'>" + "Избранное" + "</span>" +
                    "</div>" +
                "</div>" +
                "<div class='message'>" +
                    "<div class='favorite__content'>" +
                        "<img src='src/dating-envelope-icon.png' class='mail'>" +
                        "<span class='send'>" + "Написать" + "</span>" +
                    "</div>" +
                "</div>" +
            "</div>" +
            "<div class='slider__slide_profile_details'>" +
                "<p class='name-age'>" + data.response[i].name + "</p>" +
                "<span class='" + data.response[i].indicator + "'></span>" +
                "<p class='city-country'>" + data.response[i].location + "</p>" +
            "</div>" +
        "</div>");
}

/***************************************** FILTERS ******************************************************/

$(".js-option").click(function (e) {
    target = e.target;
    $(".js-option-button").removeClass("active-option-button");
    $(target).addClass("active-option-button");
});


$(".js-option-button-new").click(function () {
 $(".new").css("display", "inline-block");
})

$(".js-option-button-popular").click(function () {
    $(".new").css("display", "none");
    $(".top").css("display", "inline-block");
})

$(".js-option-button-online").click(function () {
    $(".new").css("display", "none");
    $(".online-now").css("display", "inline-block");
})

/***************************************** FAVORITE PROFILE ******************************************************/

var $favorite = $(".js-favorite");
var $star = $(".star");

$favorite.click(function () {
      $(this).find(">:first-child").toggleClass("gold-star");
})

/***************************************** ARROW SCROLL TOP ******************************************************/

$(window).scroll( function(){
    var top_of_object = $('.slider').offset().top;
    var top_of_window = $(window).scrollTop();
    if( top_of_window > top_of_object ){
        $(".arrow-top").fadeIn();
    }else if( top_of_object > top_of_window ){
        $(".arrow-top").fadeOut();
    }
});

$(".arrow-top").click(function () {
    $('html, body').animate({scrollTop:0}, 'slow');
    return false;
})


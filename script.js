
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


var data = {
    "response": [
    {
        "photo": "12",
        "rating": "<span class='profile-rating'>" + "ТОП" + "</span>",
        "name": "Кристиночка, 28",
        "location": "Санкт-Петербург, Россия",
        "url": "src/dating_big_eight.png",
        "href": "#",
        "status":" top online-now new ",
        "indicator": " online-indicator "
    },
    {
        "photo": "3",
        "rating": "<span class='profile-rating'>" + "ТОП" + "</span>",
        "name": "Диана, 20",
        "location": "Самара, Россия",
        "url": "src/dating_big_four.png",
        "href": "#",
        "status":" top online-now new ",
        "indicator": " online-indicator "
    },
    {
        "photo": "145",
        "rating": "<span class='profile-rating'>" + "ТОП" + "</span>",
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
            "location": "Казань, Россия",
            "url": "src/dating_big_six.png",
            "href": "#",
            "status":" new ",
            "indicator": ""
        }
  ]
}

for (var i = 0; i < data.response.length; i++) {
    $(slide).append("<div class='slider__slide_profile" + data.response[i].status + "'>" +
        "<div class='absolute'>" +
        "<span class='profile-photos'>" + "<img src='src/dating-camera-icon.png' class='profile-photos__icon'>" + "<p class='profile-photos__number'>" + data.response[i].photo + "</p>"+ "</span>" +
     data.response[i].rating +
        "</div>" +
        "<a href='" + data.response[i].href + "'>" + "<div class='slider__slide_profile_photo'>" + "<img src='" + data.response[i].url +"'>" + "</div>" + "</a>" +
        "<div class='slider__slide_profile_action'>" +
        "<div class='favorite'>" +
        "<div class='favorite__content'>" +
        "<img src='src/dating-empty-star-icon.png' class='star'>" +
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
        "<p class='name-age'>" + data.response[i].name + "</p>" + "<span class='" + data.response[i].indicator + "'></span>" +
    "<p class='city-country'>" + data.response[i].location + "</p>" +
    "</div>" +
    "</div>");
}

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

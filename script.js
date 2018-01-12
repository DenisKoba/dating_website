
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
        "rating": "ТОП",
        "name": "Кристиночка, 28",
        "location": "Санкт-Петербург, Россия",
        "url": "src/dating_big_eight.png",
        "href": "#"
    },
    {
        "photo": "3",
        "rating": "ТОП",
        "name": "Диана, 20",
        "location": "Самара, Россия",
        "url": "src/dating_big_four.png",
        "href": "#"
    },
    {
        "photo": "145",
        "rating": "ТОП",
        "name": "Аня, 18",
        "location": "Ростов-на-Дону, Россия",
        "url": "src/dating_big_three.png",
        "href": "#"
    },

        {
            "photo": "17",
            "rating": "ТОП",
            "name": "Анжелика, 27",
            "location": "Чебоксары, Росси",
            "url": "src/dating_big_one.png",
            "href": "#"
        },
        {
            "photo": "12",
            "rating": "ТОП",
            "name": "Лариса, 32",
            "location": "Москва, Россия",
            "url": "src/dating_big_seven.png",
            "href": "#"
        },
        {
            "photo": "3",
            "rating": "ТОП",
            "name": "Настя, 21",
            "location": "Зеленоград, Россия",
            "url": "src/dating_big_five.png",
            "href": "#"
        },
        {
            "photo": "4",
            "rating": "ТОП",
            "name": "Евгения, 30",
            "location": "Ростов-на-Дону, Россия",
            "url": "src/dating_big_two.png",
            "href": "#"
        },
        {
            "photo": "28",
            "rating": "ТОП",
            "name": "Ольга, 25",
            "location": "Казань, Россия",
            "url": "src/dating_big_six.png",
            "href": "#"
        }
  ]
}

for (var i = 0; i < data.response.length; i++) {
    $(slide).append("<a href='" + data.response[i].href + "'>" + "<div class='slider__slide js-slide'>" +
        "<div class='slider__slide_profile'>" +
        "<div class='absolute'>" +
        "<span class='profile-photos'>" + "<img src='src/dating-camera-icon.png' class='profile-photos__icon'>" + "<p class='profile-photos__number'>" + data.response[i].photo + "</p>"+ "</span>" +
    "<span class='profile-rating'>" + "ТОП" + "</span>" +
        "</div>" +
        "<div class='slider__slide_profile_photo'>" + "<img src='" + data.response[i].url +"'>" + "</div>" +
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
        "<p class='name-age'>" + data.response[i].name + "</p>" +
    "<p class='city-country'>" + data.response[i].location + "</p>" +
    "</div>" +
    "</div>" +
    "</div>" + "</a>");
}
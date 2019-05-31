$(function () {
    let body = $("body");
    let event = $(".events-list__item");
    let location = $(".location");
    let eventName = $(".location__event-name");
    let eventCity = $(".location__city");
    let header = $(".header-main");
    let wrapper = $(".wrapper-event-box");
    let close = $(".events-close");
    let locationXY = {
        Lisbon: [-505, -72],
        London: [-544, -6],
        Paris: [-576, -27],
        Oslo: [-602, 31],
        Rome: [-612, -60],
        Moscow: [-783, 28],
        Athens: [-666, -85],
        Warsaw: [-653, -7],
        Ankara: [-712, -81],
        Kiev: [-701, -7],
        Madrid: [-526, -69],
        Dublin: [-517, 2]
    };
    let locationXYDesktop = {
        Lisbon: [530, 215],
        London: [570, 144],
        Paris: [593, 177],
        Oslo: [643, 96],
        Rome: [641, 201],
        Moscow: [847, 134],
        Athens: [689, 227],
        Warsaw: [689, 147],
        Ankara: [734, 217],
        Kiev: [719, 148],
        Madrid: [560, 215],
        Dublin: [536, 144]
    };
    let currentDotLocation = $(".location__dot").position();
    let initDotLocation = 183.359375;
    let finalDotLocationX = initDotLocation - currentDotLocation.left;
    let screenWidth = $(window).width();

    event.on("click", event => {
        event.preventDefault()
        let clickedElem = event.currentTarget;
        let events = $(".events-list__item");

        eventName.text(`${$(clickedElem).text()}`);
        eventCity.text(`${$(clickedElem).data("city")}`);
        location.css({"margin-bottom": "80px", "opacity": "100"});
        close.css({"display": "block"});

        if (screenWidth <= 560) {
            body.css({
                "background-position-x": `${locationXY[$(clickedElem).data("city")][0]}px`,
                "background-position-y": `${locationXY[$(clickedElem).data("city")][1]}px`
            });
        } else if (screenWidth < 977) {
            body.css({
                "background-position-x": `${locationXY[$(clickedElem).data("city")][0] - finalDotLocationX}px`,
                "background-position-y": `${locationXY[$(clickedElem).data("city")][1]}px`
            });
        } else {
            header.css({"display": "none"});
            wrapper.css({"margin-top": "442px"});
            location.show();
            location.css({
                "transition": "0.5s",
                "position": "absolute",
                "left": `${locationXYDesktop[$(clickedElem).data("city")][0]}px`,
                "top": `${locationXYDesktop[$(clickedElem).data("city")][1]}px`
            })
        }

        $(clickedElem).addClass("item--active");
        $(events).addClass("item--darker");
        $(clickedElem).removeClass("item--darker");
    });




    close.on("click", event => {
        let events = $(".events-list__item");
        close.hide();
        $(events).removeClass("item--darker");
        $(events).removeClass("item--active");
        if (screenWidth < 977) {
            location.css({"margin-bottom": "0px", "opacity": "0"});


        } else {
            location.hide();
            header.show();
            wrapper.css({"margin-top": "106px"})
        }
    })


});
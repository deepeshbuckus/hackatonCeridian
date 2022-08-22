let parentMenus =
    [
        {
            menu: "Analytics",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        },
        {
            menu: "Anomaly Days",
            child:
                [],
        }
    ];

let orderedPerentMenu = [{
    menu: "Anomaly Days",
    child:
        [],
}];

$(document).ready(function () {
    let menuArr1 = [];
    let menuArr2 = [];
    let menuArr3 = [];
    let menuArr4 = [];
    let menuArr5 = [];
    let menuArr6 = [];
    let menuArr7 = [];
    let menuArr8 = [];
    let menuArr9 = [];
    $.each(parentMenus, function (i, val) {
        console.log(i);
        if (i <= 8)
            menuArr1.push("<a href=\"\" class=\"list-group-item list-group-item-action\">" + val.menu + "</a>");
        if (i >= 9 && i <= 17)
            menuArr2.push("<a href=\"\" class=\"list-group-item list-group-item-action\">" + val.menu + "</a>");
        if (i >= 18 && i <= 26)
            menuArr3.push("<a href=\"\" class=\"list-group-item list-group-item-action\">" + val.menu + "</a>");
        if (i >= 27 && i <= 35)
            menuArr4.push("<a href=\"\" class=\"list-group-item list-group-item-action\">" + val.menu + "</a>");
        if (i >= 36 && i <= 44)
            menuArr5.push("<a href=\"\" class=\"list-group-item list-group-item-action\">" + val.menu + "</a>");
        if (i >= 45 && i <= 53)
            menuArr6.push("<a href=\"\" class=\"list-group-item list-group-item-action\">" + val.menu + "</a>");
        if (i >= 54 && i <= 62)
            menuArr7.push("<a href=\"\" class=\"list-group-item list-group-item-action\">" + val.menu + "</a>");
        if (i >= 63 && i <= 71)
            menuArr8.push("<a href=\"\" class=\"list-group-item list-group-item-action\">" + val.menu + "</a>");
        if (i >= 72 && i <= 80)
            menuArr9.push("<a href=\"\" class=\"list-group-item list-group-item-action\">" + val.menu + "</a>");
    });

    $.each(menuArr1, function (i, val) {
        console.log(val);
        $(".t1").append(val);
    });
    $.each(menuArr2, function (i, val) {
        console.log(val);
        $(".t2").append(val);
    });
    $.each(menuArr3, function (i, val) {
        console.log(val);
        $(".t3").append(val);
    });
    $.each(menuArr4, function (i, val) {
        console.log(val);
        $(".t4").append(val);
    });
    $.each(menuArr5, function (i, val) {
        console.log(val);
        $(".t5").append(val);
    });

    $.each(menuArr6, function (i, val) {
        console.log(val);
        $(".t6").append(val);
    });
    $.each(menuArr7, function (i, val) {
        console.log(val);
        $(".t7").append(val);
    });
    $.each(menuArr8, function (i, val) {
        console.log(val);
        $(".t8").append(val);
    });
    $.each(menuArr9, function (i, val) {
        console.log(val);
        $(".t9").append(val);
    });
});
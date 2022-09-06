$(".hamburger").on("click", function () {
    if ($(".navBar").css("display") == "none") {
        $(".navBar").css({display: "block"});
    } else if ($(".navBar").css("display") == "block") {
        $(".navBar").css({display: "none"});
    }
});

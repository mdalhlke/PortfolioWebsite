// Dropdown
$(document).ready(function () {
    $(".btn").click(function (e) {
        $(e.currentTarget)
            .parent(".parent")
            .children(".dropdown")
            .eq(0)
            .slideToggle(400);
    });
});

$(function () {
    $('#nav-header .menuicon').on('click', function () {
        $('#nav-list').toggleClass('pad');
        $('#adv').slideToggle(50);
    });
});
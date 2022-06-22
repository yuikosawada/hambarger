$('#btn').on('click', function () {
    $('body').toggleClass('open')

    var $btnIcon = $('#btn li'); //$をつけた変数名＝jQueryのオブジェクト　わかりやすくする

    if ($('body').hasClass('open')) {
        $btnIcon
            .removeClass('ri-menu-line')
            .addClass('ri-close-line')
    } else {
        $btnIcon
        .removeClass('ri-close-line')
        .addClass('ri-menu-line')
    }
})


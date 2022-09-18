$(function() {
    $('h5').each(function() {
        $(this).on('mousedown', function() {
            $('.box').css({
                'margin-left': '-=40px'
            })
        })
        $(this).on('mouseup', function() {
            $('.box').css({
                'margin-left': '+=40px'
            })
        })
    })
})
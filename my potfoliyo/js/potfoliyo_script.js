$(window).scroll(function(){
    w = $(window).scrollTop();

    if(w>150)
    {
        $('.main_header').addClass('position-fixed top-0 start-0 w-100 top_header_fix')
    }
    else
    {
        $('.main_header').removeClass('position-fixed top-0 start-0 w-100 top_header_fix')
    }
})


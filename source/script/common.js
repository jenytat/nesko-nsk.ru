$(document).ready(function(){
    $('.sing-in__radio input').click(function(){
        $('.sing-in__radio input').removeClass('active');

        $(this).addClass('active');
    });

    $('#fl').click(function(){
        $('.sing-in__snils').addClass('active');
        $('.sing-in__ip').removeClass('active');
        $('.sing-in__ul').removeClass('active');
    });
    $('#ip').click(function(){
        $('.sing-in__snils').removeClass('active');
        $('.sing-in__ip').addClass('active');
        $('.sing-in__ul').removeClass('active');
    });
    $('#ul').click(function(){
        $('.sing-in__snils').removeClass('active');
        $('.sing-in__ip').removeClass('active');
        $('.sing-in__ul').addClass('active');
    });

    $('.account__list span').click(function(){
        $('.account__list span').removeClass('active');
        $(this).addClass('active');
    });

    $('#ac-info').click(function(){
        $('.account__order-info').addClass('active');
        $('.account__order-docs').removeClass('active');
        $('.account__order-last').removeClass('active');
    });
    $('#ac-docs').click(function(){
        $('.account__order-info').removeClass('active');
        $('.account__order-docs').addClass('active');
        $('.account__order-last').removeClass('active');
    });
    $('#ac-last').click(function(){
        $('.account__order-info').removeClass('active');
        $('.account__order-docs').removeClass('active');
        $('.account__order-last').addClass('active');
    });

    $('.header__sing-in').click(function(){
        $(this).addClass('active');
        $('.sing-in').addClass('active');
    });
    $('.header___sing-up').click(function(){
        $(this).addClass('active');
        $('.regist').addClass('active');
    })

    $(document).mouseup(function (e){ 
		var popup = $(".sing-in__wrap, .regist__wrap"); 
		if (!popup.is(e.target) && popup.has(e.target).length === 0) { 
            $('.sing-in, .regist').removeClass('active'); 
            $('.header__sing-in, .header___sing-up').removeClass('active');
		}
	});

    $('.question-1').click(function(){
        $('.question__wrap-1').addClass('active');
    });

    $('.question__wrap-1 a').click(function(){
        $('.question__wrap-1').removeClass('active');
    });

    $('.question-2').click(function(){
        $('.question__wrap-2').addClass('active');
    });

    $('.question__wrap-2 a').click(function(){
        $('.question__wrap-2').removeClass('active');
    });

    $('.info__btn > a').click(function(){
        $(this).css('display', 'none');
        $('.info__change').addClass('active');
    });
    $('.info__change a').click(function(){
        $('.info__btn > a').css('display', 'flex');
        $('.info__change').removeClass('active');
    });
    $('.info__wrap a').click(function(){
        $('.info__row input').css('display', 'block');
        $('.info__row .text').css('display', 'none');
        $('.info__btn > a').css('display', 'none');
        $('.info__wrap_btn').css('display', 'flex');
        $('.btn-change').css('display', 'none');
    });
    $('.info__wrap_btn a').click(function(){
        $('.info__row input').css('display', 'none');
        $('.info__row .text').css('display', 'inline');
        $('.info__btn > a').css('display', 'flex');
        $('.info__wrap_btn').css('display', 'none');
        $('.btn-change').css('display', 'flex');
    });

    $('.regist__list span').click(function(){
        $('.regist__list span').removeClass('active');

        $(this).addClass('active');
    });

    $('.regist__fl').click(function(){
        $('.regist__field').css('display', 'flex');
        $('.regist__field-ip').css('display', 'none');
        $('.regist__bottom-ip').css('display', 'none');
        $('.regist__field-up').css('display', 'none');
        $('.regist__bottom-ul').css('display', 'none');
    });

    $('.regist__ip').click(function(){
        $('.regist__field').css('display', 'none');
        $('.regist__field-ip').css('display', 'flex');
        $('.regist__bottom-ip').css('display', 'flex');
        $('.regist__field-up').css('display', 'none');
        $('.regist__bottom-ul').css('display', 'none');
    });

    $('.regist__ul').click(function(){
        $('.regist__field').css('display', 'none');
        $('.regist__field-ip').css('display', 'none');
        $('.regist__bottom-ip').css('display', 'none');
        $('.regist__field-up').css('display', 'flex');
        $('.regist__bottom-ul').css('display', 'flex');
    });

    $('.application__btn input').click(function(){
        $('.application__btn input').removeClass('active');
        $(this).addClass('active');

        if($('#active').hasClass('active')) {
            $('.application__active').addClass('active');
            $('.application__draft').removeClass('active');
        } else if($('#draft').hasClass('active')) {
            $('.application__draft').addClass('active');
            $('.application__active').removeClass('active');
        }
    });

    $('.popup-order__close').click(function(){
        $('.popup-order').css('display', 'none');
    });
});


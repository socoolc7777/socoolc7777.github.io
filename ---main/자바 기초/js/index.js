var cnt = 0;

$('.badge').on('click', function (){
    cnt++;
    if (cnt % 2 == 1) $('.badge').html('Light 🔄')
    else $('.badge').html('Dark 🔄')
})

$('.navbar-toggler').on('click', function () {
    $('.list-group').toggleClass('show');
})

$('.btn-modal').on('click', function () {
    $('.black-bg').addClass('show-modal');
})

$('#close').on('click', function () {
    $('.black-bg').removeClass('show-modal');
})

$('.black-bg').on('click', function (e) {
    if($(e.target).is($('.black-bg'))) $('.black-bg').removeClass('show-modal');
})

$('form').on('submit', function () {
    // if ($('#id').val() == '') {
    //     alert('이메일을 입력하세요');
    // }
    if (/\S+@\S+\.\S+/.test($('#id').val()) == false) {
        alert('이메일 형식을 확인하세요')
    }
    else if ($('#pw').val().length <= 6) {
        alert('비밀번호가 너무 짧습니다')
    }
    else if (/[A-Z]/.test($('#pw').val()) == false) {
        alert('비밀번호에 대문자를 넣어주세요')
    }
})

var time = 4;
var now = 1;

setInterval(() => {
    if (time == 0) {
        $('.alert').hide();
    }
    $('#timer').html(time)
    time--;
}, 1000);

$('.slide-1').on('click', function () {
    $('.slide-container').css('transform', 'translateX(0vw)')
    now = 1;
})
$('.slide-2').on('click', function () {
    $('.slide-container').css('transform', 'translateX(-100vw)')
    now = 2;
})
$('.slide-3').on('click', function () {
    $('.slide-container').css('transform', 'translateX(-200vw)')
    now = 3;
})
$('.slide-next').on('click', function () {
    if (now == 3) now--;
    $('.slide-container').css('transform', `translateX(${-100 * now}vw)`)
    now++;
})
$('.slide-prev').on('click', function () {
    if (now == 3) $('.slide-container').css('transform', 'translateX(-100vw)')
    else if (now == 2) $('.slide-container').css('transform', 'translateX(0vw)')
    else if (now == 1) now++;
    now--;
})

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) $('.navbar-brand').css('font-size', '20px')
    else $('.navbar-brand').css('font-size', '30px')
})


$('.lorem').on('scroll', function () {
    var scrolltop = document.querySelector('.lorem').scrollTop;
    var scrollheight = document.querySelector('.lorem').scrollHeight;
    var clientheight = document.querySelector('.lorem').clientHeight;

    if (scrolltop + clientheight + 5 > scrollheight) alert('다읽음')
});
        // var temp=0;
        // $('#send-answer').on('click', function () {
        //     temp++;
        //     if ($('#answer').val() == '1335') alert('성공');
        //     if (temp % 3 == 0) alert('멍청아');
        // })
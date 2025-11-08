

$(function () {
    $('.menu-item-has-children').on('mouseenter', function () {
        $(this).find('.sub-menu').addClass('open');
        $(this).find('.sub-menu').stop(true, true).hide().slideDown(200);

    });

    $('.menu-item-has-children').on('mouseleave', function () {
        $(this).find('.sub-menu').removeClass('open');
        $(this).find('.sub-menu').stop(true, true).hide();

    });
});


if (window.matchMedia('(max-width: 1200px)').matches) {

    $(function () {
        $('.menu-item-has-children').on('mouseenter', function () {
            $(this).removeClass('close'); //タブレットサイズ時の＋とーの表示切り替え
        });

        $('.menu-item-has-children').on('mouseleave', function () {
            $(this).addClass('close');//タブレットサイズ時の＋とーの表示切り替え
        });
    });

};


//タブレットサイズの時の右上ハンバーガーメニュー開閉
$(function () {

    $('.Nav__btn').on('click', function () {
        if ($(this).find('a').hasClass('close')) {

            $(".Nav__body").stop(true, true).slideDown(200);

            $(this).find('a').removeClass('close');
            $(this).find('a').addClass('open');

            $(".Nav__body").removeClass('close');
            $(".Nav__body").addClass('open');


        } else {

            $(".Nav__body").stop(true, true).slideUp(200);

            $(this).find('a').removeClass('open');
            $(this).find('a').addClass('close');

            $(".Nav__body").addClass('close');
            $(".Nav__body").removeClass('open');

        }
    });

});




const layer2 = document.querySelector('.TopHead__layer2');

window.addEventListener('scroll', () => {

    const scrollY = window.scrollY;

    //レイヤー2の処理
    const offsetY = scrollY * 0.2;    // スクロール量に応じてずらす量
    layer2.style.transform = `translate3d(0px, ${offsetY}px, 0px)`;

    //is-fixedのクラス付与の処理
    const header = document.querySelector('.Header');

    if (scrollY > 0) { // スクロールが始まったら
        header.classList.add('is_fixed');
    } else {
        header.classList.remove('is_fixed');
    }
});
// ハンバーガーメニュー
var hamburger = $('.hamburger-nav');

// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
    // .hamburgerの表示・非表示を繰り返す
    hamburger.toggleClass('hamburger-menu-active');
});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {
    // ハンバーガーメニューを閉じる
    hamburger.removeClass('hamburger-menu-active');
});

// Slickリファレンス
$('.carousel').slick({
    autoplay: true, // 自動再生
    autoplaySpeed: 5000, // 自動再生の速さ、単位はミリ秒
    arrows: false, // 左右のナビゲーションを無効
    dots: true, // ドットを表示
    fade: true, // フェードで切り替え
});

// Smart Tab
$('#smarttab').smartTab({
    enableUrlHash: false // タブidにもとづいたURLハッシュの付与を無効
});

// Animate
// 左から
$('.animate__animated.left').waypoint({
    handler: function (direction) {
        // 要素が画面中央に来るとここが実行される
        if (direction === 'down') {
            /**
             * 下方向のスクロール
             * イベント発生元の要素に
             * fadeOutUpを削除して
             * fadeInUpアニメーションを付けることで
             * アニメーションを開始
             */
            $(this.element)
                .addClass('animate__fadeInLeft');
        }
    },

    // 要素が画面中央に来たらhandlerを実行
    offset: '50%',
});
// 右から
$('.animate__animated.right').waypoint({
    handler: function (direction) {
        // 要素が画面中央に来るとここが実行される
        if (direction === 'down') {
            /**
             * 下方向のスクロール
             * イベント発生元の要素に
             * fadeOutUpを削除して
             * fadeInUpアニメーションを付けることで
             * アニメーションを開始
             */
            $(this.element)
                .addClass('animate__fadeInRight');
        }
    },

    // 要素が画面中央に来たらhandlerを実行
    offset: '50%',
});

// アコーディオン
$('.question').on('click', function (e) {
    // .answerを表示・非表示
    $('.answer').slideToggle();

    // アイコンを反転
    $(this).find('.icon').toggleClass('open');
});
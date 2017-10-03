// @codekit-prepend "echo.js"


// smooth scroll
jQuery(document).ready(function($) {
    $('[data-smooth]').smoothScroll();
});


// web fonts
$(window).load(function () {
    $('[data-webfonts]').attr("rel", "stylesheet");
});


//echo
echo.init() ;

//文字数カウントダウン
//変更があったら残り文字数を表示
$(document).on("change keyup", ".limited", function () {
    var count, $parent, maxLength, $target;

    $parent = $(this).parent();
    $target = $(".counter", $parent);
    if ($target.length == 1) {
        count = $(this).val().length;
        maxLength = $(this).attr('maxlength');
        if (isFinite(maxLength)) {
            $("span.count", $target).text(parseInt(maxLength) - count);
        }
        console.log(count);
    }
});

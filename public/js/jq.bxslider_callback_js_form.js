;(function($){
    var submitDisabled = false;

    $.fn.callbackNextBind = function (e) {
        var pagenum = $('img#form_status').attr('data-page-num');

        $.fn.clearErrors('Step' + pagenum);

        var validation_result = $.fn.isValid('Step' + pagenum);
        if (validation_result) {
            if (pagenum == 5) { //登録フォームをサブミット
                $('input,select').removeAttr("disabled");

                if (submitDisabled == false) {
                    submitDisabled = true;
                    $("#form").submit();

                    // スライドしない
                    return false;
                }
            } else {
                pagenum ++;
                $('img#form_status').attr('data-page-num', pagenum);
            }
            // スライド実行
            return true;
        }
        // スライドしない
        return false;
    };

    $.fn.callbackPrevBind = function (e) {
        var pagenum = $('img#form_status').attr('data-page-num');
        if (pagenum >= 2) {
            pagenum --;
            $('img#form_status').attr('data-page-num', pagenum);

            // スライド実行
            return true;
        }
        // スライドしない
        return false;
    };

})(jQuery);

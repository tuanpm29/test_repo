
$(function($) {
    /**
     * APIにメールアドレスを送信して、ドメインが正しいかを判断
     */
    $.fn.checkMail = function (mail, async){
        if (mail) {
            if (!$.fn.checkMailReg(mail)) {
                return false;
            }

            return true;
        }
        return true;
    }

    /**
     *メールアドレスの半角置換
     */
    $.fn.replaceMail = function (mail){
        // 全角英数字->半角英数字
        mail = mail.replace(/[０-９Ａ-Ｚａ-ｚ]/g, function (s) {
            return String.fromCharCode(s.charCodeAt(0) - 65248);
        });
        // 全角記号->半角記号
        var reg = /[！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝]/g;
        mail = mail.replace(reg, function (s) {
            return String.fromCharCode(s.charCodeAt(0) - 65248);
        }).replace(/[‐－―]/g, '-');
        // 半角英数字、記号以外の文字列は除去
        mail = mail.replace(/[^0-9a-zA-Z\+\?\/\._@\-]+/g, "");

        return mail;
    }

    /**
     * メールアドレスを正規表現でチェック
     */
    $.fn.checkMailReg = function (mail){
        if (mail) {
            if (!mail.match(/^[\w\-]+([\.\w\-\+\?\/]+)*@[a-zA-Z0-9]+([\.a-zA-Z0-9-])+([\.][a-zA-Z0-9-]{2,4})$/)) {
                return false;
            }
        }
        return true;
    }

    /**
     * メールアドレスをUrlEncodeする
     * ※GETでメールアドレスに「+」が入っていたときの対応（POSTの場合は不要）
     */
    $.fn.UrlEncodeMail = function (mail){
        return mail.replace(/[\+]+/g, "%2B");
    }
});

/** *************************************************************
 *  横スクロール型マルチステップ登録フォーム用
 *  入力チェック関数
 ***************************************************************/
jQuery(document).ready(function($) {
    // ----------------------------------------------------------------------------
    // 各ステップごとの入力項目定義
    //（ステップ数が変わったり、各ステップのチェック項目が変わったら要修正）
    // ----------------------------------------------------------------------------
    $.targetIds = [
    /* Step1 */ ["license","req_emp_type"],
    /* Step2 */ ["req_date","job_description"],
    /* Step3 */ ["addr1", "addr2", "addr3", "req1_addr1"],
    /* Step4 */ ["name_kan", "name_cana", "birth_year"],
    /* Step5 */ ["mob_phone", "mob_mail", "retirement_intention"]
    ];
    // ----------------------------------------------------------------------------
    // 入力値のエラーメッセージ
    // ----------------------------------------------------------------------------
    $.validationMessages = {
        "name_kan"             : 'お名前を入力してください',
        "name_cana"            : 'ふりがなを入力してください',
        "name_cana_format"     : 'ふりがなは、ひらがなで入力してください',
        "addr"                 : 'お住まいの選択または入力してください',
        "addr1"                : '都道府県を選択してください',
        "addr2"                : '市区町村を選択してください',
        "addr3"                : '番地以下を入力してください',
        "mob_empty"            : '携帯電話番号を入力してください',
        "mob_max_length"       : '携帯電話番号の桁数が多すぎます',
        "mob_min_length"       : '携帯電話番号の桁数が足りていません',
        "mob_format"           : '携帯電話番号に使用できるのは数字だけです',
        "mob_format2"          : '携帯電話番号を正しく入力してください',
        "mob_mail"             : 'メールアドレスを正しく入力してください',
        "license"              : '保有資格をひとつ以上選択してください',
        "experience_year"      : '介護経験年数を選択してください',
        "req_emp_type"         : '希望雇用形態を選択してください',
        "req_date"             : '入職希望時期を選択してください',
        "job_description"      : '現職務内容を選択してください',
        "job_change_count"     : '転職回数を選択してください',
        "birth_year"           : '生まれ年を選択してください',
        "birth_year_format"    : '生まれ年は4桁の数値で入力してください',
        "retirement_intention" : '退職意向を選択してください',
        "req1_addr1"           : '希望勤務都道府県（第一希望）を選択してください'
    };
    // ----------------------------------------------------------------------------
    //  項目別コード(アクセスログの送信時に使用)
    // ----------------------------------------------------------------------------
    $.error_codes = {
        "name_kan":             1,  // お名前
        "name_cana":            2,  // ふりがな
        "addr1":                3,  // 都道府県
        "addr2":                4,  // 市区町村
        "addr3":                5,  // 市区町村以下
        "mob_phone":            6,  // 携帯電話番号
        "mob_mail":             7,  // メールアドレス
        "license":              8,  // 保有資格
        "experience_year":      9,  // 実務経験年数
        "req_emp_type":         10, // 就業形態
        "req_date":             11, // 転職時期
        "job_description":      12, // 現職務内容
        "job_change_count":     13, // 転職回数
        "birth_year":           14, // 生まれた年
        "retirement_intention": 15, // 退職意向
        "req1_addr1":           16  // 希望勤務都道府県（第一希望）
    };
    // ----------------------------------------------------------------------------
    //  氏名のNGワードパターンの作成
    // ----------------------------------------------------------------------------
    var lastNames = ["看護","かんご","カンゴ"];
    var firstNames = ["花子","はなこ","ハナコ"];
    var replacePatterns = [];
    for (var i = 0; i < lastNames.length; i++) {
        for (var j = 0; j < firstNames.length; j++) {
            replacePatterns.push(lastNames[i] + firstNames[j]);
        }
    }
    var replacePattern = replacePatterns.join("|");

    // ----------------------------------------------------------------------------
    // バリデーション実行
    // (引数の viewPage には、"Step1"のような文字列が渡される想定)
    // ----------------------------------------------------------------------------
    $.fn.checkValidate = function (viewPage) {

        // エラーの発生した箇所のキーとメッセージのマップを初期化（この関数の返り値）
        var errors = {};

        // 入力フォームのステップ番号（最初が 0）
        var stepindex = Number(viewPage.slice(-1)) - 1 ;

        // 入力チェック項目の配列をループ
        for ( var i = 0;  i < $.targetIds[stepindex].length; ++ i ) {

            var input_key = $.targetIds[stepindex][i];

            switch (input_key) {

                case 'name_kan':  // 名前（漢字）：エラーコード=1
                    var value = $.trim($("#" + input_key).val());
                    if ( value == '' || value == 0) {
                        errors[input_key] = $.validationMessages[input_key];
                        $("#" + input_key).val(value);
                    } else {
                        // 空白削除
                        var str = value.replace(/\s+/g, "");
                        // エラー文言削除
                        str = str.replace(new RegExp(replacePattern, "g"), "");
                        $("#" + input_key).val(str);
                        if ( str == '' || str == 0) {
                            errors[input_key] = '正しいお名前をご入力ください';
                        }
                    }
                    break;

                case 'addr1':  // 都道府県：エラーコード=3
                case 'addr2':  // 都道府県：エラーコード=4
                case 'addr3':  // 都道府県：エラーコード=5
                    if ( $("#" + input_key).length ) {
                        var value = $.trim($("#" + input_key).val());
                        $("#" + input_key).val(value);
                        if ( value == '' || value == 0 || value.indexOf('例：') != -1) {
                                errors[input_key] = $.validationMessages[input_key];
                                $('p#zip2').addClass('on');
                                $('p.addTxt').css('display', 'none');
                                $('.acoArea').show();
                            }
                    }
                    break;

                case 'birth_year': // 生まれた年：エラーコード=14
                case 'retirement_intention': // 退職意向：エラーコード=15
                case 'req1_addr1': // 希望勤務都道府県（第一希望）：エラーコード=16
                    if ( $("#" + input_key).length ) {
                        var value = $.trim($("#" + input_key).val());
                        $("#" + input_key).val(value);
                        if ( value == '' || value == 0 || value.indexOf('例：') != -1) {
                            errors[input_key] = $.validationMessages[input_key];
                        }
                    }
                    break;

                case 'name_cana':  // 名前（ふりがな）：エラーコード=2
                    var name_cana = $("#name_cana").val();
                    $("#" + input_key).val($.trim(name_cana));
                    if ($.trim(name_cana) == '' || $.trim(name_cana) == '例：かんご　はなこ') {
                        errors[input_key] = $.validationMessages[input_key];
                    } else {
                        var match = ($.trim(name_cana)).match(/^[ぁ-んーァ-ヴ　 ]+$/);
                        if (!match) {
                            errors[input_key] = $.validationMessages[input_key + "_format"];
                        }
                    }
                    break;

                case 'mob_phone': // 携帯電話番号：エラーコード=6
                    var mob_phone = $.trim($("#mob_phone").val());
                    mob_phone = $.replaceMobPhone(mob_phone);
                    $("#mob_phone").val(mob_phone);
                    var mob_phone_err = $.validateMobPhone(mob_phone);
                    if (mob_phone_err != '') {
                        errors["mob_phone"] = mob_phone_err;
                    }
                    break;

                case 'mob_mail':  // 携帯メールアドレス：エラーコード=7
                    var mob_mail = $.trim($("#mob_mail_inp").val());
                    if ($.trim(mob_mail) != '例：aaa@aaa.ne.jp(任意)'){
                        mob_mail = $.replaceMobMail(mob_mail);
                        $("#mob_mail_inp").val(mob_mail);
                        if (mob_mail != '') {
                            if (!$.fn.checkMailReg(mob_mail)) {
                                errors[input_key] = $.validationMessages[input_key];
                            } else if (!$.fn.checkMail(mob_mail, false)) {
                                errors[input_key] = $.validationMessages[input_key];
                            }
                        }
                    }
                    break;

                case 'license': //保有資格：エラーコード=8
                case 'req_emp_type':  // 就業形態：エラーコード=10
                case 'req_date':  // 転職時期：エラーコード=12
                case 'job_description':  // 現職務内容：エラーコード=12
                    if ( ! $("input[name^=" + input_key + "]").is(':checked') ) {
                        errors[input_key] = $.validationMessages[input_key];
                    }
                    break;

                default:
                    break;
            }
        }

        // エラーコードの配列を作成
        var error_cd = new Array();
        for ( var key in errors ) {
            error_cd.push($.error_codes[key]);
        }

        // エラーメッセージとエラーコードを返却
        return { "errors": errors, "error_cd": error_cd };
    };

    // ----------------------------------------------------------------------------
    // 電話番号の半角置換
    // ----------------------------------------------------------------------------
    $.replaceMobPhone = function (mob_phone){
        // 全角数字->半角数字
        mob_phone = mob_phone.replace(/[０-９]/g, function (s) {
            return String.fromCharCode(s.charCodeAt(0) - 65248);
        });
        // 半角数字以外の文字列は除去
        mob_phone = mob_phone.replace(/[^0-9]+/g, "");

        return mob_phone;
    }

    // ----------------------------------------------------------------------------
    // メールアドレスの半角置換
    // ----------------------------------------------------------------------------
    $.replaceMobMail = function (mob_mail){
        return $.fn.replaceMail(mob_mail);
    }

    // ----------------------------------------------------------------------------
    // 携帯電話番号のチェック
    // ----------------------------------------------------------------------------
    $.validateMobPhone = function (mob_phone){
        if ($.trim(mob_phone) == '' || $.trim(mob_phone) == '例：09012345678') {
            return $.validationMessages["mob_empty"];
        }
        if (mob_phone.match(/[^0-9]/)) {
            return $.validationMessages["mob_format"];
        }
        if (mob_phone.match(/^050|^070|^080|^090/)) {
            var maxlen = 11;
            var minlen = 11;
        } else {
            var maxlen = 10;
            var minlen = 10;
        }
        if (maxlen < mob_phone.length) {
            return $.validationMessages["mob_max_length"];
        }
        if (minlen > mob_phone.length) {
            return $.validationMessages["mob_min_length"];
        }
        if (!mob_phone.match(/^0{1}[0-9]{9,10}$/)) {
            // 0から始まる11or10桁の数値
            return $.validationMessages["mob_format2"];
        }

        return "";
    }
});

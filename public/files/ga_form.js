/**
 * GAタグの送信処理
 * ※LP毎に各項目のSTEP数が変わることを想定して、
 *  PC側：/js/pc/form/pc_XXX.js
 *  SP側：/js/sp/form/sp_XXX.js
 * のcurrentStepを使用
 */

$(function($) {

    var lpNo = '';
    // ------------------------------------------------------------------------
    // テンプレート番号を取得
    // ------------------------------------------------------------------------
    lpNo = $(':hidden[name="t"]').val();
    if (!lpNo) {
        // LP値をURLから取得
        var urls = location.href.match(/PC_\d{1,}|SP_\d{1,}/g);
        if (urls && urls[0]) {
            lpNo = urls[0];
        }
    }

    // ------------------------------------------------------------------------
    // GAタグ設定
    // ------------------------------------------------------------------------
    // GAオブジェクト
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                            })(window,document,'script','//www.google-analytics.com/analytics.js','_ga');
    // GAトラッカーを作成
    _ga('create', 'UA-98808329-1', 'auto');
    _ga('send', 'pageview');

    // GA用に置換
    var escapeIdToGA = function(content){
        content = content.toLowerCase();
        return content
            .replace('license', 'qualification')
            .replace('experience_year', 'yearofexperience')
            .replace('req_emp_type', 'employmentstatus')
            .replace('req_date', 'jobentrytiming')
            .replace('job_description', 'currentjob')
            .replace('job_change_count', 'numberofchange')
            .replace('zip2', 'address5')
            .replace('zip', 'address1')
            .replace('req1_addr1', 'employmentarea')
            .replace('addr1', 'address2')
            .replace('addr2', 'address3')
            .replace('addr3', 'address4')
            .replace('name_kan', 'name')
            .replace('name_cana', 'hurigana')
            .replace('birth_year', 'birthyear')
            .replace('mob_mail', 'mailaddress')
            .replace('mob_phone', 'phonenumber')
            .replace('retirement_intention', 'retirementintention')
            .replace(/\-/g, '_');
    };

    // ------------------------------------------------------------------------
    // 選択肢A/B
    // ------------------------------------------------------------------------
    var side = '';
    $.setGASide = function (arg) {
        side = arg;
        $(':hidden[name="pattern"]').val(arg);
    }

    $.sendGA = function (actionType, label) {
        var action = 'none';
        if (actionType == 1) {
            action = 'click';
        } else if (actionType == 3) {
            action = 'link';
        }
        if (label) {
            label = escapeIdToGA(label);
        }
        if (lpNo) {
            var lbl = lpNo + '_' + label;
            if (side) {
                lbl += '_' + side;
            }
            //console.log(lbl);
            // ga
            _ga('send', 'event', 'listing', action, lbl, 0, {'nonInteraction': 1});
        }
    };
    // 資格
    $('input[name="license[]"]').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP1-license');
        } else {
            $.sendGA(1, currentStep + '-license');
        }
    });
    // 介護経験年数
    $('select[name="experience_year"]').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP1-experience_year');
        } else {
            $.sendGA(1, currentStep + '-experience_year');
        }
    });
    $('input[name^="experience_year"]').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP1-experience_year');
        } else {
            $.sendGA(1, currentStep + '-experience_year');
        }
    });
    // 希望雇用形態
    $('select[name="req_emp_type"]').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP2-req_emp_type');
        } else {
            $.sendGA(1, currentStep + '-req_emp_type');
        }
    });
    // 希望雇用形態
    $('input[name^="req_emp_type"]').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP2-req_emp_type');
        } else {
            $.sendGA(1, currentStep + '-req_emp_type');
        }
    });

    // 入職希望時期
    $('select[name="req_date"]').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP2-req_date');
        } else {
            $.sendGA(1, currentStep + '-req_date');
        }
    });
    // 入職希望時期
    $('input[name^="req_date"]').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP2-req_date');
        } else {
            $.sendGA(1, currentStep + '-req_date');
        }
    });
    // 現職務内容
    $('select[name="job_description"]').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP2-job_description');
        } else {
            $.sendGA(1, currentStep + '-job_description');
        }
    });
    // 現職務内容
    $('input[name^="job_description"]').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP2-job_description');
        } else {
            $.sendGA(1, currentStep + '-job_description');
        }
    });
    // 転職回数
    $('select[name="job_change_count"]').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP2-job_change_count');
        } else {
            $.sendGA(1, currentStep + '-job_change_count');
        }
    });
    // 転職回数
    $('input[name^="job_change_count"]').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP2-job_change_count');
        } else {
            $.sendGA(1, currentStep + '-job_change_count');
        }
    });
    // 郵便番号
    $('#zip').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP3-zip');
        } else {
            $.sendGA(1, currentStep + '-zip');
        }
    });
    $('#zip2').on('click', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP3-zip2');
        } else {
            $.sendGA(1, currentStep + '-zip2');
        }
    });
    // 都道府県
    $('#addr1').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP3-addr1');
        } else {
            $.sendGA(1, currentStep + '-addr1');
        }
    });
    // 市区町村
    $('#addr2').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP3-addr2');
        } else {
            $.sendGA(1, currentStep + '-addr2');
        }
    });
    // 番地建物
    $('#addr3').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP3-addr3');
        } else {
            $.sendGA(1, currentStep + '-addr3');
        }
    });
    // 希望勤務都道府県（第一希望）
    $('#req1_addr1').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP5-req1_addr1');
        } else {
            $.sendGA(1, currentStep + '-req1_addr1');
        }
    });
    // お名前（漢字）
    $('#name_kan').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP4-name_kan');
        } else {
            $.sendGA(1, currentStep + '-name_kan');
        }
    });
    // お名前（ふりがな）
    $('#name_cana').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP4-name_cana');
        } else {
            $.sendGA(1, currentStep + '-name_cana');
        }
    });
    // 生まれ年
    $('#birth_year').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP4-birth_year');
        } else {
            $.sendGA(1, currentStep + '-birth_year');
        }
    });
    // メールアドレス
    $('#mob_mail_inp').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP5-mob_mail');
        } else {
            $.sendGA(1, currentStep + '-mob_mail');
        }
    });
    // 携帯電話番号
    $('#mob_phone').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP5-mob_phone');
        } else {
            $.sendGA(1, currentStep + '-mob_phone');
        }
    });
    $('#mob_phone_inp').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP5-mob_phone');
        } else {
            $.sendGA(1, currentStep + '-mob_phone');
        }
    });
    // 退職意向
    $('#retirement_intention').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP5-retirement_intention');
        } else {
            $.sendGA(1, currentStep + '-retirement_intention');
        }
    });
    $('input[name^="retirement_intention"]').on('change', function(){
        if (!currentStep) {
            $.sendGA(1, 'STEP5-retirement_intention');
        } else {
            $.sendGA(1, currentStep + '-retirement_intention');
        }
    });

    // ページ表示
    $.onSlideView = function(formId) {
        // ランディング
        $.sendGA(1, 'STEP1-OPEN');
    };
    // バリデーションエラー
    $.onValidateError = function(formId, key) {
        // バリデーションエラー
        $.sendGA(1, 'STEP' + formId + '-' + key + '-error');
    };
    // 次へ
    $.onNext = function(formId) {
        $.sendGA(1, 'STEP' + formId + '-next');
    };
    // 戻る
    $.onPrev = function(formId) {
        $.sendGA(1, 'STEP' + formId + '-back');
    };

    // 郵便番号（オートコンプリートから選択）
    $.onZipAuto = function() {
        if (!currentStep) {
            $.sendGA(1, 'STEP3-zip-select');
        } else {
            $.sendGA(1, currentStep + '-zip-select');
        }
    };
    // メールアドレス（オートコンプリートから選択）
    $.onMobMailAuto = function() {
        if (!currentStep) {
            $.sendGA(1, 'STEP5-mob_mail-select');
        } else {
            $.sendGA(1, currentStep + '-mob_mail-select');
        }
    };

    // 利用規約
    $('#kiyaku').on('click', function(){
        $.sendGA(3, 'kiyaku');
    });
    // 個人情報の取り扱いについて
    $('#kojin_joho').on('click', function(){
        $.sendGA(3, 'kojinjoho');
    });
    // 運営会社
    $('#campany').on('click', function(){
        $.sendGA(3, 'campany');
    });
    // プライバシーマーク
    $('#privacymark').on('click', function(){
        $.sendGA(3, 'privacymark');
    });

});

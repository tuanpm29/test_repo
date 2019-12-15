currentStep = 'STEP1';

$(function() {
    // ------------------------------------------------------------------------
    // フォームの中でIDが重複しているチェックボックスを削除
    // (フォームをサブミットする直前に呼ぶこと)
    // ------------------------------------------------------------------------
    $.eliminateDuplicateCheckboxes = function() {
        var ids = "";
        $('#form input[type=checkbox]').each(function(n) {
            var id = $(this).attr("id");
            if ( ids.indexOf(id) >= 0 )
                $(this).remove();
            else
                ids = ids  +  ("/" + id);
        });
    };

    // ------------------------------------------------------------------------
    // 入力要素のエラー状態をクリア
    // ------------------------------------------------------------------------
    $.fn.clearErrors = function (formId) {
        $('#' + formId).find('.error_message').each(function(i, elem) {
            if ($(elem).css('visibility') === 'visible') {
                $(elem).css({'visibility':'hidden'}).text("");
            }
        });
        $('#' + formId).find('.err').each(function(i, elem) {
            $(elem).removeClass('err');
        });
    };

    // ------------------------------------------------------------------------
    // 各ページごとのバリデーション
    // ------------------------------------------------------------------------
    $.fn.isValid = function (formId) {

        // バリデーションの実行
        var result = $.fn.checkValidate(formId);

        // バリデーションの結果をUIに反映
        for(key in result.errors) {

            //エラーメッセージの反映
            $("#" + key + "_errmsg").text(result.errors[key]).css({visibility: 'visible'});
            $("#" + key).addClass('err');

            // addr1とaddr2の場合の処理
            if ( key.indexOf("addr1") == 0 || key.indexOf("addr2") == 0 ) {
                $('#address12_error').css({visibility: 'visible'});
                if (key.indexOf("addr1") == 0) {
                    $("#addr1or2_errmsg0").text(result.errors[key]).css({visibility: 'visible'});
                }
                else {
                    if ( result.errors['addr1'] )
                        $("#addr1or2_errmsg1").text(result.errors[key]).css({visibility: 'visible'});
                    else
                        $("#addr1or2_errmsg0").text(result.errors[key]).css({visibility: 'visible'});
                }
            }
        }

        // エラーの起こった箇所を示すキーの配列を取得
        var errorKeys = $.map(result.errors, function(value, key) {
            return key;
        });

        if (typeof $.sendGA === 'function') {
            // GAイベント
            var no = Number(formId.slice(-1));
            // error GA
            if (Object.keys(result.errors).length > 0) {
                var keys = Object.keys(result.errors);
                $.each(keys, function(index, val){
                    // バリデーションエラーGA
                    $.onValidateError(no, val);
                });
                // バリデーションエラーGA
                $.onValidateError(no, 'next');
            } else {
                // 次へGA
                $.onNext(no);
            }
        }

        // バリデーションエラーが無ければtrue, あればfalseを返す。
        return( errorKeys.length == 0 );
    };

    // ------------------------------------------------------------------------
    // スライドの移動が完了した直後に呼ばれるハンドラ
    // ------------------------------------------------------------------------
    $.onSlideAfterHandler = function($slideElement, oldIndex, newIndex) {

        var pagenum = newIndex + 1;

        if ( pagenum < 6 ) {
            // ga送信用のページ番号
            currentStep = 'STEP' + pagenum;

            // タブインデックスの更新
            $.setTabOrder(pagenum);

            // ページ表示画像の変更
            $('img#form_status')
                 .attr('data-page-num', pagenum)
                 .attr('src','/files/' + pagenum + '.png');

            //1ページ目の場合、Prevリンクを非表示にする。
            $('a.bx-prev')
                .css('visibility', (pagenum == 1 ? 'hidden':'visible') );
            if (pagenum != 1) {
                $('a.bx-prev').show();
            } else {
                $('a.bx-prev').hide();
            }

            // [次へ]ボタンか[登録する]ボタンを切り替え
			if ( pagenum < 5 ) {
				$('a.bx-next').html("<span class='nextBtn'>つぎへ</span>");
			} else {
				$('a.bx-next').html("<span class='lastBtn'><small>利用規約に同意の上</small><br>理想の職場を探しに行く!</span>");
			}

            switch (pagenum) {
                case 1:
                    $('.bx-controls').addClass('index1');
                    $('a.bx-next').html("<span class='nextBtn'>つぎへ</span>");
                    break;
            }

            $('.bx-controls').removeClass('index'+ newIndex);
        }
    };

    // ------------------------------------------------------------------------
    // lean Modalの設定
    // ------------------------------------------------------------------------
    if (typeof $('a[rel*=leanModal]').val() != "undefined") {
        $( 'a[rel*=leanModal]').leanModal({
            top: 50,                     // モーダルウィンドウの縦位置を指定
            overlay : 0.5,               // 背面の透明度
            closeButton: ".modal_close"  // 閉じるボタンのCSS classを指定
        });
    }

    // ------------------------------------------------------------------------
    // 戻るイベント
    // ------------------------------------------------------------------------
    $.onSlidePrev = function($slideElement, oldIndex, newIndex) {
        if (typeof $.sendGA === 'function') {
            // GAイベント
            $.onPrev(oldIndex + 1);
        }
    };

    // ------------------------------------------------------------------------
    // inviewイベントハンドラの設定
    // （※inviewイベントの定義は、プラグインjquery.inview.min.js 参照）
    // ------------------------------------------------------------------------
    $('#dialog_content').on('inview', function() {

        var flag = $('#dialog_form').attr('data-initialstate');
        if ( flag == "true" ) {

            $('div.partial_form').css({visibility: 'visible'});

            $('.bxslider').bxSlider({
                mode: 'horizontal',
                useCSS: false,
                infiniteLoop: false,
                hideControlOnEnd: true,

                easing: 'easeInOutQuart',
                speed: 0,
                touchEnabled: false,
                pager: false,

                onSlidePrev: $.onSlidePrev,
                onSlideAfter: $.onSlideAfterHandler
            });

            //Nextのリンク内を変更
            $('a.bx-next').html("<span class='nextBtn'>つぎへ</span>");
            $('.bx-controls').addClass('index1');
            $("a.bx-next").wrap("<p class='bx-nextArea'></p>")

            //Prevのリンク内を変更
            $('a.bx-prev').html('<img src="/files/btn_back_1.png" alt="戻る">');
            $('a.bx-prev').hide();


            //初期状態では1ページ目の表示なので、Prevリンクを非表示にする。
            $('a.bx-prev').css('visibility', 'hidden');

            //ページャーリンクの削除
            $('div.bx-pager').remove();

            //初期化フラグをfalse
            $('#dialog_form').attr('data-initialstate', 'false');

            // 郵便番号検索の初期化
            if (typeof($('#zip').val()) != 'undefined' && typeof($('#addr1').val()) != 'undefined' && typeof($('#addr2').val()) != 'undefined' && typeof($('#addr3').val()) != 'undefined') {
                $(document).searchCityInit("zip", "addr1", "addr2", "addr3");
            }

        }
    });
	//アコーディオン処理
	$('#zip').on('keydown keyup keypress change', function() {
		var length = $(this).val().length;
		if (length == 7) {
			$('p#zip2').addClass('on');
			$('p.addTxt').css('display', 'none');
			$('.acoArea').show();
		}
	});
	//Step3 アコーディオン
	$('.formItem p').on("click" , function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('p.addTxt').css('display', 'block');
			$('.acoArea').slideUp(300);
		}else{
			$(this).addClass('on');
			$('p.addTxt').css('display', 'none');
			$('.acoArea').slideDown(300);
		}
	});

    // ------------------------------------------------------------------------
    // 電話番号の半角変換
    // ------------------------------------------------------------------------
    $('#mob_phone').blur(function(){
        var str = $(this).val();

        var hen = str.replace(/[０-９]/g,function(s){
            return String.fromCharCode(s.charCodeAt(0)-0xFEE0);
        });

        $(this).val(hen);
    });

    // 保有資格の無資格判定
    $('input[name^=license]').on('change', function() {
        if ($(this).prop('checked')) {
            if ($(this).parent().find('label').text() == '無資格') {
                // 無資格をチェックし、他の資格をチェックしていたら外す
                $(this).parent().parent().find('div').each(function(i, elem) {
                    if ($(elem).hasClass('checked')) {
                        $(elem).find('input').removeAttr('checked');
                        $(elem).removeClass('checked');
                    }
                });
            } else {
                // 無資格以外をチェックし、無資格がチェックされていたら無資格を外す
                $(this).parent().parent().find('div').each(function(i, elem) {
                    if ($(elem).hasClass('checked')) {
                        if ($(elem).find('label').text() == '無資格') {
                            $(elem).find('input').removeAttr('checked');
                            $(elem).removeClass('checked');
                        }
                    }
                });
            }
        }
    });

    // ------------------------------------------------------------------------
    // 漢字の自動かな変換プラグインの初期化
    // ------------------------------------------------------------------------
    if (typeof($('#name_kan').val()) != 'undefined' && typeof($('#name_cana').val()) != 'undefined') {
        $(this).autoKana('#name_kan', '#name_cana', {katakana:false, toggle:false});
    }

    // ------------------------------------------------------------------------
    //TAB押下時にカーソル移動をページ内に制限するための関数と初期設定
    // ------------------------------------------------------------------------
    $.fn.tabChain = function(option) {

        option = $.extend({},{onReadyFocus:false},option);
        var chains = [];

        var init = function(){
            var first = chains[0];
            var last = chains[5];

            for(el in chains){
                $(chains[el]).keydown(function(event){
                    if (event.keyCode !== 9) {
                        return;
                    }
                    if (event.target === last && !event.shiftKey) {
                        first.focus(1);
                        return false;
                    } else if (event.target === first && event.shiftKey) {
                        last.focus(1);
                        return false;
                    }
              });
            }
            if(option.onReadyFocus == true){

                //console.log('$.ltIE8=' + $.ltIE8);

                if ( ! $.ltIE8 ) {
                    //console.log("yes");
                    first.focus();
                }
            }
        }

        this.each(function(){
            chains.push(this);
        });

        init();
    };

    // ページ番号を与えてそのページ内に制限する関数
    $.setTabOrder = function(pagenum) {
        var div = "div#Step" + pagenum;
        var sel = div + " input, " + div + " select";

        $(sel).tabChain({onReadyFocus:true});
    };

    // 初期設定
    $.setTabOrder(1);
	if (typeof $.sendGA === 'function') {
        // 流入数
        $.onSlideView(1);
    }

    //利用規約リンク等
    $("#tos").load('/include/ct/_rule.html');
    $("#pmark").load('/include/ct/_privacy-policy.html');
    $("#access").load('/include/ct/_company.html');

});

jQuery(document).ready(function($) {
    var wn = '';

    $('[data-modal]').click(function(event){
        event.preventDefault();
        wn = '.' + $(this).data('modal');
        var mW = $(wn).find('.modalBody').innerWidth() / 2;
        var mH = $(wn).find('.modalBody').innerHeight() / 2;
        //$(wn).find('.modalBody').css({'margin-left':-mW,'margin-top':-mH});
        $(wn).fadeIn(200);
        $('body').addClass('modal-on');
    });
    $('.close > *,.modalBK,.close').click(function(){
        $(wn).fadeOut(200);
        $('body').removeClass('modal-on');
    });
});


// 日付の自動更新
$(function(){
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();

    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }

    if (minute == 5) {
        minute = '00';
    } else if (minute == 4) {
        hour -= 1;
        minute = 59;
    } else if (minute == 3) {
        hour -= 1;
        minute = 58;
    } else if (minute == 2) {
        hour -= 1;
        minute = 57;
    } else if (minute == 1) {
        hour -= 1;
        minute = 56;
    } else if (minute == 0) {
        hour -= 1;
        minute = 55;
    } else {
        if (minute < 15) {
            minute -= 5;
            minute = '0' + minute;
        } else {
            minute -= 5;
        }
    }

    var string = '';
    string = month + '月' + day + '日&nbsp;' + hour + ':' + minute + '&nbsp;最新求人更新';

    $('.lastupdate, .lastupdateText').html(string);
});


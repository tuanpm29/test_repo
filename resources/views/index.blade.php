
<!DOCTYPE html>
<html lang="ja">
<head>
    <base href="https://www.kaigoagent.com/" target="_blank">
    <meta name="robots" content="noindex,nofollow">
    <meta charset="utf-8">
    <meta name="keywords" content="介護,介護士,求人,募集,KJA">
    <meta name="description" content="介護士求人なら【カイゴジョブエージェント】!最新の募集情報をいち早くお届け!">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>介護職・介護福祉士専門の求人・転職ならカイゴジョブエージェントに登録</title>

    <link rel="stylesheet" type="text/css" href="/css/pc/form/reset.css">
    <link rel="stylesheet" type="text/css" href="/entry/pc/form023/css/form_pc23.css">
    <link rel="stylesheet" type="text/css" href="/css/pc/form/suggestEmail_pc1.css">
    <link rel="stylesheet" type="text/css" href="/css/pc/form/toastr.css">
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
    <link rel="stylesheet" type="text/css" href="/css/lib/jquery-ui-1.10.3.min.css">
    <link rel="stylesheet" type="text/css" href="/css/pc/form/sp_sec2.css">
    <link rel="stylesheet" type="text/css" href="/css/pc/form/feeling_modal.css">

</head>
<body>
<div class="header">
    <div class="header-inner">
        <div class="logo"><img src="/entry/pc/form023/img/logo.png" class="logo-img"></div>
    </div>
</div>
<div class="contents">
    <a data-modal="branch" style="display: none;">お気持ちはどちらに近いですか？</a>
    <div class="modal branch">
        <div class="modalBody" style="height: 180px;width: 500px;">
            <div class="scroll_box" id="branch" >
                <h2>お気持ちはどちらに近いですか？</h2>
                <a class="close branch_btn-A" onclick="$.setGASide('A');$.sendGA(1, 'STEP1_branch');" style="margin-bottom: 0.7em;">近いうちに転職したい</a>
                <a class="close branch_btn-B" onclick="$.setGASide('B');$.sendGA(1, 'STEP1_branch');">今は情報収集したい</a>
            </div>
        </div>
        <div class="modalBK2"></div>
    </div>    <div class="form">
        <h1><img src="/entry/pc/form023/img/title01.png" alt="人気の非公開求人をご紹介！"></h1>
        <form id="form" name="form1" action="{{ url('/submit') }}" method="post" target="_self" enctype="application/x-www-url-encoded">
            <input type="hidden" name="t" value="PC_23">
            <input type="hidden" name="action" id="action" value="kja_pc_gs_2120524">
            {{ csrf_field() }}
            <input type="hidden" name="uid" value="">
            <input type="hidden" name="pattern" value="">
            <div id="dialog_form" class="formContent" data-initialstate="true">
                <div id="dialog_header" class="formHeader">
                    <div class="row rowTable">
                        <div class="col last"><img id="form_status" data-page-num="1" src="/entry/pc/form023/img/status/1.png"></div>
                    </div>
                </div>
                <div id="dialog_content" style="clear : both;">
                    <ul class="bxslider">
                        <li>
                            <div class="partial_form formBody" id="Step1">
                                <h3 class="formTitle"><span class="required">必須</span><span>どの資格でお探しですか？</span><small>複数選択OK</small></h3>
                                <div id="license_container" class="formItem">
                                    <div class="row row3col">
                                        <div class="col ">
                                            <input type="checkbox" name="license[]" id="license_3" value="3"  class="checkboxCol">
                                            <label for="license_3" class="checkbox">介護福祉士</label>
                                        </div>
                                        <div class="col ">
                                            <input type="checkbox" name="license[]" id="license_1" value="1"  class="checkboxCol">
                                            <label for="license_1" class="checkbox">初任者研修</label>
                                        </div>
                                        <div class="col ">
                                            <input type="checkbox" name="license[]" id="license_2" value="2"  class="checkboxCol">
                                            <label for="license_2" class="checkbox">実務者研修</label>
                                        </div>
                                        <div class="col ">
                                            <input type="checkbox" name="license[]" id="license_4" value="4"  class="checkboxCol">
                                            <label for="license_4" class="checkbox">ケアマネジャー</label>
                                        </div>
                                        <div class="col ">
                                            <input type="checkbox" name="license[]" id="license_5" value="5"  class="checkboxCol">
                                            <label for="license_5" class="checkbox">その他</label>
                                        </div>
                                        <div class="col ">
                                            <input type="checkbox" name="license[]" id="license_6" value="6"  class="checkboxCol">
                                            <label for="license_6" class="checkbox">無資格</label>
                                        </div>
                                    </div>
                                    <div class="error_message errorBox03" id="license_errmsg" ></div>
                                </div>
                                <h3 class="formTitle"><span class="required">必須</span><span>ご希望の働き方を選択してください。</span></h3>
                                <div id="req_emp_types_selection" class="formItem">
                                    <div class="row row3col">
                                        <div class="col ">
                                            <input type="radio" name="req_emp_type" id="req_emp_type_11" value="11"  class="radioCol">
                                            <label for="req_emp_type_11" class="radio">常勤</label>
                                        </div>
                                        <div class="col ">
                                            <input type="radio" name="req_emp_type" id="req_emp_type_12" value="12"  class="radioCol">
                                            <label for="req_emp_type_12" class="radio">非常勤</label>
                                        </div>
                                        <div class="col ">
                                            <input type="radio" name="req_emp_type" id="req_emp_type_13" value="13"  class="radioCol">
                                            <label for="req_emp_type_13" class="radio">派遣</label>
                                        </div>
                                        <div class="col ">
                                            <input type="radio" name="req_emp_type" id="req_emp_type_14" value="14"  class="radioCol">
                                            <label for="req_emp_type_14" class="radio">こだわらない</label>
                                        </div>
                                    </div>
                                    <div class="error_message errorBox" id="req_emp_type_errmsg" ></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="partial_form formBody" id="Step2" style="visibility: hidden;">
                                <h3 class="formTitle"><span class="required">必須</span><span>ご希望の転職時期を選択してください。</span></h3>
                                <div id="req_date_selection" class="formItem">
                                    <div class="row row3col">
                                        <div class="col ">
                                            <input type="radio" name="req_date" id="req_date_1" value="1"  class="radioCol">
                                            <label for="req_date_1" class="radio">1か月以内</label>
                                        </div>
                                        <div class="col ">
                                            <input type="radio" name="req_date" id="req_date_2" value="2"  class="radioCol">
                                            <label for="req_date_2" class="radio">3か月以内</label>
                                        </div>
                                        <div class="col ">
                                            <input type="radio" name="req_date" id="req_date_3" value="3"  class="radioCol">
                                            <label for="req_date_3" class="radio">6か月以内</label>
                                        </div>
                                        <div class="col ">
                                            <input type="radio" name="req_date" id="req_date_4" value="4"  class="radioCol">
                                            <label for="req_date_4" class="radio">12か月以内</label>
                                        </div>
                                        <div class="col ">
                                            <input type="radio" name="req_date" id="req_date_5" value="5"  class="radioCol">
                                            <label for="req_date_5" class="radio">よい求人があればいつでも</label>
                                        </div>
                                    </div>
                                    <div class="error_message errorBox" id="req_date_errmsg" ></div>
                                </div>
                                <h3 class="formTitle"><span class="required">必須</span><span>現職務内容を選択してください。</span></h3>
                                <div id="job_description_selection" class="formItem">
                                    <div class="row row3col">
                                        <div class="col ">
                                            <input type="radio" name="job_description" id="job_description_1" value="1"  class="radioCol">
                                            <label for="job_description_1" class="radio">一般介護職</label>
                                        </div>
                                        <div class="col ">
                                            <input type="radio" name="job_description" id="job_description_2" value="2"  class="radioCol">
                                            <label for="job_description_2" class="radio">介護職主任以上</label>
                                        </div>
                                        <div class="col ">
                                            <input type="radio" name="job_description" id="job_description_3" value="3"  class="radioCol">
                                            <label for="job_description_3" class="radio">管理職</label>
                                        </div>
                                        <div class="col ">
                                            <input type="radio" name="job_description" id="job_description_4" value="4"  class="radioCol">
                                            <label for="job_description_4" class="radio">相談員・ケアマネ</label>
                                        </div>
                                        <div class="col ">
                                            <input type="radio" name="job_description" id="job_description_5" value="5"  class="radioCol">
                                            <label for="job_description_5" class="radio">その他</label>
                                        </div>
                                    </div>
                                    <div class="error_message errorBox" id="job_description_errmsg" ></div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="partial_form formBody" id="Step3" style="visibility: hidden;">
                                <h3 class="formTitle"><span>現住所と希望勤務地を入力してください。</span><br><small>※公開されません</small></h3>
                                <div id="zip_area" class="formItem addr">
                                    <div class="row offset42">
                                        <div class="col" style="width: inherit;">
                                            <input type="text" value="" name="zip" id="zip" style="ime-mode: disabled;" class="width150zip col150" placeholder="例：〒1234567">
                                        </div>
                                        <div class="col btn_area">
                                            <p id="zip2"><small>郵便番号がわからない場合はコチラ</small></p>
                                        </div>
                                    </div>
                                    <p class="addTxt">お住まいを中心に近隣の非公開求人をお届けいたします。</p>
                                    <div class="acoArea">
                                        <div class="row offset42">
                                            <div class="col col200">
                                                <h4 class="itemTitle">都道府県/市区町村<span class="required">必須</span></h4>
                                                <select name="addr1" id="addr1" class="width180 selectElem" style="ime-mode:active;">
                                                    <option value="">都道府県</option>
                                                    <option label="北海道" value="11" >北海道</option>
                                                    <option label="青森県" value="12" >青森県</option>
                                                    <option label="岩手県" value="13" >岩手県</option>
                                                    <option label="宮城県" value="14" >宮城県</option>
                                                    <option label="秋田県" value="15" >秋田県</option>
                                                    <option label="山形県" value="16" >山形県</option>
                                                    <option label="福島県" value="17" >福島県</option>
                                                    <option label="茨城県" value="21" >茨城県</option>
                                                    <option label="栃木県" value="22" >栃木県</option>
                                                    <option label="群馬県" value="23" >群馬県</option>
                                                    <option label="埼玉県" value="24" >埼玉県</option>
                                                    <option label="千葉県" value="25" >千葉県</option>
                                                    <option label="東京都" value="26"  selected="selected" >東京都</option>
                                                    <option label="神奈川県" value="27" >神奈川県</option>
                                                    <option label="新潟県" value="31" >新潟県</option>
                                                    <option label="富山県" value="32" >富山県</option>
                                                    <option label="石川県" value="33" >石川県</option>
                                                    <option label="福井県" value="34" >福井県</option>
                                                    <option label="山梨県" value="35" >山梨県</option>
                                                    <option label="長野県" value="36" >長野県</option>
                                                    <option label="岐阜県" value="41" >岐阜県</option>
                                                    <option label="静岡県" value="42" >静岡県</option>
                                                    <option label="愛知県" value="43" >愛知県</option>
                                                    <option label="三重県" value="44" >三重県</option>
                                                    <option label="滋賀県" value="51" >滋賀県</option>
                                                    <option label="京都府" value="52" >京都府</option>
                                                    <option label="大阪府" value="53" >大阪府</option>
                                                    <option label="兵庫県" value="54" >兵庫県</option>
                                                    <option label="奈良県" value="55" >奈良県</option>
                                                    <option label="和歌山県" value="56" >和歌山県</option>
                                                    <option label="鳥取県" value="61" >鳥取県</option>
                                                    <option label="島根県" value="62" >島根県</option>
                                                    <option label="岡山県" value="63" >岡山県</option>
                                                    <option label="広島県" value="64" >広島県</option>
                                                    <option label="山口県" value="65" >山口県</option>
                                                    <option label="徳島県" value="71" >徳島県</option>
                                                    <option label="香川県" value="72" >香川県</option>
                                                    <option label="愛媛県" value="73" >愛媛県</option>
                                                    <option label="高知県" value="74" >高知県</option>
                                                    <option label="福岡県" value="81" >福岡県</option>
                                                    <option label="佐賀県" value="82" >佐賀県</option>
                                                    <option label="長崎県" value="83" >長崎県</option>
                                                    <option label="熊本県" value="84" >熊本県</option>
                                                    <option label="大分県" value="85" >大分県</option>
                                                    <option label="宮崎県" value="86" >宮崎県</option>
                                                    <option label="鹿児島県" value="87" >鹿児島県</option>
                                                    <option label="沖縄県" value="88" >沖縄県</option>
                                                </select>
                                            </div>
                                            <div class="col col305">
                                                <select name="addr2" id="addr2" class="width180 selectElem">
                                                    <option value="">市区町村</option>
                                                    <option label="千代田区" value="26001" >千代田区</option>
                                                    <option label="中央区" value="26002" >中央区</option>
                                                    <option label="港区" value="26003" >港区</option>
                                                    <option label="新宿区" value="26004" >新宿区</option>
                                                    <option label="文京区" value="26005" >文京区</option>
                                                    <option label="台東区" value="26006" >台東区</option>
                                                    <option label="墨田区" value="26007" >墨田区</option>
                                                    <option label="江東区" value="26008" >江東区</option>
                                                    <option label="品川区" value="26009" >品川区</option>
                                                    <option label="目黒区" value="26010" >目黒区</option>
                                                    <option label="大田区" value="26011" >大田区</option>
                                                    <option label="世田谷区" value="26012" >世田谷区</option>
                                                    <option label="渋谷区" value="26013" >渋谷区</option>
                                                    <option label="中野区" value="26014" >中野区</option>
                                                    <option label="杉並区" value="26015" >杉並区</option>
                                                    <option label="豊島区" value="26016" >豊島区</option>
                                                    <option label="北区" value="26017" >北区</option>
                                                    <option label="荒川区" value="26018" >荒川区</option>
                                                    <option label="板橋区" value="26019" >板橋区</option>
                                                    <option label="練馬区" value="26020" >練馬区</option>
                                                    <option label="足立区" value="26021" >足立区</option>
                                                    <option label="葛飾区" value="26022" >葛飾区</option>
                                                    <option label="江戸川区" value="26023" >江戸川区</option>
                                                    <option label="八王子市" value="26024" >八王子市</option>
                                                    <option label="立川市" value="26025" >立川市</option>
                                                    <option label="武蔵野市" value="26026" >武蔵野市</option>
                                                    <option label="三鷹市" value="26027" >三鷹市</option>
                                                    <option label="青梅市" value="26028" >青梅市</option>
                                                    <option label="府中市" value="26029" >府中市</option>
                                                    <option label="昭島市" value="26030" >昭島市</option>
                                                    <option label="調布市" value="26031" >調布市</option>
                                                    <option label="町田市" value="26032" >町田市</option>
                                                    <option label="小金井市" value="26033" >小金井市</option>
                                                    <option label="小平市" value="26034" >小平市</option>
                                                    <option label="日野市" value="26035" >日野市</option>
                                                    <option label="東村山市" value="26036" >東村山市</option>
                                                    <option label="国分寺市" value="26037" >国分寺市</option>
                                                    <option label="国立市" value="26038" >国立市</option>
                                                    <option label="福生市" value="26039" >福生市</option>
                                                    <option label="狛江市" value="26040" >狛江市</option>
                                                    <option label="東大和市" value="26041" >東大和市</option>
                                                    <option label="清瀬市" value="26042" >清瀬市</option>
                                                    <option label="東久留米市" value="26043" >東久留米市</option>
                                                    <option label="武蔵村山市" value="26044" >武蔵村山市</option>
                                                    <option label="多摩市" value="26045" >多摩市</option>
                                                    <option label="稲城市" value="26046" >稲城市</option>
                                                    <option label="羽村市" value="26047" >羽村市</option>
                                                    <option label="あきる野市" value="26048" >あきる野市</option>
                                                    <option label="西東京市" value="26049" >西東京市</option>
                                                    <option label="西多摩郡瑞穂町" value="26050" >西多摩郡瑞穂町</option>
                                                    <option label="西多摩郡日の出町" value="26051" >西多摩郡日の出町</option>
                                                    <option label="西多摩郡檜原村" value="26052" >西多摩郡檜原村</option>
                                                    <option label="西多摩郡奥多摩町" value="26053" >西多摩郡奥多摩町</option>
                                                    <option label="大島町" value="26054" >大島町</option>
                                                    <option label="利島村" value="26055" >利島村</option>
                                                    <option label="新島村" value="26056" >新島村</option>
                                                    <option label="神津島村" value="26057" >神津島村</option>
                                                    <option label="三宅島三宅村" value="26058" >三宅島三宅村</option>
                                                    <option label="御蔵島村" value="26059" >御蔵島村</option>
                                                    <option label="八丈島八丈町" value="26060" >八丈島八丈町</option>
                                                    <option label="青ヶ島村" value="26061" >青ヶ島村</option>
                                                    <option label="小笠原村" value="26062" >小笠原村</option>
                                                </select>
                                                <input type="hidden" id="form_addr2" value="">
                                            </div>
                                        </div>
                                        <div id="addr1or2_error_msgs" class="errorBox">
                                            <ul>
                                                <li id="addr1or2_errmsg0" class="error_message err_pos02"></li>
                                                <li id="addr1or2_errmsg1" class="error_message err_pos02"></li>
                                            </ul>
                                        </div>
                                        <div class="formItem box_pos">
                                            <h4 class="itemTitle">番地以下<span class="required">必須</span></h4>
                                            <div class="col255">
                                                <input type="text" name="addr3" value="" id="addr3" class="width175" style="ime-mode: active;" placeholder="例：1-2-3　AAマンション101">
                                                <div id="addr3_errmsg" class="error_message errorBox" ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="formItem box_pos">
                                    <h4 class="itemTitle">希望勤務地<small>(第一希望)</small><span class="required">必須</span></h4>
                                    <div class="col255">
                                        <select name="req1_addr1" id="req1_addr1">
                                            <option label="" value="">選択してください</option>
                                            <option label="北海道" value="11" >北海道</option>
                                            <option label="青森県" value="12" >青森県</option>
                                            <option label="岩手県" value="13" >岩手県</option>
                                            <option label="宮城県" value="14" >宮城県</option>
                                            <option label="秋田県" value="15" >秋田県</option>
                                            <option label="山形県" value="16" >山形県</option>
                                            <option label="福島県" value="17" >福島県</option>
                                            <option label="茨城県" value="21" >茨城県</option>
                                            <option label="栃木県" value="22" >栃木県</option>
                                            <option label="群馬県" value="23" >群馬県</option>
                                            <option label="埼玉県" value="24" >埼玉県</option>
                                            <option label="千葉県" value="25" >千葉県</option>
                                            <option label="東京都" value="26" >東京都</option>
                                            <option label="神奈川県" value="27" >神奈川県</option>
                                            <option label="新潟県" value="31" >新潟県</option>
                                            <option label="富山県" value="32" >富山県</option>
                                            <option label="石川県" value="33" >石川県</option>
                                            <option label="福井県" value="34" >福井県</option>
                                            <option label="山梨県" value="35" >山梨県</option>
                                            <option label="長野県" value="36" >長野県</option>
                                            <option label="岐阜県" value="41" >岐阜県</option>
                                            <option label="静岡県" value="42" >静岡県</option>
                                            <option label="愛知県" value="43" >愛知県</option>
                                            <option label="三重県" value="44" >三重県</option>
                                            <option label="滋賀県" value="51" >滋賀県</option>
                                            <option label="京都府" value="52" >京都府</option>
                                            <option label="大阪府" value="53" >大阪府</option>
                                            <option label="兵庫県" value="54" >兵庫県</option>
                                            <option label="奈良県" value="55" >奈良県</option>
                                            <option label="和歌山県" value="56" >和歌山県</option>
                                            <option label="鳥取県" value="61" >鳥取県</option>
                                            <option label="島根県" value="62" >島根県</option>
                                            <option label="岡山県" value="63" >岡山県</option>
                                            <option label="広島県" value="64" >広島県</option>
                                            <option label="山口県" value="65" >山口県</option>
                                            <option label="徳島県" value="71" >徳島県</option>
                                            <option label="香川県" value="72" >香川県</option>
                                            <option label="愛媛県" value="73" >愛媛県</option>
                                            <option label="高知県" value="74" >高知県</option>
                                            <option label="福岡県" value="81" >福岡県</option>
                                            <option label="佐賀県" value="82" >佐賀県</option>
                                            <option label="長崎県" value="83" >長崎県</option>
                                            <option label="熊本県" value="84" >熊本県</option>
                                            <option label="大分県" value="85" >大分県</option>
                                            <option label="宮崎県" value="86" >宮崎県</option>
                                            <option label="鹿児島県" value="87" >鹿児島県</option>
                                            <option label="沖縄県" value="88" >沖縄県</option>
                                        </select>
                                        <div class="error_message errorBox" id="req1_addr1_errmsg" ></div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="partial_form formBody" id="Step4" style="visibility: hidden;">
                                <h3 class="formTitle">お名前・お生まれの年を入力してください。<br><small>※公開されません</small></h3>

                                <div class="formItem">
                                    <h4 class="itemTitle">お名前<span class="required">必須</span></h4>
                                    <div class="col255">
                                        <input type="text" size="20" name="name_kan" id="name_kan" value="" placeholder="例：看護花子">
                                    </div>
                                    <div class="error_message errorBox02" id="name_kan_errmsg" ></div>
                                </div>

                                <div class="formItem">
                                    <h4 class="itemTitle">ふりがな<span class="required">必須</span></h4>
                                    <div class="col255">
                                        <input type="text" size="20" name="name_cana" id="name_cana" value="" placeholder="例：かんごはなこ">
                                    </div>
                                    <div class="error_message errorBox02" id="name_cana_errmsg" ></div>
                                </div>

                                <div id="" class="formItem">
                                    <h4 class="itemTitle">生まれ年<span class="required">必須</span></h4>
                                    <div class="col255">
                                        <select id="birth_year" name="birth_year" class="width180 selectElem">
                                            <option value="" selected="selected">選択してください</option>
                                            <option label="2001/平成13" value="2001" >2001/平成13</option>
                                            <option label="2000/平成12" value="2000" >2000/平成12</option>
                                            <option label="1999/平成11" value="1999" >1999/平成11</option>
                                            <option label="1998/平成10" value="1998" >1998/平成10</option>
                                            <option label="1997/平成9" value="1997" >1997/平成9</option>
                                            <option label="1996/平成8" value="1996" >1996/平成8</option>
                                            <option label="1995/平成7" value="1995" >1995/平成7</option>
                                            <option label="1994/平成6" value="1994" >1994/平成6</option>
                                            <option label="1993/平成5" value="1993" >1993/平成5</option>
                                            <option label="1992/平成4" value="1992" >1992/平成4</option>
                                            <option label="1991/平成3" value="1991" >1991/平成3</option>
                                            <option label="1990/平成2" value="1990" >1990/平成2</option>
                                            <option label="1989/昭和64･平成1" value="1989" >1989/昭和64･平成1</option>
                                            <option label="1988/昭和63" value="1988" >1988/昭和63</option>
                                            <option label="1987/昭和62" value="1987" >1987/昭和62</option>
                                            <option label="1986/昭和61" value="1986" >1986/昭和61</option>
                                            <option label="1985/昭和60" value="1985" >1985/昭和60</option>
                                            <option label="1984/昭和59" value="1984" >1984/昭和59</option>
                                            <option label="1983/昭和58" value="1983" >1983/昭和58</option>
                                            <option label="1982/昭和57" value="1982" >1982/昭和57</option>
                                            <option label="1981/昭和56" value="1981" >1981/昭和56</option>
                                            <option label="1980/昭和55" value="1980" >1980/昭和55</option>
                                            <option label="1979/昭和54" value="1979" >1979/昭和54</option>
                                            <option label="1978/昭和53" value="1978" >1978/昭和53</option>
                                            <option label="1977/昭和52" value="1977" >1977/昭和52</option>
                                            <option label="1976/昭和51" value="1976" >1976/昭和51</option>
                                            <option label="1975/昭和50" value="1975" >1975/昭和50</option>
                                            <option label="1974/昭和49" value="1974" >1974/昭和49</option>
                                            <option label="1973/昭和48" value="1973" >1973/昭和48</option>
                                            <option label="1972/昭和47" value="1972" >1972/昭和47</option>
                                            <option label="1971/昭和46" value="1971" >1971/昭和46</option>
                                            <option label="1970/昭和45" value="1970" >1970/昭和45</option>
                                            <option label="1969/昭和44" value="1969" >1969/昭和44</option>
                                            <option label="1968/昭和43" value="1968" >1968/昭和43</option>
                                            <option label="1967/昭和42" value="1967" >1967/昭和42</option>
                                            <option label="1966/昭和41" value="1966" >1966/昭和41</option>
                                            <option label="1965/昭和40" value="1965" >1965/昭和40</option>
                                            <option label="1964/昭和39" value="1964" >1964/昭和39</option>
                                            <option label="1963/昭和38" value="1963" >1963/昭和38</option>
                                            <option label="1962/昭和37" value="1962" >1962/昭和37</option>
                                            <option label="1961/昭和36" value="1961" >1961/昭和36</option>
                                            <option label="1960/昭和35" value="1960" >1960/昭和35</option>
                                            <option label="1959/昭和34" value="1959" >1959/昭和34</option>
                                            <option label="1958/昭和33" value="1958" >1958/昭和33</option>
                                            <option label="1957/昭和32" value="1957" >1957/昭和32</option>
                                            <option label="1956/昭和31" value="1956" >1956/昭和31</option>
                                            <option label="1955/昭和30" value="1955" >1955/昭和30</option>
                                            <option label="1954/昭和29" value="1954" >1954/昭和29</option>
                                            <option label="1953/昭和28" value="1953" >1953/昭和28</option>
                                            <option label="1952/昭和27" value="1952" >1952/昭和27</option>
                                            <option label="1951/昭和26" value="1951" >1951/昭和26</option>
                                            <option label="1950/昭和25" value="1950" >1950/昭和25</option>
                                            <option label="1949/昭和24" value="1949" >1949/昭和24</option>
                                            <option label="1948/昭和23" value="1948" >1948/昭和23</option>
                                            <option label="1947/昭和22" value="1947" >1947/昭和22</option>
                                            <option label="1946/昭和21" value="1946" >1946/昭和21</option>
                                            <option label="1945/昭和20" value="1945" >1945/昭和20</option>
                                            <option label="1944/昭和19" value="1944" >1944/昭和19</option>
                                            <option label="1943/昭和18" value="1943" >1943/昭和18</option>
                                            <option label="1942/昭和17" value="1942" >1942/昭和17</option>
                                            <option label="1941/昭和16" value="1941" >1941/昭和16</option>
                                            <option label="1940/昭和15" value="1940" >1940/昭和15</option>
                                            <option label="1939/昭和14" value="1939" >1939/昭和14</option>
                                        </select>
                                    </div>
                                    <div class="error_message errorBox02" id="birth_year_errmsg" ></div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="partial_form formBody" id="Step5" style="visibility: hidden;">
                                <h3 class="formTitle">退職意向・ご連絡先を入力してください。<br><small>※公開されません</small></h3>
                                <div class="formItem ">
                                    <h4 class="itemTitle">退職意向<span class="required">必須</span></h4>
                                    <div class="col255">
                                        <select name="retirement_intention" id="retirement_intention">
                                            <option label="" value="">選択してください</option>
                                            <option label="離職中／退職確定済" value="1" >離職中／退職確定済</option>
                                            <option label="できるだけ早く辞めたい" value="2" >できるだけ早く辞めたい</option>
                                            <option label="良い転職先なら辞めたい" value="3" >良い転職先なら辞めたい</option>
                                            <option label="良い転職先なら検討する" value="4" >良い転職先なら検討する</option>
                                            <option label="半年以上は辞められない" value="5" >半年以上は辞められない</option>
                                            <option label="あまり辞める気は無い" value="6" >あまり辞める気は無い</option>
                                            <option label="その他" value="7" >その他</option>
                                        </select>
                                        <div class="error_message errorBox" id="retirement_intention_errmsg" ></div>
                                    </div>
                                </div>

                                <div class="formItem">
                                    <h4 class="itemTitle">電話番号<span class="required">必須</span></h4>
                                    <div class="col255">
                                        <input id="mob_phone" name="mob_phone" type="text" value="" style="ime-mode: disabled;" size="14" placeholder="例：09012345678">
                                    </div>
                                    <div class="error_message errorBox02 err_pos03" id="mob_phone_errmsg" ></div>
                                </div>

                                <div class="formItem">
                                    <h4 class="itemTitle">メールアドレス<span class="required2">任意</span></h4>
                                    <div class="col255">
                                        <input id="mob_mail_inp" name="mob_mail" type="text" size="22" value="" maxlength="80" style="ime-mode: disabled;" placeholder="例：aaa@aaa.ne.jp(任意)">
                                        <div id="suggest" style="display:none;" tabindex="-1"></div>
                                    </div>
                                    <div class="error_message errorBox02 err_pos03" id="mob_mail_errmsg" ></div>
                                </div>

                            </div>

                        </li>
                        <li>
                            <div class="partial_form formBody" id="dialog_page6" style="visibility: hidden;"><br>
                                <div align="center"><br>
                                    <br>
                                    <br>
                                    <span class="message"><!-- 登録処理中です・・・ --></span></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </form>
    </div>
</div>
<div id="footer">
    <div class="innerfooter">
        <small>Copyright &copy; SMS Career CO., LTD. All Rights Reserved.</small>
        <div class="footLink">
            <a data-rel="dialog" data-transition="pop" data-modal="tos" id="kiyaku">利用規約</a>
            <a data-modal="pmark" id="kojin_joho">個人情報の取り扱いについて</a>
            <a data-modal="access" id="campany">運営会社</a>
        </div>
        <div class="modal tos">
            <div class="modalBody">
                <div class="scroll_box" id="tos"></div>
                <p class="close">×close</p>
            </div>
            <div class="modalBK"></div>
        </div>
        <div class="modal pmark">
            <div class="modalBody">
                <div class="scroll_box" id="pmark"></div>
                <p class="close">×close</p>
            </div>
            <div class="modalBK"></div>
        </div>
        <div class="modal access">
            <div class="modalBody">
                <div class="scroll_box" id="access"></div>
                <p class="close">×close</p>
            </div>
            <div class="modalBK"></div>
        </div>
    </div>
</div>

<script type="text/javascript" src="/js/jquery-1.11.1.min.js?20180307"></script>
<script type="text/javascript" src="/js/pc/form/jquery.leanModal.min_for_form1.js?20180307"></script>
<script type="text/javascript" src="/js/lib/jquery.easing.1.3.js?20180307"></script>
<script type="text/javascript" src="/js/lib/jquery.bxslider.4.2.12.js?20180307"></script>
<script type="text/javascript" src="/js/lib/jquery-ui-1.10.3.min.js?20180307"></script>
<script type="text/javascript" src="/js/common/form/jquery.autoKana.js?20180307"></script>

<script type="text/javascript" src="/js/common/SearchCity/jquery.SearchCityAutocomplete.js?20180307"></script>
<script type="text/javascript" src="/js/common/form/njb_common_jquery.js?20180307"></script>
<script type="text/javascript" src="{{ asset('/files/checkMail.js') }}"></script>

<script type="text/javascript" src="/js/lib/jquery.inview.min.js?20180307"></script>
<script type="text/javascript" src="/js/common/form/ga_form.js?20191111"></script>
<script type="text/javascript" src="/entry/pc/form023/js/jquery.validate_multiStepForm_for_pc23.js?20180307"></script>
<script type="text/javascript" src="/entry/pc/form023/js/pc23.js?20191118"></script>
<script type="text/javascript" src="/entry/pc/form023/js/jq.bxslider_callback_pc23.js?20180307"></script>

<script type="text/javascript" src="/js/common/form/toastr.min.js?20180307"></script>
<script type="text/javascript" src="/js/common/form/placeholder.js?20180307"></script>
<script type="text/javascript" src="/js/lib/suggest_2.3.js?20180307"></script>
<script type="text/javascript" src="/js/common/form/suggestEmail.js?20180307"></script>

<script type="text/javascript">
    $(document).ready(function($) {
        $(window).load(function() {
            $('input').on('change',function () {
                $('input:checkbox:checked').parent().addClass('checked');
                $('input:radio:checked').parent().addClass('checked');
                $('input:not(:checked)').parent().removeClass('checked');
            });
        });

        // #6019
        var inputId = 'mob_mail_inp';
        var targetId = 'suggest';
        window.addEventListener ?
            window.addEventListener('load', startEmailSuggest(inputId,targetId), false) :
            window.attachEvent('onload', startEmailSuggest(inputId,targetId));
    });
</script>

<!-- お気持ちはどちらに近いですか モーダル -->
<script src="/js/pc/form/feeling_modal.js"></script>

<!-- 共通タグ -->
<!-- Yahoo Tag Manager -->
<script id="tagjs" type="text/javascript">
    (function () {
        var tagjs = document.createElement("script");
        var s = document.getElementsByTagName("script")[0];
        tagjs.async = true;
        tagjs.src = "//s.yjtag.jp/tag.js#site=b5cEgfj&referrer="
            + encodeURIComponent(document.location.href) + "";
        s.parentNode.insertBefore(tagjs, s);
    }());
</script>
<noscript>
    <iframe src="//b.yjtag.jp/iframe?c=b5cEgfj" width="1" height="1" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
</noscript>
<!-- End Yahoo Tag Manager -->
</body>
</html>

/**
 * #6019
 */
function startEmailSuggest(inputId, suggestId){
    // ドメインリスト.csv より 上位100件
    domainList = [
        'docomo.ne.jp',
        'ezweb.ne.jp',
        'yahoo.co.jp',
        'i.softbank.jp',
        'softbank.ne.jp',
        'gmail.com',
        'icloud.com',
        'hotmail.co.jp',
        'hotmail.com',
        't.vodafone.ne.jp',
        'ybb.ne.jp',
        'k.vodafone.ne.jp',
        'c.vodafone.ne.jp',
        'nifty.com',
        'disney.ne.jp',
        'q.vodafone.ne.jp',
        'jcom.home.ne.jp',
        'bm-sms.co.jp',
        'n.vodafone.ne.jp',
        'h.vodafone.ne.jp',
        'live.jp',
        'me.com',
        'd.vodafone.ne.jp',
        'bma.biglobe.ne.jp',
        'mail.goo.ne.jp',
        'msn.com',
        'willcom.com',
        'yahoo.ne.jp',
        'ymobile.ne.jp',
        'r.vodafone.ne.jp',
        'wcm.ne.jp',
        'outlook.jp',
        's.vodafone.ne.jp',
        'aol.com',
        'hb.tp1.jp',
        'u01.gate01.com',
        'ac.auone-net.jp',
        'maia.eonet.ne.jp',
        'excite.co.jp',
        'zeus.eonet.ne.jp',
        'nike.eonet.ne.jp',
        'gaia.eonet.ne.jp',
        'ares.eonet.ne.jp',
        'tbz.t-com.ne.jp',
        'leto.eonet.ne.jp',
        'ab.auone-net.jp',
        'iris.eonet.ne.jp',
        'yahoo.com',
        'infoseek.jp',
        'mopera.net',
        'mac.com',
        'pdx.ne.jp',
        'hi.enjoy.ne.jp',
        'amber.plala.or.jp',
        'nifty.ne.jp',
        'sea.plala.or.jp',
        'vodafone.ne.jp',
        'ozzio.jp',
        'ae.auone-net.jp',
        'emobile.ne.jp',
        'hera.eonet.ne.jp',
        'nexyzbb.ne.jp',
        'agate.plala.or.jp',
        'sky.plala.or.jp',
        'auone.jp',
        'wm.pdx.ne.jp',
        'cameo.plala.or.jp',
        'khaki.plala.or.jp',
        'sakai.zaq.ne.jp',
        'amail.plala.or.jp',
        'mb.infoweb.ne.jp'
    ];

    // 処理
    obj = new Suggest.Local(
        inputId,
        suggestId,
        domainList,
        {prefix:!0,dispMax:10,interval:1e3}
    );

    obj.getInputText = function() {
        var pos = this.getLastTokenPos();
        if (pos == -1) {
            return "";
        }else{
            return this.input.value.substr(pos + 1);
        }
    },
    obj.setInputText = function(text) {
        if (typeof $.onMobMailAuto === 'function') {
            // GAイベント
            $.onMobMailAuto();
        }

        var pos = this.getLastTokenPos();
        if (pos == -1) {
            this.input.value = text;
        } else {
            this.input.value = this.input.value.substr(0 , pos + 1) + text;
        }
    },
    obj.getLastTokenPos = function(){
        var delimIndex = this.input.value.lastIndexOf(this.delim);
        var atIndex = this.input.value.lastIndexOf('@');
        if(delimIndex < atIndex) {
            return atIndex;
        } else {
            return -1;
        }
    }
}

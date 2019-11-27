jQuery(function($){
    // 初回「お気持ちはどちらに近いですか？」モーダルの表示
    $('[data-modal="branch"]').trigger('click');
    $('.branch_btn-A').on('click', function(){
        $('html, body').scrollTop(0);
    })
    $('.branch_btn-B').on('click', function(){
        $('html, body').scrollTop(0);
    })
});
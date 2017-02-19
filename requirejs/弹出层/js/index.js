require(['jquery','dialog'],function($,dialog){
    $('#btn').on('click',function(){
        dialog.open({
            width:800,
            height:500,
            title:'呵呵',
            content:'hjsgdkhag '

        });
        dialog.close();
    });
});
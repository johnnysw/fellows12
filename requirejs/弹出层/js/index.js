require(['jquery','dialog2'],function($,dialog){
    $('#btn').on('click',function(){
        dialog.open({
            width:500,
            height:400,
            title:'呵呵',
            content:'dialog-box-content'

        });

        //dialog.close();
    });
});
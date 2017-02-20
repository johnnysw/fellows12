require(['jquery','dialog2'],function($,Dialog){
    $('#btn').on('click',function(){
        /*dialog.open({
            width:500,
            height:400,
            title:'呵呵',
            content:'dialog-box-content'

        });*/

        var dialog = new Dialog();
        dialog.open();

        //dialog.close();
    });
});
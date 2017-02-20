/**
 * Created by apple on 17/2/19.
 */
define(['jquery'],function($){

    function Dialog(){
        this.defaultVal = {
            width:400,
                height:300
        };
    }

    Dialog.prototype.open = function(options){
        this.$container = $('<div class="dialog-container"></div>');
        this.$mask = $('<div class="dialog-mask"></div>');
        this.$box = $('<div class="dialog-box"></div>');
        this.$titleBox = $('<div class="dialog-title-box"></div>');
        this.$title = $('<div class="dialog-title"></div>');
        this.$close = $('<div class="dialog-close">[X]</div>');
        this.$content = $('<div class="dialog-content"></div>');

        var _this = this;
        $.extend(this.defaultVal,options);
        this.$container.append(this.$mask).append(this.$box);
        this.$box.append(this.$titleBox).append(this.$content.html($('.dialog-box-content').show()))
            .css({
                width:this.defaultVal.width,
                height:this.defaultVal.height,
                'margin-left':-this.defaultVal.width/2,
                'margin-top':-this.defaultVal.height/2
            });

        this.$titleBox.append(this.$title.html(this.defaultVal.title)).append(this.$close);
        $('body').append(this.$container);

        this.$close.on('click',function(){
            _this.close();
        });
    };
    Dialog.prototype.close = function(){
        this.$container.remove();
    };

    return Dialog;

});
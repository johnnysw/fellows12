/**
 * Created by apple on 17/2/19.
 */
define(['jquery'],function($){
    var $container = $('<div class="dialog-container"></div>'),
        $mask = $('<div class="dialog-mask"></div>'),
        $box = $('<div class="dialog-box"></div>'),
        $titleBox = $('<div class="dialog-title-box"></div>'),
        $title = $('<div class="dialog-title"></div>'),
        $close = $('<div class="dialog-close">[X]</div>'),
        $content = $('<div class="dialog-content"></div>');

    return {
        defaultVal:{
            width:400,
            height:300
        },

        open:function(options){
            var _this = this;
            $.extend(this.defaultVal,options);
           // console.log(this.defaultVal); //{width: 800, height: 500, title: "呵呵", content: "hjsgdkhag "}


           /* var str = '<div class="dialog-container">'
                        +'<div class="dialog-mask"></div>'
                        +'<div class="dialog-box">'
                        +'<div class="dialog-title-box">'
                        +'<div class="dialog-title">'+this.defaultVal.title+'</div>'
                        +'<div class="dialog-close">[X]</div>'
                        +'</div>'
                        +'<div class="dialog-content">'+this.defaultVal.content+'</div>'
                        +'</div>'
                        +'</div>';*/
            $container.append($mask).append($box);
            $box.append($titleBox).append($content.html($('.dialog-box-content').show()))
                .css({
                width:this.defaultVal.width,
                height:this.defaultVal.height,
                'margin-left':-this.defaultVal.width/2,
                'margin-top':-this.defaultVal.height/2
            });

            $titleBox.append($title.html(this.defaultVal.title)).append($close);
            $('body').append($container);

            $close.on('click',function(){
                _this.close();
            });
        },
        close:function(){
            $container.remove();
        }
    }

});
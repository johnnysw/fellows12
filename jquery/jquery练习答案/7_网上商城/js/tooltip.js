function tooltip(selector){
    $(selector).hover(function(e){
        this.myTitle = this.title == ""?this.innerHTML : this.title;
        this.title = "";//清空的目的是不显示默认的tip
        var $div = $("<div id='tooltip'></div>");
        $div.appendTo($("body")).html(this.myTitle).offset({
            top: e.pageY + 15,
            left: e.pageX + 15
        }).show("fast");
    }, function(){
        $("#tooltip").remove();
        this.title = this.myTitle;
    }).on("mousemove", function(e){
        $("#tooltip").offset({
            top: e.pageY + 15,
            left: e.pageX + 15
        });
    });
}

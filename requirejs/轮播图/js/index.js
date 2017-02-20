/**
 * Created by apple on 17/2/20.
 */
require(['jquery','carousel'],function($,Carousel){
    var car1 = new Carousel();
    car1.init({
        selector:'#content1',
        buttonStyle:'circle',
        speed:400,
        imgData:['images/1.jpg','images/2.jpg','images/3.jpg']
    });
});
/**
 * Created by apple on 17/2/20.
 */
require(['jquery','carousel'],function($,Carousel){
    var car1 = new Carousel();
    car1.init({
        selector:'#content1',
        buttonStyle:'square',
        speed:800,
        imgData:['images/1.jpg','images/2.jpg','images/3.jpg']
    });

    var car2 = new Carousel();
    car2.init({
        selector:'#content2',
        buttonStyle:'circle',
        speed:600,
        imgData:['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg']
    });
});
/**
 * Created by apple on 17/2/19.
 */
requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(['jquery','b'],function($,arraySort){
    var arr = 'sjhdgjh';
    $('input').on('click',function(){
        alert('haha');
    });
    console.log(arraySort(arr));


    //console.log(add(3,4));
});
//seajs
/*
define(function(require){

    var arraySort = require('b');

    var arr = 'sjhdgjh';

    console.log(arraySort(arr));


    //console.log(add(3,4));
});
*/

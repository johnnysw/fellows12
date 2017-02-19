/**
 * Created by apple on 17/2/19.
 */
define(function(){
    function isArray(arr){
        //Array.isArray();
        if(arr instanceof Array){
            return true;
        }
        return false;

    }
    return isArray;
});
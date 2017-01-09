/**
 * Created by apple on 17/1/9.
 */
var worker = new Worker('task.js');

worker.onmessage = function(e){
   alert(e.data);
}

worker.postMessage('haha');


console.log('ok');


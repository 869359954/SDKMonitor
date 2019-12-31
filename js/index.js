
function loadscript(file){
   var script = document.createElement('script');
   script.src = chrome.runtime.getURL(file);
   script.charset = "UTF-8";
   document.body.appendChild(script);
}

loadscript('./js/jquery-3.4.1.js');

setTimeout(function(){
   loadscript('./js/testsdk.js');
},1000)


   

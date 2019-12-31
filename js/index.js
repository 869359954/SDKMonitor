
function loadscript(file){
   var script = document.createElement('script');
   script.src = chrome.runtime.getURL(file);
   script.charset = "UTF-8";
   document.body.appendChild(script);
}

loadscript('./js/testsdk.js');


   

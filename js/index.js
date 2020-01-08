(function(){
   function loadscript(file){
      var script = document.createElement('script');
      script.src = chrome.runtime.getURL(file);
      script.charset = "UTF-8";
      document.body.appendChild(script);
   }
   
   
   setTimeout(function(){
      loadscript('./js/testsdk.js');
      console.log('已插入 content_scripts');
   },2000);
   
   window.addEventListener("message", function(e)
   {
      if(e.data.sdktitle){
         console.log(e.data);
         postToGround(e.data);
      }else if(e.data == 'loadJQ'){
         console.log('已插入 jquery.js');
         loadscript('./js/jquery.js');
      }
   }, false);
   
   function postToGround(data){
      chrome.runtime.sendMessage(data, function(response) {
         console.log(response);
     });
   }
})();

   

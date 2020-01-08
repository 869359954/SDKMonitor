var flag = true;
var popResultTitle = '';
function popupTitle(){
     return {data: popResultTitle,flag: flag};
}
chrome.tabs.onActivated.addListener(function (activeInfo) {
    if (activeInfo.tabId) {
        chrome.tabs.get(activeInfo.tabId, function (tab) {
            popResultTitle = '请刷新页面';
        });
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{   
    flag = false;
    var title = request.sdktitle;
    var sdkdata = request.sdkdata;
    if(title){
        popResultTitle = '<div id ="resultTitle">' + title + '</div>';
         if(sdkdata){
            var resultarr = sdkdata.split('、');
            for(var i = 0;i < resultarr.length;i++){
                if(resultarr[i].trim() !== ''){
                    popResultTitle +='<li>' + resultarr[i] + '</li>';
                }
            }
         }
    }
    flag = true;
    sendResponse('background 已收到');
});

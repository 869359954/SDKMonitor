
(function (){
    var SDKarr = '';
    var defaultstr = '此页面没有集成可统计的 SDK！';
    function testSDK([key,name]){
        if(window[key]){
            return name;
        }else{
            return '';
        }
    }
    function getSDKType(){
        var sdkType = [['sensorsDataAnalytic201505','SensorsData'],['zhuge','诸葛 io'],['gio','GrowingIO'],['xiaonengjs','TalkingData'],['AnalysysAgent','易观'],['_hmt','百度统计'],['dataLayer','Google Analytics']];
        window.$(document).ready(function(){
            for(var i = 0;i < sdkType.length;i++){
                var sdktype = testSDK(sdkType[i]);
                if(sdktype !== ''){
                    SDKarr += testSDK(sdkType[i]) + '、';
                }
            }
            if(SDKarr.trim() === ''){
                postMessage({sdktitle : defaultstr});
            }else{
                postMessage({sdktitle : '监测到的 SDK 厂商有：',sdkdata : SDKarr});
            }
        });
    }
    
    function init(){
        if(!window.$ || !window.$(document) || !window.$(document).ready){
            window.postMessage('loadJQ', '*');
        }
        setTimeout(getSDKType,1000);
    }

    function postMessage(data){
        window.postMessage(data, '*');
    }
    init();
})();


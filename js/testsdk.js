
function init(){
    var SDKarr = '';
    var defaultstr = '此页面没有集成可统计的 SDK！';
    function testSDK([key,name]){
        if(window[key]){
            return name;
        }else{
            return '';
        }
    }
    
    var sdkType = [['sensorsDataAnalytic201505','SensorsData'],['zhuge','诸葛 io'],['gio','GrowingIO'],['xiaonengjs','TalkingData'],['AnalysysAgent','易观'],['_hmt','百度统计']];
    
    for(var i = 0;i < sdkType.length;i++){
        SDKarr += testSDK(sdkType[i]) + '  ';
    }

    if(SDKarr.trim() === ''){
        alert(defaultstr);
    }else{
        alert('监测到的 SDK 厂商有：'+ SDKarr);
    }
    

}

init();


function init(){
    var statusDiv = document.getElementById('dataStatus');
    var odiv = document.getElementById('dataContent');
    var btn = document.getElementById('getResultBtn');
    var oul = document.getElementById('store');
    var infoDiv = document.getElementById('infoWrapper');
    var store = {
        '0': {type: 'SensorsData',href: 'https://www.sensorsdata.cn/'},
        '1': {type: '诸葛 io',href: 'https://zhugeio.com/'},
        '2': {type: 'GrowingIO',href: 'https://www.growingio.com/'},
        '3': {type: 'TalkingData',href: 'http://www.talkingdata.com/'},
        '4': {type: '易观',href: 'https://www.analysys.cn/'},
        '5': {type: '百度统计',href: 'https://tongji.baidu.com/web'},
        '6': {type: 'Google Analytics',href: 'https://accounts.google.com/'},
    };
    
    function creatSDKStore(){
        for(var prop in store){
            var info = store[prop];
            creatDom('li',info.type,oul,prop,"双击访问");
        }
    }
    function addEvent(){
        var oli = document.getElementsByClassName('sdkMaker');
        for(var i = 0;i < oli.length;i++){
            (function(i){
                var el = oli[i];
                var id = Number(el.getAttribute("id"));
                el.onclick = function(){
                    openNewTap(el,store[id].href);
                };
            })(i);
        }
    }
    function creatDom(el,content,parentel,id,title){
        var oli = document.createElement(el);
        oli.innerHTML = content;
        oli.setAttribute('id',id);
        oli.setAttribute('title',title);
        oli.setAttribute('class','sdkMaker');
        parentel.appendChild(oli);
    }
    function openNewTap(el,url){
        el.onclick = function(){
            chrome.tabs.create({
                'url': url
            });
        };  
    }
    creatSDKStore();
    addEvent();
    btn.addEventListener('click',function(){
        statusDiv.innerHTML = '统计中...';
        setTimeout(function(){
            statusDiv.setAttribute('id','displayDiv');
            infoDiv.setAttribute('id','displayDiv');
            var bg = chrome.extension.getBackgroundPage();
            var result = bg.popupTitle();
            if(result.flag){
                odiv.innerHTML = result.data;
                btn.setAttribute('id','displayDiv');
            }else{
                btn.innerHTML = '刷新';
                odiv.innerHTML = '未加载完成，请 3s 后点击刷新按钮刷新结果';
            }
        },2000);
    });
}





init();
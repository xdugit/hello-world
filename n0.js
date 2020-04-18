// Load 3rd js
function loadStyle(url){
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
}
function loadJs(url){
    var script = document.createElement("script")
    var script = document.createElement("script")
    script.type = "text/javascript"
    script.src = url;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(script);
}

// http://layer.layui.com/
// https://www.layui.com/doc/modules/layer.html#type
loadStyle("//www.layuicdn.com/layui/css/layui.css")
loadStyle("https://cdn.bootcss.com/layer/1.8.5/skin/layer.min.css")
loadJs("//www.layuicdn.com/layer/layer.js")

// loadJs("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.4.456/pdf.min.js")
// loadJs("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.4.456/pdf.worker.js")
// loadJs("https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js")
var getBlobUrl = function (obj) {
    var blob = new Blob([obj], { type: "application/pdf" });
    return window.URL.createObjectURL(blob);
};

var saveByteArray = function (reportName, byte) {
    var blob = new Blob([byte], { type: "application/pdf" });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName;
    link.download = fileName;
    link.click();
};
function fakeClick(obj) {
    var ev = document.createEvent("MouseEvents");
    ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    obj.dispatchEvent(ev);
 }
 
function exportRaw(name, data) {
      var urlObject = window.URL || window.webkitURL || window;
      var export_blob = new Blob([data]);
      var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
      save_link.href = urlObject.createObjectURL(export_blob);
      save_link.download = name;
      fakeClick(save_link);
} 

function heredoc(fn) {
    return fn.toString().split('\n').slice(1,-1).join('\n') + '\n'
}

function preprocess_author(authorObj) {
    var re=/(\S+)(\?q.+)&fixedUrl/;
    for (var i=0,len=authorObj.Data.SplitFiles.length;i<len;i++){
        var url = authorObj.Data.SplitFiles[i].Url;
        var url_r = url.match(re);
        if(url_r.length==3 && url_r[1].search("gateway.keledge.com/transfer")>=0){
            authorObj.Data.SplitFiles[i].Url = "https://cip.keledge.com:50002/transfer/dcd/net/content/stream"+url_r[2];
        }
    }
    return authorObj;
}

function export_info(name){
    var infoObj = {};
    infoObj.cookie = document.cookie;
    infoObj.location = document.location.toString();
    infoObj.headers = heredoc(function(){/*
        Accept: application/json, text/plain, *\/*
        Accept-Encoding: gzip, deflate, br
        Accept-Language: en,zh-CN;q=0.9,zh;q=0.8,pt;q=0.7
        Cache-Control: no-cache
        Connection: keep-alive
        Host: gateway.keledge.com
        Origin: https://www.keledge.com
        Pragma: no-cache
        Sec-Fetch-Dest: empty
        Sec-Fetch-Mode: cors
        Sec-Fetch-Site: same-site
        User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36
    */});
    infoObj.token = '';
    layer.prompt({
        formType: 0,
        closeBtn: 0,
        btn:["确定"],
        value: '',
        maxlength: 50,
        area: 200,
        title: 'Token：',
    },
    function(value, index, elem){
        infoObj.token = value;
        exportRaw(name, JSON.stringify(infoObj, null, 4));
        layer.close(index);
    });
}

// 浏览器内直接下载
//获取元素在数组的下标
Array.prototype.indexOf = function(val) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == val)	{ 
			return i;
		};
	}
	return -1; 
};

//根据数组的下标，删除该下标的元素
Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if (index > -1) {
	this.splice(index, 1);
	}
};

var direct_flag = false;
var direct_prefix = null;
var download_pages = [];
var pdf_objs = {};
var direct_timer;
var lay_id;
function go_page(page){
    $('.jump_input input').val(page);
    $('.jump_input input')[0].dispatchEvent(new Event('input'));
    $('.jump_input span').click();
    layer.msg(`go page:${page}`)
}
function range(start, stop, step = 1) {
    return Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step)
}

function download_dec_page (page_num, pdf_obj){
    page_num++;
    pdf_objs[page_num.toString()] = pdf_obj;
}



var lock_int = false
setInterval(function(){
    if(lock_int==true)
        return
    lock_int = true;
    if (direct_flag && download_pages.length>0){
        var tmp = [];
        for(var i=0,len=download_pages.length;i<len;i++){
            var p = download_pages[i];
            var o = pdf_objs[p.toString()];
            if(o != null){
                var file_name = `${direct_prefix}_${p}.pdf`;
                layer.alert(file_name);
                exportRaw(file_name, o);
                tmp.push(p);
                layer.msg(`download page:${p}`)
            }
        }
        for(var i=0,len=tmp.length;i<len;i++){
            download_pages.remove(tmp[i]);
        }
    }
    lock_int = false;
},5000);

function parse_pages(str){
    var pages = [];
    str = str.replace('\n',',');
    var _pages = str.split(',');
    for(var i=0,len=_pages.length;i<len;i++){
        var p = _pages[i]
        if (p.match(/^\d+$/)){
            pages.push(Number(p));
        }
        else{
            rep = p.match(/^(\d+)-(\d+)$/)
            if(rep){
                pages=pages.concat(range(Number(rep[1]), Number(rep[2])+1));
            }
        }
    }
    pages = [...new Set(pages)];
    return pages.sort(function(a, b){return a - b})
}
function start_turn_page(t){
    if(t>0){
        direct_timer = setInterval(function(){
            if(download_pages.length>0)
                go_page(download_pages[0]);
            else{
                clearInterval(direct_timer);
                layer.close(lay_id);
            }
        },t*1000)
    }
}

function stop_turn_page(){
    if(direct_timer)
        clearInterval(direct_timer)
}


function download_in_browser(){
    layer.prompt({
            type: 1,
            formType: 2,
            closeBtn: 1,
            resize: false,
            btn:["确定"],
            value: '',
            area: ['500px', '100px'],
            title: '请输入要下载的页码,起始为1,例如：1-5,10,15,20-30',
        },
        function(value, index, elem){
            // layer.alert(JSON.stringify(value));
            layer.close(index);
            download_pages = parse_pages(value);
            
            if(direct_prefix == null){
                direct_prefix = document.title;
            }
            if(direct_prefix == null){
                direct_prefix = `${Math.floor((new Date()).getTime() / 1000)}`;
            }
            layer.msg(JSON.stringify(download_pages));
            //输入间隔时间
            layer.prompt({
                    formType: 0,
                    closeBtn: 0,
                    resize: false,
                    btn:["确定"],
                    value: '10',
                    area: ['500px', '100px'],
                    title: '请输入自动翻页间隔时间，（0不自动翻页）',
                },
                function(value, index, elem){
                    layer.close(index);
                    direct_flag = true;
                    start_turn_page(Number(value))
                    lay_id = layer.open({
                        type: 1
                        ,title: "浏览器内下载中"
                        ,skin: 'layui-layer-molv' //样式类名
                        ,offset: 't'
                        ,content: '<div style="padding: 10px;">浏览器内下载中...<br>翻页过快可能导致无法导出</div>'
                        ,btn: ['停止']
                        ,closeBtn: 0
                        ,shade: 0 //不显示遮罩
                        ,btn1:function(){
                            stop_turn_page();
                            layer.msg("已经停止下载！")
                            download_pages=[];
                            direct_flag=false;
                            layer.close(lay_id);
                        }
                      });
                });
        });
}

// 外部下载
var authorObj = null;
var passwdObj = null;
var passwd_is_download = false;
var output_prefix = null;
var confirm_download=null;
var ui_is_init = false;
// 输出 https://gateway.keledge.com/transfer/aqr/authorize

// Hook
var output_authorize = function(result){
    var _authorObj = JSON.parse(JSON.stringify(result));
    authorObj = _authorObj;
    if(confirm_download == true){
        layer.msg('get authorize!', function(){
            //关闭后的操作
            });
    }
}
var output_password = function(passwd){
    if(passwd_is_download)
        return
    passwdObj = passwd;
    passwd_is_download = true;
    if(confirm_download == true){
        layer.msg('get passwd!', function(){
            //关闭后的操作
            });
    }
}

function wait_dialog(){
    layer.open({
        type: 0
        ,title: "等待获取信息"
        ,skin: 'layui-layer-molv' //样式类名
        ,offset: 't'
        ,content: '<div style="padding: 10px auto;">正在获取信息...</div>'
        ,btn: []
        ,closeBtn: 0
        ,shade: 0 //不显示遮罩
      });
 }

function ui_init(){
    if(ui_is_init)
        return;
    layer.open({
        type: 0,
        title: "简易教程",
        skin: 'layui-layer-molv', //样式类名
        closeBtn: 1,
        anim: 1,
        icon: 1,
        shadeClose: false, //开启遮罩关闭
        btn: ["Github教程","保存"],
        content: '<h2>简易教程：</h2><div style="padding: 10px;line-height: 250%;font-size: medium;"> <p><br>1. 点击保存按钮，保存xxx_authorize.txt和xxx_passwd.txt<br>2. 使用脚本下载<pre>git clone git@github.com:ygcaicn/keledge.git</pre> <pre>cd keledge;./main.py -a ~/Downloads/xxx_authorize.txt</pre>3. Merge pdf.<br>Github:<a style="color: #23696f" href="https://github.com/ygcaicn/keledge" target="_blank">给个star！</a></p><br><p style="color:red">免责声明:请自觉遵守法律法规，本脚本仅供学习参考，所有下载的PDF请在24小时内删除，请勿传播，一切法律责任由用户自己承担，与本人无关</p></div>',
        area: '600px',
        resize: false,
        move: false,
        zindex: 99999,
        btn1: function(){
            window.open(url='https://github.com/ygcaicn/keledge', target="_black");
        },
        btn2: function(){
            layer.prompt({
                    formType: 0,
                    closeBtn: 0,
                    btn:["确定"],
                    value: document.title,
                    maxlength: 50,
                    area: 200,
                    title: '请输入书名：',
                },
                function(value, index, elem){
                    confirm_download = true;
                    output_prefix = value;
                    layer.close(index);
                    wait_dialog();
                });
        }
    });
    ui_is_init = true;
}

var t_var;
function check_exec(){
    clearInterval(t_var);
    t_var = setInterval(function(){
        if (passwdObj != null && authorObj != null && confirm_download == true){
            clearInterval(t_var);
    
            if(output_prefix == null){
                output_prefix = document.title;
            }
            if(output_prefix == null){
                output_prefix = `${Math.floor((new Date()).getTime() / 1000)}`;
            }
            var export_exec = function(){
                exportRaw(`${output_prefix}_authorize.txt`, JSON.stringify(authorObj, null, 4));
                exportRaw(`${output_prefix}_passwd.txt`, passwdObj);
                export_info(`${output_prefix}_info.txt`);
                // layer.closeAll();
                layer.alert('保存成功，查看如何使用脚本获得pdf？(记得star哟！)', {icon: 1, area: '500px'}, function(index){
                    //do something
                    window.open(url='https://github.com/ygcaicn/keledge', target="_black");
                    layer.close(index);
                  }); 
            }
    
            // 总页数 authorObj['Data']["NumberOfPages"]
            // 获取到的页数 authorObj['Data']["SplitFileUrls"].length
            if(authorObj['Data']["SplitFileUrls"].length < authorObj['Data']["NumberOfPages"]){
                layer.alert(`未获取全文阅读权限！<br>本书总页数：${authorObj['Data']["NumberOfPages"]}<br>获取到的页数：${authorObj['Data']["SplitFileUrls"].length}<br>(tip:获取到的页数比总页数少1页，实际上已经是全文了，可忽略继续下载即可！)`, {
                    icon: 2,
                    btn: ['继续下载','荐购获取权限'] //按钮
                  }, function(){
                    // 继续下载
                    export_exec();
                  }, function(){
                    // 荐购获取权限
                    $('.jump_input input').val(authorObj['Data']["NumberOfPages"]);
                    $('.jump_input input')[0].dispatchEvent(new Event('input'));
                    $('.jump_input span').click();
                    $('.to_recommend')[0].click();
                  });
            }
            else{
                export_exec();
            }
        }
    },3000)
}
check_exec();

// 尝试弹出右上角对话框
var t_d = setInterval(function(){
    if(ui_is_init == true){
        clearInterval(t_d);
        layer.open({
            type: 1,
            content: '<div style="padding:20px;text-align: center;">Github:<a style="color: #23696f" href="https://github.com/ygcaicn/keledge" target="_blank">给个star！</a><br></div>',
            skin: 'layui-layer-molv',
            shade: 0,
            btnAlign: 'c' ,
            offset: 'rt',
            area:'300px',
            btn: ['下载', '浏览器中下载（实验）'],
            btn1: function(){
                ui_is_init = false;
                confirm_download = false;
                ui_init();
                check_exec();
           },
           btn2: function(){
                // return false
                download_in_browser();
                return false
           }
        });
    }
 }, 1000)



window.οnlοad=function(){
    ui_init();
}
var t_init = setInterval(function(){ 
    ui_init();
    if(ui_is_init)
    {
        clearInterval(t_init);
    }
 }, 5000);


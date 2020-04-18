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


// var prefix=null;
// var confirm_download=null;
// 浏览器内直接下载
var download_enc_page = function(i, byte){
    // if(confirm_download==null){
    //     confirm_download = window.confirm("是否需要下载？");
    // }
    // if(confirm_download){
    //     if(prefix==null){
    //         prefix = window.prompt("请输入保存文件前缀：");
    //         if(prefix==="")
    //             prefix = `${Math.floor((new Date()).getTime() / 1000)}`;
    //     }
    //     reportName = `${prefix}_${i}.pdf`;
    //     saveByteArray(reportName, byte);
    // }
}


var authorObj = null;
var passwdObj = null;
var passwd_is_download = false;
var output_prefix = null;
var confirm_download=null;
var ui_is_init = false;
// 输出 https://gateway.keledge.com/transfer/aqr/authorize

// Hook
var output_authorize = function(result){
    authorObj = result;
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

 var t_d = setInterval(function(){
    if(ui_is_init == true){
        clearInterval(t_d);
        layer.confirm('<div style="padding:20px;text-align: center;">Github:<a style="color: #23696f" href="https://github.com/ygcaicn/keledge" target="_blank">给个star！</a><br></div>', 
        {
            type: 1,
            skin: 'layui-layer-molv',
            shade: 0,
            btnAlign: 'c' ,
            offset: 'rt',
            area:'200px',
            btn: ['下载']
        }, function(){
            ui_is_init = false;
            confirm_download = false;
            ui_init();
            check_exec();
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


var Util ={};
Util.loadJS = function(url, callback, ecall) {
    var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
    script,
    options,
    o,
    scriptsArray = [];
    if (typeof url === "object") {
        options = url;
        url = undefined
    };
    o = options || {};
    url = url || o.url;
    var path = url.split(",");
    callback = callback || o.success;
    for (var i = 0; i < path.length; i++) {
        str = path[i].slice(path[i].lastIndexOf('/') + 1);
        name = str.substring(0, str.indexOf("."));
        script = document.createElement("script");
        script.async = o.async || false;
        script.type = "text/javascript";
        if (o.charset) script.charset = o.charset;
        if (o.cache === false) {
            path[i] = path[i] + (/\?/.test(path[i]) ? "&": "?") + "time=" + (new Date()).getTime()
        };
        script.src = (path[i].indexOf("/") == '-1' ? true: false) === true ? Util.config.JSfile + path[i] : path[i];
        head.appendChild(script)
    };
    if ('function' == typeof callback) {
        document.addEventListener ? script.addEventListener("load",
        function() {
            callback();
            script.onload = null;
            script.parentNode.removeChild(script)
        },
        false) : script.onreadystatechange = function() {
            if (/loaded|complete/.test(script.readyState)) {
                callback();
                script.onreadystatechange = null
            }
        }
    };
    if (ecall) {
        script.onerror = function() {
            script = null;
            if ('function' == typeof ecall) ecall()
        }
    }
};
$(function(){
    var protocol = document.location.protocol.toLowerCase();
    var onlineService = $("#onlineService");
    if(protocol == "https:"){
      onlineService.attr("href","http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODAyNjk2MV8xOTU2MjhfNDAwNjA5OTQwMF8yXw");
      onlineService.attr("target","_blank");
    }else{
      onlineService.attr("href","javascript:void(0)");
      Util.loadJS("http://wpa.b.qq.com/cgi/wpa.php", function(){
           BizQQWPA.addCustom({
                aty: '0', //指定工号类型,0-自动分流，1-指定工号，2-指定分组
                nameAccount: '4006099400', //营销 QQ 号码
                selector: 'onlineService' //WPA 被放置的元素
            });
      });    
    }
})
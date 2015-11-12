$(document).ready(function () {
    var username = GetCookie("YIRENNAME");
    if (username != null && username != "") {
        $("input[name='username']").val(username);
        $('input[name="rememberMe"]').attr('checked', 'true');
    }
    $('body').on('submit',"form[name='theform']", function(){
        var $form = $(this), result=true;
        var username = $.trim($form.find('input[name="username"]').val());
        var password = $.trim($form.find('input[name="password"]').val());
        var srand = $.trim($form.find('input[name="srand"]').val());
        if(username.length==0){
            $form.find("div.s_nick_user").text('邮箱不能为空');
            result = false;
        }
        if(username.length!=0&&!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(username)){
            $form.find("div.s_nick_user").text('邮箱格式不正确');
            result = false;
        }
        if(password.length==0){
            $form.find("div.s_user_pwd1").text('密码不能为空');
            result = false;
        }
        if(password.length<6){
            $form.find("div.s_user_pwd1").text('密码应该是6-16位之间');
            result = false;
        }
        if(srand.length==0){
            $form.find("div.s_srand").text('验证码不能为空');
            result = false;
        }
        var check_rand = false;
        if(srand.length!=0){
            $.ajax({
                url:base_url+'/login/cmsCheckRandom.action?srand=' + srand,
				async : false,
				dataType:"json",
                success:function(msg){
                    if(msg.status=='0'||msg.status=='1'){
                        $form.find("div.s_srand").text('验证码不正确');
                    }else if(msg.status=='2'){	
                        check_rand = true;
                    }
                }
            });
        }
        
        if(check_rand&& result){
            setorremovecooke();
        }
        return check_rand&&result;
    }).on('focus',"form[name='theform'] input[type='text'],form[name='theform'] input[type='password']", function(event){
            $(this).closest('div.counterBox_row').next().find('div.tl').empty();
        });
});
function setCookie(name, value) {
    var argv = setCookie.arguments;
    var argc = setCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    if (expires != null) {
        var LargeExpDate = new Date();
        LargeExpDate.setTime(LargeExpDate.getTime() + (expires * 1000 * 3600 * 24));
    }
    document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : ("; expires=" + LargeExpDate.toGMTString()));
}
function deleteCookie(name) {
    var expdate = new Date();
    expdate.setTime(expdate.getTime() - (86400 * 1000 * 1));
    setCookie(name, "", expdate);
}
function setorremovecooke() {
    if ($('input[name="rememberMe"]:checked').length == 1) {
        var username = $("input[name='username']").val();
        setCookie("YIRENNAME", username);
    }
    else {
        deleteCookie("YIRENNAME");
    }
}
function getCookieVal (offset) {
    var endstr = document.cookie.indexOf (";", offset);
    var cookstr;
    if (endstr == -1)
        endstr = document.cookie.length;
    cookstr	= unescape(document.cookie.substring(offset, endstr));
    if(cookstr!=null)
        cookstr	=decodeURI(cookstr);
    return cookstr;
}
function GetCookie (name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return getCookieVal (j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0)
            break;
    }
    return null;
}
function change_rand(){
    $("img.validate").attr('src', base_url+'/test/rand.action?d='+new Date().getTime());
}
function divLogin(){
    $("<div></div>").attr('id', 'login-div').load(base_url+"/pages/auth/divLogin.jsp", function(){
        if(window.location.href.indexOf('login.jsp')==-1){
            $("#login-div #tourl").val(window.location.href);
        }
        var username = GetCookie("YIRENNAME");
        if (username != null && username != "") {
            $("input[name='username']").val(username);
            $('input[name="rememberMe"]').attr('checked', 'true');
        }
    }).dialog({
            modal:true,
            resizable: false,
            draggable:false,
            title:'用户登录',
            width: 760,
            height:390,
            close : function(event, ui){
                $(this).dialog('destroy');
                $(this).remove();
            }
        });
}
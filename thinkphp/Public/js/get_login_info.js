		$(function(){
			$("body").on("mouseenter",".guide",function(){
				$(this).find(".guideIcon").show();
				$(this).find(".guideMenu").show();
			})
			$("body").on("mouseleave",".guide",function(){
				$(this).find(".guideIcon").hide();
				$(this).find(".guideMenu").hide();
			})
			
			$("body").on("mouseenter",".guideMenuIcon",function(){
				$(".guideIcon").css("backgroundPosition","0 -6px");
			})
			$("body").on("mouseleave",".guideMenuIcon",function(){
				$(".guideIcon").css("backgroundPosition","0 0");
			})
			$("body").on("mouseenter",".navMobile",function(){
				$(".navMobileBox").show();
			})
			$("body").on("mouseleave",".navMobile",function(){
				$(".navMobileBox").hide();
			})                   
                        //清理head头消息cookie记录
            $.cookie('snc',null);
			
		});
		
		var loginName = '';
		var isLogined = false;
		var user_data_info = {};

		var jk = false;
		var cj = false;
		var base_url = 'http://www.yirendai.com';
		
		//预定义关于我们用到的id

		var aboutsids = ["10","13","14","15","16","17","18","142"];
		var helpdocid = '26';

		var saftyid = '130';
		var indexid = '192';
		var msghtml = '';
		var thtml = '';
		var top_menu = '';
		var noticehtml= '';
		$(document).ready(function(){  
			$('.button').click(function(){

			$(".dialog_login").dialog({

			  modal:true,

			  resizable: false,

			  draggable:false,

			  title:'用户登录',

			  width: 760,

			  height:400

			  });

			});

			$('.close').click(function(){

			  $(".dialog_login").dialog("close");

			});

			//获取导航选中状态

		   if($.inArray(curid, aboutsids) != -1) {
			  // $('ul.w960_2013').removeClass('on');

			   //$('.abouts').addClass('select_2013');
			   $('ul.header_nav a').eq(4).siblings().removeClass('live');
			   $('ul.header_nav a').eq(4).addClass('live');
		   }

		   //安全保障

		   if(helpdocpid == saftyid) {

			 //$('ul.l').removeClass('on');

			 //$('.saftys').addClass('select_2013');
				$('ul.header_nav a').eq(3).siblings().removeClass('live');
				$('ul.header_nav a').eq(3).addClass('live');
		   } 
		 $.ajax({  
				type : "GET",  
				url:'/home/cmsHeaderInfo?i='+Math.random(), 
				dataType : "json",  
				json	: 'aaa',		 
				async: false,
				success:function(cdata){
				if (cdata.status == 'success') {
				//记录帐号信息
				isLogined = true;
				loginName = cdata.content.userCnname;
				  //帐号所有信息全局化
				  user_data_info = cdata.content;
				  //$(".indexLogin").hide();
				  //$(".indexlogin_inner").css("display","none");
						//消息为0不显示
						if (cdata.content.userNoticeCnt == '0') {
							noticehtml = '';
						} else {
							noticehtml = '<span id="unreadNoticeHead">（<span class="orange">'+cdata.content.userNoticeCnt+'</span>）</span>';	
						}
						//出借人
						if (cdata.content.userType == '1') {
							//购物车为0不显示购物车
							if (cdata.content.userCartCnt != '0') {
								msghtml = '<li class="gray shopping_block" >|</li><li class="shopping_li"><div  class="shopping_block"><a id="shoppingcart" class="shoppingcart" href="/lender/cart"> 购物车<span class="shoppingcart_money">'+cdata.content.userCartCnt+'</span></a></div></li>';				
							}
							$('li.curstatus a').text('我要理财').attr('href', '/finance/list/1');
							thtml = '<li><span>欢迎您，</span><span><a href="/user/myaccount" class="orange" target="_blank" title="'+cdata.content.userCnname+'"  alt="'+cdata.content.userCnname+'">'+cdata.content.userCnname+'</a></span>&nbsp;&nbsp;<a rel="nofollow" href="/auth/logout">退出</a></li><li class="gray">|</li><li><a href="/user/message/list/1" id="unreadNoticeA" class="unread">消息'+noticehtml+'</a></li> <li class="gray">|</li>'+' <li class="guide"><span class="guideIcon"></span><span class="guideLink">新手引导</span><ul class="guideMenu"><li><a class="guideMenuIcon" href="'+lend_url+'" rel="nofollow">我是出借人</a></li><li><a href="'+borrow_url+'" rel="nofollow">我是借款人</a></li></ul></li><li class="gray">|</li> <li><a href="'+support_url+'" rel="nofollow">帮助中心</a></li>'+msghtml;
							//显示首页这行菜单
							top_menu ='<li><a  href="http://www.yirendai.com/">首页</a></li><li><a  href="/finance/list/1">我要理财</a></li><li><a href="/user/myaccount">我的账户</a></li><li><a href="/specialpage/safeguard/" rel="nofollow">安全保障</a></li><li><div class="navMobile"><a class="navMobileLi" href="javascript:void(0);">手机客户端</a><div class="navMobileBox clearfix"><i class="navMobilePoint"></i><div class="navMobileBoxApp1"><a href="http://app.yirendai.com/n_yirendai.html" target="_blank"></a></div><div class="navMobileBoxApp2"><a href="http://www.yirendai.com/specialpage/yrdlc/" target="_blank"></a></div></div></div></li><li><a href="/ask/">宜人问答</a></li>';
						} 
						//借款人
						if (cdata.content.userType == '0') {							jk = true;
							thtml = '<li><span>欢迎您，</span><span><a href="/user/myaccount" class="orange" target="_blank" title="'+cdata.content.userCnname+'"  alt="'+cdata.content.userCnname+'">'+cdata.content.userCnname+'</a></span>&nbsp;&nbsp;<a rel="nofollow" href="/auth/logout">退出</a></li><li class="gray">|</li><li><a href="/user/message/list/1" id="unreadNoticeA" class="unread">消息'+noticehtml+'</a></li> <li class="gray">|</li>'+' <li class="guide"><span class="guideIcon"></span><span class="guideLink">新手引导</span><ul class="guideMenu"><li><a class="guideMenuIcon" href="'+lend_url+'" rel="nofollow">我是出借人</a></li><li><a href="'+borrow_url+'" rel="nofollow">我是借款人</a></li></ul></li><li class="gray">|</li><li> <a href="'+support_url+'" rel="nofollow">帮助中心</a></li>';
							// 显示首页这行菜单
							top_menu ='<li><a href="http://www.yirendai.com/">首页</a></li><li><a  href="/borrowguide">我要借款</a></li><li><a href="/user/myaccount">我的账户</a></li><li><a href="/specialpage/safeguard/" rel="nofollow">安全保障</a></li><li><div class="navMobile"><a class="navMobileLi" href="javascript:void(0);">手机客户端</a><div class="navMobileBox clearfix"><i class="navMobilePoint"></i><div class="navMobileBoxApp1"><a href="http://app.yirendai.com/n_yirendai.html" target="_blank"></a></div><div class="navMobileBoxApp2"><a href="http://www.yirendai.com/specialpage/yrdlc/" target="_blank"></a></div></div></div></li><li><a href="http://www.yirendai.com/ask/">宜人问答</a></li>';
						}
					} else {
						thtml = '<li><span> 您好！欢迎来到宜人贷！</span><a href="/auth/login/home" rel="nofollow">登录</a> </li><li class="gray">|</li><li><a href="/auth/regist/home" class="orange" rel="nofollow">快速注册</a></li> <li class="gray">|</li><li class="guide"><span class="guideIcon"></span><span class="guideLink">新手引导</span><ul class="guideMenu"><li><a class="guideMenuIcon" href="'+lend_url+'" rel="nofollow">我是出借人</a></li><li><a href="'+borrow_url+'" rel="nofollow">我是借款人</a></li></ul></li><li class="gray">|</li> <li><a href="'+support_url+'" rel="nofollow">帮助中心</a></li>';
						top_menu='<li><a href="http://www.yirendai.com/">首页</a></li><li id="lendTab" ><a  href="/finance/list/1">我要理财</a></li><li id="borrowTab"><a href="/borrowguide">我要借款</a></li><li><a href="/specialpage/safeguard/" rel="nofollow">安全保障</a></li><li><div class="navMobile"><a class="navMobileLi" href="javascript:void(0);">手机客户端</a><div class="navMobileBox clearfix"><i class="navMobilePoint"></i><div class="navMobileBoxApp1"><a href="http://app.yirendai.com/n_yirendai.html" target="_blank"></a></div><div class="navMobileBoxApp2"><a href="http://www.yirendai.com/specialpage/yrdlc/" target="_blank"></a></div></div></div></li><li><a href="http://www.yirendai.com/ask/">宜人问答</a></li>'
						$(".indexlogin_inner").css("display","block");
					}
					$('.header_login').html(thtml);
					$('.header_nav').html(top_menu);
					}
			 });
			 //登陆后请求http://www.yirendai.com/user/message/unread
			if(isLogined){
				$.ajax({
					url:base_url+'/user/message/unread',
					type:'post'
				});
			}
		});
		//获取登陆信息
		$(function(){
			var indexlogin_inner = $(".indexlogin_inner");
			var loginData ;
			 $.ajax({  
				type : "GET",  
				url:'/home/cmsHeaderInfo?i='+Math.random(), 
				dataType : "json",  
				json	: 'aaa',		 
				async: false,
				success:function(cdata){
				// console.info(cdata);
				if (cdata.status == 'success') {
					
					loginData = '<a class="btnMycount" href="/auth/login/home" rel="nofollow">我的账户</a> <a class="btnLogout" href="/auth/logout" rel="nofollow">退出</a>';
				}else{
					loginData = '<a class="btnLogin" href="/auth/login/home" rel="nofollow">登录</a> <a class="btnReg" href="/auth/regist/home" rel="nofollow">立即注册</a>';
				}
				indexlogin_inner.html(loginData);
				}
			});
		});

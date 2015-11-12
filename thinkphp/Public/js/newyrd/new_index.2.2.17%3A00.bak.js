﻿$(document).ready(function(){  
	//获取并显示列表数据
	    $.ajax({  
        type : "GET",  
        url : "/home/index", 
		dataType : "json",  
		jsonp	: 'getdata',		 
		async: false,
		success:function(json){
			var items = {};
			items['loanAndBidInfos'] = json.loanAndBidInfos;
			items['transferLoanApplies']  = json.transferLoanApplies;
			items['loanAndBidFinishInfos']  = json.loanAndBidFinishInfos;
			var buttonIfo = json.loanAndBidFinishInfos.length>0 ? '查看' :'出借'; 

			//var sale_status = json.financeProductList.onlineStatus;//线上销售状态(0:未售罄1:售罄)
			//var release_status = json.financeProductList.publishStatus;//发布状态(0:未发布（未上线）1:发布中（已上线）2:下线（不在前台显示）)
			var ydy_count = 0;
			var total_count = 0;//定义宜定盈和散标的显示的总共条数
			var ydy_str = '';
			var css_special = '';
			var bid_str = '<div class="indexList"><ul>';
			var html_str ='';
			var flagstr = '';
			var button_class = '';
			var bid_icon_class = '';
			var title_pre = '';
			var money_pre = '';
			var period_pre = '';
			var is_wan = false;//判断一定赢是否大于10000
			var ydy_status = json.hasOwnProperty("financeProductList");
			//ydy_status = false;
			// 宜定盈展示开始
			var true_count = 0;
			var ydy_count =3;
			if(ydy_status){
				var ydy_records = json.financeProductList;	
				//ydy_count = json.financeProductList.length>6? 6: json.financeProductList.length ;
				//临时设置为 <3
				total_count = 9;
				ydy_str += '<div class="yao_ydy_new"><div class="yao_ydy_new_nav"><div class="yao_ydy_new_navLeft clearfix"><h2>宜定盈</h2><span></span><p>';
				ydy_str += '智能投标、循环出借 '; 
				ydy_str += '</p><a href="/finance/list/1">更多&nbsp;&nbsp;›</a></div><div class="yao_ydy_new_navc"></div><div class="yao_ydy_new_main">';
				//console.log("ydy_count::"+ydy_count);
				for(var i=0;i<6;i++){
					if((ydy_records[i].productDetailId !="5224246324a44cf2912cff4fc2effd50") && (ydy_records[i].productDetailId!="2b4f36004ab84f85810c5ba98f2ed84c") && (ydy_records[i].productDetailId!="e178c9335121486997385fda17a270ef")){
					
//ydy_count++;
var ydy_rate =  ydy_records[i].preIncomeRate>0 ? ydy_records[i].preIncomeRate : '0.00';
					var ydy_period = ydy_records[i].closurePeriod>0 ? ydy_records[i].closurePeriod : '0';
					var ydy_qi = ydy_records[i].curPeriod;
					var name = ydy_records[i].productName;
					var yrd_url = '/finance/view/'+ydy_records[i].productDetailId;
					if((ydy_records[i].minOnlineAmount>=10000)){
						var minOnlineAmount = ydy_records[i].minOnlineAmount/10000;
						var minOnlineAmount_des = '万';
					}else{
						var minOnlineAmount = ydy_records[i].minOnlineAmount;
						var minOnlineAmount_des = '元';
					} 
					var locateAmount = ydy_records[i].onlineAllocateAmount/10000;
					/*var ydy_qi = 6;
					var ydy_rate =  2;
					var ydy_period = 3;
					var yrd_url  = 'http://www.yirendai.com/finance/view/270184b4b0f04de2852a931dfc5dfb86';
					var name = 'test';*/
					var res_str = '';//宜定盈利标题(小字部分前缀)
					if(ydy_qi>999){
						ydy_qi = '-'+ydy_qi;
					}
					else if(ydy_qi<=999 &&　ydy_qi>=100){
						ydy_qi = '-0'+ydy_qi;
					}else if(ydy_qi>=10 && ydy_qi<100){
						ydy_qi = '-00'+ydy_qi;
					}else if(ydy_qi>0 && ydy_qi<10){
						ydy_qi = '-000'+ydy_qi;
					}else if(ydy_qi<=0){
						ydy_qi = '-0000';
					}
					//宜定盈2条
					if(ydy_count == 2){
						ydy_str += '<ul class=" yao_ydy_new_main_t2 clearfix"><li class="yao_left clearfix"><div class="yao_left_l">宜定盈</div>';
						ydy_str +=	'<div class="yao_left_c2"><p>'+ydy_period+'</p></div><div class="yao_left_l">月期</div></li><li class="yao_right clearfix">';
						ydy_str +='<p>预期年化收益</p><h1>'+ydy_rate+'<span>%</span></h1></li><li class="yao_button2"><a href="'+yrd_url+'"></a></li></ul>';											
					}else if(ydy_count == 3){
						ydy_str += '<ul class="yao_ydy_new_main_t clearfix"><li class="yao_left clearfix"><div class="yao_left_l">宜定盈</div>';
						ydy_str +=	'<div class="yao_left_c"><p>'+ydy_period+'</p></div><div class="yao_left_l">月期</div></li><li class="yao_right clearfix">';
						ydy_str +='<p>预期年化收益</p><h1>'+ydy_rate+'<span>%</span></h1></li><li class="yao_button"><a href="'+yrd_url+'"></a></li></ul>';												
					}else if(ydy_count == 4){
							var css_specail = (i%2)? (i%2) : '';
							ydy_str += '<ul class=" yao_ydy_new_main_t4'+css_specail+' clearfix"><li class="yao_left clearfix"><div class="yao_left_l">宜定盈</div>';
							ydy_str +=	'<div class="yao_left_c4"><p>'+ydy_period+'</p></div><div class="yao_left_l">月期</div></li><li class="yao_right clearfix">';
							ydy_str +='<p>预期年化收益</p><h1>'+ydy_rate+'<span>%</span></h1></li><li class="yao_button4"><a href="'+yrd_url+'"></a></li></ul>';								
					}else if(ydy_count == 1){
							ydy_str += '<div class="yao_ydy_new_main clearfix"><div class="main_onel"><ul><li><span>'+ydy_period+'</span>个月</li>';
							ydy_str += '<li class="main_onez">封闭期</li></ul><ul><li class="main_ones"><span>'+ydy_rate+'</span>%</li><li class="main_onez">预期年化收益</li></ul><ul><li><span>'+minOnlineAmount+'</span>'+minOnlineAmount_des+'</li>';
							ydy_str += '<li class="main_onez">起投金额</li></ul><ul class="main_one_button"><li>总发售金额：'+locateAmount+'万</li><li><a href="'+yrd_url+'"></a></li></ul></div></div>'					
					
				}
				}
				}
				ydy_str += '</div></div></div>';
			}else{
				total_count = 6;
				/*ydy_str += '<ul class="yao_ydy_new_main_t clearfix"><li class="yao_top clearfix">';
				ydy_str += '<div class="yao_left_l">宜定盈</div><div class="yao_left_c"><p>3</p></div>';
				ydy_str += '<div class="yao_left_c"><p>6</p></div><div class="yao_left_c"><p>9</p></div>';
				ydy_str += '<div class="yao_left_l">月期</div></li>';
				ydy_str += '<li class="yao_content"><p>宜定盈已火爆售馨，敬请期待下期...</p></li>';
				ydy_str += 	'<li class="yao_button_new"><a href="/finance/list/1"></a></li></ul>';*/
				ydy_str += '<div class="tao-main"><div class="tao-main-title clearfix"><h2>宜定盈</h2><span></span><p>往期理财服务</p><a href="/finance/list/1">更多 ›</a></div>';
				ydy_str += '<div class="tao-main-m clearfix"><div class="tao-main-ml"><h1>7<span>%</span></h1><div class="tao-main-mlf clearfix"><div class="tao-main-mlfl clearfix"><p>宜定盈</p><span>3</span><p>月期</p></div><div class="tao-main-mlfr clearfix">';
				ydy_str += '<a href="/finance/list/1">立即查看</a><span></span></div></div></div>';
				ydy_str += '<div class="tao-main-mx"></div><div class="tao-main-ml tao-main-ml1"><h1>8<span>%</span></h1><div class="tao-main-mlf clearfix"><div class="tao-main-mlfl tao-main-mlfl1 clearfix"><p>宜定盈</p><span>6</span><p>月期</p></div><div class="tao-main-mlfr clearfix"><a href="/finance/list/1">立即查看</a><span></span></div></div></div>';
				ydy_str +='<div class="tao-main-mx"></div><div class="tao-main-ml tao-main-ml2"><h1>10<span>%</span></h1><div class="tao-main-mlf clearfix"><div class="tao-main-mlfl tao-main-mlfl2 clearfix"><p>宜定盈</p><span>12</span><p>月期</p></div><div class="tao-main-mlfr clearfix"><a href="/finance/list/1">立即查看</a><span></span></div></div></div></div></div>';
			}
			$(".yao_ydy_new_main").html(ydy_str);		
			html_str += ydy_str;
			//宜定盈展示结束
			var j = 0;
			$.each(items,function (key,ele){
				switch (key) {
					case 'loanAndBidInfos' : 
					{
						flagstr = '投标';
						button_class = 'input_btn btn_blue';
						href_pre = '/loan/view/';
						bid_icon_class = 'listIcon J0 png';
						money_pre = '借款金额';
						period_pre = '借款期限';
						title_pre = '';
					}
						break;
					case 'transferLoanApplies':
					{
						flagstr = '购买';
						button_class = 'input_btn btn_blue';
						href_pre = '/transfer/loan/';
						bid_icon_class = 'listIcon J1 png';
						title_pre = '转让债权-';
						money_pre = '剩余本金';
						period_pre = '剩余期限';

					}
						break;
					case 'loanAndBidFinishInfos' :
					{
						flagstr = '查看';
						button_class = 'input_btn btn_light l';
						href_pre = '/loan/view/';
						bid_icon_class = 'listIcon J0 png';
						title_pre = '';
						money_pre = '借款金额';
						period_pre = '借款期限';						
					}
						break;
				}
				//var bidlist_count = total_count-ydy_count;
				var bidlist_count = 6;
				for(var i=0;i<items[key].length && j<bidlist_count;i++){
					j++;
					//console.log("J::"+j);
					var iapproveAmt = items[key][i].iapproveAmt>0 ? items[key][i].iapproveAmt : '0';
					var maxRate = items[key][i].maxRate>0 ? items[key][i].maxRate : '0.00';
					var iapproveNo = items[key][i].iapproveNo>0 ? items[key][i].iapproveNo : '0';
					var is_programer = items[key][i].apply_flag;
					if(is_programer == 1304){
							bid_str += '<li class="clearfix">'+
							'<span class="'+bid_icon_class+'"></span>'+
							'<span class="listCon">'+
								'<a href="'+href_pre+items[key][i].applyId + '" class="listConT">'+title_pre+items[key][i].applyTitle+'</a>'+'<span class="programer-icon"></span>'+
								'<ul class="listConC clearfix">'+
									'<li class="listLine">'+money_pre+' <strong>'+iapproveAmt+'<small>元</small></strong></li>'+
									'<li class="listLine pl"><p>年化利率 <strong class="listNumRed">'+maxRate+'<small>%</small></strong><span class="m-tooltips png"></span></p></li>'+
									'<li class="pl">'+period_pre+' <strong>'+iapproveNo+'<small>月</small></strong></li>'+
								'</ul>'+
							'</span>'+
							'<a class="'+button_class+'" href="'+href_pre+items[key][i].applyId + '">'+flagstr+'</a>'+
						'</li>';
					}
					else{
							bid_str += '<li class="clearfix">'+
							'<span class="'+bid_icon_class+'"></span>'+
							'<span class="listCon">'+
								'<a href="'+href_pre+items[key][i].applyId + '" class="listConT">'+title_pre+items[key][i].applyTitle+'</a>'+
								'<ul class="listConC clearfix">'+
									'<li class="listLine">'+money_pre+' <strong>'+iapproveAmt+'<small>元</small></strong></li>'+
									'<li class="listLine pl"><p>年化利率 <strong class="listNumRed">'+maxRate+'<small>%</small></strong><span class="m-tooltips png"></span></p></li>'+
									'<li class="pl">'+period_pre+' <strong>'+iapproveNo+'<small>月</small></strong></li>'+
								'</ul>'+
							'</span>'+
							'<a class="'+button_class+'" href="'+href_pre+items[key][i].applyId + '">'+flagstr+'</a>'+
						'</li>';
					}
					iapproveAmt = '0';
					dapplyRate = '0';
					iapproveNo = '0';
				}
			});
				bid_str += '</ul><a class="get_more_indexList" href="/loan/list/1"></a></div>';//散标数据信息结束
				//拼接新手标的信息
				html_str +='<div class="new_bd_ad"><a href="/finance/view/fincancebid"><img src="/ccms/images/newyrd/newBills.jpg"></a></div>' ;
				html_str += '<div class="indexMLTit clearfix"><h3 class="l blueTit"><srong>债权精选 <small>自主选择债权出借，100元起投</small></srong></h3><a class="r" href="/loan/list/1">更多 <span>› </span></a> </div>';
				html_str += bid_str;
				$(".indexML").html(html_str);
				$(".m-tooltips").f2eUItooltips("提示：此年利率不等同于收益率（由于借款人采用等额本息法每月还款），若想达到等同于此利率的收益，建议您循环出借。");
				$(".indexList").children("ul").children("li:odd").addClass("listOdd");
				$(".indexList").children("ul").children("li").hover(
					function(){
						$(this).addClass("active");
					},
					function(){
						$(this).removeClass("active");
					}
				);
				//console.log("bbb"+json.dataBroadcast.loadPerson+json.dataBroadcast.interestPerson+json.dataBroadcast.transferLoan);
				/*7日播报数据*/
				var interestPerson = json.dataBroadcast.interestPerson>0 ? json.dataBroadcast.interestPerson : '0';
				var transferLoan = json.dataBroadcast.transferLoan>0 ? json.dataBroadcast.transferLoan : '0';
				var borrowPerson = json.dataBroadcast.borrowPerson;
				borrowPerson = borrowPerson>0 ? borrowPerson : '0';
				$(".monthListIcon1 span font").html(borrowPerson);
				$(".monthListIcon2 span font").html(interestPerson);
				$(".monthListIcon3 span font").html(transferLoan);
		 }
     });
});

function ltrim(s){

    return s.replace( /^\s*/,"");

}

//去右空格;

function rtrim(s){

    return s.replace( /\s*$/,"");

}

//去左右空格;

function trim(s){

    return ltrim(rtrim(s));

}

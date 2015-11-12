$(document).ready(function(){  
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
			var sale_status = json.financeProduct.onlineStatus;//线上销售状态(0:未售罄1:售罄)
			var release_status = json.financeProduct.publishStatus;//发布状态(0:未发布（未上线）1:发布中（已上线）2:下线（不在前台显示）)
			var html_str ='<ul>';
			var flagstr = '';
			var button_class = '';
			var is_wan = false;//判断一定赢是否大于10000
			$.each(items,function (key,ele){
				switch (key) {
					case 'loanAndBidInfos' : 
					{
						flagstr = '投标';
						button_class = 'input_btn btn_blue';
					}
						break;
					case 'transferLoanApplies':
					{
						flagstr = '购买';
						button_class = 'input_btn btn_blue';
					}
						break;
					case 'loanAndBidFinishInfos' :
					{
						flagstr = '查看';
						button_class = 'input_btn btn_light l';
					}
						break;
				}
				for(var i=0;i<items[key].length && i<6;i++){
					var iapproveAmt = items[key][i].iapproveAmt>0 ? items[key][i].iapproveAmt : '0';
					var maxRate = items[key][i].maxRate>0 ? items[key][i].maxRate : '0.00';
					var iapproveNo = items[key][i].iapproveNo>0 ? items[key][i].iapproveNo : '0';
					var is_programer = items[key][i].apply_flag;
					if(is_programer == 1304){
							html_str += '<li class="clearfix">'+
							'<span class="listIcon J0 png"></span>'+
							'<span class="listCon">'+
								'<a href="/loan/view/'+items[key][i].applyId + '" class="listConT">'+items[key][i].applyTitle+'</a>'+'<span class="programer-icon"></span>'+
								'<ul class="listConC clearfix">'+
									'<li class="listLine">借款金额 <strong>'+iapproveAmt+'<small>元</small></strong></li>'+
									'<li class="listLine pl"><p>年化利率 <strong class="listNumRed">'+maxRate+'<small>%</small></strong><span class="m-tooltips png"></span></p></li>'+
									'<li class="pl">借款期限 <strong>'+iapproveNo+'<small>月</small></strong></li>'+
								'</ul>'+
							'</span>'+
							'<a class="'+button_class+'" href="/loan/view/'+items[key][i].applyId + '">'+flagstr+'</a>'+
						'</li>';
					}
					else{
							html_str += '<li class="clearfix">'+
							'<span class="listIcon J0 png"></span>'+
							'<span class="listCon">'+
								'<a href="/loan/view/'+items[key][i].applyId + '" class="listConT">'+items[key][i].applyTitle+'</a>'+
								'<ul class="listConC clearfix">'+
									'<li class="listLine">借款金额 <strong>'+iapproveAmt+'<small>元</small></strong></li>'+
									'<li class="listLine pl"><p>年化利率 <strong class="listNumRed">'+maxRate+'<small>%</small></strong><span class="m-tooltips png"></span></p></li>'+
									'<li class="pl">借款期限 <strong>'+iapproveNo+'<small>月</small></strong></li>'+
								'</ul>'+
							'</span>'+
							'<a class="'+button_class+'" href="/loan/view/'+items[key][i].applyId + '">'+flagstr+'</a>'+
						'</li>';
					}
					iapproveAmt = '0';
					dapplyRate = '0';
					iapproveNo = '0';
				}
			});
				html_str += '</ul><a class="get_more_indexList" href="/loan/list/1"></a>';
				$(".indexList").html(html_str);
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
				var ydy_rate =  json.financeProduct.preIncomeRate>0 ? json.financeProduct.preIncomeRate : '0.00';
				var ydy_period = json.financeProduct.closurePeriod>0 ? json.financeProduct.closurePeriod : '0';
				var ydy_qi = json.financeProduct.curPeriod;
				var name = json.financeProduct.productName;
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
				var ydy_title = json.financeProduct.productName;
				ydy_title = trim(ydy_title);
				var pos_tmp = ydy_title.search('宜定盈');
				if(pos_tmp>-1){
					ydy_title = ydy_title.substring(pos_tmp,3);
					res_str = name.split('宜定盈');
				}
				ydy_qi = res_str[1]+ydy_qi +'期';
				$(".ydy_logo strong").html(ydy_title);
				$(".ydy_logo span").html(ydy_qi);
				var minOnlineAmount = json.financeProduct.minOnlineAmount > 0 ? json.financeProduct.minOnlineAmount : 0;
				if(minOnlineAmount/10000 > 1){ 
					is_wan = true;
					minOnlineAmount = minOnlineAmount/10000;
				}
				if(is_wan){
					$(".moneys").html('<em>'+minOnlineAmount+'</em>万');
				}else{
					$(".moneys").html('<em>'+minOnlineAmount+'</em>元');
				}
				$(".percent em").html(ydy_rate);
				$(".months em").html(ydy_period);
				var publishTime = json.financeProduct.publishTime; 
				startDate = new Date(publishTime); 
				var now = new Date(); 
				var time1 = now.getTime(); 
				var time2 = startDate.getTime();
				var onlineSoldAmount = json.financeProduct.onlineSoldAmount > 0 ? json.financeProduct.onlineSoldAmount : '0';
				onlineSoldAmount = onlineSoldAmount/10000 > 0 ? onlineSoldAmount/10000 : onlineSoldAmount;
				var onlineAllocateAmount = json.financeProduct.onlineAllocateAmount >0 ? json.financeProduct.onlineAllocateAmount : '0';
				onlineAllocateAmount = onlineAllocateAmount/10000 > 0 ? onlineAllocateAmount/10000 : onlineAllocateAmount;
				$(".ydy_btn").attr('href', '/finance/view/'+json.financeProduct.productDetailId);
				$(".ydy_btn").eq(1).prev().html("总发售金额:"+onlineAllocateAmount+"万");
				$(".ydy_btn").eq(0).prev().html("总发售金额:"+onlineAllocateAmount+"万");
				/*else{
					$(".ydy_btn").eq(1).prev().html("总发售金额:"+onlineAllocateAmount+"元");
					$(".ydy_btn").eq(0).prev().html("总发售金额:"+onlineAllocateAmount+"元");
					
				}*/
				if(release_status==1 || release_status==2 ){
					$("#ydy_title").css('display','block');
					if(sale_status==0){
						$("#ydy_bannerIndex_onsale").show();//ydy_bannerIndex 其它两个隐藏
					}else if(sale_status==1){
						$("#ydy_bannerIndex_saleout").show();
					}
				}
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

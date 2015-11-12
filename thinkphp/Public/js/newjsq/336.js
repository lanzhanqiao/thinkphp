;(function($){
			$.getUrlParam = function(name)
			{
				var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
				var r = window.location.search.substr(1).match(reg);
				if (r!=null) return unescape(r[2]); return null;
			}
		})(jQuery);
		$(function(){
			juicer.set({
		        'tag::interpolateOpen': '{{',
		        'tag::interpolateClose': '}}'
		    });
			if($.getUrlParam("pr")){
				//var prCH = NoToChinese($.getUrlParam("pr")),mpCH = NoToChinese($.getUrlParam("mp"));
				var prCH = NoToChinese($.getUrlParam("contractAmount")),mpCH = NoToChinese($.getUrlParam("mp"));
				var theday = new Date();
				var sY = theday.getFullYear(),
					sM = theday.getMonth()+1,
					sD = theday.getDate();
				var newDate;
					if($.getUrlParam("pe")%12!=0){
						//newDate = DateAdd( "y ",$.getUrlParam("pe")/12,theday);
						newDate = DateAdd( "m ",18,theday);
					}else{
						newDate = DateAdd( "y ",$.getUrlParam("pe")/12,theday);  
					}
				var	eY = newDate.getFullYear(),
					eM = newDate.getMonth()+1,
					eD = newDate.getDate(),
					eachMonth_payDate;
				$("#totalBorrow").text($.getUrlParam("contractAmount"));
				//$("#totalBorrow").text($.getUrlParam("pr"));
				$("#totalBorrowCH").text(prCH);
				$("#rate").text($.getUrlParam("ra")*100);
				$("#period").text($.getUrlParam("pe"));
				$("#month_payCH").text(mpCH);
				$("#month_pay").text($.getUrlParam("mp"));
				$(".sY").text(sY);
				$(".sM").text(sM);
				$(".sD").text(sD);
				$(".eY").text(eY);
				$(".eM").text(eM);
				$(".eD").text(eD);
				if($.getUrlParam("qualify")=="078"){
					var plan = getCal("078").calculate($.getUrlParam("pr"), $.getUrlParam("pe"), $.getUrlParam("ra"),"line");
				}
				else if($.getUrlParam("qualify") == "189"){
					var plan = getCal("189").calculate($.getUrlParam("pr"), $.getUrlParam("pe"), $.getUrlParam("ra"),"line");
				}
				plan['repay'] = round(parseFloat(plan.principal) + parseFloat(plan.interest));
		        // 利息+平台费
		        plan['total2'] = round(parseFloat(plan.total) - parseFloat(plan.principal));
		       	$.each(plan.pay_unit,function(i){
		        	var theday = new Date();
		        		ep = DateAdd( "m ",i+1,theday),
		        	 	sY = ep.getFullYear(),
						sM = ep.getMonth()+1,
						sD = ep.getDate();
		        	var epStr= sY+"-"+sM+"-"+sD;       	
		        	plan.pay_unit[i].ep = epStr;
		        })
				var htmls = juicer($('#lender-template').html(), plan);
				$("#payDetails").html(htmls);
				$("#preFee").text(plan.preFee);
			}
		})

	var calj = new Calculator("jy"),
        cal189 = new Calculator("189"),
        cal078 = new Calculator("jy"),
        caln = new Calculator('normal');

    function getCal(mode){
        if(mode==='jy'){
            return calj;
        }else if(mode =="189"){
            return cal189;
        }else if(mode == "078"){
            return cal078;
        }
        else {
            return caln;
        }
    }
    function   DateAdd(interval,number,date)  
{  
        switch(interval)  
        {  
                case   "y "   :   {  
                        date.setFullYear(date.getFullYear()+number);  
                        return   date;  
                        break;  
                }  
                case   "q "   :   {  
                        date.setMonth(date.getMonth()+number*3);  
                        return   date;  
                        break;  
                }  
                case   "m "   :   {  
                		var theDate = date.getDate();
                		var dateArr = {"1":"31","2":"28","3":"31","4":"30","5":"31","6":"30","7":"31","8":"31","9":"30","10":"31","11":"30","12":"31"};
                		//date.setMonth(date.getMonth()+number);
                		var thefutureMonth = date.getMonth()+1+number;
                		var thefutureDate = dateArr[thefutureMonth%12];
                		//number个月后没有这一天则取该月最后一天
                		if(theDate > thefutureDate){
                			date.setMonth(thefutureMonth-1,thefutureDate);
                			//闰年2月
	                		if(date.getFullYear()%4==0&&date.getMonth()==1){
	                			date.setDate(29);
	                		}
                		}
                		else{
                			date.setMonth(date.getMonth()+number);
                		}
                		
                        return   date;  
                        break;  
                }  
                case   "w "   :   {  
                        date.setDate(date.getDate()+number*7);  
                        return   date;  
                        break;  
                }  
                case   "d "   :   {  
                        date.setDate(date.getDate()+number);  
                        return   date;  
                        break;  
                }  
                case   "h "   :   {  
                        date.setHours(date.getHours()+number);  
                        return   date;  
                        break;  
                }  
               /* case   "m "   :   {  
                        date.setMinutes(date.getMinutes()+number);  
                        return   date;  
                        break;  
                }  */
                case   "s "   :   {  
                        date.setSeconds(date.getSeconds()+number);  
                        return   date;  
                        break;  
                }  
                default   :   {  
                        date.setDate(d.getDate()+number);  
                        return   date;  
                        break;  
                }  
        }  
}  
function getLastDay(year,month)   
{   
 var new_year = year;  //取当前的年份   
 var new_month = month++;//取下一个月的第一天，方便计算（最后一天不固定）   
 if(month>12)      //如果当前大于12月，则年份转到下一年   
 {   
 new_month -=12;    //月份减   
 new_year++;      //年份增   
 }   
 var new_date = new Date(new_year,new_month,1);        //取当年当月中的第一天   
 return (new Date(new_date.getTime()-1000*60*60*24)).getDate();//获取当月最后一天日期   
}
		//数字转中文大写
		function NoToChinese(num) { 
			if (!/^\d*(\.\d*)?$/.test(num)) { alert("Number is wrong!"); return "Number is wrong!"; } 
			var AA = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"); 
			var BB = new Array("", "拾", "佰", "仟", "萬", "億", "点", ""); 
			var a = ("" + num).replace(/(^0*)/g, "").split("."), k = 0, re = ""; 
			for (var i = a[0].length - 1; i >= 0; i--) { 
			switch (k) { 
			case 0: re = BB[7] + re; break; 
			case 4: if (!new RegExp("0{4}\\d{" + (a[0].length - i - 1) + "}$").test(a[0])) 
			re = BB[4] + re; break; 
			case 8: re = BB[5] + re; BB[7] = BB[5]; k = 0; break; 
			} 
			if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) re = AA[0] + re; 
			if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re; k++; 
			} 

			if (a.length > 1) //加上小数部分(如果有小数部分) 
			{ 
			re += BB[6]; 
			for (var i = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)]; 
			} 
			return re; 
			} 
		
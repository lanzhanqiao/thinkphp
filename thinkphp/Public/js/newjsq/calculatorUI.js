(function($){
	$.getUrlParam = function(name)
	{
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r!=null) return unescape(r[2]); return null;
	}
})(jQuery);

$(function(){
	// calToolTBox Tab
	$(".calToolTBoxT078 a").click(function(){
        $(".calToolTBoxT078 a").removeClass("curr");
        $(".period,.rate").val("");
        $(".principal").val('0.00');
        $(".calFBoxRPer,.calFBoxRPer2,.calFBoxRPer3").find("a").removeClass("curr");
        $(".calFBoxSel a").removeClass("bgOn");
        $(".calFBoxSel a i").removeClass("on");
        $(".calFBoxSel a span").text("全部期数");
        $(".calRInsert").html("");
          


        $(this).addClass("curr");
        var num = $(this).index();
		 //判断是借款还是出借
            $("#outMoneyId").val(num);
        $(".tab_switch_ctn:eq(0) .calTool .calToolTBoxC").hide();
        $(".tab_switch_ctn:eq(0) .calTool .calToolTBoxC").eq(num).show();
    })

    $(".principal").focus(function(){
        if(this.value =="0.00"){
            $(this).val("");
        }
    }).blur(function(){
        if($.trim(this.value) ==""){
            $(this).val("0.00");
        }
    })
    //129
    $(".calToolTBoxT129 a").click(function(){
        $(".calToolTBoxT129 a").removeClass("curr");
        $(".period,.rate").val("");
        $(".principal").val("0.00");
        $(".calFBoxRPer,.calFBoxRPer2,.calFBoxRPer3").find("a").removeClass("curr");
        $(".calFBoxSel a").removeClass("bgOn");
        $(".calFBoxSel a i").removeClass("on");
        $(".calFBoxSel a span").text("全部期数");
        $(".calRInsert").html("");


        $(this).addClass("curr");
        var num = $(this).index();
        if(num ===0){
            $("#applyMoney").show();
            $("#actualGetMoney").hide();
        }else{
            $("#applyMoney").hide();
            $("#actualGetMoney").show();
        }

    })

	function amount(th){
	    var regStrs = [
	        ['^0(\\d+)$', '$1'], //禁止录入整数部分两位以上，但首位为0
	        ['[^\\d\\.]+$', ''], //禁止录入任何非数字和点
	        ['\\.(\\d?)\\.+', '.$1'], //禁止录入两个以上的点
	        ['^(\\d+\\.\\d{2}).+', '$1'] //禁止录入小数点后两位以上
	    ];
	    for(i=0; i<regStrs.length; i++){
	        var reg = new RegExp(regStrs[i][0]);
	        th.value = th.value.replace(reg, regStrs[i][1]);
	    }
	}
	function overFormat(th){
	    var v = th.value;
	    if(v === ''){
	        v = '0.00';
	    }else if(v === '0'){
	        v = '0.00';
	    }else if(v === '0.'){
	        v = '0.00';
	    }else if(/^0+\d+\.?\d*.*$/.test(v)){
	        v = v.replace(/^0+(\d+\.?\d*).*$/, '$1');
	        v = inp.getRightPriceFormat(v).val;
	    }else if(/^0\.\d$/.test(v)){
	        v = v + '0';
	    }else if(!/^\d+\.\d{2}$/.test(v)){
	        if(/^\d+\.\d{2}.+/.test(v)){
	            v = v.replace(/^(\d+\.\d{2}).*$/, '$1');
	        }else if(/^\d+$/.test(v)){
	            v = v + '.00';
	        }else if(/^\d+\.$/.test(v)){
	            v = v + '00';
	        }else if(/^\d+\.\d$/.test(v)){
	            v = v + '0';
	        }else if(/^[^\d]+\d+\.?\d*$/.test(v)){
	            v = v.replace(/^[^\d]+(\d+\.?\d*)$/, '$1');
	        }else if(/\d+/.test(v)){
	            v = v.replace(/^[^\d]*(\d+\.?\d*).*$/, '$1');
	            ty = false;
	        }else if(/^0+\d+\.?\d*$/.test(v)){
	            v = v.replace(/^0+(\d+\.?\d*)$/, '$1');
	            ty = false;
	        }else{
	            v = '0.00';
	        }
	    }
	    th.value = v; 
	}


	

	// calFBoxRPer a
	$(".calFBoxRPer a").click(function(){
		//$(".calFBoxRPer a").removeClass("curr");
		$(this).parent(".calFBoxRPer").find(".curr").removeClass("curr");
		$(this).addClass("curr");
		var spanVal = $(this).children('span').text();
		if($(this).attr("data")){
			$(this).closest(".calFBoxRPer").find("input").val($(this).attr("data"));
		}else{
			$(this).closest(".calFBoxRPer").find("input").val(spanVal);
		}

	})

	// calFBoxRPer2 
	$(".calFBoxRPer2 .calFBoxA").click(function(){
		var $calFBoxRPer2 = $(this).closest(".calFBoxRPer2")
		$calFBoxRPer2.find(".calFBoxSel a").removeClass("bgOn");
		$calFBoxRPer2.find(".calFBoxSel a i").removeClass("on");
		$calFBoxRPer2.find(".calFBoxSel a span").text("全部期数");
		$calFBoxRPer2.find(".calFBoxSelChild").hide();

		$(".calFBoxRPer2 a").removeClass("curr");
		$(this).addClass("curr");
		var txtVal = $(this).find("span").text();
		$(this).closest(".calFBoxRPer2").find(".period").val(txtVal);
	})
	$("body").on("click",".calFBoxSelChild li",function(){
		var txtVal = $(this).find("span").text();
		$(this).closest(".calFBoxRPer2").find(".period").val(txtVal);
	})

	// calculatorUI detail
	$("body").on("click",".calDetailT",function(){
		//var model = $('input.mode').is(":visible").val();-- 自己思路
		//var str ='',isLender = $(".mtTB").is(":hidden"); //别人思路
		//isLender ? str = "回" : str = "还";
        var outMoneyId =$("#outMoneyId").val();
        if(outMoneyId ==1){
            str ="回";
        }else{
            str="还";
        }
		var txtVal = "显示"+str+"款列表",
			$spanTxt = $(this).find("span"),
			thisTxt = $spanTxt.text(),
			$calDetailTable = $(this).next(".calDetailTable");
		if(!$(this).hasClass("curr")){
			//$spanTxt.text("收起"+str+"款列表");
			$(this).addClass("curr");
			$calDetailTable.slideDown();
		} else {
			//$spanTxt.text(txtVal);
			$(this).removeClass("curr");
			$calDetailTable.slideUp();
		}
	})

	// calFBoxSel
	$(".calFBoxSel a").click(function(){
		$per2 = $(this).closest(".calFBoxRPer2");
		$per2.find(".calFBoxA").removeClass("curr");

		var ifCurr = $(this).find("i").hasClass("curr"),
			$calFBoxSelChild = $(this).next(".calFBoxSelChild");
		if(!ifCurr){
			$calFBoxSelChild.show();
			$(this).addClass("bgOn");
			$(this).find("i").addClass("on");
		} else {
			$calFBoxSelChild.hide();
			$(this).removeClass("bgOn");
			$(this).find("i").removeClass("on");
		}
		
	})
	$(".calFBoxSelChild ul li").hover(
		function(){$(this).addClass("curr");},
		function(){$(this).removeClass("curr");}
	)
	$(".calFBoxSelChild ul li").click(function(){
		var x = $(this).find("span").text();
		$(this).closest(".calFBoxSel").find("a").find("span").text(x+"期");
		$(this).closest(".calFBoxSelChild").hide();
		$(this).closest(".calFBoxSel").find("a").find("i").removeClass("on");
		$(this).parents(".calFBoxSel").children("a").addClass("curr");
	})
	// perfectScrollbar
	$(".calFBoxSelChild").perfectScrollbar();

	$(".tab_cal_switch > li").click(function(){
		$(".activas").removeClass("activas");
		$(this).addClass("activas");
		var index = $(this).index();
		$(".calIntroee").hide();
		$(".calIntroee").eq(index).show();
		$(".tab_switch_ctn").hide();
		$(".tab_switch_ctn:eq("+index+")").show();
		 $(".calRInsert").html("");
	});
	
})
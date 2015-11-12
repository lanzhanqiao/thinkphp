/**
 * Created with IntelliJ IDEA.
 * User: jianqing
 * Date: 13-3-8
 * Time: 下午4:39
 * To change this template use File | Settings | File Templates.
 */
$(function(){


    var tab_switch_ctn = $(".tab_switch_ctn"),
        cm078_box =  tab_switch_ctn.eq(0),
        cm129_box = tab_switch_ctn.eq(1);
	var INTEREST_RATE_DICT = {12: 0.1, 18: 0.105, 24: 0.11, 36: 0.12, 48: 0.125}; //费率
    juicer.set({
        'tag::interpolateOpen': '{{',
        'tag::interpolateClose': '}}'
    });
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


    var rate_dic = {12:10, 18: 10.5, 24:11, 36:12},
        $jyc = $("input.mode[value='jy']").closest('.calToolTBoxC');
    if($jyc.length==0){
        $jyc = $("input.mode[value='jy']").closest('.tab_content1');
    }

    $(".period").closest(".calFBoxRPer").find("a").click(function(){
        var rateVal = $(this).find("span").text();
        $(this).closest(".calFBoxRPer").next(".rate").val(rate_dic[rateVal]);
    })

    // 金额输入区 blur事件判定
    $('tab_switch_ctn:eq(0) .principal').blur(function(){
        var $con = $(this).closest('.calToolTBoxC');
        var principal = $.trim($con.find('.calNumHide').val()),
            mode = $con.find('.mode').val(),
            range_dic = {'jy':{'min':20000, 'max':500000}, 'normal':{'min':1000, 'max':500000}, 'lender':{'min':100,'max':5000000}};
        if(!/^[0-9]+(.[0-9]{1,2})?$/.test(principal)){
            alert("借款金额只能输入数字且最多小数点后两位");
            $con.find('.principal').next(".calNum").html('<span class="png n0"></span>');
            $con.find(".calNumHide").val("");
            return;
        }  else if(principal<range_dic[mode]['min']||principal>range_dic[mode]['max']){
            alert("单笔最低"+ (mode==='lender'?"出借":"借款") +"额度为"+ range_dic[mode]['min'] + "元，最高"+ (mode==='lender'?"出借":"借款") +"额度为" + range_dic[mode]['max'] + "元");
            $con.find('.principal').next(".calNum").html('<span class="png n0"></span>');
            $con.find(".calNumHide").val("");
            return;
        }
    })

    $(".calculatorBtn").click(function (){ 
        $(".calDetailTable").hide();
        $(".calRInsert").slideUp();
        var $con = $(this).closest('.calToolTBoxC');
        if($con.length==0){
            $con = $(this).closest('.tab_content1');
        }
        var principal = $.trim($con.find('.calNumHide').val()),
            period = $con.find('.period').val(),
            rate = $con.find('.rate').val(),
            qualify = $con.find("#qualify").val(),
            mode = $con.find('.mode').val(),
            range_dic = {'jy':{'min':20000, 'max':500000}, 'normal':{'min':1000, 'max':500000}, 'lender':{'min':100,'max':5000000}};


            // alert("principal:"+principal+",period:"+period+",rate:"+rate+",mode:"+mode);
		if(mode=="lender"){
		        ///$(".calDetailT span").text('显示回款列表:');
				var curr_obj = $(".calDetailT span");
				var content = $(".calDetailT span").text();
				$(".calDetailT span").text('显示回款列表:');		
		}else{
		        $(".calDetailT span").text('显示还款列表:');	
				var content = $(".calDetailT span").text();		
		}
        if(mode=="lender"){
			if(parseInt(principal)%100 >0){
					alert("输入金额必须为100的整数");
					$("#lPrincipal").val("");
					return;
				}
            if(principal.length == 0){
                alert("请填写出借金额");
                return;
            }else if(rate.length==0){
                alert("请选择出借利率");
                return;
            }else if(mode !="lender"&&qualify.length ==0){
                alert("请选择用户资质");
                return;
            }else if(period.length==0){
                alert("请选择出借期数");
                return;
            }
        }
        if(mode=="jy"){
			if(parseInt(principal) <=0 ||parseInt(principal) <20000 || parseInt(principal)>500000 ){
					alert("请输入100的倍数，且在20,000至500,000之间");
					$("#principal").val("");
					return;
			}
            if(principal.length == 0){
                alert("请填写借款金额");
                return;
            } else if(period.length==0){
                alert("请选择借款期数");
                return;
            }
			if(parseInt(principal)>20000 && principal < parseInt(500000) && parseInt(principal)%100 >0){
				alert("请输入100的倍数，且在10,000，到500,000之间");
				$("#principal").val("");
				return;
			}
        }
		
		if(mode =="lender"){
			var plan = getCal("lender").calculate( parseFloat(principal), parseFloat(period), parseFloat(rate/100),"online");
		}else{
			if(qualify =="078"){
				rate = INTEREST_RATE_DICT[period];
            	var plan = getCal("078").calculate( parseFloat(principal), parseFloat(period), parseFloat(rate),"online");
			}else if(qualify == "189"){
				rate = INTEREST_RATE_DICT[period];
				var plan = getCal("189").calculate( parseFloat(principal), parseFloat(period), parseFloat(rate),"online");
			}
		}
        

        plan['mode'] = mode;
        plan['repay'] = round(parseFloat(plan.principal) + parseFloat(plan.interest));
        // 利息+平台费
        plan['total2'] = round(parseFloat(plan.total) - parseFloat(plan.principal));
        var htmls = juicer($('#' + mode + '-template').html(), plan);
        
       
        $(".calRInsert").eq(0).slideDown(function(){
            var addHeight = $('.calRInsert').offset().top;
            $('body,html').animate({scrollTop:addHeight},800);
            $(this).html(htmls);
        });
    });

    // url get 
    
    if($.getUrlParam('pr')){
        var mm = parseFloat($.getUrlParam('m')),
            pr = parseFloat($.getUrlParam('pr')),
            pe = parseFloat($.getUrlParam('pe')),
            ra = parseFloat($.getUrlParam('ra')),
            qa = $.getUrlParam('qualify');
        $(".calFBoxRPer").find("a[data="+ qa +"]").addClass("curr").siblings("a.curr").removeClass("curr");
        $("#qualify").val(qa);
        $(".calToolTBoxT a").eq(mm).trigger('click');

        if(!mm){
            $("#principal").val(pr);
            var $calFBoxRPer = $('#period').closest('.calFBoxRPer').find('a');
            if(pe==12){
                $calFBoxRPer.eq(0).trigger('click');
            }else if(pe==18){
                $calFBoxRPer.eq(1).trigger('click');
            }else if(pe==24){
                $calFBoxRPer.eq(2).trigger('click');
            }else if(pe==36){
                $calFBoxRPer.eq(3).trigger('click');
            }
            $("#jyd").trigger('click');
        }else{
            $("#lPrincipal").val(pr);
            var $lRate = $('#lRate').closest('.calFBoxRPer').find('a'),
                $lPeriod =  $('#lPeriod').closest('.calFBoxRPer2').find('a');
            if(ra==10){
                $lRate.eq(0).trigger('click');
            }else if(ra==10.5){
                $lRate.eq(1).trigger('click');
            }else if(ra==11){
                $lRate.eq(2).trigger('click');
            }else if(ra==12){
                $lRate.eq(3).trigger('click');
            }

            if(pe==12){
                $lPeriod.eq(0).trigger('click');
            } else if(pe==18){
                $lPeriod.eq(1).trigger('click');
            } else if(pe==24){
                $lPeriod.eq(2).trigger('click');
            } else if(pe==36){
                $lPeriod.eq(3).trigger('click');
            } else{
                $lPeriod.eq(4).trigger('click');
                $('.calFBoxSel').find('li').eq(pe-1).trigger('click');
            }
             $("#lender").trigger('click');
        }

    }

})

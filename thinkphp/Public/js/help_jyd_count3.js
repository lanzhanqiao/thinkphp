$(function(){
    juicer.set({
        'tag::interpolateOpen': '{{',
        'tag::interpolateClose': '}}'
    });
    var calj = new Calculator('jy'),
        caln = new Calculator('normal');

    function getCal(mode){
        if(mode==='jy'){
            return calj;
        } else {
            return caln;
        }
    }

    var rate_dic = {12:10, 18: 10.5, 24:11, 36:12};

    // 选择下拉菜单传值
    $("body").on("click", ".miniSelList ul li", function(){
        var mode = $(this).closest(".calminiRTabC_m").find(".mode").val();
        if(mode == 'jy'){
            $(this).closest(".calminiRTabC_m").find(".rate").val(rate_dic[$(this).find("span").text()]);
        }
    })

    // 提交计算按钮
    $("body").on("click", ".miniBtn", function(){

        // element define
        var $this = $(this),
            $con = $this.closest('.calminiRTabC_m');
        // data define
        var principal = $.trim($con.find('.principal').val()),
            period = $con.find('.period').val(),
            rate = $con.find('.rate').val(),
            mode = $con.find('.mode').val(),
            range_dic = {'jy':{'min':10000, 'max':500000}, 'normal':{'min':1000, 'max':500000}, 'lender':{'min':100,'max':5000000}};

        var modeShow = (mode==='lender'?"出借":"借款");

        // to do
        // principal
        if(principal.length==0||(principal=='"输入'+modeShow+'金额"')){
            $con.find('.principal').focus().animate({
                backgroundColor:'#ecbebf',
                borderColor:'#cc1115'
            });
            return;
        } else if(!/^[0-9]+(.[0-9]{1,2})?$/.test(principal)){
            $con.find('.principal').toFA();
            return;
        } else if(principal<range_dic[mode]['min']||principal>range_dic[mode]['max']){

            if(mode==='lender'){
                $('#result2').find('span').text('100元-50万').css('color','#f00');
            } else {
                $('#result0').find('span').text('1万-50万').css('color','#f00');
            }

            $con.find('.principal').focus().toFA();
            return;
        } else{
            $con.find('.principal').toFAC({bgCol:'#F1F2F1',lineCol:'#7E8A8E'});
        } 

        // rate
        if(mode == 'lender'){
            if((rate.length==0)||(rate=='选择出借利率')){
                $con.find('.rate').toFAC();
                return;
            } else {
                $con.find('.rate').toFAC({bgCol:'#F1F2F1',lineCol:'#7E8A8E'});
            }
        }

        // period
        if((period.length==0)||(period=='选择'+modeShow+'期数')){
            $con.find('.period').toFAC();
            return;
        } else {
            $con.find('.period').toFAC({bgCol:'#F1F2F1',lineCol:'#7E8A8E'});
        }

        // 
        var plan = getCal(mode).calculate(principal, period, rate/100);
        plan['mode'] = mode;
        plan['repay'] = round(parseFloat(plan.principal) + parseFloat(plan.interest));
        // 利息+平台费
        plan['total2'] = round(parseFloat(plan.total) - parseFloat(plan.principal));
        var htmls = juicer($('#' + mode + '-minitemplate').html(), plan);
        $con.closest(".calmini").find(".calminiLMTable").html(htmls);
        $con.closest(".calmini").animate({width:703},function(){
            $(this).find(".calminiL").width('');
            $(this).find(".calminiLM").fadeIn();
            $(this).find(".calminiLBar").removeClass("defaultOn").addClass("barOn");
            // bar default
            $('.calminiLBar').on('click',openBar);
        });
    })

    
})
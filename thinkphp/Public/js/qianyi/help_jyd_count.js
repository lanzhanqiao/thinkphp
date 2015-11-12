/**
 * Created with IntelliJ IDEA.
 * User: jianqing
 * Date: 13-3-8
 * Time: 下午4:39
 * To change this template use File | Settings | File Templates.
 */
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

    var rate_dic = {12:10, 18: 10.5, 24:11, 36:12},
        $jyc = $("input.mode[value='jy']").closest('.help_tabCon');
    if($jyc.length==0){
        $jyc = $("input.mode[value='jy']").closest('.tab_content1');
    }
    $jyc.find('.period').change(function(){
        $jyc.find('.rate').val(rate_dic[$(this).val()]);
    })

    $(".p2p_help_btn, .counter_button").click(function (){
        var $con = $(this).closest('.help_tabCon');
        if($con.length==0){
            $con = $(this).closest('.tab_content1');
        }
        var principal = $.trim($con.find('.principal').val()),
            period = $con.find('.period').val(),
            rate = $con.find('.rate').val(),
            mode = $con.find('.mode').val(),
            range_dic = {'jy':{'min':10000, 'max':500000}, 'normal':{'min':1000, 'max':500000}, 'lender':{'min':100,'max':5000000}};
        if(principal.length==0){
            alert("请输入借款金额");
            $con.find('.principal').focus();
            return;
        } /*else if(!/^\d+$/.test(principal)){
            alert("借款金额只能输入正整数");
            $con.find('.principal').focus();
            return;
        } else if(principal % 100 != 0 || principal < 100){
            alert("金额需是100的倍数");
            $con.find('.principal').focus();
            return;
        }*/else if(!/^[0-9]+(.[0-9]{1,2})?$/.test(principal)){
            alert("借款金额只能输入数字切最多小数点后两位");
            $con.find('.principal').focus();
            return;
        }  else if(principal<range_dic[mode]['min']||principal>range_dic[mode]['max']){
            alert("单笔最低"+ (mode==='lender'?"出借":"借款") +"额度为"+ range_dic[mode]['min'] + "元，最高"+ (mode==='lender'?"出借":"借款") +"额度为" + range_dic[mode]['max'] + "元");
            $con.find('.principal').focus();
            return;
        }
        if(rate=='-1'){
            alert("请选择借款年利率");
            return;
        }
        var plan = getCal(mode).calculate(principal, period, rate/100);
        plan['mode'] = mode;
        plan['repay'] = round(parseFloat(plan.principal) + parseFloat(plan.interest));
        var htmls = juicer($('#' + mode + '-template').html(), plan);
        $con.find('.counterBox_table_c').html(htmls).closest('.counterBox_table2').show('slide');
    });


})

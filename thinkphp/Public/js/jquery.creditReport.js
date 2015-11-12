//获取信用报告 点击效果
$(function(){
	$(".addDetailOneOut").hide();
	$(".addDetailOneOut").eq(0).show().closest('.addDetailOne').find('span').html('▼');
	$(".addHrefOne a").eq(0).addClass("cur")
	$(".addHrefOne a").click(function(){
		$(".addDetailOneOut").hide();
		$(".addDetailOne h3 span").html('▲');
		$(".addHrefOne a").removeClass("cur");
		var aName = $(this).attr('class');
		var $idName = $('#'+aName);
		$(this).addClass("cur");
		$idName.children('h3').children('span').html('▼');
		var road = $idName.position().top*(-1);
		$(".detailBus").stop('true','true').animate({top:road},function(){
			$idName.children('.addDetailOneOut').stop('true','true').slideDown('slow');
		});
	})
})

//如何开通网上银行 点击效果
$(function(){
	$(".bankCOne").eq(0).show();
	$(".bankLogo a").eq(0).addClass('cur');
	$(".bankLogo a").click(function(){
		$(".bankCOne").hide();
		$(".bankLogo a").removeClass('cur');
		$(this).addClass('cur');
		var logoNum = $(this).index();
		$(".bankCOne").eq(logoNum).show();
	})
	
})
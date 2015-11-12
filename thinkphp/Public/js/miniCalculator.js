function openBar(){
	var $bar = $('.calminiLBar'),
		$calmini = $bar.closest(".calmini"),
		$calminiL = $calmini.find(".calminiL"),
		$calminiLM = $calmini.find(".calminiLM"),
		calmini_width = $calmini.width();

	// calminiL 29/473 calmini 256/703
	if(calmini_width == 267){
		$calmini.animate({width:703},function(){
			$calminiL.width('');
			$calminiLM.fadeIn();
			$bar.addClass("barOn");
		})
	} else if(calmini_width == 703){
		$calmini.animate({width:267},function(){
			$calminiL.width(29);
			$calminiLM.hide();
			$bar.removeClass("barOn");
		})
		
	}
};

$(function(){
	// url 传值

	$('body').on('click','.calResultUrl',function(){
		var m = $('.calminiRTabT a.curr').index();
		if(!m){
			var pr = $("#result0 span").text(),
				pe = $("#result1 span").text();
			var rPart = '';
		} else {
			var pr = $("#result2 span").text(),
				ra = $("#result3 span").text(),
				pe = $("#result4 span").text();
			var rPart = '&ra='+ra;
		}
		$(this).attr('href','http://www.yirendai.com/support/others/newjsq/?m='+m+'&pr='+pr+'&pe='+pe+rPart);
	});

	// 
	$('body').on('click','.calminiPic',function(){
		$(".calmini").show();
		$(".calminiLBar").off('click').addClass('defaultOn');
	})
	
	$('.calminiLBar').click(function(){
		openBar();		
	})
	
	// calminiRTab
	$(".calminiRTabT a").click(function(){
		var $bar = $('.calminiLBar'),
			$calmini = $bar.closest(".calmini"),
			$calminiL = $calmini.find(".calminiL"),
			$calminiLM = $calmini.find(".calminiLM"),
			calmini_width = $calmini.width();
			$calmini.animate({width:256},function(){
				$calminiL.width(29);
				$calminiLM.hide();
				$bar.removeClass("barOn");
				$(".calminiLBar").addClass('defaultOn').off('click');
			})

		
		var aIndex = $(this).index();
		var $tabC = $(this).closest(".calminiR").find(".calminiRTabC");

		$(".calminiRTabT a").removeClass("curr");
		$(this).addClass("curr");
		$tabC.hide();
		$tabC.eq(aIndex).show();
	})

	// close calmini 
	$(".calminiClose").click(function(){
		$(this).closest(".calmini").hide();
		var $bar = $('.calminiLBar'),
			$calmini = $bar.closest(".calmini"),
			$calminiL = $calmini.find(".calminiL"),
			$calminiLM = $calmini.find(".calminiLM"),
			calmini_width = $calmini.width();
			$calmini.animate({width:256},function(){
				$calminiL.width(29);
				$calminiLM.hide();
				$bar.removeClass("barOn");
				$(".calminiLBar").off('click');
			})
			$calmini.find('form')[0].reset();
			$calmini.find('form')[1].reset();
			$(".calminiRTabC").hide();
			$(".calminiRTabC").first().show();
			$(".calminiRTabT a").removeClass("curr").first().addClass("curr");
			$(".calminiRTabC_t").find('li').find('span').text('');
			$(".calmini").find('input').css({'border':'1px solid #7E8A8E','backgroundColor':'#F1F2F1'})
	})

	// miniSel
	$("#miniSel0").miniSel({id:'result1'});
	$("#miniSel1").miniSel({id:'result3'});
	$("#miniSel2").miniSel({id:'result4'});
	$("#miniInput0").miniText({id:'result0'});
	$("#miniInput1").miniText({id:'result2'});
	$("#miniSel0").miniText();
	$("#miniSel1").miniText();
	$("#miniSel2").miniText();

	$("#miniInput0").clearDefault({txt: '输入借款金额'});
	$("#miniSel0 .miniSelInput").clearDefault({txt: '选择借款期数', readonly:1});
	$("#miniInput1").clearDefault({txt: '输入出借金额'});
	$("#miniSel1 .miniSelInput").clearDefault({txt: '选择出借利率', readonly:1});
	$("#miniSel2 .miniSelInput").clearDefault({txt: '选择出借期数', readonly:1});

	// 解决ie6子菜单覆盖问题
	$("#miniSel1").css('z-index',10);
	$("#miniSel2").css('z-index',0);
	// calminiPic click
// $('').appendTo('body');
// $(".calmini").load('calculatorMini.html');

	$("#miniSelscroll").perfectScrollbar();

})

// pluyin
$.fn.extend({

	// miniSel
	miniSel:function(options){
		var defaults = {
			id:''
		}
		var opts = $.extend(defaults,options);

		
		// var $miniSelList = $(this).find(".miniSelList");
		var $miniSelIconLi = $(this).find(".miniSelList").find("li"),
			$miniSelIcon = $(this).find(".miniSelIcon"),
			$miniSelInput = $(this).find(".miniSelInput");
		// show list
		function showSellist(){
			$("#miniSelscroll").scrollTop(0);
			$("#miniSelscroll").perfectScrollbar('update');
			var $miniSelList = $(this).closest(".miniSel").find(".miniSelList"),
				$thisIconA = $(this).closest(".miniSelT").find(".miniSelIcon"),
				isCurr = $thisIconA.hasClass("curr");
				$xrail = $miniSelList.find('.ps-scrollbar-x-rail');
				$yrail = $miniSelList.find('.ps-scrollbar-y-rail');

			$(".miniSelList").hide();
			$(".miniSelIcon").removeClass("curr");
			$xrail.css('bottom',3);
			$yrail.css('top',3);

			if(!isCurr){
				$thisIconA.addClass("curr");
				$miniSelList.show();
			} else{
				$thisIconA.removeClass("curr");
				$miniSelList.hide();
			}
		}
		$miniSelIcon.click(showSellist);
		$miniSelInput.click(showSellist);

		// list hover
		$miniSelIconLi.hover(
			function(){
				$(this).addClass("on");
			},
			function(){
				$(this).removeClass("on");
			}
		)

		// list click
		$miniSelIconLi.click(function(){
			var $thisSelList = $(this).closest(".miniSelList");
			var $thisIconA = $(this).closest(".miniSel").find(".miniSelIcon");
			var $thisInput = $(this).closest(".miniSel").find(".miniSelInput");
			var spanVal = $(this).find("span").text();

			// $('#'+opts.id).find("span").text(spanVal);
			$('#'+opts.id).toValue(spanVal);
			$thisInput.val(spanVal);
			$thisIconA.removeClass("curr");
			$thisSelList.hide();
		})
	},

	// miniText
	miniText:function(options){
		var defaults = {
			id: '',
			txt: ''
		}
		var opts = $.extend(defaults,options);
		var $this = $(this);
		var x = $this.val();
		$this.focus(function(){
			var y = $this.val();
			if(x == y){
				$this.val('');
			}
		})

		$this.blur(function(){
			var y = $this.val();
			if(y == ''){
				$this.val(x);
			}
		})

		$(this).keyup(function(){
			var textVal = $(this).val();
			$('#'+opts.id).toValue(textVal);
		})
	},

	// toValue
	toValue:function(options){$(this).find("span").text(options).css('color','#fff');},

	// toDefault input
	clearDefault:function(options){
		var defaults = {
			txt: '',
			readonly: 0
		}
		var opts = $.extend(defaults,options);

		$(this).val(opts.txt);
		$(this).focus(function(){
			if($(this).val() == opts.txt){
				$(this).val('');
			}
		})
		$(this).blur(function(){
			if($(this).val() == ''){
				$(this).val(opts.txt);
			}
		})

		if(opts.readonly == 1){
			$(this).attr({'readonly':'readonly'});
		} else if(opts.disabled == 0){
			$(this).attr({'readonly':''});
		}

		// $(this).attr('placeholder',opts.txt);
	},

	// help_jyd_count3.js
	toFA:function(){
		$(this).focus().animate({
            backgroundColor:'#ecbebf',
            borderColor:'#cc1115'
        },function(){
            $(this).animate({
                backgroundColor:'#f78080',
                borderColor:'#cc1115'
            },500,function(){
                $(this).animate({
                    backgroundColor:'#ecbebf',
                    borderColor:'#cc1115'
                })
            })
        });
	},

	toFAC:function(options){
		var defaults = {
			bgCol: '#ecbebf',
			lineCol: '#cc1115'
		}
		var opts = $.extend(defaults,options);
		$this = $(this);
		$this.focus().animate({
			 backgroundColor: opts.bgCol,
             borderColor: opts.lineCol
		})
	}
})
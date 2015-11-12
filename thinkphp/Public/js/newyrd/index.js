$(function(){
	//初始化播放器

	$("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "",
                m4v: "../../../ccms/images/newyrd/tuoguan.mp4",
                ogv: "../../../ccms/images/newyrd/tuoguan.mp4",
                webmv: "../../../ccms/images/newyrd/tuoguan.mp4"
            })
			if($.browser.msie) { 
				$(this).jPlayer("play");
			}
        },
        swfPath: "http://www.yirendai.com/ccms/js/jplayer",
        supplied: "webmv, ogv, m4v",
        size: {
            width: "100%",
            height: "500px",
            cssClass: "jp-video-360p"
        },
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
    })
	//遮罩层
	function showMasks(){
		var mask =$("#yrd-mask");
		var w = $(window).width()+"px"
		var h =$(window).height()+"px"
		mask.css({"width":w , "height": h, "display": "block"});
		
	}
	
	function hideMasks(){
		var mask =$("#yrd-mask");
		mask.css({"display": "none", "position": "fixed"});
		if ($.browser.msie && ($.browser.version == "6.0")) {
			mask.css({"display":"none","position":"absolute"});
		} 
	}
	$(".mediaPlayer img").click(function(){		
		showMasks();
		/* var flashvars={
          f:'http://www.yirendai.com/ccms/images/newyrd/yrd_vedio.mp4',
          c:0,
          e:1,
          p:1
         };
         
         var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:"transparent"};
         var video=['http://www.yirendai.com/ccms/images/newyrd/yrd_vedio.mp4->video/mp4->video/mp4','http://www.ckplayer.com/webm/0.webm->video/webm','http://www.ckplayer.com/webm/0.ogv->video/ogg'];
        var support=['all'];
         CKobject.embed('/ccms/images/newyrd/ckplayer/ckplayer.swf','video','ckplayer_a1','800','450',false,flashvars,video,params,support);*/
		
		$("#video-dialog").css("display","block");
		$("#jquery_jplayer_1").jPlayer("play");
	})
	$("#yrd-close").click(function(){
		hideMasks();
		//$("#video").html("");
		$("#jquery_jplayer_1").jPlayer("stop");
		$("#video-dialog").css("display","none");
	});
});
(function($){
	$.fn.extend({
		f2eUIscrollFullPic:function(options){
			return this.each(function(){
				var defaults = {
					timer: 5000
				};
				var opts = $.extend(defaults, options);
				var $this = $(this);
				
				// create point area
				$this.prepend('<div class="sfp_point clearfix"></div>');
				var $picLi = $this.find(".sfp_box li"),
					$point = $this.find(".sfp_point"),
					picNum = $picLi.length,
					handId,
					pointIndex,
					picIndex = 0,
					isPointHover = false;

				for(var i=0;i<picNum;i++){
					$point.prepend('<a href="javascript:void(0);"></a>');
				}
				$picLi.eq(0).addClass('sfp_liActive');
				$point.find('a').eq(0).addClass("sfp_pointActive");

				var $pointA = $point.find('a'); //point 下有 a 元素后创建 $point 才有效

				start();

				// start
				function start(){
					handId = setInterval(play,opts.timer);
					pointHover();
				}

				// play
				function play(){
					picIndex++;
					if(picIndex == picNum){
						picIndex = 0;
					}
					if(isPointHover){ 
						picIndex = pointIndex;
						picMovie(0,0);
					} else {
						picMovie(1000,500);
					}
				}

				// picMovie
				function picMovie(time1,time2){
					 if (document.all){
					 	$picLi.animate({opacity:0},time1).css('zIndex',0).removeClass('sfp_liActive');
					 	$picLi.eq(picIndex).animate({opacity:1},time2).css('zIndex',1).addClass('sfp_liActive');
					 } else{
					 	$picLi.animate({opacity:0},time1,function(){
							$(this).removeClass('sfp_liActive').css('zIndex',0);
						});
					 	$picLi.eq(picIndex).animate({opacity:1},time2,function(){
							$(this).addClass('sfp_liActive').css('zIndex',1);
						});
					 }
					
					$pointA.removeClass('sfp_pointActive');
					$pointA.eq(picIndex).addClass('sfp_pointActive');
				}

				// pointHover
				function pointHover(){
					$pointA.hover(
						function(){
							isPointHover = true;
							pointIndex = $(this).index();
							play();
							clearInterval(handId);
						},
						function(){
							isPointHover = false;
							handId = setInterval(play,opts.timer);
						}
					);
				}
			});
		}
	});
})(jQuery);

$(function(){
	$(".scrollFullPic").f2eUIscrollFullPic();
	$(".t1").hover(
		function(){
			$picBoxA = $(this).find(".picBoxA");
			$picBoxA.stop(true,true).animate({
				backgroundColor: '#fbb450'
			},1000,function(){
				$(this).animate({
					backgroundColor: '#f36245'
				},800);
			});
		},
		function(){
			$picBoxA = $(this).find(".picBoxA");
			$picBoxA.css('backgroundColor','#f36245');
		}
	);
	$(".t1").click(
	   function(){self.location='lenderapplylistA.html'; }
	);
	$(".t2").hover(
		function(){
			$picBoxA = $(this).find(".picBoxA");
			$picBoxA.stop(true,true).animate({
				backgroundColor: '#008ddc'
			},1000,function(){
				$(this).animate({
					backgroundColor: '#4d6aba'
				},800);
			});
		},
		function(){
			$picBoxA = $(this).find(".picBoxA");
			$picBoxA.css('backgroundColor','#4d6aba');
		}
	);
	$(".t2").click(
	   function(){self.location='borrowerview.html'; }
	);
	$(".t3").hover(
		function(){
			$picBoxA = $(this).find(".picBoxA");
			$picBoxA.stop(true,true).animate({
				backgroundColor: '#f36245'
			},1000,function(){
				$(this).animate({
					backgroundColor: '#fcb450'
				},800);
			});
		},
		function(){
			$picBoxA = $(this).find(".picBoxA");
			$picBoxA.css('backgroundColor','#fcb450');
		}
	);
	$(".t3").click(
	   function(){self.location='lenderapplylistB.html'; }
	);
});
$(function(){
    $(".m-tooltips").f2eUItooltips("提示：此年化利率不等同于收益率（由于借款人采用等额本息法每月还款），若想达到等同于此利率的收益，建议您循环出借。");
    $(".indexList").children("ul").children("li:odd").addClass("listOdd");
    $(".indexList").children("ul").children("li").hover(
        function(){
            $(this).addClass("active");
        },
        function(){
            $(this).removeClass("active");
        }
    );
    //宜定盈倒计时
//    function count_down(o){
//        var theDay=/^[\d]{4}-[\d]{1,2}-[\d]{1,2}( [\d]{1,2}:[\d]{1,2}(:[\d]{1,2})?)?$/ig,leftDay,leftHour,leftMinute,conn,s;
//        if(!o.match(theDay)){
//            alert('从后台传入日期格式应为2012-01-01\r其中[]内的内容可省略');
//            return false;
//        }
//        var sec=(new Date(o.replace(/-/ig,'/')).getTime() - new Date().getTime())/1000;
//        if(sec > 0){
//            conn='还有';
//        }else{
//            conn='已过去';
//            sec*=-1;
//        }
//        s={day:sec/24/3600,hour:sec/3600%24,minute:sec/60%60};
//        leftDay = Math.floor(s.day);
//        leftHour = Math.floor(s.hour);
//        leftMinute = Math.floor(s.minute);
//        leftDay = leftDay < 10 ? '0'+leftDay : leftDay ;
//        leftHour = leftHour < 10 ? '0'+leftHour : leftHour ;
//        leftMinute = leftMinute < 10 ? '0'+leftMinute : leftMinute ;
//        $("#day").text(leftDay);
//        $("#hour").text(leftHour);
//        $("#minute").text(leftMinute);
//        setTimeout(function(){count_down(o)},1000);
//    }
//    var getTime = $("#theDay").attr("value");
//    count_down(getTime);
});

$(document).ready(function(){  
	   $(".side_list_tabs li").click(function(){
		   var c = $(".side_list_tabs li");
		   var index = c.index(this) + 1;
 	   c.removeClass("active");
 	   $(this).addClass("active");
 	   $(".side_list_ul").hide();
 	   $(".side_list_ul" + index).show();
    });
	
	 $(".side_affice_tabs li").click(function(){
		   var c = $(".side_affice_tabs li");
		   var index = c.index(this);
 	   c.removeClass("active");
 	   $(this).addClass("active");
 	   $(".side_affice_ul").hide();
 	   $(".side_affice_ul").eq(index).show();
    });
	   $(".guide_a").mouseover(function(){
		   var c = $(".guide_a");
		   var index = c.index(this) + 1;
 	   c.removeClass("active");
 	   $(this).addClass("active");
 	   $(".side_guide").hide();
 	   $(".side_guide" + index).show();
    });

	//banner下的3个LINK的划过上浮效果
	$("div.linkThree1,div.linkThree2,div.linkThree3").hover(function(e){
		e.stopPropagation();
		$(this).stop(true,true).animate({
			paddingTop:'20px',
			backgroundPositionY:'40%'
		},500)
	},function(e){
		e.stopPropagation();
		$(this).stop(true,true).animate({
			paddingTop:'30px',
			backgroundPositionY:'50%'
		},500)
	})
});

	


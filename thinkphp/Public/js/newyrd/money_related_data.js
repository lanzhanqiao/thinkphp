$(document).ready(function(){  
	//获取并显示列表数据
	    $.ajax({  
        type : "GET",  
		url : "/home/index",  
        dataType : "json",  
		jsonp	: 'getdata',		 
		async: false,
		success:function(json){
		 	var items =json.dataBroadcast;
			var url = window.location.href;
			var transferLoan = items.transferLoan>0 ? items.transferLoan :'0';
			var interestPerson = items.interestPerson>0 ? items.interestPerson : '0';
			var borrowPerson = items.borrowPerson>0 ? items.borrowPerson : '0';
			var pos = url.search('/borrow');
			if(url.indexOf("borrow")>0){
				$(".cjNum2").html(borrowPerson);
			}else if(url.indexOf("/lendGuide")>0){
				//$(".cjNum2").html(transferLoan);
				//$(".cjNum1").html(interestPerson);
				$('.dayData-detail>strong').eq(0).html(interestPerson);
				$('.dayData-detail>strong').eq(1).html(transferLoan);
			}
		 }
     });
});


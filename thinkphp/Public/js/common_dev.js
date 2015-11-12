//修复媒体列表中最后一个元素的样式
 $(function(){
    $('a.mediaReport:last').addClass('mediaLast');	
	$(".cmsTextCC p").css("width","590px");
 })
 
 //字符串截取
 function limit(title,nums){ 
        var objLength = title.length; 
        var num = nums;
        if(objLength > num){ 
        	title = title.substring(0,num) + "..."; 
        } 
        return title;
} 
 
 //获取热门问答模块列表
 function gethotanswer(num){
	 var requesturl = 'http://www.yirendai.com/ask/question2Json.action';
	 $.ajax({
		 type:'GET',
		 url:requesturl,
		 data:{'qNum':num},
		 dataType:"json",
		 async: false,
		// jsonp: 'jsoncallback',
		// jsoncallback:'hotanswer',
		 success:function(data){
			 
			 if (data.status == 'success') {
				 for(var i = 0; i < data.content.length;i++){
					var htmls = '<li><a href="'+data.content[i].qLink+'" target="_blank" title="'+data.content[i].qTitle+'">'+limit(data.content[i].qTitle,15)+'</a></li>';
					 $('.hotanswer').append(htmls);
				 }
			 }			 
		 }
	 });
 }
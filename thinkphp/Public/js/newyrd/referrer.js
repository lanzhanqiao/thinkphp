;(function($){
	var reData = [
	{
		'come':[
			'http://hao.360.cn/'
		],
		'go':'http://cps.yirendai.com/promotion/5069435'
	},{
		'come':[
			'http://licai.360.cn/',
			'http://licai.360.cn/niu',
			'http://licai.360.cn/new'
		],
		'go':'http://cps.yirendai.com/promotion/5069436'
	},{
		'come':[
			'http://www.hao123.com/',
			'https://www.hao123.com/'
		],
		'go':'http://cps.yirendai.com/promotion/4790412'
	}];
	var self = this;
	this.comeSrc = document.referrer.split('?')[0];
	this.son = 0;
	if($.type(self.comeSrc) === "string" && self.comeSrc.length>0){
		$.each(reData,function(i,v){
			self.go = v.go;
			$.each(v.come,function(j,w){
				if(self.comeSrc === w){
					location.href = self.go;
					self.son = 1;
					return false;
				}
			});
			if(self.son === 1){
				return false;
			}
		});
	}
})(jQuery);

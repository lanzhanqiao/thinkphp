$(function(){
	var jkIndex = 0;
	var scrollJk = setInterval(scrollJkTab,3000);
	function scrollJkTab(){
		// alert(jkIndex)
		if(jkIndex < 3){
			$(".jk_tab").attr("class","jk_tab jk_tab"+jkIndex);
			jkIndex++;
		}else{
			jkIndex = 0;
		}
		
	}

	$(".jk_tabLink a").click(function(){
		jkIndex = $(this).index(".jk_tabLink a");
		$(".jk_tab").attr("class","jk_tab jk_tab"+jkIndex);
	})
})
$(".ad_Lf_sp").click(function(){
	$(this).css({"border-color":"#ef4238","color":"#ef4238"}).siblings(".ad_Lf_sp").css({"border-color":"#eee","color":"#000"})
	$(".ad_Lf_dv").eq($(this).index(".ad_Lf_sp")).css("display","block").siblings(".ad_Lf_dv").css("display","none")
})
// 判断账号是否正确---------------------------------------
var txt=document.querySelector(".txt");
var pas=document.querySelector(".pas");
$(".sb").click(function(){
	$.ajax({
		type: "POST",
		url: "php/login.php",
		data: `name=${txt.value}&pas=${pas.value}`,
		success: function(a){
			var b=JSON.parse(a);
			if(b.code===2){
				console.log(1)
				window.location.href="http://localhost/maoyan/"
			}else{
				$(".tsk").css("display","block")
			}
		}
	})
})
$("input").focus(function(){
	$(this).css("border-color","#e02025")
})
$("input").blur(function(){
	$(this).css("border-color","#aaa")
})

$(".zhuce").click(function(){
	window.location.href=""
})
$(".zhuce").click(function(){
	window.location.href="http://localhost/maoyan/register.html"
})
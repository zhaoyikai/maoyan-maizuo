$("input").focus(function(){
	$(this).css("border-color","#e7363b")
})
// 手机号码正则--------------------------------
var tel=document.querySelector(".tel")
function tel_reg(){
	var res=/^1\d{10}$/.test(tel.value)
	return res
}
$(".tel").blur(function(){
	if(tel_reg()){
		this.nextElementSibling.innerText="正确"
		$(".tel").css("border-color","#aaa")
	}else{
		this.nextElementSibling.innerText="请输入正确的11位手机号码"
		$(".tel").css("border-color","#ff8800")
	}
})
// 创建密码正则----------------------------------
var apassword=document.querySelector(".apassword")
function apass_reg(){
	var res=/^.{6,}$/.test(apassword.value)
	return res
}
$(".apassword").blur(function(){
	if(apass_reg()){
		this.nextElementSibling.innerText="正确"
		$(".apassword").css("border-color","#aaa")
	}else{
		this.nextElementSibling.innerText="密码不能小于6位"
		$(".apassword").css("border-color","#ff8800")
	}
})
$(".apassword").keyup(function(){
	if(apassword.value.length===0){
		$("ul li").eq(0).css("background","#eee")
		$("ul li").eq(1).css("background","#eee")
		$("ul li").eq(2).css("background","#eee")
		}	
	if(apassword.value.length<6&&apassword.value.length>0){
			$("ul li").eq(0).css("background","#f76120")
			$("ul li").eq(1).css("background","#eee")
			$("ul li").eq(2).css("background","#eee")
		}
	if(apassword.value.length===6){
			$("ul li").eq(1).css("background","yellow")
			$("ul li").eq(2).css("background","#eee")
		}
	if(apassword.value.length>12){
			$("ul li").eq(2).css("background","green")
		}	
})	
// 确认密码--------------------------------	
var opassword=document.querySelector(".opassword")
function opass_reg(){
	return opassword.value===apassword.value
}
$(".opassword").blur(function(){
	if(opass_reg()){
		this.nextElementSibling.innerText="正确"
		$(".opassword").css("border-color","#aaa")
	}else{
		this.nextElementSibling.innerText="两次密码输入不一致"
		$(".opassword").css("border-color","#ff8800")
	}
})
$(".sb").click(function(){
	if(tel_reg()&&apass_reg()&&opass_reg()){
		window.location.href="http://localhost/maoyan/"
	}
})







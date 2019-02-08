$(".nav span").click(function(){
	$(this).css("color","#ff5f17").siblings(".nav span").css("color","#000")
	$(this).children().css("border-color","#ff5f17")
	$(this).siblings(".nav span").children().css("border-color","#fff")
	$(".content ul").eq($(this).index(".nav span")).css("display","block").siblings(".content ul").css("display","none")
})

window.onscroll=function(){
	var a=document.documentElement.scrollTop;
	if(a>752){
		$(".nav").css({"position":"fixed","top":"0","left":"0"})
	}else{
		$(".nav").css("position","static")
	}
}



var oul=document.querySelector(".banner ul")

var i=0;
autoPlay();

var page=document.querySelectorAll(".page")

function pageCss(){
				for(var k=0;k<page.length;k++){
					page[k].style.opacity="0.5";
				}
				page[i===4?0:i].style.opacity="1"
			}	
function autoPlay(){
				timer=setInterval(function(){
					i++;
					 if(i>=5){
						oul.style.left="0"
						i=1;
					}
					move(oul,"left",-10.8*i)
					pageCss();
				},2000)
			}
function move(ele,dir,end){
				clearInterval(ele.timer)
				if(dir==="left"){
					ele.timer=setInterval(function(){
						ele.style.left=ele.offsetLeft-0.01+"rem";
						if(ele.offsetLeft<=end){
							clearInterval(ele.timer)
							ele.style.left=end+"rem";
						}
					})
				}else{
					ele.timer=setInterval(function(){
						ele.style.left=ele.offsetLeft+0.01+"rem";
						if(ele.offsetLeft>=end){
							clearInterval(ele.timer)
							ele.style.left=end+"rem";
						}
					})
				}
			}	
$(".content").click(function(){
	window.location.href="html/xq.html"
})					
$("footer").click(function(){
	window.location.href="html/login.html"
})						
					
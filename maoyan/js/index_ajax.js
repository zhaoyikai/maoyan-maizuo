

// 正在热播ajax---------------------------------------
$.ajax({
	type:"get",
	url:"php/zzry.php",
	success:function(a){
		var data=JSON.parse(a);
		console.log(data);
		var str="";
		for(var i=0;i<data.length;i++){
			str+=`<li>
							<img src="${data[i].imgurl}" >
							<span>购票</span>
						</li>`
		};
		$(".zzry ul").html(str);
	}
	
})
// 即将上映ajax---------------------------------------
$.ajax({
	type:"get",
	url:"php/jjsy.php",
	success:function(a){
		var data=JSON.parse(a);
		console.log(data);
		var str="";
		for(var i=0;i<data.length;i++){
			str+=`<li>
							<div class="jjsy_li">
								<img src="${data[i].imgurl}" >
								<i>${data[i].xiangk}人想看</i>
								<span>预告片</span><span>预售</span>
							</div>	
							<b>1月30号上映</b>
						</li>`
		};
		$(".jjsy ul").html(str);
	}
	
})
// 热播电影ajax---------------------------------------------
$.ajax({
	type:"get",
	url:"php/rbdy.php",
	success:function(a){
		var data=JSON.parse(a);
		console.log(data);
		var str="";
		for(var i=0;i<data.length;i++){
			str+=`<li><img src="${data[i].imgurl}" ></li>`
		};
		$(".rbdy ul").html(str);
	}
	
})

// 今日票房ajax--------------------------------------------
$.ajax({
	type:"get",
	url:"php/jrpf.php",
	success:function(a){
		var data=JSON.parse(a);
		console.log(data);
		var jrpf_img=`<img src="${data[0].imgurl}">
						<span>死侍2：我爱我家</span>
						<em>625.21万</em>`
		$(".guanjun").html(jrpf_img);
		
		var str="";
		for(var i=1;i<data.length;i++){
			str+=`<li><i>${data[i].paiming}</i>${data[i].name}<strong>${data[i].piaofang}万</strong></li>`
		};
		$(".jrpf ul").html(str);
	}
	
})
// 最受期待-------------------------------------------
$.ajax({
	type:"get",
	url:"php/zsqd.php",
	success:function(a){
		var data=JSON.parse(a);
		console.log(data);
		var jrpf_img=`<img src="${data[0].imgurl}" >
						<h3>${data[0].name}</h3>
						<em>上映时间：${data[0].time}</em>
						<strong>${data[0].people}人想看</strong>`
		$(".zsqd_No1").html(jrpf_img);
		
		var zsqd_No2and3=`<img src="${data[1].imgurl}" >
						<h3>${data[1].name}</h3>
						<strong>${data[1].people}人想看</strong>`
		$(".zsqd_No2and3").html(zsqd_No2and3);
		
		
		var str="";
		for(var i=2;i<data.length;i++){
			str+=`<li><i>${data[i].paiming}</i>${data[i].name}<strong>${data[i].piaofang}万</strong></li>`
		};
		$(".zsqd ul").html(str);
	}
	
})










// TOP100------------------------------------------
$.ajax({
	type:"get",
	url:"php/TOP100.php",
	success:function(a){
		var data=JSON.parse(a);
		console.log(data);
		var jrpf_img=`<img src="${data[0].imgurl}" >
						<h3>霸王别姬</h3>
						<strong>9.9分</strong>`
		$(".TOP100_No1").html(jrpf_img);
		
		var str="";
		for(var i=1;i<data.length;i++){
			str+=`<li><i>${data[i].paiming}</i>${data[i].name}<strong>${data[i].piaofang}分</strong></li>`
		};
		$(".TOP100 ul").html(str);
	}
	
})














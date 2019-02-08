
function tel(){
	var res=/^1\d{10}$/.test($(".txt").val())
	return res
}
$(".txt").mouseup(function(){
	console.log(111)
	if(tel()){
		console.log(123)
		$(".con span").css("color","#000")
	}
})
<?php
$a=$_POST["name"];
$b=$_POST["pas"];
$arr=array("zyk",);
$arr2=array("zyk"=>"123");
// in_array(A,B) A是否在B中
if(in_array($a,$arr)){
    if($arr2[$a]==$b){   
        // 密码匹配
        echo '{"code":2}';
    }else{
        // 用户名存在 密码错误
        echo '{"code":1}';
    }
}else{
  // 用户名不存在
  echo '{"code":0}';
}

?>
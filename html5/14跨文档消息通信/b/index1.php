<?php
	$name = $_GET['name'];
	$age = $_GET['age'];
	$callback = $_GET['callback'];

	//{name:$name,age:$age}

	echo $callback.'({"name":"'.$name.'","age":"'.$age.'"})';

?>



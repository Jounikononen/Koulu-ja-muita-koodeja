<?php
	
	$luku = $_GET["luku"];
	$i = 0;
if ($luku <= 0)
		echo "Luvun pitää olla vähintään nolla!";
else
while ($luku >= $i) {
	echo $luku . " ";	
	$luku--;
}

?>
<?php
	
$ekaluku = $_GET["ekaluku"];	
$tokaluku = $_GET["tokaluku"];

if($ekaluku == 0 || $tokaluku == 0) {
	echo "Kertolaskun tulos: " . $ekaluku * $tokaluku;
	echo "Jakolaskun tulos: nollalla ei saa jakaa";
}	else {
	echo "Kertolaskun tulos: " . $ekaluku * $tokaluku;
	echo "Jakolaskun tulos: " . $ekaluku / $tokaluku;
}
?>
<?php
	
$merkkijono = $_REQUEST["merkkijono"];
$mode = $_GET["mode"];
$testi = "";

if ($mode == 1) {
	
	$testi = strtolower(implode(' ',str_split($merkkijono)));
	echo $testi;
} elseif ($mode == 2) {
	
	$testi = strtoupper(implode(' ',str_split($merkkijono)));
	echo $testi;
} elseif ($mode == 3) {
	
	$testi = strrev(strtolower($merkkijono));
	echo $testi;
} elseif ($mode == 4) {
	
	$testi = strrev(strtoupper($merkkijono));
	echo $testi;
}
	
?>
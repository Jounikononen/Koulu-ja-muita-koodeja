<?php
	$eka = $_GET['eka'];
	$toka = $_GET['toka'];
	$kolmas = $_GET['kolmas'];
	
function suurin ($eka, $toka, $kolmas) {
		
		$testi = max($eka, $toka, $kolmas);
	return $testi;
}
function pienin ($eka, $toka, $kolmas) {
		$testi2 = min($eka, $toka, $kolmas);
	return $testi2;	
}

echo "Syöttämistäsi luvuista suurin oli $suurin_luku"; 
	echo " ja pienin $pienin_luku";

?>
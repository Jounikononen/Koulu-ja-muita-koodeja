<?php
$luku = $_REQUEST["luku"];

if ($luku <= 0) {
	echo "Antamasi syöte ei ollut kelvollinen!";	
} else {

if ($luku % 2 == 0) { echo "Luku " . $luku . " on parillinen."; } 
else { echo "Luku " . $luku . " on pariton.";} 
}

?>
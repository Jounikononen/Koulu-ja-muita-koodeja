<?php
$tunnit = $_GET["tunnit"];
$tuntipalkka = $_GET["tuntipalkka"];
$veroprosentti = $_GET["veroprosentti"];

$palkka = $tunnit * $tuntipalkka;
$vero = $tunnit*$tuntipalkka*$veroprosentti/100;
$lopullinenPalkka = $palkka - $vero;

if ($tunnit == "" || $tuntipalkka == "" || $veroprosentti == "") {
	echo "Et antanut kaikkia tietoja!";	
} else 
	echo "Palkka ilman veroja: " . $palkka . "\n" 
	. "Veron osuus palkasta: " . $vero . "\n" 
	. "Palkka verojen jälkeen: " . $lopullinenPalkka;	
?>
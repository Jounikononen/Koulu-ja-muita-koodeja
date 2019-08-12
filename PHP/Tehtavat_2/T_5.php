<?php
	
$eka = $_REQUEST["merkkijono1"];
$toka = $_REQUEST["merkkijono2"];

$eka = trim($eka);
$toka = trim($toka);
$lasku1 = strlen ($eka);
$lasku2 = strlen ($toka);

$yhteensa = $lasku1 + $lasku2;

if ($eka == "" || $toka == "") {
	echo "Et antanut molempia merkkijonoja!";
} else {
echo "Antamasi merkkijonot olivat \"$eka\" ja \"$toka\". Niiden pituus yhteensä on $yhteensa merkkiä!";
}
		
?>
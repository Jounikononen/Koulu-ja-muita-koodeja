<?php
$nimi = $_GET["nimi"];
$viesti = $_GET["viesti"];

if ($nimi == "" || $viesti == "")
	 echo "Et antanut kaikkia tietoja!";
	else echo $nimi . ": Heipä hei, mitä kuuluu?";
?>
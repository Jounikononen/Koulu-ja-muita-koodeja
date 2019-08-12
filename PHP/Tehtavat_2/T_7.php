<?php
	
$ekaluku = $_REQUEST["ekaluku"];
$tokaluku = $_REQUEST["tokaluku"];
$operator = $_GET["operator"];

if (empty($ekaluku) || empty($tokaluku)) {
	echo "Et antanut molempia lukuja!";	
} else {

$merkki = "";
if ($operator == 1) {
	$merkki = "+";
	$lasku = $ekaluku + $tokaluku;
} elseif ($operator == 2){
	$merkki = "-";	
	$lasku = $ekaluku - $tokaluku;
} elseif ($operator == 3){
	$merkki = "*";	
	$lasku = $ekaluku * $tokaluku;
} elseif ($operator == 4){
	$merkki = "/";	
	$lasku = $ekaluku / $tokaluku;
}

echo $ekaluku .  $merkki . $tokaluku . " = " . $lasku;
}
	
?>
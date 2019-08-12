<?php

    $lukujono = $_GET['lukujono'];
    $lukutaulukko = explode(',',$lukujono);

	$pisteet = implode(' ', $lukutaulukko);
	$summa = (array_sum($lukutaulukko));

	$a = array_filter($lukutaulukko);
	$average = array_sum($a)/count($a);

	$keskiarvo = $average;
    
    echo "Pisteet olivat: $pisteet\n";
    echo "Pisteiden summa: $summa\n";
    echo "Pisteiden keskiarvo: $keskiarvo";
?>

	
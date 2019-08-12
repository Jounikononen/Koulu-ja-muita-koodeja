<?php

$a = array(9, 7, 5);
$lkm = 3;
$elain = 'kissa';
$teksti = 'Lainausmerkkien (" ja ") sisällä voi käyttää kenoviivalla (\\) merkittyjä erikoiskoodeja.';

$tulostus = implode(",",$a);
echo $teksti;
echo "Ostin $lkm {$elain}a.\n";
echo "Taulukon sisältö: $tulostus";

?>
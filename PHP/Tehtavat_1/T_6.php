<?php
	
	$sukupuoli = $_GET["sukupuoli"];
	$ika = $_GET["ika"];
	
if ($sukupuoli == "mies") {
	if ($ika == 1) 
		echo "Olet mies parhaassa iässä!";
	elseif ($ika == 2) 
		echo "Olet viisas mies!"; 
}
elseif ($sukupuoli == "nainen") {
	if ($ika == 1) 
		echo "Olet neito kauneimmillaan!"; 
	elseif ($ika == 2) 
		echo "Näytät nuorelta ikäiseksesi!"; 
};
?>
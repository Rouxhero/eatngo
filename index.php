<?php
	echo 'Coucou';	
	$dsn = 'mysql:host=51.210.137.135;port=3306;dbname=eatngo';
	$user = 'root';
	$password = 'uaj7hh1t';
	try{
	    $bdd =new PDO($dsn, $user, $password);
	}
	catch( PDOException $Exception ) {
	    // Note The Typecast To An Integer!
	  	echo $Exception->getMessage( ) , (int)$Exception->getCode( );
	}


?>
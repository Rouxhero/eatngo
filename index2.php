<?php
	echo 'Coucou';	
	$dsn = 'mysql:host=localhost;port=3306;dbname=resto_u';
	$user = 'root';
	$password = 'AdminPass';
	try{
	    $bdd =new PDO($dsn, $user, $password);
	}
	catch( PDOException $Exception ) {
	    // Note The Typecast To An Integer!
	  	echo $Exception->getMessage( ) , (int)$Exception->getCode( );
	}


?>
<?php
//Le Van Canh dit Ban Leo
//Grzechowiak Adrien
//groups 1
class DataLayer {
	//private ?PDO $conn = NULL; // le typage des attributs est valide uniquement pour PHP>=7.4

	private  $conn = NULL; // connexion de type PDO   compat PHP<=7.3
	
	/**
	* @param $DSNFileName : file containing DSN 
	*/
	function __construct(string $DSNFileName){
		$dsn = "uri:$DSNFileName";
		try {
			$this->conn = new PDO($dsn,"root","AdminPass");
		}
		catch( PDOException $Exception ) {
		    // Note The Typecast To An Integer!
		  	echo $Exception->getMessage( ) , (int)$Exception->getCode( );
		}
		// paramètres de fonctionnement de PDO :
		$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // déclenchement d'exception en cas d'erreur
		$this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC); // fetch renvoie une table associative
		// réglage d'un schéma par défaut :
	}
    

	function getRest() {
		$sql = "select * from resto join horaires WHERE resto.id = horaires.id ";
		$stmt = $this->conn->prepare($sql);
		$stmt->execute();
		$res= $stmt->fetchAll();
		return $res;
	}
}
?>

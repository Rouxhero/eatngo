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
		//$dsn = "uri:$DSNFileName";
		$dsn = 'mysql:host=51.210.137.135;';
		$user = 'root';
		$password = 'uaj7hh1t';

		$dbh = new PDO($dsn, $user, $password);

		// paramètres de fonctionnement de PDO :
		$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // déclenchement d'exception en cas d'erreur
		$this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC); // fetch renvoie une table associative
		// réglage d'un schéma par défaut :
		$this->conn->query('set search_path=eatngo, authent');
	}
    
	/**
	 * Liste des territoires
	 * @return array tableau de territoires
	 * chaque territoire comporte les clés :
		* id (identifiant, entier positif),
		* nom (chaîne),
		* min_lat (latitude minimale, flottant),
		* min_lon (longitude minimale, flottant),
		* max_lat, max_lon
	 */
	function getRest(): array {
		$sql = "select * from resto ";
		$stmt = $this->connexion->prepare($sql);
		$stmt->execute();
		$res= $stmt->fetchAll();
		echo $res;
		return $res;
	}
}
?>

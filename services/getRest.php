<?php
//Le Van Canh dit Ban Leo
//Grzechowiak Adrien
//groups 1
set_include_path('..'.PATH_SEPARATOR);
require_once('lib/common_service.php');
require_once('lib/initDataLayer.php');

try{
  $resto = $data->getRest();
  produceResult($resto);
}
catch (PDOException $e){
    produceError($e->getMessage());
}


?>

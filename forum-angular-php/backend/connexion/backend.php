<?php
require_once 'config.php';
// creation de l'instance PDO et connexion`a la BD
$dsn = "mysql:host=$mysqlHost;" .
        "dbname=$mysqlDatabase;" .
        "charset=$charset";


// les options
$opt =array(
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES =>false);

try {
    $PDO =new PDO($dsn, $mysqlLogin, $mysqlPassword, $opt);
   
}catch (PDOException $e)
{
    echo "erreur\n" . $e->getMessage();
}


?>
<?php
    global $PDO ;
    ini_set("display_errors",'1');

    require_once '../connexion/auth.php';
    require_once '../connexion/helper.php';

    $query = "SELECT * FROM Cours WHERE Id_c IN (SELECT Id_c FROM Accede WHERE Id_u = ${_SESSION['Id_u']} ) " ;

    $statement = $PDO->prepare($query) ;
    $exec=$statement->execute() ;
    $resultat = $statement->fetchAll() ;
    if(!empty($resultat)) sendMessage($resultat);
    else sendError("il n'y a aucun cours pour cet utilisateur.");
?>

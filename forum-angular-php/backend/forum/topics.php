<?php
    global $PDO ;
    ini_set("display_errors",'1');

    require_once '../connexion/auth.php';
    require_once '../connexion/helper.php';

    $query = "SELECT * FROM Sujet WHERE Id_c = ?" ;

    $statement = $PDO->prepare($query) ;
    $exec=$statement->execute([$_POST['Id_c']]) ;
    $resultat = $statement->fetchAll() ;
    //sendMessage($resultat);
    
    $query2 = "SELECT Nom FROM Cours WHERE Id_c = ?" ;

    $statement2 = $PDO->prepare($query2) ;
    $exec2=$statement2->execute([$_POST['Id_c']]) ;
    $resultat2 = $statement2->fetchAll() ;
    sendMessage(["Sujet"=>$resultat,"Nom"=>$resultat2[0]['Nom']]);
?>
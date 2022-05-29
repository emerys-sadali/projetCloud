<?php
    require_once "../connexion/auth.php";
    require_once "../connexion/helper.php";

    global $PDO ;
    ini_set("display_errors",'1');

    $id_c=$_POST['Id_c'];
    $new_sujet=$_POST['Sujet'];
    if(empty($new_sujet)){
        sendError("Le sujet est vide.");
    }
    $query = "SELECT count(*) FROM Sujet WHERE Id_c = ? AND texte=? limit 1" ;

    $statement = $PDO->prepare($query) ;
    $exec=$statement->execute([$_POST['Id_c'],$new_sujet]) ;
    $resultat = $statement->fetchColumn() ;
    if($resultat!=0){
        sendError("Ce sujet existe déjà");
    }
    
    $query2 = "UPDATE Cours
    SET Topic = Topic+1,
    Derniere_modif=CURRENT_TIMESTAMP()
    WHERE Id_c = ?" ;

    $statement2 = $PDO->prepare($query2) ;
    $exec2=$statement2->execute([$_POST['Id_c']]) ;
    $resultat2 = $statement2->fetchAll() ;

    $query3 = "INSERT INTO Sujet
    VALUES (NULL,?, 0,CURRENT_TIMESTAMP(), ?)";

    $statement3 = $PDO->prepare($query3) ;
    $exec3=$statement3->execute([$new_sujet, $id_c]) ;
    $resultat3 = $statement3->fetchAll() ;
    sendMessage($PDO->lastInsertId());
    
    
?>
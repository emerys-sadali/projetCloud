<?php

require_once 'backend.php' ;

session_start() ;

function authenticate(){

    global $PDO ;
    if (array_key_exists('Login', $_POST) && array_key_exists('Password', $_POST))
    {

       // $data =array($_POST['Login']);
        $query = "SELECT * FROM Utilisateur WHERE Login = ? " ;
        
        $statement = $PDO->prepare($query) ;
        $exec=$statement->execute([$_POST['Login']]) ;
        $resultat = $statement->fetch() ;

        if(empty($resultat)) return false;
        $password=$resultat['Password'];
        if($password==$_POST['Password']){
            $_SESSION['Id_u']=$resultat['Id_u'];
            $_SESSION['Login'] = $_POST['Login'];
            $_SESSION['password'] = $_POST['Password'];
            return true;
        }
        else{
           return false;
        }
    }
    else
    {
        return false ;
    }
}

function isAuthenticated()
{
    return (array_key_exists('Login', $_SESSION)) ;
}
?>
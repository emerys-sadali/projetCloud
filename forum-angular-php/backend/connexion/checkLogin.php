<?php

require_once 'auth.php' ;
require_once 'helper.php' ;



if(authenticate())
{
    sendMessage("") ;
}
else
{
    sendError("Le login ou le mot de passe est incorrect !");
}

?>
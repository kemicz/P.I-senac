<?php
if(isset($_POST['email']) && isset($_POST['senha'])){
    include_once('conexao.php');
    $email= $_POST['email'];
    $senha= $_POST['senha'];

    $sql= "SELECT * FROM cadastro WHERE email='$email' and senha= '$senha'";
    $query= mysqli_query($conexao, $sql);
    $user= $query->fetch_assoc();
    
    if(mysqli_num_rows($query) == 0){
        echo  "<script>alert('Email ou senha incorretos);</script>";
    }else{
        if(!isset($_SESSION)){
            session_start();
            $_SESSION['email']=$user['email'];
            header('location:index.html');
        }
    }
}

?>
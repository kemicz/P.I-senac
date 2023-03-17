<?php
 if(isset($_POST['cadastrar'])){
    include_once('conexao.php'); 
    $nome= $_POST['nome'];
    $email= $_POST['email'];
    $senha= $_POST['senha'];
    $sql= "INSERT INTO cadastro(nome,email,senha) VALUES ('$nome', '$email', '$senha')";
    $query= mysqli_query($conexao, $sql);
    if($query){
        echo "<script>
         window.location.replace('login-cadastro.html');</script>";
        }
    }
?>
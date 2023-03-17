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
         alert('Cadastro realizado com sucesso');
         window.location.replace('login-cadastro.html');</script>";
         }
    }
?>
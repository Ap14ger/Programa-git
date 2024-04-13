<?php

$servidor = "localhost";
$usuario = "root";
$clave = "";
$baseDeDatos = "ejemplo";

$coneccion = mysqli_connect ($servidor, $usuario, $clave, $baseDeDatos);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">

        <input type="txt" name="nombre" placeholder="nombre">
        <input type="email" name="correo" placeholder="correo">
        <input type="txt" name="telefono" placeholder="telefono">

        <input type="submit" name="enviar">
        <input type="reset">
    </form>
</body>
</html>

<?php

if(isset($_POST["enviar"])){

    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    
    $insertarDatos = "INSERT INTO datos VALUES('$nombre','$correo','$telefono','')";

    $coneccion = mysqli_query($coneccion,$insertarDatos);

}

?>
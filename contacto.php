<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    if(isset($_POST['name']) && !empty($_POST['name']) 
    && isset($_POST['email']) && !empty($_POST['email'])
    && isset($_POST['subject']) && !empty($_POST['subject'])
    && isset($_POST['message']) && !empty($_POST['message'])){
        $para = 'contacto@hectorvaldesm.com';

        $contenido = "Este mensaje fue envidao por: " . $name . " \r\n";
        $contenido .= "Su e-mail es: " .$email . "\r\n";
        $contenido .= "Enviado el: " .date('d/m/y', time())."\r\n";
        $contenido .= $message;

        $enviado = mail($para, $subject, $contenido);
        if($enviado)
            <script type="javascript"> 
                alert("Contacto Registrado"); 
            </script>             
        else    
            echo 'Error al enviar';

        header("Location:index.html");
    
    }

    
?>
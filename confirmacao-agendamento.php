<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmação de Agendamento</title>
    <link rel="stylesheet" href="styles.css"> <!-- Certifique-se de incluir o arquivo de estilo CSS -->
</head>
<body>

<div id="confirmacao">
    <h2>Confirmação de Agendamento</h2>
    <!-- ... Outras informações de confirmação ... -->
    
    <p>Entraremos em contato em breve para confirmar os detalhes do seu agendamento.</p>

    <?php
    // Exiba o link do WhatsApp se estiver disponível
    if (isset($_GET['whatsapp'])) {
        $link_whatsapp = $_GET['whatsapp'];
        echo "<a href=\"$link_whatsapp\" target=\"_blank\">Enviar Detalhes para o WhatsApp</a>";
    }
    ?>

    <a href="index.php">Voltar à Página Inicial</a>
</div>

</body>
</html>

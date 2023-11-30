<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura os dados do formulário
    $nome = $_POST["nome"];
    $telefone = $_POST["telefone"];
    $data = $_POST["data"];
    $servico = $_POST["servico"];
    $mensagem = $_POST["mensagem"];

    // Número do WhatsApp (substitua pelo seu número)
    $numero_whatsapp = "558386066418";

    // Crie a mensagem do WhatsApp
    $mensagem_whatsapp = "Olá, sou $nome. Gostaria de agendar um serviço de $servico para $data. Minhas informações adicionais são: $mensagem";

    // Codifique a mensagem para URL
    $mensagem_whatsapp_codificada = urlencode($mensagem_whatsapp);

    // Crie o link do WhatsApp usando a API oficial
    $link_whatsapp = "https://wa.me/$numero_whatsapp/?text=$mensagem_whatsapp_codificada";

    // Redirecione para a página de confirmação
    header("Location: confirmacao-agendamento.php?whatsapp=$link_whatsapp");
    exit();
}
?>

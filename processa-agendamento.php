<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $telefone = $_POST["telefone"];
    $data = $_POST["data"];
    $servico = $_POST["servico"];
    $mensagem = $_POST["mensagem"];

    $numero_whatsapp = "558386066418";

    $mensagem_whatsapp = "Olá, sou $nome. Gostaria de agendar um serviço de $servico para $data. Minhas informações adicionais são: $mensagem";

    $mensagem_whatsapp_codificada = urlencode($mensagem_whatsapp);

    $link_whatsapp = "https://wa.me/$numero_whatsapp/?text=$mensagem_whatsapp_codificada";

    header("Location: $link_whatsapp");
    exit;
}
?>
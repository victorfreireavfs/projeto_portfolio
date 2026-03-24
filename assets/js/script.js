function enviarWhats(event) {
  event.preventDefault(); // Evita o envio tradicional do formulário

   // Captura os campos do formulário
  const nome = document.getElementById("nome");
  const mensagem = document.getElementById("mensagem");

  // Número de telefone com código do país (substituir pelo seu)
  const telefone = "5581998697417"; 

  // Texto formatado para envio via WhatsApp
  const texto = `Olá, meu nome é ${nome.value} e minha mensagem é: ${mensagem.value}`;

    // Codifica o texto para URL
  const msgFormatada = encodeURIComponent(texto);

  // Monta a URL do WhatsApp e abre em nova aba
  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
  window.open(url, "_blank");
}

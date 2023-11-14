var settings = {
  companyName: "IZA Seguradora", // Personalize o nome da empresa aqui
  phoneNumber: "+5511999999999", // Personalize o número de WhatsApp aqui
  text: "Olá, tem dúvidas sobre o Seguro da IZA? É só me informar alguns dados para iniciarmos uma conversa sem compromisso.", // Personalize o texto inicial aqui
  logoUrl:
    "https://d335luupugsy2.cloudfront.net/cms/files/297831/1625769220/$tiq9q1k33", // URL da logo da empresa
  message: "Olá, gostaria de saber mais sobre o seguro da IZA!", // Mensagem inicial
  onSubmit: function (formValues) {
    // Função personalizada que é chamada no envio do formulário
    console.log("Formulário enviado:", formValues);
    // Aqui você pode integrar com o Google Analytics ou outra ferramenta de tracking
  },
};

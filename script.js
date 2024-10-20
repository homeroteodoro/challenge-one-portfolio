const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  const nome = document.getElementById("nome");
  const email = document.querySelector('.contato__campo[type="email"]').value;
  const assunto = document.getElementById("assunto");
  const mensagem = document.querySelector(".contato__campo--textarea");

  if (nome.value.length < 3) {
    alert("O nome deve ter pelo menos 3 caracteres.");
    return;
  }

  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, insira um endereço de e-mail válido.");
    return;
  }

  if (assunto.value.length < 3) {
    alert("O campo assunto deve ser preenchido por favor.");
    return;
  }

  if (mensagem.value.length < 1) {
    alert("Por favor digite sua mensagem.");
    return;
  }
});

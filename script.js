document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-voluntario");

  if (form) {
    // Máscara dinâmica para o campo CPF
    const cpfInput = document.getElementById("cpf");
    if (cpfInput) {
      cpfInput.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        e.target.value = value;
      });
    }

    // Máscara dinâmica para o campo Telefone
    const telInput = document.getElementById("telefone");
    if (telInput) {
      telInput.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
        value = value.replace(/(\d{5})(\d)/, "$1-$2");
        e.target.value = value;
      });
    }

    // Validação ao enviar o formulário
    form.addEventListener("submit", (e) => {
      let isValid = true;

      // Limpa mensagens de erro prévias
      document.querySelectorAll(".error-msg").forEach((span) => {
        span.textContent = "";
      });

      // Validar Nome
      const nome = document.getElementById("nome");
      if (!nome.value.trim() || nome.value.trim().length < 3) {
        document.getElementById("erro-nome").textContent =
          "Por favor, insira o seu nome completo (mínimo 3 caracteres).";
        isValid = false;
      }

      // Validar E-mail
      const email = document.getElementById("email");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        document.getElementById("erro-email").textContent =
          "Por favor, insira um e-mail válido.";
        isValid = false;
      }

      // Validar CPF
      const cpf = document.getElementById("cpf");
      if (cpf.value.replace(/\D/g, "").length !== 11) {
        document.getElementById("erro-cpf").textContent =
          "Informe um CPF válido com 11 dígitos.";
        isValid = false;
      }

      // Validar Telefone
      const telefone = document.getElementById("telefone");
      if (telefone.value.replace(/\D/g, "").length < 10) {
        document.getElementById("erro-telefone").textContent =
          "Informe um número de telefone com DDD válido.";
        isValid = false;
      }

      // Validar Seleção de Projeto
      const projeto = document.getElementById("projeto-interesse");
      if (!projeto.value) {
        document.getElementById("erro-projeto").textContent =
          "Selecione um projeto de interesse.";
        isValid = false;
      }

      // Validar Seleção de Disponibilidade
      const disponibilidade = document.getElementById("disponibilidade");
      if (!disponibilidade.value) {
        document.getElementById("erro-disponibilidade").textContent =
          "Selecione a sua disponibilidade.";
        isValid = false;
      }

      if (!isValid) {
        e.preventDefault();
      } else {
        alert("Cadastro enviado com sucesso! Agradecemos o seu apoio.");
      }
    });
  }
});
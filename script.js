// --- Confirma se o JavaScript carregou ---
alert("O JavaScript carregou corretamente!");

// --- Máscara automática para telefone ---
document.addEventListener("DOMContentLoaded", () => {
  const tel = document.getElementById("telefone");
  if (tel) {
    tel.addEventListener("input", (e) => {
      let valor = e.target.value.replace(/\D/g, "");

      if (valor.length > 11) valor = valor.substring(0, 11);

      if (valor.length > 10) {
        e.target.value = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
      } else if (valor.length > 6) {
        e.target.value = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
      } else if (valor.length > 2) {
        e.target.value = valor.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
      } else {
        e.target.value = valor;
      }
    });
  }

  // --- Envio do formulário ---
  const form = document.getElementById("cadastroForm");
  const msg = document.getElementById("mensagem-sucesso");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      msg.style.display = "block";

      // Limpa o formulário após 3 segundos
      setTimeout(() => {
        form.reset();
        msg.style.display = "none";
      }, 3000);
    });
  }
});

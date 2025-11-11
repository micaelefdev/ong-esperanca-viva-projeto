alert("Script carregando com sucesso!");
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

  // --- Mensagem de sucesso ao enviar ---
  const form = document.getElementById("cadastroForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Cadastro enviado com sucesso!");
      form.reset();
    });
  }
});


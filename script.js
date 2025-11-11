// --- Menu hambúrguer ---
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector(".navbar ul");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // --- Máscara automática de telefone ---
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

  // --- Validação do formulário ---
  const form = document.getElementById("cadastroForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Pega os valores
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
      const area = document.getElementById("area").value;

      // Verifica se tudo foi preenchido
      if (!nome || !email || !telefone || !area) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
      }

      // Mostra mensagem de sucesso
      const msg = document.createElement("p");
      msg.textContent = "Cadastro enviado com sucesso!";
      msg.style.color = "green";
      msg.style.fontWeight = "bold";
      msg.style.marginTop = "15px";
      form.appendChild(msg);

      // Limpa o formulário
      form.reset();

      // Remove a mensagem após 4 segundos
      setTimeout(() => {
        msg.remove();
      }, 4000);
    });
  }
});

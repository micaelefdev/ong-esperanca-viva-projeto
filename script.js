const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const navClose = document.getElementById("nav-close");

menuToggle.addEventListener("click", () => {
  nav.classList.add("open");
  nav.setAttribute("aria-hidden", "false");
});

navClose.addEventListener("click", () => {
  nav.classList.remove("open");
  nav.setAttribute("aria-hidden", "true");

});
// --- Formulário de Cadastro ---
function validarFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const area = document.getElementById("area").value;
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !telefone || !area) {
    alert("Por favor, preencha todos os campos obrigatórios!");
    return false;
  }

  // Mensagem verde de sucesso
  const sucesso = document.createElement("div");
  sucesso.textContent = "✅ Cadastro enviado com sucesso!";
  sucesso.style.backgroundColor = "#4CAF50";
  sucesso.style.color = "white";
  sucesso.style.padding = "10px";
  sucesso.style.marginTop = "15px";
  sucesso.style.borderRadius = "5px";
  sucesso.style.textAlign = "center";

  const form = document.getElementById("cadastroForm");
  form.appendChild(sucesso);

  // Limpar formulário depois de 2 segundos
  setTimeout(() => {
    sucesso.remove();
    form.reset();
  }, 2000);

  return false; // Impede envio real para servidor
}

// --- Máscara para o telefone ---
const campoTelefone = document.getElementById("telefone");

if (campoTelefone) {
  campoTelefone.addEventListener("input", function (e) {
    let valor = e.target.value.replace(/\D/g, "");

    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length > 6) {
      e.target.value = (${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)};
    } else if (valor.length > 2) {
      e.target.value = (${valor.slice(0, 2)}) ${valor.slice(2)};
    } else {
      e.target.value = valor;
    }
  });
}


// --- MENU HAMBÚRGUER ---
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".navbar");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// --- MENSAGEM DE SUCESSO DO FORMULÁRIO ---
function validarFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const area = document.getElementById("area").value;
  
  if (!nome || !email || !telefone || !area) {
    alert("Por favor, preencha todos os campos obrigatórios!");
    return false;
  }

  // Cria a mensagem verde de sucesso
  const msg = document.createElement("div");
  msg.textContent = "Cadastro enviado com sucesso!";
  msg.style.background = "#28a745";
  msg.style.color = "white";
  msg.style.padding = "10px";
  msg.style.marginTop = "10px";
  msg.style.borderRadius = "5px";
  msg.style.textAlign = "center";

  const form = document.getElementById("cadastroForm");
  form.appendChild(msg);

  // some depois de alguns segundos
  setTimeout(() => msg.remove(), 4000);

  form.reset();
  return false;
}

// --- MÁSCARA AUTOMÁTICA PARA TELEFONE ---
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
});

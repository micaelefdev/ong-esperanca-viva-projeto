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
// --- DEBUG + Máscara confiável para telefone (cole no final do script.js) ---
document.addEventListener("DOMContentLoaded", function () {
  // removemos possíveis debug antigos
  const oldDebug = document.getElementById("debug-tel-status");
  if (oldDebug) oldDebug.remove();

  // cria um aviso visível na página (apenas para debug, pode remover depois)
  const debug = document.createElement("div");
  debug.id = "debug-tel-status";
  debug.style.background = "#fff3cd";
  debug.style.border = "1px solid #ffeeba";
  debug.style.color = "#856404";
  debug.style.padding = "8px";
  debug.style.margin = "8px 0";
  debug.style.borderRadius = "6px";
  debug.style.fontSize = "14px";
  debug.textContent = "Status: procurando campo de telefone...";
  // anexa no topo do main (se existir) ou no body
  const mainEl = document.querySelector("main") || document.body;
  mainEl.insertBefore(debug, mainEl.firstChild);

  const tel = document.getElementById("telefone");
  if (!tel) {
    debug.textContent = "Status: campo com id='telefone' NÃO encontrado. Verifique o id no cadastro.html.";
    return;
  }

  debug.textContent = "Status: campo 'telefone' encontrado. Listener será ativado.";

  // função que aplica máscara (robusta)
  function aplicarMascaraTelefone(el) {
    el.addEventListener("input", function (e) {
      let v = e.target.value.replace(/\D/g, "");
      if (v.length > 11) v = v.slice(0, 11);

      if (v.length > 10) {
        e.target.value = v.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
      } else if (v.length > 6) {
        e.target.value = v.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
      } else if (v.length > 2) {
        e.target.value = v.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
      } else {
        e.target.value = v;
      }
      // atualiza o debug com o valor atual para você ver
      debug.textContent = Status: listener ativo — valor atual: "${e.target.value}";
    }, { passive: true });
  }

  // ativa a máscara
  aplicarMascaraTelefone(tel);
  debug.textContent = "Status: listener ativo. Digite números no campo telefone para ver a formatação.";
});

// script.js

const chatMessages = document.getElementById("chat-messages");
const messageInput = document.getElementById("messageInput");

const buyerId = localStorage.getItem('buyerId');
const packageName = localStorage.getItem('package');
const access = localStorage.getItem('chatAccess');

// Blokir akses jika belum beli
if (!access || !buyerId || !packageName) {
  document.body.innerHTML = "<h2>Akses Ditolak. Silakan beli paket terlebih dahulu.</h2>";
} else {
  // Bot menyambut pengguna
  addBotMessage(`Halo! ðŸ‘‹ Terima kasih telah membeli paket *${packageName}*. Admin akan segera merespon.`);

  // Fungsi kirim pesan
  window.sendMessage = function () {
    const text = messageInput.value.trim();
    if (text === "") return;
    addUserMessage(text);
    messageInput.value = "";

    // Simulasi respon bot/admin otomatis
    setTimeout(() => {
      addBotMessage("Admin akan menghubungi Anda secepatnya. Jika ada pertanyaan, silakan ajukan di sini.");
    }, 1000);
  };

  function addUserMessage(msg) {
    const el = document.createElement("div");
    el.className = "chat user";
    el.textContent = "Anda: " + msg;
    chatMessages.appendChild(el);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function addBotMessage(msg) {
    const el = document.createElement("div");
    el.className = "chat bot";
    el.textContent = "Admin: " + msg;
    chatMessages.appendChild(el);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

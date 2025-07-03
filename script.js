// script.js

const hostingPackages = [
  {
    title: "Hosting SAMP - Starter",
    desc: "1GB RAM, 5GB SSD, Panel Control, DDoS Protection",
    price: "Rp 25.000 / bulan",
    wa: "6281275347835"
  },
  {
    title: "Hosting FiveM - Basic",
    desc: "2GB RAM, 10GB SSD, TXAdmin Ready, DDoS Protection",
    price: "Rp 70.000 / bulan",
    wa: "6281275347835"
  },
  {
    title: "Hosting Minecraft - Premium",
    desc: "4GB RAM, 20GB SSD, Plugin Ready, Auto Backup",
    price: "Rp 90.000 / bulan",
    wa: "6281275347835"
  }
];

const container = document.getElementById("hosting-list");

hostingPackages.forEach(pkg => {
  const card = document.createElement("div");
  card.className = "bg-white p-6 rounded-xl shadow-md card-hover";

  card.innerHTML = `
    <h3 class="text-xl font-bold mb-2">${pkg.title}</h3>
    <p class="mb-4">${pkg.desc}</p>
    <p class="text-green-600 font-semibold mb-4">${pkg.price}</p>
    <a href="https://wa.me/${pkg.wa}" target="_blank"
       class="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
      Pesan via WhatsApp
    </a>
  `;

  container.appendChild(card);
});

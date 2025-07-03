// Untuk pesanan.html: isi otomatis
if (window.location.pathname.endsWith('pesanan.html')) {
  const params = new URLSearchParams(location.search);
  const paket = params.get('paket') || '';
  document.querySelector('input[name="paket"]').value = paket;

  document.getElementById('order-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Pesanan berhasil dikirim:\n' +
      [...new FormData(e.target)].map(([k,v])=>`${k}: ${v}`).join('\n'));
    e.target.reset();
  });
}

const btn = document.getElementById('ping');
const statusEl = document.getElementById('status');

btn.addEventListener('click', async () => {
  try {
    statusEl.textContent = 'Enviando ping...';
    statusEl.style.color = '#6c757d';
    
    const res = await chrome.runtime.sendMessage({ type: 'PING' });
    
    if (res && res.ok) {
      statusEl.textContent = `Background está vivo: ${res.time}`;
      statusEl.style.color = '#28a745';
    } else {
      statusEl.textContent = 'Erro na comunicação com o background';
      statusEl.style.color = '#dc3545';
    }
  } catch (error) {
    statusEl.textContent = `Erro: ${error.message}`;
    statusEl.style.color = '#dc3545';
  }
});

// Verificar se a extensão foi instalada recentemente
chrome.storage.local.get(['installs'], (result) => {
  if (result.installs) {
    const installDate = new Date(result.installs);
    console.log('Extensão instalada em:', installDate.toLocaleString());
  }
});

// Adicionar animação ao botão
btn.addEventListener('mouseenter', () => {
  btn.style.transform = 'translateY(-2px)';
});

btn.addEventListener('mouseleave', () => {
  btn.style.transform = 'translateY(0)';
});


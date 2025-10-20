// Content script para developer.chrome.com
console.log('Bootcamp Helper: Content script carregado em', window.location.href);

// Destacar links na página
function highlightLinks() {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.style.outline = '2px solid #ec0089';
    link.style.outlineOffset = '2px';
    link.addEventListener('mouseenter', () => {
      link.style.backgroundColor = '#ec008920';
    });
    link.addEventListener('mouseleave', () => {
      link.style.backgroundColor = '';
    });
  });
  
  console.log(`Bootcamp Helper: ${links.length} links destacados`);
}

// Adicionar um banner informativo
function addBanner() {
  const banner = document.createElement('div');
  banner.id = 'bootcamp-helper-banner';
  banner.innerHTML = `
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 10px;
      text-align: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      z-index: 10000;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    ">
      🚀 Bootcamp Helper ativo nesta página! Links destacados em rosa.
      <button id="close-banner" style="
        background: rgba(255,255,255,0.2);
        border: none;
        color: white;
        padding: 5px 10px;
        margin-left: 10px;
        border-radius: 4px;
        cursor: pointer;
      ">Fechar</button>
    </div>
  `;
  
  document.body.prepend(banner);
  
  // Ajustar o padding do body para compensar o banner
  document.body.style.paddingTop = '50px';
  
  // Adicionar evento para fechar o banner
  document.getElementById('close-banner').addEventListener('click', () => {
    banner.remove();
    document.body.style.paddingTop = '';
  });
}

// Função para contar elementos na página
function analyzePageContent() {
  const stats = {
    links: document.querySelectorAll('a').length,
    images: document.querySelectorAll('img').length,
    headings: document.querySelectorAll('h1, h2, h3, h4, h5, h6').length,
    paragraphs: document.querySelectorAll('p').length,
    codeBlocks: document.querySelectorAll('code, pre').length
  };
  
  console.log('Bootcamp Helper: Análise da página:', stats);
  return stats;
}

// Executar quando a página estiver carregada
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  highlightLinks();
  addBanner();
  analyzePageContent();
  
  // Enviar mensagem para o background script
  chrome.runtime.sendMessage({
    type: 'CONTENT_SCRIPT_LOADED',
    url: window.location.href,
    stats: analyzePageContent()
  });
}


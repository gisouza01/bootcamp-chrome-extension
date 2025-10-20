chrome.runtime.onInstalled.addListener(() => {
  console.log('Bootcamp Helper instalado.');
  chrome.storage.local.set({ installs: Date.now() });
  
  // Criar um contexto de menu (opcional)
  chrome.contextMenus.create({
    id: 'bootcamp-helper',
    title: 'Bootcamp Helper',
    contexts: ['page']
  });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'PING') {
    sendResponse({ 
      ok: true, 
      time: new Date().toISOString(),
      sender: sender.tab ? sender.tab.url : 'popup'
    });
  }
  
  if (msg.type === 'GET_TAB_INFO') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        sendResponse({
          url: tabs[0].url,
          title: tabs[0].title,
          id: tabs[0].id
        });
      }
    });
    return true; // Indica que a resposta será assíncrona
  }
});

// Listener para mudanças de aba
chrome.tabs.onActivated.addListener((activeInfo) => {
  console.log('Aba ativa mudou:', activeInfo.tabId);
});

// Listener para atualizações de aba
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    console.log('Página carregada:', tab.url);
  }
});

// Listener para cliques no menu de contexto
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'bootcamp-helper') {
    console.log('Menu de contexto clicado em:', tab.url);
  }
});


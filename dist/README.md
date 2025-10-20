# 🚀 Bootcamp Helper - Extensão Chrome MV3

Uma extensão do Google Chrome desenvolvida seguindo as especificações do Manifest V3, criada como projeto do Bootcamp II.

## 📋 Descrição

O Bootcamp Helper é uma extensão educacional que demonstra as principais funcionalidades e boas práticas para desenvolvimento de extensões modernas do Chrome. A extensão inclui popup interativo, service worker, content script e sistema de storage local.

## ✨ Funcionalidades

- **Popup Interativo**: Interface moderna com design responsivo
- **Service Worker**: Processamento em background com comunicação bidirecional
- **Content Script**: Manipulação de DOM em páginas específicas (developer.chrome.com)
- **Storage Local**: Persistência de dados usando Chrome Storage API
- **Comunicação entre Componentes**: Sistema de mensagens entre popup, content script e background
- **Menu de Contexto**: Integração com menu do botão direito
- **Análise de Páginas**: Contagem automática de elementos nas páginas visitadas

## 🛠️ Tecnologias Utilizadas

- **Manifest V3** - Última versão das especificações de extensões do Chrome
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com Flexbox e Grid
- **JavaScript ES6+** - Lógica da aplicação
- **Chrome APIs** - storage, tabs, runtime, contextMenus

## 📦 Instalação

### Instalação Manual (Modo Desenvolvedor)

1. Baixe ou clone este repositório
2. Abra o Chrome e navegue para `chrome://extensions`
3. Ative o "Modo do desenvolvedor" no canto superior direito
4. Clique em "Carregar sem compactação"
5. Selecione a pasta `bootcamp-chrome-extension`
6. A extensão aparecerá na barra de ferramentas

### Download Direto

Baixe a versão empacotada (.zip) na seção [Releases](https://github.com/seu-usuario/bootcamp-chrome-extension/releases) do GitHub.

## 🎯 Como Usar

1. **Popup Principal**: Clique no ícone da extensão para abrir o popup
2. **Teste de Comunicação**: Use o botão "Ping background" para testar a comunicação com o service worker
3. **Content Script**: Visite [developer.chrome.com](https://developer.chrome.com) para ver o content script em ação
4. **Menu de Contexto**: Clique com o botão direito em qualquer página para ver o menu da extensão

## 📁 Estrutura do Projeto

```
bootcamp-chrome-extension/
├─ src/
│  ├─ popup/
│  │  ├─ popup.html          # Interface do popup
│  │  ├─ popup.js            # Lógica do popup
│  │  └─ popup.css           # Estilos do popup
│  ├─ content/
│  │  └─ content.js          # Script injetado nas páginas
│  ├─ background/
│  │  └─ service-worker.js   # Service worker principal
│  ├─ assets/                # Recursos adicionais
│  └─ styles/                # Estilos globais
├─ icons/
│  ├─ icon16.png            # Ícone 16x16
│  ├─ icon32.png            # Ícone 32x32
│  ├─ icon48.png            # Ícone 48x48
│  └─ icon128.png           # Ícone 128x128
├─ docs/
│  └─ index.html            # GitHub Pages
├─ manifest.json            # Configuração da extensão
├─ README.md               # Este arquivo
└─ LICENSE                 # Licença do projeto
```

## 🔐 Permissões

A extensão utiliza as seguintes permissões seguindo o princípio do menor privilégio:

- `storage` - Para armazenamento local de dados
- `tabs` - Para interação com abas do navegador
- `contextMenus` - Para menu de contexto
- `host_permissions` - Para acesso a páginas web específicas

## 🧪 Desenvolvimento

### Pré-requisitos

- Google Chrome 114+
- Editor de código (VS Code recomendado)
- Conhecimento básico de HTML, CSS e JavaScript

### Testando Localmente

1. Faça alterações no código
2. Vá para `chrome://extensions`
3. Clique no botão "Recarregar" da extensão
4. Teste as funcionalidades

### Debug

- **Popup**: Clique com botão direito no popup → "Inspecionar"
- **Background**: Vá para `chrome://extensions` → "Visualizações de serviço" → "service worker"
- **Content Script**: Use DevTools da página onde o script está ativo

## 📊 Funcionalidades Detalhadas

### Popup
- Interface responsiva e moderna
- Comunicação com service worker
- Exibição de informações da extensão
- Animações e feedback visual

### Service Worker
- Gerenciamento de eventos de instalação
- Sistema de mensagens
- Monitoramento de abas
- Criação de menus de contexto

### Content Script
- Destaque de links em páginas específicas
- Banner informativo
- Análise de conteúdo da página
- Comunicação com background script

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🎓 Sobre o Bootcamp

Este projeto foi desenvolvido como parte do Bootcamp II, demonstrando:

- Conhecimento das APIs do Chrome
- Boas práticas de desenvolvimento
- Estruturação de projetos
- Documentação técnica
- Versionamento com Git

## 📞 Suporte

Se você encontrar algum problema ou tiver sugestões:

1. Verifique as [Issues](https://github.com/seu-usuario/bootcamp-chrome-extension/issues) existentes
2. Crie uma nova issue se necessário
3. Forneça detalhes sobre o problema e passos para reproduzi-lo

## 🔗 Links Úteis

- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Migration Guide](https://developer.chrome.com/docs/extensions/migrating/)
- [Chrome APIs Reference](https://developer.chrome.com/docs/extensions/reference/)

---

Desenvolvido com ❤️ para o Bootcamp II


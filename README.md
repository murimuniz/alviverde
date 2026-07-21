# Alvi-Verde Futebol Clube — Proposta de Redesign

Protótipo de redesign do site do Alvi-Verde Futebol Clube (Vila Romana, São Paulo). Site estático, sem dependências de build — HTML, CSS e JS puros, todos os arquivos na raiz.

## Estrutura

```
index.html
style.css
script.js
README.md
.gitignore
```

## Como subir no GitHub (substituindo os arquivos atuais do repositório)

1. Entre no seu repositório no GitHub.
2. Apague os arquivos antigos `index.html`, `style.css` (ou `estilo.css`) e `script.js`, se já existirem — ou simplesmente suba estes por cima, com **exatamente estes nomes**: `index.html`, `style.css`, `script.js`.
3. Clique em **Add file → Upload files**.
4. Arraste os 5 arquivos desta pasta (não uma pasta mãe, os arquivos soltos mesmo).
5. Confirme que a lista de upload mostra: `index.html`, `style.css`, `script.js`, `README.md`, `.gitignore` — todos sem estar dentro de nenhuma subpasta.
6. Clique em **Commit changes**.

## Ativar o GitHub Pages

**Settings → Pages → Source: Deploy from a branch → Branch: main → Folder: / (root) → Save**

O site fica em:
```
https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/
```

Depois de qualquer commit nesses arquivos, espera de 30s a 2min e recarregue com Ctrl+Shift+R (ou aba anônima) pra garantir que não é cache antigo.

## Observações

- As fotos usadas ainda apontam para o domínio do Wix do site atual do clube. Se for pra frente com o projeto, baixe essas imagens e sirva localmente (ex: pasta `img/`).
- O formulário de contato é só front-end — precisa de um serviço tipo Formspree ou EmailJS pra enviar de verdade.
- O mapa usa um embed público do Google Maps, sem necessidade de chave de API.

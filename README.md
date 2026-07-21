# Alvi-Verde Futebol Clube — Proposta de Redesign

Protótipo de redesign do site do Alvi-Verde Futebol Clube (Vila Romana, São Paulo), feito para apresentação ao cliente. Site estático, sem dependências de build — HTML, CSS e JS puros.

## Estrutura

```
alviverde-site/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
└── README.md
```

## Rodar localmente

Não precisa de instalação. Basta abrir o `index.html` no navegador, ou servir a pasta com qualquer servidor estático, por exemplo:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex: `alviverde-redesign`).
2. Suba os arquivos desta pasta para a raiz do repositório:

   ```bash
   git init
   git add .
   git commit -m "Primeira versão do redesign"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/alviverde-redesign.git
   git push -u origin main
   ```

3. No repositório, vá em **Settings → Pages**.
4. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
5. Salve. Em alguns minutos o site estará no ar em:
   `https://SEU-USUARIO.github.io/alviverde-redesign/`

## Observações

- As fotos usadas são as mesmas do site atual do clube (hospedadas no Wix). Se o projeto for pra frente, o ideal é baixar essas imagens e servi-las localmente (pasta `assets/img/`) em vez de depender do domínio do Wix.
- O formulário de contato é só front-end (não envia e-mail de verdade ainda) — precisa de um serviço tipo Formspree, EmailJS, ou um backend simples para funcionar em produção.
- O mapa usa um embed público do Google Maps, sem necessidade de chave de API.

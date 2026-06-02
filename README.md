# Maiury Fernandes | Portfolio

Portfólio pessoal de Maiury Fernandes, estudante de Ciência da Computação na UESC, com foco em Engenharia de Software, Inteligência Artificial aplicada, Realidade Virtual e Cloud.

A página apresenta minha trajetória acadêmica e técnica, projetos em destaque, áreas de interesse, habilidades e formas de contato.

## Acesse

[https://maiury.github.io/maiury-portfolio/](https://maiury.github.io/maiury-portfolio/)

## Sobre o Projeto

Este portfólio foi construído como uma single-page application com React e Vite. O conteúdo fica centralizado em um arquivo de dados, facilitando atualizações de textos, links, imagens, projetos e contatos sem precisar alterar toda a estrutura da interface.

Principais seções:

- Início com apresentação profissional
- Sobre mim e trajetória na tecnologia
- Áreas de interesse: Engenharia de Software, IA, VR/AR, Cloud, Segurança e Pesquisa com impacto social
- Projetos em destaque, incluindo Guia Cacau e Guia Cacau com RAG
- Habilidades técnicas e competências
- Linha do tempo profissional
- Contato

## Tecnologias

- React
- Vite
- JavaScript
- Tailwind CSS via CDN
- GitHub Pages
- GitHub Actions

## Como Rodar Localmente

```bash
npm install
npm run dev
```

Depois abra:

```txt
http://localhost:5173
```

## Como Editar o Conteúdo

Os textos, links, imagens, projetos, habilidades e informações de contato ficam em:

```txt
src/content.js
```

Para atualizar o portfólio, edite esse arquivo e depois rode o projeto localmente para conferir as mudanças.

## Build de Produção

```bash
npm run build
```

O Vite gera os arquivos finais na pasta:

```txt
dist
```

## Deploy

O deploy está configurado com GitHub Actions para publicar automaticamente no GitHub Pages quando houver push na branch `main`.

No GitHub, a configuração recomendada é:

```txt
Settings > Pages > Build and deployment > Source: GitHub Actions
```

A base do Vite está configurada em `vite.config.js` para o caminho do repositório:

```js
base: '/maiury-portfolio/'
```

## Estrutura Principal

```txt
src/
  App.jsx       # Estrutura visual da página
  content.js    # Conteúdo editável do portfólio
  index.css     # Estilos globais
  main.jsx      # Entrada da aplicação React
public/
  favicon.svg
  icons.svg
.github/workflows/
  deploy.yml    # Workflow de deploy no GitHub Pages
```

## Objetivo

Este projeto funciona como minha apresentação profissional online, reunindo minha evolução em tecnologia, meus interesses de pesquisa e desenvolvimento, e os projetos que conectam programação, IA, ambientes imersivos e impacto social.

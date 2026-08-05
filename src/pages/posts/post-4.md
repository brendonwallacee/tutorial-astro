---
layout: ../../layouts/MarkdownPostLayout.astro
title: Minha Quarta Postagem no Blog
author: Brendon Wallace
description: "Esta postagem irá aparecer por si mesma!"
image:
    url: "https://docs.astro.build/default-og-image.png"
    alt: "A palavra astro acima de uma ilustração de planetas e estrelas."
pubDate: 05/08/2026
tags: ["astro", "sucessos"]
---
Esta postagem deve aparecer junto das minhas outras postagens do blog, pois `Object.values(import.meta.glob("./posts/*.md", { eager: true }))` está retornando uma lista de todas as minhas postagens para criar minha lista.
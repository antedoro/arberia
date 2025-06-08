---
title: Landingpage
subtitle: Insert a subtitle here
date: 2022-05-20T21:26:12+02:00
lastmod: 2022-05-20T21:26:12+02:00
draft: false
weight: null 
type:  landingpage # Nothing for default, or video 

author: author
authorLink: ""
description: Insert description here. This don't affects subtitle but only html internals

tags:
- tag1
- tag2
- tag3
- tag4
categories:
- category

hiddenFromHomePage: true
hiddenFromSearch: true

resources:
- name: featured-image
  src: image.webp

featured: false
sidebar: false
toc: true
math:
enable: false
lightgallery: false
license: ""
slug: landingpage
---

<style>
    #moving-text-container {
        overflow: hidden;
        padding: 20px 0;
        background-color: #f0f0f0;
        border-radius: 5px;
        margin: 20px 0;
    }
    #moving-text {
        white-space: nowrap;
        color: #333;
        font-size: 24px;
        font-family: Arial, sans-serif;
        position: relative;
    }
</style>

<body>
<div id="moving-text-container">
    <div id="moving-text">
        This is a landing page with some moving text script
    </div>
</div>

<script>
    const text = document.getElementById('moving-text');
    const container = document.getElementById('moving-text-container');
    let position = container.offsetWidth;

    function moveText() {
        position--;
        if (position < -text.offsetWidth) {
            position = container.offsetWidth;
        }
        text.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(moveText);
    }

    moveText();
</script>
</body>



## La Divina Commedia incipit by Dante Alighieri

Nel mezzo del cammin di nostra vita
mi ritrovai per una selva oscura,
ché la diritta via era smarrita.

Ahi quanto a dir qual era è cosa dura
esta selva selvaggia e aspra e forte
che nel pensier rinova la paura!

Tant’è amara che poco è più morte;
ma per trattar del ben ch’i’ vi trovai,
dirò de l’altre cose ch’i’ v’ ho scorte.

Io non so ben ridir com’i’ v’intrai,
tant’era pien di sonno a quel punto
che la verace via abbandonai.

Ma poi ch’i’ fui al piè d’un colle giunto,
là dove terminava quella valle
che m’avea di paura il cor compunto,

guardai in alto e vidi le sue spalle
vestite già de’ raggi del pianeta
che mena dritto altrui per ogne calle.

Allor fu la paura un poco queta,
che nel lago del cor m’era durata
la notte ch’i’ passai con tanta pieta. 

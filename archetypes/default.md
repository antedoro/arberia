---
title: "{{ replace .Name "-" " " | title }}"
subtitle: "Insert a subtitle here"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
type:  # Use standard-view on nothing for default or courses - video - landingpage null for list view
weight: null 

featured: false
sidebar: false # Works only with standard-view
toc: true # Works only with standard-view
math:
  enable: false # Actualy not implemented
lightgallery: false # Actualy not implemented
license: ""
slug:  # slug exemple: solidworks-2020-tutorial

hiddenFromHomePage: false
hiddenFromSearch: false # da implementare

author: "author"
avatar: /img/me.jpg  # link to avatar file
authorLink: ""
description: "Descrizione da rivedere se è un doppione subtitle"

tags:
  - tag1
  - tag2
  - tag3
  - tag4
categories:
  - category

# resources:
#   - name: featured-image
#     src: featured-image.png

resources:
- name: "featured-image"
  src: "Real-Python-Learning-Paths_Watermarked.webp"
- name: "featured-image-preview"
  src: "Real-Python-Learning-Paths_Watermarked.webp"


# If its a video post compile below
video:
  title: "YouTube Video Title"
  link: # YouTube Video Link for example: https://www.youtube.com/embed/taxItkTlY_0
  duration: # Example 14:16

playlist:
  item:
    - title: "YouTube Video Title"
      icon: fa fa-fw fa-play
      link:  # YouTube Video Link for example: https://www.youtube.com/embed/taxItkTlY_0
      duration: # Example 14:16
    - title: "YouTube Video Title"
      icon: far fa-circle
      link: # YouTube Video Link for example: https://www.youtube.com/embed/taxItkTlY_0
      duration: # Example 4:42
---
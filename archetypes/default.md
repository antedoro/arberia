---
title: "{{ replace .Name "-" " " | title }}"
subtitle: "Insert a subtitle here"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
type:  # Use standard-view or nothing for default or - cover-view - video - landingpage null for list view
weight: null 

featured: false
sidebar: false # Works only with standard-view
toc: false # Works only with standard-view
math:
  enable: false # Actualy not implemented
lightgallery: false # Actualy not implemented
license: ""
slug:  # slug exemple: solidworks-2020-tutorial

hiddenFromHomePage: false
hiddenFromSearch: false # da implementare
hiddenMetaTag: false # Set to false to hide author, publish date, and tags

author: "Insert author"
avatar: /img/me.png  # link to avatar file
authorLink: ""
description: "A short description"

tags:
  - tag1
  - tag2
  - tag3
  - tag4
categories:
  - category

resources:
- name: "featured-image"
  src: "featured-image.webp"
- name: "featured-image-preview"
  src: "featured-image.webp"

# If its a video post compile below
video:
  title: "YouTube Video Title"
  link: # YouTube Video Link for example: https://www.youtube.com/embed/"+videonumber"
  duration: # Example 14:16

playlist:
  item:
    - title: "YouTube Video Title"
      icon: fa fa-fw fa-play
      link:  # YouTube Video Link for example: https://www.youtube.com/embed/"+videonumber"
      duration: # Example 14:16
    - title: "YouTube Video Title"
      icon: fa fa-circle
      link: # YouTube Video Link for example: https://www.youtube.com/embed/"+videonumber"
      duration: # Example 4:42
---
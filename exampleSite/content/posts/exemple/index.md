---
title: Exemple
subtitle: Insert a subtitle here
date: 2022-07-07T22:08:01+02:00
lastmod: 2022-07-07T22:08:01+02:00
draft: true
weight: null
type: # Nothing for default, or video 
  null

author: author
authorLink: ""
description: Descrizione da rivedere se è un doppione subtitle

tags:
  - tag1
  - tag2
  - tag3
  - tag4
categories:
  - category

hiddenFromHomePage: false
hiddenFromSearch: false

resources:
  - name: featured-image
    src: Monthly-Python-News_Blue_Watermarked.png

featured: false
sidebar: true
toc: false
math:
  enable: false
lightgallery: false
license: ""
slug: exemple
---

The following is a code sample using the "highlight" shortcode provided in Hugo. This is server side highlighting and requires Python and Pygments to be installed.

{{< highlight javascript >}}
    var num1, num2, sum
    num1 = prompt("Enter first number")
    num2 = prompt("Enter second number")
    sum = parseInt(num1) + parseInt(num2) // "+" means "add"
    alert("Sum = " + sum)  // "+" means combine into a string
{{</ highlight >}}
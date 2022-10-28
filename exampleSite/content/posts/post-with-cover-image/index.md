---
title: Post with Cover Image
subtitle: Insert a subtitle here
date: 2022-07-06T21:08:01+02:00
lastmod: 2022-07-06T21:08:01+02:00
draft: false
weight: null
type: cover-view

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
    src: post-with-cover.webp

featured: false
sidebar: true
toc: false
math:
  enable: false
lightgallery: false
license: ""
slug: post-with-cover-image
---

The following is a code sample using the "highlight" shortcode provided in Hugo. This is server side highlighting and requires Python and Pygments to be installed.

{{< highlight javascript >}}
    var num1, num2, sum
    num1 = prompt("Enter first number")
    num2 = prompt("Enter second number")
    sum = parseInt(num1) + parseInt(num2) // "+" means "add"
    alert("Sum = " + sum)  // "+" means combine into a string
{{</ highlight >}}

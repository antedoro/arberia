---
title: Extended Shortcode
subtitle: Specific theme shortcode
date: 2022-08-03T10:53:18+02:00
lastmod: 2022-08-03T10:53:18+02:00
draft: false
weight: 940

author: author name
authorLink: /about
avatar: /img/me.png
description: 

tags:
  - shortcode
  - hugo
categories:
  - theme-usage

hiddenFromHomePage: false
hiddenFromSearch: false

resources:
  - name: featured-image
    src: extended-shortcodes.webp

type: # Nothing for default, or video 
  null
featured: false
sidebar: true
toc: true
math:
  enable: false
lightgallery: false
license: ""
slug: extended-shortcode
---

**Arberia Theme** provides multiple built-in shortcodes for author convenience and to keep your markdown content clean. To expand your possibility this is an example list of all provided shortcodes.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
## Alert

Shortcode to inset varius alert on markdown post use this code:

```markdown
{{</* alert-info "[**Click here to get an example of info alert**](https://antedoro.it/) followed in this tutorial."*/>}}
{{</* alert-success "[**Click here to get an example of info alert**](https://antedoro.it/) followed in this tutorial."*/>}}
{{</* alert-warning "[**Click here to get an example of info alert**](https://antedoro.it/) followed in this tutorial."*/>}}
{{</* alert-danger "[**Click here to get an example of info alert**](https://antedoro.it/) followed in this tutorial."*/>}}
{{</* alert-dark "[**Click here to get an example of info alert**](https://antedoro.it/) followed in this tutorial."*/>}}
```

{{< alert-info "[**Click here to get an example of info alert**](https://antedoro.it/) followed in this tutorial.">}}

{{< alert-success"[**Click here to get an example of success alert**](https://antedoro.it/) followed in this tutorial.">}}

{{< alert-warning"[**Click here to get an example of warning alert**](https://antedoro.it/) followed in this tutorial.">}}

{{< alert-danger"[**Click here to get an example of danger alert**](https://antedoro.it/) followed in this tutorial.">}}

{{< alert-dark "[**Click here to get an example of dark alert**](https://antedoro.it/) followed in this tutorial.">}}

## List Element

{{< list-element  title="Who I am?"  link="/about/" photo="featured-image.png" summary="My name is Vincenzo Antedoro. I was born and grew up in south of Italy. In my challenge of creativity, I was ispired from near ancient greek culture and mediterranean in general.">}}

## Gallery

{{< gallery dir= "img" >}}

## Image

{{< image "artwork.webp" "Caption">}} 

## Video 

To embed a video from YouTube, use the built-in `youtube` shortcode with the video ID.

```markdown
{{</* youtube taxItkTlY_0 */>}}
```

{{< youtube taxItkTlY_0 >}}

To embed a local video file (e.g., an `.mp4` file), place the video in the same folder as your `index.md` file (as a Page Bundle) and use the custom `video` shortcode.

```markdown
{{</* video src="Test_Jellyfin_1080p_AVC_3M.mp4" */>}}
```

{{< video src="Test_Jellyfin_1080p_AVC_3M.mp4" >}}

## Playlist of videos

{{< playlist >}}

## Collapsable FAQ Menu

{{< faq question="What time is it?" answer="Office Hours is a weekly Zoom-based online hangout with experts from the Real Python Team, where you can get help and discuss your Python questions with us and other community members. If you want to join, you can register at the link above to get a Zoom link." >}}

{{< faq question="Hoew do I join?" answer="Office Hours are available to all Real Python Members. Just click the button above under Upcoming Events where you can sign up for the next event." >}}

{{< faq question="How often I can partecipate?" answer="As often as you want! We have several regulars that come every week!" >}}

{{< faq question="Do I have to say everithing??" answer="No, you’re more than welcome to join even if you just want to listen and leave your camera and microphone turned off. If you have a question you can ask it via Zoom’s text-based chat or post it in the #office-hours channel in the RP Community Slack." >}}

## Downlodable File Link

{{< download_file "file.pdf" "1.3 MB" >}}

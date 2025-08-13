---
title: "Arberia Features"
subtitle: "Learn About All Features in Arberia Theme"
date: 2022-07-28T10:53:18+02:00
lastmod: 2022-07-28T10:53:18+02:00
draft: false
type:  # Use standard-view on nothing for default or courses - video - landingpage null for list view
weight: 20 

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
avatar: /img/me.png  # link to avatar file
authorLink: ""
description: "Descrizione da rivedere se è un doppione subtitle"

tags:
  - features
  - update
categories:
  - arberia_theme

# resources:
#   - name: featured-image
#     src: featured-image.png

resources:
- name: "featured-image"
  src: "arberia-features.webp"
- name: "featured-image-preview"
  src: "arberia-features.webp"


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

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

### Intro

- **We'll be using `toml` format for all examples down below, I recommend using `toml` as it is easier to read.**

- You can find any [YML to TOML](https://www.google.com/search?q=yml+to+toml) converters if necessary.

---

### Assets (js/css)

The following is enabled by default

- [minification](https://gohugo.io/hugo-pipes/minification/) - makes the assets size smallest as possible.
- [bundling](https://gohugo.io/hugo-pipes/bundling/) - bundles all the styles in one single asset
- [fingerprint/intergity](https://gohugo.io/hugo-pipes/fingerprint/) check.

---

### Search Page

PaperMod uses [flexsearch.js](https://github.com/nextapps-de/flexsearch) for search functionality

Add the following to site config, `config.toml`

```toml
[outputs]
  home = ["HTML", "JSON", "RSS", "AMP"] # is necessary
  page = ["HTML"]
  section = ["HTML", "RSS"]
  taxonomy = ["HTML", "RSS"]
```

Create a page with `search/_index.md` in `content` directory with following content

```toml
---
title: Search
subtitle: Search index
date: 2022-04-26T21:28:23+02:00
lastmod: 2022-04-27T21:28:23+02:00
draft: false
weight: 

type: search #is necessary
layout: "search" #is necessary

categories:
  - search

hiddenFromHomePage: true
hiddenFromSearch: true

resources:
  - name: featured-image
    src: ""
  - name: featured-image-preview
    src: ""

featured: false
sidebar: false
toc: false
math:
  enable: false
lightgallery: false
license: ""
slug: search
---


<!-- To hide a particular page from being searched, add it in post's frontmatter

```yml
---
searchHidden: true
``` -->


### Draft Page indication

adds `[draft]` mark to indicate draft pages.

---

### Post Cover Image

In post's page-variables add :

```toml
resources:
- name: "featured-image"
  src: "insert image path here"
- name: "featured-image-preview"
  src: "insert image path here"
```

When you include images in the [Page Bundle](https://gohugo.io/content-management/page-bundles/), multiple sizes of the image will automatically be provided using the HTML5 `srcset` field.

To reduce generation time and size of the site, you can disable this feature using

```toml
[params.resources]
responsiveImages = false

```

To enable hyperlinks to the full image size on post pages, use

```toml
[params.resources]
linkFullImages = true
```

---

### Share Buttons on post

Displays Share Buttons at Bottom of each post

to show share buttons add in config/params.toml

```toml
[social.share]
    enable = true
```
---

### Show Table of Contents (Toc) on blog post

Displays ToC on blog-pages

To show ToC add following to page-variables

```tolm
toc: true # Works only with standard-view
```
---

### Comments

<!-- to add comments, create a html file

`layouts/partials/comments.html`

and paste code provided by your comments provider

also in config add this

```yml
params:
  comments: true
```

read more about this [hugo-comments](https://gohugo.io/content-management/comments/) -->

---

### Enhanced SEO

<!-- **Enabled only when `env: production`**

- [Rich Results/Snippets Support](https://support.google.com/webmasters/answer/7506797?hl=en) -->

#### Twitter Cards Support

<!-- * The Twitter Cards metadata, except ``twitter:image`` should not require
  additional configuration, since it is generated from metadata that
  you should already have (for instance the page title and description).
* The ``twitter:image`` uses the [Post Cover Image](#post-cover-image), if present.
* In the absence of a cover images, the first image from the ``images``
  frontmatter (a list) is used.
  ```yaml
  images:
    - image_01.png
    - image_02.png
  ```
* Finally, if neither of those are provided, ``twitter:image`` comes from the first
  [Page Bundle](https://gohugo.io/content-management/page-bundles/)
  image with ``feature`` in the name, with a fallback to the first image with
  ``cover`` or ``thumbnail`` in the name. -->

#### OpenGraph support

<!-- * The OpenGraph metadata, except ``og:image`` should not require
  additional configuration, since it is generated from metadata that
  you should already have (for instance the page title and description).
* The ``og:image`` uses the [Post Cover Image](#post-cover-image), if present.
* In the absence of a cover images, the first image from the ``images``
  frontmatter (a list) is used.
  ```yaml
  images:
    - image_01.png
    - image_02.png
  ```
* Finally, if neither of those are provided, ``og:image`` comes from the first
  [Page Bundle](https://gohugo.io/content-management/page-bundles/)
  image with ``feature`` in the name, with a fallback to the first image with
  ``cover`` or ``thumbnail`` in the name.
* For pages, you can also add audio (using frontmatter ``audio: filename.ext``) and/or
  videos.
  ```yaml
  videos:
    - filename01.mov
    - filename02.avi -->
  ```
---

### Multilingual Support

---

### Misc

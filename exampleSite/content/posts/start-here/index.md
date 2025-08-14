---
weight: 870
title: Start Here
subtitle: Arberia Theme is a fully responsive tech-blogger theme for Hugo with 4 single post and 2 list layout!! 
date: 2022-07-30T10:53:18+02:00
lastmod: 2022-07-30T10:53:18+02:00
draft: false
type: standard-view

author: author name
authorLink: /about
avatar: /img/me.png
description: 

tags:
  - installation
  - features
categories:
  - arberia

hiddenFromHomePage: false
hiddenFromSearch: false

resources:
  - name: featured-image
    src: start-here.webp

featured: true
sidebar: true
toc: false
math:
  enable: false
lightgallery: false
license: ""
slug: start-here
---

**Arberia Theme** is a theme for the Hugo for tech blogger with 4 single post layout and 2 list layout!


Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

<!--more-->

## Features

- **Responsive layout**
- **3 Single post view:**
  - **Post view with sidebar**
  - **Post view without sidebar**
  - **Post view with cover image**
  - **Video post view**
- **2 List post view:**
  - **List posts**
  - **Grid posts**
- **Landing page**
- **List Cathegory/Tag view**
- **Icon colored submenu**
- **Table of Contents**
- **Search** supported by [Flexsearch.js](https://github.com/nextapps-de/flexsearch)
- **[Google Analytics](https://analytics.google.com/analytics)** supported
- **[Disqus](https://disqus.com)** comment system
- Social-Media Share buttons on posts
- Multilingual support. (not yet implemented!)
- Uses Hugo's asset generator with pipelining, fingerprinting, bundling and minification by default (No webpack, nodejs and other dependencies are required to edit the theme.

## Installation/updating

*Before starting, please be sure that you have
[installed Hugo](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo) and
[created a new site](https://gohugo.io/getting-started/quick-start/#step-2-create-a-new-site). After that, you are ready to install **Arberia**.*

There are two mode:

a) Simple mode: **Download as Zip** from Github Page **and extract in your themes directory** or

b) Or you can add it as a git submodule via the following command: 

    $ cd themes
    $ git submodule add https://github.com/antedoro/arberia.git arberia
    

Next, open `config.toml` in the base of the Hugo site and ensure the theme option is set to `arberia`:

```
theme = "arberia"
```

To update theme installed in b mode:

    cd themes/arberia
    git pull

## Configuration

### Config.toml example

```toml
title = "Arberia Theme"
baseURL = "https://arberiatheme.netlify.app/"
relativeURLs = "True"
languageCode = "en-us"
defaultContentLanguage = 'en'
theme = "arberia"
```

### Front Matter example

```yaml
---
title: "Insert title here"
subtitle: "Insert a subtitle here"
date: 2020-10-15T20:58:53+02:00
lastmod: 2020-10-15T20:58:53+02:00
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
avatar: /img/me.png  # link to avatar file
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
```

For more information about all available standard front matter variables, please read
[Hugo Front Matter](https://gohugo.io/content-management/front-matter).

## Contributing

Have you found a bug or got an idea for a new feature? Feel free to use the
[issue tracker](https://github.com/antedoro/arberia/issues) to let me know. Or make directly a
[pull request](https://github.com/antedoro/arberia//pulls).

## License

This theme is released under the [GPLv2 license](https://github.com/antedoro/arberia/blob/master/LICENSE).

## FAQs / How To's Guide

Read Wiki For More Details => 

## Release Changelog

Release ChangeLog has info about stuff added: **[Releases](https://github.com/antedoro/arberia/releases)**

## Special Thanks

- [**flexsearch.js**](https://github.com/nextapps-de/flexsearch)
- [**mark.js**](https://github.com/julmot/mark.js)
- **All Contributors and Supporters**
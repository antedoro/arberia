# Arberia Theme for Hugo

**Arberia Theme** is a theme for the Hugo static site generator inspired from RealPython site.

![Arberia Theme Screenshot](https://github.com/antedoro/arberia/blob/master/static/img/screenshot.png)

The goal of this project is to add more features and customization to the og theme.

## Live demo

See [https://arberiatheme.netlify.app/](https://arberiatheme.netlify.app/)

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
- **Search** supported by [Flexbox.js](flexbox.js)
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
baseURL = "https://exampleSite.com/"
relativeURLs = "True"
languageName = "En"
languageCode = "en-us"
theme = "arberia"
```

### Front Matter example

```yaml
---
weight: 1
title: Insert title here
subtitle: Subtitle
date: 2020-10-15T20:58:53+02:00
lastmod: 2020-10-15T20:58:53+02:00
draft: false
type: standard-view

author: athor name
authorLink: ""
description: ""

tags:
  - tag1
  - tag2
categories:
  - cathegory1

hiddenFromHomePage: false
hiddenFromSearch: false

resources:
  - name: featured-image
    src: featured-image.webp

featured: true
sidebar: true
toc: true

license: ""
slug: slug here if necessary
---
```

For more information about all available standard front matter variables, please read
[Hugo Front Matter](https://gohugo.io/content-management/front-matter).

## Contributing

Have you found a bug or got an idea for a new feature? Feel free to use the
[issue tracker](https://github.com/Vimux/mainroad/issues) to let me know. Or make directly a
[pull request](https://github.com/Vimux/mainroad/pulls), but please respect the following
[contributing guide](https://github.com/Vimux/mainroad/blob/master/CONTRIBUTING.md).

## License

This theme is released under the [GPLv2 license](https://github.com/Vimux/mainroad/blob/master/LICENSE.md).

## FAQs / How To's Guide

Read Wiki For More Details => **[Arberia-FAQs]()**

## Release Changelog

Release ChangeLog has info about stuff added: **[Releases](https://github.com/antedoro/arberia/releases)**

## Special Thanks

- [**flexsearch.js**](https://github.com/nextapps-de/flexsearch)
- [**mark.js**](https://github.com/julmot/mark.js)
- **All Contributors and Supporters**

## Installation


### Front Matter example

```yaml
---
# Common-Defined params
title: "Example article title"
date: "2017-08-21"
description: "Example article description"
categories:
  - "Category 1"
  - "Category 2"
tags:
  - "Test"
  - "Another test"
menu: main # Optional, add page to a menu. Options: main, side, footer

# Theme-Defined params
thumbnail: "img/placeholder.png" # Thumbnail image
lead: "Example lead - highlighted near the title" # Lead text
comments: false # Enable Disqus comments for specific page
authorbox: true # Enable authorbox for specific page
pager: true # Enable pager navigation (prev/next) for specific page
toc: true # Enable Table of Contents for specific page
mathjax: true # Enable MathJax for specific page
sidebar: "right" # Enable sidebar (on the right side) per page
widgets: # Enable sidebar widgets in given order per page
  - "search"
  - "recent"
  - "taglist"
---
```

For more information about all available standard front matter variables, please read
[Hugo Front Matter](https://gohugo.io/content-management/front-matter).

## Contributing

Have you found a bug or got an idea for a new feature? Feel free to use the
[issue tracker](https://github.com/Vimux/mainroad/issues) to let me know. Or make directly a
[pull request](https://github.com/Vimux/mainroad/pulls), but please respect the following
[contributing guide](https://github.com/Vimux/mainroad/blob/master/CONTRIBUTING.md).

## License

This theme is released under the [GPLv2 license](https://github.com/Vimux/mainroad/blob/master/LICENSE.md).


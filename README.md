# Arberia Theme for Hugo

**Arberia Theme** is a theme for the Hugo for tech blogger with 4 single post layout and 2 list layout!

![Arberia Theme Screenshot](https://github.com/antedoro/arberia/blob/main/images/screenshot.png)


The goal of this project is to add more features and customization to the base theme.

## Live demo

See [https://arberiatheme.netlify.app/](https://arberiatheme.netlify.app/)

## Features

- **Responsive layout**
- **3 Single post view:**
  - Post view with sidebar
  - Post view without sidebar
  - Post view with cover image
  - Video post view
- **2 List post view:**
  - List posts
  - Grid posts
- **Landing page**
- **Icon colored submenu**
- List Cathegory/Tag view
- Table of Contents
- **Search** supported by [Flexsearch.js](https://github.com/nextapps-de/flexsearch)
- **[Google Analytics](https://analytics.google.com/analytics)** supported
- **[Disqus](https://disqus.com)** comment system
- Social-Media Share buttons on posts
- Multilingual support
- Uses Hugo's asset generator with pipelining, fingerprinting, bundling and minification by default (No webpack, nodejs and other dependencies are required to edit the theme.

## Installation/updating

**Important Notice for Theme Updates:**
> If you are upgrading from a previous version (e.g., 1.0.0) of the theme, please note that the configuration file structure has changed. The menu and footer links are now correctly placed inside the config/ directory at the root of your project. Additionally, some parameters have been updated.
> Refer to the exampleSite folder inside the theme directory for guidance and inspiration.

*Before starting, please be sure that you have
[installed Hugo](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo) and
[created a new site](https://gohugo.io/getting-started/quick-start/#step-2-create-a-new-site). After that, you are ready to install **Arberia**.*

There are two mode:

a) Simple mode: **Download as Zip** from Github Page **and extract in your themes directory** or

b) Or you can add it as a git submodule via the following command:

    git init
    cd themes
    git submodule add https://github.com/antedoro/arberia.git arberia
    
Next, copy the contents from themes/arberia/exampleSite to the site's root folder.
Copy the archetypes folder from themes/arberia/ to the site's root folder.

Open `config/_defaults/config.toml` folder and ensure the theme option is set to `arberia`:

```
theme = "arberia"
```

Now you can start hugo server and view the site:

```shell
hugo server -D
```

open browser and follow this link: [http://localhost:1313](http://localhost:1313)

**NOTE**
**To update theme installed:**

Run the following command from the root of your project:
```
    git submodule update --remote --merge
```

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

For more information about all available standard front matter variables, please read [Hugo Front Matter](https://gohugo.io/content-management/front-matter).

## Contributing

Have you found a bug or got an idea for a new feature? Feel free to use the [issue tracker](https://github.com/antedoro/arberia/issues) to let me know. Or make directly a [pull request](https://github.com/antedoro/arberia//pulls).

## License

This theme is released under the [MIT license](https://github.com/antedoro/arberia/blob/master/LICENSE).

## Release Changelog

Release ChangeLog has info about stuff added: **[Releases](https://github.com/antedoro/arberia/releases)**

## Special Thanks

- [**flexsearch.js**](https://github.com/nextapps-de/flexsearch)
- [**mark.js**](https://github.com/julmot/mark.js)
- **All Contributors and Supporters**

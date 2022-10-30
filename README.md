# Arberia Theme for Hugo

**Arberia Theme** is a theme for the Hugo static site generator inspired from RealPython site.

![Arberia Theme Screenshot](https://github.com/antedoro/arberia/blob/master/static/img/screenshot.png)

The goal of this project is to add more features and customization to the og theme.

## Live demo

See [https://arberiatheme.netlify.app/](https://arberiatheme.netlify.app/)

## Installation/updating

a) Simple mode: **Download as Zip** from Github Page **and extract in your themes directory** or

b) More dev mode: Inside the folder of your Hugo site, run:

    $ mkdir themes
    $ cd themes
    $ git submodule add https://github.com/antedoro/arberia.git arberia
    

After that copy /exampleSite content on /root_site and add in `config.toml`:

`theme: "arberia"`

    
To update theme installed in b mode:

```bash
cd themes/arberia
git pull
```

Follow [Quick Start](https://gohugo.io/getting-started/quick-start/) Hugo guide to have a full explanation.
    

## Features

### Appearance and Layout

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

---
## FAQs / How To's Guide

Read Wiki For More Details => **[Arberia-FAQs]()**

## Release Changelog

Release ChangeLog has info about stuff added: **[Releases](https://github.com/antedoro/arberia/releases)**

## Special Thanks

- [**flexsearch.js**](https://github.com/nextapps-de/flexsearch)
- [**mark.js**](https://github.com/julmot/mark.js)
- **All Contributors and Supporters**

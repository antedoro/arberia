---
weight: 1
title: Start Here
subtitle: Take your coding skills to the next level with Real Python’s accelerated study
  plans for beginner, intermediate, and advanced Python developers.
date: 2020-10-15T20:58:53+02:00
lastmod: 2020-10-15T20:58:53+02:00
draft: false
type: standard-view

author: Vincenzo Antedoro
authorLink: ""
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
toc: true
math:
  enable: false
lightgallery: false
license: ""
slug: start-here
---

# Arberia Theme - An adaptation of the Beautiful Jekyll theme

![Beautiful Hugo Theme Screenshot](https://github.com/halogenica/beautifulhugo/blob/master/images/screenshot.png)

## Live demo

See https://hugo-theme-beautifulhugo.netlify.app/

## Installation

    $ mkdir themes
    $ cd themes
    $ git submodule add https://github.com/halogenica/beautifulhugo.git beautifulhugo
    

See [the Hugo documentation](https://gohugo.io/themes/installing/) for more information.

## Extra Features

### Responsive

This theme is designed to look great on both large-screen and small-screen (mobile) devices.

### Syntax highlighting

This theme has support for either Hugo's lightning fast Chroma, or both server side and client side highlighting. See [the Hugo docs for more](https://gohugo.io/content-management/syntax-highlighting/).

### Disqus support

To use this feature, uncomment and fill out the `disqusShortname` parameter in `config.toml`.

### Google Analytics

To add Google Analytics, simply sign up to [Google Analytics](https://www.google.com/analytics/) to obtain your Google Tracking ID, and add this tracking ID to the `googleAnalytics` parameter in `config.toml`.

Note that the Google Analytics tracking code will only be inserted into the page when the site isn't served on Hugo's built-in server, to prevent tracking from local testing environments.

### Commit SHA on the footer

If the source of your site is in a Git repo, the SHA corresponding to the commit the site is built from can be shown on the footer. To do so, two site parameters `commit` has to be defined in the config file `config.toml`:

```
enableGitInfo = true
[Params]
  commit = "https://github.com/<username>/<siterepo>/tree/"
```

See at [vincenttam/vincenttam.gitlab.io](https://gitlab.com/vincenttam/vincenttam.gitlab.io) for an example of how to add it to a continuous integration system.

### Multilingual

To allow Beautiful Hugo to go multilingual, you need to define the languages
you want to use inside the `languages` parameter on `config.toml` file, also
redefining the content dir for each one. Check the `i18n/` folder to see all
languages available.

```toml
[languages]
  [languages.en] 
    contentDir = "content/en" # English
  [languages.ja]
    contentDir = "content/ja" # Japanese
  [languages.br]
    contentDir = "content/br" # Brazilian Portuguese
```

Now you just need to create a subdir within the `content/` folder for each
language and just put stuff inside `page/` and `post/` regular directories.
```
content/      content/      content/  
└── en/       └── br/       └── ja/ 
    ├── page/     ├── page/     ├── page/
    └── post/     └── post/     └── post/

```
 
### Extra shortcodes

There are two extra shortcodes provided (along with the customized figure shortcode):

#### Details

This simply adds the html5 detail attribute, supported on all *modern* browsers. Use it like this:

```
{{< details "This is the details title (click to expand)" >}}
This is the content (hidden until clicked).
{{< /details >}}
```

#### Split

This adds a two column side-by-side environment (will turn into 1 col for narrow devices):

```
{{< columns >}}
This is column 1.
{{< column >}}
This is column 2.
{{< endcolumns >}}
```

## About

This is an adaptation of the Hugo theme [Arberia](https://deanattali.com/beautiful-jekyll/) by [Vincenzo Antedoro](https://antedoro.it/contatti/). It supports most of the features of the original theme, and many new features. It has diverged from the Jekyll theme over time, with years of community updates.

## License

MIT Licensed, see [LICENSE](https://github.com/halogenica/Hugo-BeautifulHugo/blob/master/LICENSE).

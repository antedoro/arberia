---
title: Arberia Installation | Update
subtitle: Read Install and Update instructions here
date: 2022-07-27T10:53:18+02:00
lastmod: 2022-07-27T10:53:18+02:00
draft: false
type: # Use standard-view on nothing for default or courses - video - landingpage null for list view
  null
weight: 1000

featured: false
sidebar: true
toc: false
math:
  enable: false
lightgallery: false
license: ""
slug: arberia-installation-update

hiddenFromHomePage: false
hiddenFromSearch: false

author: author
avatar: /img/me.png
authorLink: ""
description: Descrizione da rivedere se è un doppione subtitle

tags:
  - installation
  - update
categories:
  - arberia_theme

# resources:
#   - name: featured-image
#     src: featured-image.png
resources:
  - name: featured-image
    src: arberia-installation.webp

# If its a video post compile below
video:
  title: YouTube Video Title
  link: null
  duration: null

playlist:
  item:
    - title: YouTube Video Title
      icon: fa fa-fw fa-play
      link: null
      duration: null
    - title: YouTube Video Title
      icon: far fa-circle
      link: null
      duration: null
---


Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

## Intro

- **We'll be using `yml/yaml` format for all examples down below, I recommend using `yml` over `toml` as it is easier to read.**
- You can find any [YML to TOML](https://www.google.com/search?q=yml+to+toml) converters if necessary.

---

## Guide

Follow [Quick Start](https://gohugo.io/getting-started/quick-start/) guide to setup {{< inTextImg url="https://raw.githubusercontent.com/gohugoio/hugoDocs/master/static/img/hugo-logo.png" height="14" >}} and create a new site.

> Note: Use -f to select yml format
>
> `hugo new site <name of site> -f yml`

Make sure you install latest version of **`hugo(>=0.101.0)`**.

After you have created a new site, at [Step 3](https://gohugo.io/getting-started/quick-start/#step-3-add-a-theme) follow the steps:

### Method 1

Inside the folder of your Hugo site, run:

```bash
git clone https://github.com/antedoro/Arberia.git themes/arberia --depth=1
```

**Note**: You may use ` --branch v5.0` to end of above command if you want to stick to specific release.

> Updating theme :
>
> ```bash
> cd themes/Arberia
> git pull
> ```

### Method 2

you can use as [submodule](https://www.atlassian.com/git/tutorials/git-submodule) with

```bash
git submodule add --depth=1 https://github.com/antedoro/Arberia.git themes/arberia
git submodule update --init --recursive # needed when you reclone your repo (submodules may not get cloned automatically)
```

**Note**: You may use ` --branch v5.0` to end of above command if you want to stick to specific release.

> Updating theme :
>
> ```bash
> git submodule update --remote --merge
> ```

### Method 3

Or you can Download as Zip from Github Page and extract in your themes directory

Direct Links: Not defined

<!-- - [Master Branch (Latest)](https://github.com/adityatelange/hugo-PaperMod/archive/master.zip)
- [v6.0](https://github.com/adityatelange/hugo-PaperMod/archive/v6.0.zip)
- [v5.0](https://github.com/adityatelange/hugo-PaperMod/archive/v5.0.zip)
- [v4.0](https://github.com/adityatelange/hugo-PaperMod/archive/v4.0.zip)
- [v3.0](https://github.com/adityatelange/hugo-PaperMod/archive/v3.0.zip)
- [v2.0](https://github.com/adityatelange/hugo-PaperMod/archive/v2.0.zip)
- [v1.0](https://github.com/adityatelange/hugo-PaperMod/archive/v1.0.zip) -->

### Finally ...

Add in `config/config.toml`:

```toml
theme: "arberia"
```
### Method 4

 - Install [Go programming language](https://go.dev/doc/install) in your operating system.

 - Intialize your own hugo mod
 
```
hugo mod init YOUR_OWN_GIT_REPOSITORY
```

 - Add Arberia in your `config/config.toml` file

```
module:
  imports:
  - path: github.com/adityatelange/Arberia
```
 - Update theme

```
hugo mod get -u
```

---

## Quick Links

-   ### [Papermod - Features](../papermod-features)

-   ### [Papermod - FAQs](../papermod-how-to)

-   ### [Papermod - Variables](../papermod-variables)

-   ### [Papermod - Icons](../papermod-icons)

-   ### [ChangeLog](https://github.com/adityatelange/hugo-PaperMod/releases)

---

## Sample `config.toml`

> **Example Site Structure is present here**: [exampleSite](https://arberiatheme.netlify.app/)

**Use appropriately**

```toml
title = "Arberia Theme"
baseURL = "https://arberiatheme.netlify.app/"
relativeURLs = "True"
languageCode = "en-us"
defaultContentLanguage = 'en'
theme = "arberia"


# To list the most relevant pages on the front page or similar, 
# you should use the site.Params.mainSections list instead of comparing 
# section names to hard-coded values like "posts" or "post".
# [params]
#   mainSections = ['posts',]

[taxonomies]
  tag = "tags"
  category = "categories"

[outputs]
  home = ["HTML", "JSON", "RSS", "AMP"]
  page = ["HTML"]
  section = ["HTML", "RSS"]
  taxonomy = ["HTML", "RSS"]

[markup]
  [markup.tableOfContents]
    startLevel = 2
    endLevel = 5
    ordered = false
    tocMinWordCount = 100 # Minimum word count to display the Table of Contents

[markup.goldmark.renderer] # Controllare cosa faccia
  unsafe = true

[permalinks]
  posts = "/:title/"

[minify]
  minifyOutput = true

enableRobotsTXT= true


############################# Plugins ##############################
# CSS Plugins
# [[params.plugins.css]]
# link = "css/Custom.css"
# [[params.plugins.css]]
# link = "https://pro.fontawesome.com/releases/v5.10.0/css/all.css"

# JS Plugins
# [[params.plugins.js]]
# link = "js/customJS.js"


# Generate favicon with https://realfavicongenerator.net/
# and copy favicon folder (name it facicon) to static/ folder
[assets]
  favicon = "favicon/favicon.ico"
  favicon16x16 = "favicon/favicon-16x16.png>"
  favicon32x32 = "favicon/favicon-32x32.png"
  apple_touch_icon = "favicon/apple-touch-icon.png"
  safari_pinned_tab = "favicon/safari-pinned-tab.svg"
  # safari_color = "18354c"
  # theme_color = "#18354c"
  # msapplication_TileColor = "#ffc40d"


######################################
#  Menu
# [[menu.main]]
# identifier = "home"
# pre = ""
# post = ""
# name = "Home"
# url = "/"
# title = ""
# weight = 1

[[menu.main]]
identifier = "portfolio"
pre = "fa fa-drafting-compass"
post = ""
name = "Portfolio"
url = "/portfolio"
title = ""
weight = 2


[[menu.main]]
identifier = "tutorial"
pre = "fa fa-graduation-cap"
post = ""
name = "Tutorial"
url = "#"
title = ""
weight = 3

[[menu.main]]
identifier = "list_view"
pre = "fa fa-list"
post = "Post list view of all posts"
name = "List View →"
url = "/posts/"
title = ""
weight = 4
parent = "tutorial"
[menu.main.params]
  color = "#ff7e73"

[[menu.main]]
identifier = "grid_view"
pre = "fa fa-th"
post = "Post grid view of all posts"
name = "Grid View →"
url = "/portfolio/"
title = ""
weight = 5
parent = "tutorial"
[menu.main.params]
  color = "#abe5b1"

[[menu.main]]
identifier = "post_view_sidebar"
pre = "fa fa-file-text-o"
post = "Single post view with sidebar"
name = "Single Post View With Sidebar"
url = "/post-with-sidebar/"
title = ""
weight = 6
parent = "tutorial"
[menu.main.params]
  color = "#ffc873"

[[menu.main]]
identifier = "post_view_no_sidebar"
pre = "fa fa-file-text-o"
post = "Single post view without sidebar"
name = "Single Post View Without Sidebar"
url = "/post-without-sidebar/"
title = ""
weight = 7
parent = "tutorial"
[menu.main.params]
  color = "#ffc873"

[[menu.main]]
identifier = "post_view_cover"
pre = "fa fa-picture-o"
post = "Single post view with cover image"
name = "Single Post View with Cover"
url = "/post-with-cover-image/"
title = ""
weight = 8
parent = "tutorial"
[menu.main.params]
  color = "#abe0e5"

[[menu.main]]
identifier = "video_post"
pre = "fa fa-film"
post = "Single post view of video post"
name = "Video Post"
url = "/solidworks-2020-tutorials/"
title = ""
weight = 9
parent = "tutorial"
[menu.main.params]
  color = "#abe0e5"

[[menu.main]]
identifier = "landinpage"
pre = "fa fa-star text-warning"
post = "Insert html on index.md file"
name = "Landing Page"
url = "/landingpage/"
title = ""
weight = 10
parent = "tutorial"
[menu.main.params]
  color = ""
  bordertop = true

[[menu.main]]
identifier = "books"
pre = ""
post = ""
name = "Libri"
url = "/libri"
title = ""
weight = 11

[[menu.main]]
identifier = "contact"
pre = ""
post = ""
name = "Contatti"
url = "/contatti/"
title = ""
weight = 12

[[menu.main]]
identifier = "about"
pre = ""
post = ""
name = "About "
url = "/about/"
title = ""
weight = 13


# [[menu.main]]
# identifier = "more"
# pre = ""
# post = ""
# name = "More"
# url = "/more/"
# title = ""
# weight = 10

# [[menu.main]]
# identifier = "python_newsletter"
# pre = ""
# post = ""
# name = "Python Newsletter"
# url = "/more/"
# title = ""
# weight = 11
# parent = "more"

# [[menu.main]]
# identifier = "python_podcast"
# pre = ""
# post = ""
# name = "Python Podcast"
# url = "/more/"
# title = ""
# weight = 11
# parent = "more"

# [[menu.main]]
# identifier = "python_job_board"
# pre = ""
# post = ""
# name = "Python Job Board →"
# url = "/more/"
# title = ""
# weight = 12
# parent = "more"


# Elenco colori da usare nel  menu 
			# "color: #ff7e73;
			# "color: #abe5b1;
			# "color: #abe0e5;
			# "color: #ffc873;
			# "color: #e5c6ab;
			# "color: #b8abe5; 

# Footer config
[footer]
enable = true
title = "||||"
greatings = "❤️ Happy Pythoning!"
  
[[menu.footer]]
  name = "Newsletter"
  link = "newsletter/"
  weight = 1

[[menu.footer]]
  name = "Podcast"
  link = "podcast/"
  weight = 2

[[menu.footer]]
  name = "Youtube"
  link = "youtube/"
  weight = 3

[[menu.footer]]
  name = "Twitter"
  link = "twitter/"
  weight = 4

[[menu.footer]]
  name = "Facebook"
  link = "facebook/"
  weight = 5

[[menu.footer]]
  name = "Instagram"
  link = "Instagram/"
  weight = 6

[[menu.footer]]
  name = "Python Tutorials"
  link = "python-tutorials/"
  weight = 7

[[menu.footer]]
  name = "Search"
  link = "search/"
  weight = 8

[[menu.footer]]
  name = "Privacy Policy"
  link = "privacy-policy/"
  weight = 9

[[menu.footer]]
  name = "Energy Policy"
  link = "energy-policy/"
  weight = 10

[[menu.footer]]
  name = "Contact"
  link = "contact/"
  weight = 11


############################# social site ########################
[[params.social]]
title = "medium"
icon = "fab fa-medium-m" # fontawesome icon : https://fontawesome.com/
link = "https://medium.com/@antedoro"

[[params.social]]
title = "facebook"
icon = "fab fa-facebook-f" # fontawesome icon : https://fontawesome.com/
link = "https://www.facebook.com/antedoroguitars"

[[params.social]]
title = "twitter"
icon = "fab fa-twitter" # fontawesome icon : https://fontawesome.com/
link = "https://twitter.com/AntedoroGuitars"

[[params.social]]
title = "instagram"
icon = "fab fa-instagram" # fontawesome icon : https://fontawesome.com/
link = "https://www.instagram.com/antedoroguitars/"

[[params.social]]
title = "pinterest"
icon = "fab fa-pinterest-p" # fontawesome icon : https://fontawesome.com/
link = "https://www.pinterest.it/antedoroguitars"

[[params.social]]
title = "telegram"
icon = "fab fa-telegram-plane" # fontawesome icon : https://fontawesome.com/
link = "https://telegram.me/antedoroguitars"
```

---

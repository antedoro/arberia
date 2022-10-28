---
weight: 1
title: Post with sidebar
subtitle: Take your coding skills to the next level with Real Python’s accelerated study
  plans for beginner, intermediate, and advanced Python developers.
date: 2020-10-15T20:58:53+02:00
lastmod: 2020-10-15T20:58:53+02:00
draft: false
type: standard-view

author: Vincenzo Antedoro
authorLink: ""
description: Abbiamo selezionato alcuni accesori indispensabili se decidi di acquistare un
  portabici per automobile

tags:
  - pippo
  - pluto
  - paperino
categories:
  - arberia

hiddenFromHomePage: false
hiddenFromSearch: false

resources:
  - name: featured-image
    src: post-with-sidebar.webp

featured: true
sidebar: true
toc: true
math:
  enable: false
lightgallery: false
license: ""
slug: post-sidebar
---

As a novice [web developer](https://antedoro.it), you’ve built your portfolio app and shared your code on GitHub. Perhaps, you’re hoping to attract technical recruiters to land your first programming job. 

Many coding bootcamp graduates are likely doing the same thing. To differentiate yourself from the crowd and boost your chances of getting noticed, you can start hosting your Django project online.

For a hobby Django project, you’ll want a hosting service that’s free of charge, quick to set up, user-friendly, and well-integrated with your existing technology stack. While GitHub Pages is perfect for hosting static websites and websites with JavaScript, you’ll need a web server to run your Flask or Django project.

There are a few major cloud platform providers operating in different models, but you’re going to explore Heroku in this tutorial. It ticks all the boxes—it’s free, quick to set up, user-friendly, and well-integrated with Django—and is the favorite cloud platform provider of many startups.

In this tutorial, you’ll learn how to:

- Take your Django project online in minutes
- Deploy your project to Heroku using Git
- Use a Django-Heroku integration library
- Hook your Django project up to a standalone relational database
- Manage the configuration along with sensitive data

To follow along, you can download the code and other resources by clicking the link below:

> **[Get Source Code](https://antedoro.it): Click here to get the companion Django project as well as snapshots of the individual steps** followed in this tutorial.
>

## Demo: What You’ll Build

You’re going to create a bare-bones Django project and deploy it to the cloud straight from the terminal. By the end, you’ll have a public and shareable link to your first Heroku app.

## Titolo di prova

Here’s a one-minute video demonstrating the necessary steps, from initializing an empty Git repository to viewing your finished project in the browser. Hang on and watch till the end for a quick preview of what you’re about to find in this tutorial:


In addition to the steps shown in the screencast above, you’ll find a few more later on, but this should be enough to give you a general idea about how you’ll be working with Heroku in this tutorial.

## Project Overview

This tutorial isn’t so much about building any particular project, but rather **hosting** one in the cloud using **Heroku**. While Heroku supports [various languages](https://antedoro.it) and web frameworks, you’ll stick to Python and Django. Don’t worry if you don’t have any Django projects on hand. The first step will walk you through scaffolding a new Django project to get you started quickly. Alternatively, you can use a ready-made sample project that you’ll find later.

Once you have your Django project ready, you’re going to sign up for a free Heroku account. Next, you’ll download a convenient command-line tool that will help you manage your apps online. As demonstrated in the screencast above, the command line is a quick way of working with Heroku. Finally, you’ll finish off with a deployed Django project hosted on your newly-configured Heroku instance. You can think of your final result as a placeholder for your future project ideas.

## Prerequisites

Before jumping ahead, make sure that you’re familiar with the basics of the Django web framework and that you’re comfortable using it to set up a bare-bones project.

> **Note:** If you’re more experienced with Flask than Django, then you can check out a similar tutorial about Deploying a Python Flask Example Application Using Heroku.

You should also have a Git client installed and configured so that you can interact conveniently with the Heroku platform from the command line. Finally, you should seriously consider using a virtual environment for your project. If you don’t already have a specific virtual environment tool in mind, you’ll find some options in this tutorial soon. 

### Sottotitolo

You should also have a Git client installed and configured so that you can interact conveniently with the Heroku platform from the command line. Finally, you should seriously consider using a virtual environment for your project. If you don’t already have a specific virtual environment tool in mind, you’ll find some options in this tutorial soon.

___


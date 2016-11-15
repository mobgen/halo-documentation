---
title: Android SDK - Installer Options
keywords: android, getting started, installer, options, halo
last_updated: November 15, 2016
tags: [core]
sidebar: android_sidebar
toc: false
permalink: android_core_installer_options.html
folder: android
---

In the install step of HALO there are many parameters that can be configured. Here is the list of items and what are their purposes:

- **config**: provides the configuration for the HALO framework so you can add some aditional behaviour or configuration on it.
- **credentials**: sets the credentials client id and secret. They are added with gradle by default.
- **debug**: sets the debug flag to see what is going behind the scenes in HALO. See also [the debug recipe](./android_core_debug.html).
- **endProcess**: adds a startup process that will be run during the installation process in HALO.
- **addTagCollector**: adds a tag collector that allows you to add some tags in the moment the app is initialized.
- **enableDefaultTags**: adds the halo default tags into the tag collectors. This was enabled by default some time ago but now it is optional.
- **environment**: sets the environment that will be used for the calls of halo.

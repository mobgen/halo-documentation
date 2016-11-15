---
title: Android SDK - Change Server Environment
keywords: android, middleware, requests, custom module
last_updated: November 15, 2016
tags: [core]
sidebar: android_sidebar
toc: false
permalink: android_core_environment.html
folder: android
---

Maybe you don't want to use HALO in the default production environment (<https://halo.mobgen.com>). To change the environment in which HALO is working on, you have to customize your installation process. See the example above:

```java
Halo.installer(context)
	.environment("https://halo-int.mobgen.com")
	.install();
```

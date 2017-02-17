---
title: Change Server Environment and the SSL pinning
keywords: android, middleware, requests, custom module
last_updated: November 15, 2016
tags: [core]
sidebar: android_sidebar
toc: false
permalink: android_core_environment.html
folder: android
---

## Change server environment

Maybe you don't want to use HALO in the default production environment (<https://halo.mobgen.com>). To change the environment in which HALO is working on, you have to customize your installation process. See the example above:

```java
Halo.installer(context)
	.environment("https://halo-int.mobgen.com")
	.install();
```

## Disable SSL pinning

Maybe you don't want to use the SSL pinning in the HALO SDK that is enabled by default. To disable pinning you have to customize your installation process. This is not recomended but could be interesting for development purposes. See the example above:

```java
Halo.installer(context)
	.environment("https://halo-int.mobgen.com")
	.disablePinning()
	.install();
```

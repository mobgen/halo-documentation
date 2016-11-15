---
title: Android SDK - Cloudinary Media Helper
keywords: android, cloudinary, media, helper, images
last_updated: November 15, 2016
tags: [core]
sidebar: android_sidebar
toc: false
permalink: android_core_cloudinary.html
folder: android
---

HALO uses the Cloudinary service to upload media files. We have added to our SDK a helper with the filtering options. Check the javadoc documentation to learn more about this helper.

Here we are providing an example to blur an image provided:

```java
HaloCloudinary.builder()
                .addEffects(HaloCloudinary.Effects.blur(100))
                .build("http://cloudinary.com/..."); //Cloudinary image url
```

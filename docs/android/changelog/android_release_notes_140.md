---
title: Android SDK - Changelog for 1.4.0
keywords: android, changelog, 1.4.0
last_updated: November 14, 2016
tags: [changelog]
sidebar: android_sidebar
toc: false
permalink: android_release_notes_140.html
folder: android
---

## SDK Changelog
- Performance improvements
- Plugin change to support new annotation processors
- Sdk dependency not needed anymore
- Parser has changed to logan square instead of gson for performance. Change your ```@SerializedName``` for ```@JsonField``` and add in your model ```@JsonObject```.

## Needed change
- Play services updated
```groovy
compile 'com.google.android.gms:play-services-gcm:9.0.0'
```
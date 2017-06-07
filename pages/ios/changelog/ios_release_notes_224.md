---
title: iOS Framework - Changelog for 2.2.4
keywords: ios, changelog, 2.2.4
last_updated: May 26, 2017
tags: [changelog]
sidebar: ios_sidebar
toc: false
permalink: ios_release_notes_224.html
folder: ios
---

## Changelog

### Core SDK

* Changed the visibility of two functions within the `HaloAppDelegate` 
```swift
open func application(_ app: UIApplication, open url: URL, options: [UIApplicationOpenURLOptionsKey : Any] = [:]) -> Bool
open func application(_ application: UIApplication, open url: URL, sourceApplication: String?, annotation: Any) -> Bool
```
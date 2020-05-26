---
title: 2.2.4
---

## Changelog

### Core SDK

* Changed the visibility of two functions within the `HaloAppDelegate` 
```swift
open func application(_ app: UIApplication, open url: URL, options: [UIApplicationOpenURLOptionsKey : Any] = [:]) -> Bool
open func application(_ application: UIApplication, open url: URL, sourceApplication: String?, annotation: Any) -> Bool
```
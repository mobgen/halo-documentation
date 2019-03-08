---
title: iOS Framework - Changelog for 2.2.3
keywords: ios, changelog, 2.2.3
last_updated: May 26, 2017
tags: [changelog]
sidebar: ios_sidebar
toc: false
permalink: ios_release_notes_223.html
folder: ios
---

## Changelog

### Core SDK

* Implemented the observer pattern in the `AuthManager` (`AuthManagerObserver`) to keep track of the automatic log in
```swift
@objc
public protocol AuthManagerObserver {
    func userDidLogIn(_ user: User)
    func userDidLogOut()
}
```
Observers can be managed using the new functions in the `AuthManager`:
```swift
public func addObserver(_ observer: AuthManagerObserver) -> Void 
public func removeObserver(_ observer: AuthManagerObserver) -> Void
```
* Added new function to the `ContentManager` to get the search instances result as raw data: 
```swift
func searchAsData(
	query: Halo.SearchQuery, 
	completionHandler handler: @escaping (HTTPURLResponse?, Halo.Result<Data>) -> Void
) -> Void
```
* Make publicly available the function in the `ContentManager` to remove the syn logs for a given module
```swift
public func clearSyncLog(moduleId: String) -> Void
```
* Added a new helper function to the `ContentInstance` to directly set a value for a given key
```swift
open func setValue(key: String, value: Any?) -> Void
```
* Make sure parsing and other data processing takes place in background

## Breaking changes

### Core SDK

* Timeouts for the network requests are now configurable via the `NetworkManager` as properties
```swift
public var timeoutIntervalForRequest: TimeInterval?
public var timeoutIntervalForResource: TimeInterval?
```
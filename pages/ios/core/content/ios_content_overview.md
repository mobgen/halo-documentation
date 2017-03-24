---
title: HALO Core SDK - Content
keywords: ios
last_updated: February 6, 2017
tags: [core, content]
sidebar: ios_sidebar
permalink: ios_content_overview.html
toc: false
folder: ios
---

## Modules and instances

All the content manipulation from this HALO SDK is based on the existence of two main models: `Module` and `ContentInstance` (`HaloModule` and `HaloContentInstance` if using the Obj-C version of the SDK). These two models match perfectly with the concepts present in the CMS.

### `Module`


|---|:---:|:---:|---|
**Property** 	| **Swift type** 	| **Obj-C type** 	| **Description**
`customerId` 	| `Int?` 			| `NSInteger`		| Id of the customer owning this module
`id`	 		| `String?`			| `NSString`		| Id of the module
`name`			| `String?`			| `NSString`		| Name of the module
`isSingle`		| `Bool`			| `BOOL`			| Whether the module is a single one or not
`createdAt` 	| `Date?`			| `NSDate`			| Date of creation of the module
`updatedAt`		| `Date?`			| `NSDate`			| Date of the last update of the module
`deletedAt`		| `Date?`			| `NSDate`			| Date of deletion of this module
`createdBy`		| `String?`			| `NSString`		| User responsible for the creation of the module
`updatedBy`		| `String?`			| `NSString`		| User responsible for the last update of the module
`deletedBy`		| `String?`			| `NSString`		| User responsible for the deletion of the module
`tags` 			| `[String: Tag]` 	| `NSDictionary`	| Collection of tags associated to this module

### `ContentInstance`

|---|:---:|:---:|---|
**Property** 	| **Swift type** 	| **Obj-C type** 	| **Description**
`id`			| `String?`			| `NSString`		|
`moduleId`		| `String`			| `NSString`		|
`name`			| `String`			| `NSString`		|
`values`		| `[String: Any]` 	| `NSDictionary`	| 
`createdAt`		| `Date`			| `NSDate`			|
`publishedAt` 	| `Date?`			| `NSDate`			|
`updatedAt`		| `Date?`			| `NSDate`			| 
`deletedAt`		| `Date?`			| `NSDate`			|
`removedAt` 	| `Date?`			| `NSDate`			|
`archivedAt`	| `Date?`			| `NSDate`			|
`createdBy`		| `String?`			| `NSString`		|
`updatedBy`		| `String?`			| `NSString`		|
`deletedBy`		| `String?`			| `NSString`		|
`tags`			| `[String: Tag]`	| `NSDictionary`	|


## Retrieving modules

```swift
public func getModules(completionHandler handler: (NSHTTPURLResponse?, Result<PaginatedModules?>) -> Void) -> Void
```

It will return a request set up to request the available modules. It can be customised as needed and then executed.
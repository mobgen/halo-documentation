---
title: Overview
---

## Modules and instances

All the content manipulation from this HALO SDK is based on the existence of two main 
models: `Module` and `ContentInstance` (`HaloModule` and `HaloContentInstance` if
using the Obj-C version of the SDK). These two models match perfectly with the concepts 
present in the CMS.

### `Module` (`HaloModule`)


**Property** 	| **Swift type** 	| **Obj-C type** 	| **Description**
|---|:---:|:---:|---|
`customerId` 	| `Int?` 			| `NSInteger`		| Id of the customer owning this module
`id`	 		| `String?`			| `NSString`		| Id of the module
`name`			| `String?`			| `NSString`		| Name of the module
`isSingle`		| `Bool`			| `BOOL`			| Whether the module is a single one or not
`createdAt` 	| `Date?`			| `NSDate`			| Creation date of the module
`updatedAt`		| `Date?`			| `NSDate`			| Date of the last update of the module
`deletedAt`		| `Date?`			| `NSDate`			| Deletion date of this module
`createdBy`		| `String?`			| `NSString`		| User responsible for the creation of the module
`updatedBy`		| `String?`			| `NSString`		| User responsible for the last update of the module
`deletedBy`		| `String?`			| `NSString`		| User responsible for the deletion of the module
`tags` 			| `[String: Tag]` 	| `NSDictionary`	| Collection of tags associated to this module

### `ContentInstance` (`HaloContentInstance`)

**Property** 	| **Swift type** 	| **Obj-C type** 	| **Description**
|---|:---:|:---:|---|
`id`			| `String?`			| `NSString`		| Id of the instance within the platform
`moduleId`		| `String`			| `NSString`		| Id of the module to which this instance belongs
`name`			| `String`			| `NSString`		| Name of the instance
`values`		| `[String: Any]` 	| `NSDictionary`	| Dictionary containing the key-value pairs representing the custom data of the instance
`createdAt`		| `Date`			| `NSDate`			| Creation date of the instance
`publishedAt` 	| `Date?`			| `NSDate`			| Publication date of the instance
`updatedAt`		| `Date?`			| `NSDate`			| Date of the last update of the instance
`deletedAt`		| `Date?`			| `NSDate`			| Date in which the instance has been deleted
`removedAt` 	| `Date?`			| `NSDate`			| Date in which the instance has been removed
`archivedAt`	| `Date?`			| `NSDate`			| Date in which the instance has been archived
`createdBy`		| `String?`			| `NSString`		| User responsible for the creation of the instance
`updatedBy`		| `String?`			| `NSString`		| User responsible for the last update of the instance
`deletedBy`		| `String?`			| `NSString`		| User responsible for the deletion of the instance
`tags`			| `[String: Tag]`	| `NSDictionary`	| Collection of tags associated with the instance

Another structure widely used related to the content is the `PaginationInfo`. Although pagination can be skipped, the result will be returned in the shape of paginated modules or instances depending on the call (to maintain coherence).

### `PaginationInfo` (`HaloPaginationInfo`)

**Property** 	| **Swift type** 	| **Obj-C type** 	| **Description**
|---|:---:|:---:|---|
`page`			| `Int`				| `Int`				| Value of the current page
`limit`			| `Int`				| `Int`				| Limit set for the current result
`offset`		| `Int`				| `Int`				| Offset which the current result starts from
`totalItems`	| `Int`				| `Int`				| Total number of items resulting from the query
`totalPages`	| `Int`				| `Int`				| Total number of pages resulting from the query

## Retrieving modules

The collection of existing modules can be retrieved through the Core Manager using a specific call. The response will come in the shape of paginated content. 

### `PaginatedModules` (`HaloPaginatedModules`)

**Property** 	| **Swift type** 	| **Obj-C type** 		| **Description**
|---|:---:|:---:|---|
`paginationInfo`| `PaginationInfo`	| `HaloPaginationInfo`	| Structure containing the pagination info
`modules`		| `[Module]`		| `[HaloModule]`		| Array of modules

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
public func getModules(completionHandler handler: (NSHTTPURLResponse?, Result<PaginatedModules?>) -> Void) -> Void

It will return a request set up to request the available modules. It can be customised as needed and then executed.
```
<!--Obj-C-->
```C
- (void)modulesWithSuccess:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, HaloPaginatedModules * _Nonnull))success failure:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSError * _Nonnull))failure;
```
<!--END_DOCUSAURUS_CODE_TABS-->

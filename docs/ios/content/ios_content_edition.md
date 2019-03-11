---
title: Content edition
---

The HALO SDK provides a set of methods to create, edit and delete content. These methods are available through the `ContentManager`.

Content instances can be created or updated by sending them to the server via the right method:

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
open func save(
  _ instance: ContentInstance, 
  completionHandler handler: @escaping (HTTPURLResponse?, Halo.Result<ContentInstance?>) -> Void
) -> Void
```
<!--Obj-C-->
```C
- (void)saveInstance:(HaloContentInstance * _Nonnull)instance 
  withSuccess:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, HaloContentInstance * _Nullable, BOOL))success 
  failure:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSError * _Nonnull))failure;
```
<!--END_DOCUSAURUS_CODE_TABS-->


Content instances can also be deleted providing the id of the instance:

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
open func delete(
  instanceId: String, 
  completionHandler handler: @escaping (HTTPURLResponse?, Halo.Result<ContentInstance?>) -> Void
) -> Void
```
<!--Obj-C-->
```C
- (void)deleteInstanceWithId:(NSString * _Nonnull)instanceId 
  success:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, HaloContentInstance * _Nullable, BOOL))success 
  failure:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSError * _Nonnull))failure;
```
<!--END_DOCUSAURUS_CODE_TABS-->

Moreover, there is an option to perform a *batch operation* so that multiple simple operations (creation, edition, deletion) are performed in the same request, saving time and network traffic.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
open func batch(
  operations: BatchOperations, 
  completionHandler handler: @escaping (HTTPURLResponse?, Halo.Result<BatchResult?>) -> Void
) -> Void
```
<!--Obj-C-->
```C
- (void)performBatchOperations:(HaloBatchOperations * _Nonnull)operations 
  withSuccess:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, HaloBatchResult * _Nullable, BOOL))success 
  failure:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSError * _Nonnull))failure;
```
<!--END_DOCUSAURUS_CODE_TABS-->

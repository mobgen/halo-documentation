---
title: Content edition
keywords: ios
last_updated: February 6, 2017
tags: [core, content]
sidebar: ios_sidebar
toc: false
permalink: ios_content_edition.html
folder: ios
---

The HALO SDK provides a set of methods to create, edit and delete content. These methods are available through the `ContentManager`.

Content instances can be created or updated by sending them to the server via the right method:

{% include ios_sample_code.html id='content-save'
swift-content='open func save(
  _ instance: ContentInstance, 
  completionHandler handler: @escaping (HTTPURLResponse?, Halo.Result<ContentInstance?>) -> Void
) -> Void'
objc-content='- (void)saveInstance:(HaloContentInstance * _Nonnull)instance 
  withSuccess:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, HaloContentInstance * _Nullable, BOOL))success 
  failure:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSError * _Nonnull))failure;'
%}

Content instances can also be deleted providing the id of the instance:

{% include ios_sample_code.html id='content-delete'
swift-content='open func delete(
  instanceId: String, 
  completionHandler handler: @escaping (HTTPURLResponse?, Halo.Result<ContentInstance?>) -> Void
) -> Void'
objc-content='- (void)deleteInstanceWithId:(NSString * _Nonnull)instanceId 
  success:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, HaloContentInstance * _Nullable, BOOL))success 
  failure:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSError * _Nonnull))failure;'
%}

Moreover, there is an option to perform a *batch operation* so that multiple simple operations (creation, edition, deletion) are performed in the same request, saving time and network traffic.

{% include ios_sample_code.html id='content-batch'
swift-content='open func batch(
  operations: BatchOperations, 
  completionHandler handler: @escaping (HTTPURLResponse?, Halo.Result<BatchResult?>) -> Void
) -> Void'
objc-content='- (void)performBatchOperations:(HaloBatchOperations * _Nonnull)operations 
  withSuccess:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, HaloBatchResult * _Nullable, BOOL))success 
  failure:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSError * _Nonnull))failure;'
%}
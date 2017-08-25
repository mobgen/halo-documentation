---
title: Content sync
keywords: ios
last_updated: March 27, 2017
tags: [core, content]
toc: false
sidebar: ios_sidebar
permalink: ios_content_sync.html
folder: ios
---

One big feature that the SDK offers related to content is the ability to synchronize it, doing incremental updates, saving network traffic and waiting time.

In order to do that, the request has to be performed via a `SyncQuery`.

## The `SyncQuery` (`HaloSyncQuery`)

With an empty constructor, the object is implemented in the sense of a builder, so that the different methods can be chained to created the desired `SyncQuery`.

|--|--|--|
`moduleId` | `String` | Id of the module to be synchronised
`moduleName` | `String` | Name of the module to be synchronised
`locale` | `Halo.Locale` | Locale in which we want to retrieve the information. If none provided, the default one will be used
`fromSync` | `Date` | Initial date from which we want to sync the content
`toSync` | `Date` | Final date to which we want to sync the content

## The sync operation

In order to start a sync, the operation can be triggered via the `ContentManager` by providing a `SyncQuery` that fits the requirements.

{% include ios_sample_code.html id='sync'
swift-content='public func sync(
  query: SyncQuery, 
  completionHandler handler: @escaping (String, HaloError?) -> Void
) -> Void'
objc-content='- (void)syncWithQuery:(HaloSyncQuery * _Nonnull)query 
  completionHandler:(void (^ _Nonnull)(NSString * _Nonnull, NSError * _Nullable))handler;'
%}

Once the operation has finished and the content is stored locally, both the items and a log containing a summary of the operations performed (creations, updates and deletions) can be handled through a set of existing functions in the `ContentManager`.

{% include ios_sample_code.html id='sync-retrieve'
swift-content='public func getSyncedInstances(moduleId: String) -> [ContentInstance]

public func removeSyncedInstances(moduleId: String) -> Void

public func getSyncLog(moduleId: String) -> [SyncLogEntry]

public func clearSyncLog(moduleId: String) -> Void'
objc-content='- (NSArray<HaloContentInstance *> * _Nonnull)syncedInstancesForModule:(NSString * _Nonnull)moduleId;

- (void)removeSyncedInstancesForModule:(NSString * _Nonnull)moduleId;

- (NSArray<HaloSyncLogEntry *> * _Nonnull)syncLogForModule:(NSString * _Nonnull)moduleId;

- (void)clearSyncLogForModule:(NSString * _Nonnull)moduleId;'
%}
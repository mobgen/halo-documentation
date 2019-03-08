---
title: User pocket
keywords: ios, auth
last_updated: August 17, 2017
tags: [auth]
sidebar: ios_sidebar
toc: false
permalink: ios_pocket.html
folder: ios
---

The HALO SDK provides a way to store custom data for a given identified user, and it is called `Pocket`.

## The `Pocket` model

Each user may have his own pocket stored in the server containing custom information. The structure of the pocket is simple and it has two components: `references` and `data`.

|---|---|
| `references` | Set of collections (with custom keys) that will allow, for example, to store references to different items (instances, modules, etc) |
| `data` | Custom JSON (limited to 2000 characters) |

The raw representation of a pocket from the server point of view would be something like the following:

```javascript
{ 
  references: {
    favorites: [ 'id1', 'id2', ... ],
    instances: [ 'id1', 'id2', ... ],
    modules: [ 'id1', 'id2', ... ]
  },
  data: {
   // custom json object limited to 2000 chars (length)
  } 
}
```

In order to modify the pocket there are a set of helper functions that simplify the fact of making changes

{% include ios_sample_code.html id='pocket-functions'
swift-content='// Add a reference under the given key
public func addReference(key: String, value: String) -> Void

// Remove a reference under the given key. Will return true if succeeds, false otherwise
public func removeReference(key: String, value: String) -> Bool

// Set a collection of references directly under a key. It will overwrite any existing ones
public func setReferences(key: String, values: [String]?) -> Void

// Remove all the references stored under a key (it will internally set it to nil)
public func removeReferences(key: String) -> Void

// Set the custom JSON data to be stored in the pocket
public func setData(_ data: [String: Any]) -> Void'
objc-content='// Add a reference under the given key
- (void)addReferenceWithKey:(NSString * _Nonnull)key value:(NSString * _Nonnull)value;

// Remove a reference under the given key. Will return YES if succeeds, NO otherwise
- (BOOL)removeReferenceWithKey:(NSString * _Nonnull)key value:(NSString * _Nonnull)value;

// Set a collection of references directly under a key. It will overwrite any existing ones
- (void)setReferencesWithKey:(NSString * _Nonnull)key values:(NSArray<NSString *> * _Nullable)values;

// Remove all the references stored under a key (it will internally set it to null)
- (void)removeReferencesForKey:(NSString * _Nonnull)key;

// Set the custom JSON data to be stored in the pocket
- (void)setData:(NSDictionary<NSString *, id> * _Nonnull)data;'
%}

## Retrieving and storing a `Pocket`

Any operation over the pocket will require a previously logged in user. These requests will only work using credentials of identified user (*app+* role).

The first step will be creating an empty `Pocket`, populating it with the desired values and storing it in the server. If the operation succeeds, the saved `Pocket` will be returned through the completion handler.

{% include ios_sample_code.html id='save-pocket'
swift-content='public func savePocket(
  _ pocket: Pocket,
  completionHandler handler: @escaping (HTTPURLResponse?, Result<Pocket?>) -> Void
) -> Void'
objc-content='- (void)savePocket:(HaloPocket * _Nonnull)pocket 
    withSuccess:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, HaloPocket * _Nonnull))success 
    failure:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSError * _Nonnull))failure;'
%}

Getting a `Pocket` for the logged in user is really straightforward. An extra feature will allow the developer to filter the references to be retrieved. The keys can be specified as an argument, and the resulting `Pocket` will only contain those references. This will help saving network traffic and processing unnecessary data. Setting it to `nil` will avoid any filtering.

{% include ios_sample_code.html id='get-pocket'
swift-content='public func getPocket(
  filterReferences: [String]? = nil,
  completionHandler handler: @escaping (HTTPURLResponse?, Result<Pocket?>) -> Void
) -> Void'
objc-content='- (void)getPocketWithFilter:(NSArray<NSString *> * _Nullable)filterReferences 
    success:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, HaloPocket * _Nonnull))success 
    failure:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSError * _Nonnull))failure;'
%}


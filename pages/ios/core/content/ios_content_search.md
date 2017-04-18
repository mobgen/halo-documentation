---
title: Content search
keywords: ios
last_updated: February 6, 2017
tags: [core, content]
sidebar: ios_sidebar
permalink: ios_content_search.html
folder: ios
---

In order to retrieve specific instances, a whole system based on queries and filters is implemented which will allow the developer to perform really fine-grained search operations.

Depending on the desired format of the results, the search operation can return already parsed content instances or, if any extra processing needs to be made, the SDK also offers the chance to receive the response as *raw* data.

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#swift" data-toggle="tab">Swift</a></li>
  <li role="presentation"><a href="#objc" data-toggle="tab">Obj-C</a></li>
</ul>

<div class="tab-content">
  <div id="swift" class="tab-pane fade in active">
  	<pre><code class="swift">public func search(query: SearchQuery, completionHandler handler: @escaping (HTTPURLResponse?, Result<PaginatedContentInstances?>) -> Void) -> Void</code></pre>
    <pre><code class="swift">public func searchAsData(query: SearchQuery, completionHandler handler: @escaping (HTTPURLResponse?, Result&lt;Data&gt;) -> Void) -> Void</code></pre>
  </div>
  <div id="objc" class="tab-pane fade">
    <pre><code class="objective-c">- (void)searchWithQuery:(HaloSearchQuery * _Nonnull)query success:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, HaloPaginatedContentInstances * _Nonnull))success failure:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSError * _Nonnull))failure;</code></pre>
    <pre><code class="objective-c">- (void)searchAsDataWithQuery:(HaloSearchQuery * _Nonnull)query success:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSData * _Nonnull))success failure:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSError * _Nonnull))failure;
</code></pre>
  </div>
</div>

There is a set of parameters that can be specified in order to define the search operation and the desired results, and those are provided using the `SearchQuery` object.

### The `SearchQuery` (`HaloSearchQuery`)

The `SearchQuery` provides a flexible mechanism to build an object containing all the parameters that will be forwarded to the search engine in HALO. Since the functions return a `SearchQuery`, the calls can be conveniently chained.

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#swift-2" data-toggle="tab">Swift</a></li>
  <li role="presentation"><a href="#objc-2" data-toggle="tab">Obj-C</a></li>
</ul>

<div class="tab-content">
  <div id="swift-2" class="tab-pane fade in active">
    <pre><code class="swift">let query = SearchQuery().moduleIds([moduleId1, moduleId2]).searchFilter(filter).skipPagination()</code></pre>
  </div>
  <div id="objc-2" class="tab-pane fade">
    <pre><code class="objective-c">HaloSearchQuery *query = [[[[HaloSearchQuery new] moduleIds:@[moduleId1, moduleId2]] searchFilter: filter] skipPagination];</code></pre>
  </div>
</div>

The different functions than can be used to customise the `SearchQuery` are:

|---|:---:|---|
**Swift** | **Obj-C** | **Description**
`searchFilter()`  | `searchFilter:`    |
`metaFilter()`    | `metaFilter:`     | 
`fields()`    | `String?`     |
`tags()`      | `Bool`      |      
`moduleIds()` | `Date?`     |      
`addRelatedInstances(fieldName:instanceIds:)`   | `addRelatedInstancesWithFieldName:instanceIds:` |     
`addAllRelatedInstances(fieldName:)`   | `addAllRelatedInstancesWithFieldName:` |      
`moduleName()`   | `moduleName:`   |    
`instanceIds()`   | `instanceIds:`     |    
`populateFields()`   | `populateFields:`     |    
`populateAll()`      | `populateAll`   |
`segmentWithDevice()`      | `segmentWithDevice:`   | 
`segmentMode()`      | `segmentMode:`   | 
`locale()`      | `locale:`   |
`skipPagination()`      | `skipPagination`   |
`pagination(page:limit:)`      | `paginationWithPage:limit:`   |

### The `SearchFilter` (`HaloSearchFilter`)


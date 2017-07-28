---
title: Content search
keywords: ios
last_updated: February 6, 2017
tags: [core, content]
sidebar: ios_sidebar
toc: false
permalink: ios_content_search.html
folder: ios
properties: [
  'addAllRelatedInstances',
  'addRelatedInstances',
  'addSortBy',
  'fields',
  'instanceIds',
  'locale',
  'metaFilter',
  'moduleIds',
  'moduleName',
  'pagination',
  'populateAll',
  'populateFields',
  'searchFilter',
  'segmentMode',
  'segmentWithDevice',
  'serverCache',
  'skipPagination',
  'tags'
]
---

<style type="text/css">

h4 {
  font-style: normal !important;
}

.panel-heading a:first-child::before {
  content: "\25bc" 
}

.panel-heading a.collapsed::before {
  content: "\25b6"
}

</style>

In order to retrieve specific instances, a whole system based on queries and filters is implemented which will allow the developer to perform really fine-grained search operations.

Depending on the desired format of the results, the search operation can return already parsed content instances or, if any extra processing needs to be made, the SDK also offers the chance to receive the response as *raw* data.

{% include ios_sample_code.html swift-id="swift-1" objc-id="objc-1"
swift-content="public func search(query: SearchQuery, completionHandler handler: @escaping (HTTPURLResponse?, Result<PaginatedContentInstances?>) -> Void) -> Void

public func searchAsData(query: SearchQuery, completionHandler handler: @escaping (HTTPURLResponse?, Result<Data>) -> Void) -> Void"
objc-content="- (void)searchWithQuery:(HaloSearchQuery * _Nonnull)query success:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, HaloPaginatedContentInstances * _Nonnull))success failure:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSError * _Nonnull))failure;

- (void)searchAsDataWithQuery:(HaloSearchQuery * _Nonnull)query success:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSData * _Nonnull))success failure:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSError * _Nonnull))failure;"
%}

There is a set of parameters that can be specified in order to define the search operation and the desired results, and those are provided using the `SearchQuery` object.

### The `SearchQuery` (`HaloSearchQuery`)

The `SearchQuery` provides a flexible mechanism to build an object containing all the parameters that will be forwarded to the search engine in HALO. Since the functions return a `SearchQuery`, the calls can be conveniently chained.

{% include ios_sample_code.html swift-id="swift-2" objc-id="objc-2" 
swift-content="let query = SearchQuery().moduleIds([moduleId1, moduleId2]).searchFilter(filter).skipPagination()" 
objc-content="HaloSearchQuery *query = [[[[HaloSearchQuery new] moduleIds:@[moduleId1, moduleId2]] searchFilter: filter] skipPagination];" %}

The different functions than can be used to customise the `SearchQuery` are the following (expand each section to get all the details):

<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

{% for p in page.properties %}

<div class="panel panel-default">
    <div class="panel-heading" role="tab" id="{{ p }}Heading">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#{{ p }}Collapse" aria-expanded="false" aria-controls="{{ p }}Collapse">
          {{ p }}
        </a>
      </h4>
    </div>
    <div id="{{ p }}Collapse" class="panel-collapse collapse" role="tabpanel" aria-labelledby="{{ p }}Heading">
      <div class="panel-body">
        {% include_relative search_query_options/{{ p }}.html %}
      </div>
    </div>
  </div>

{% endfor %}

</div>


### The `SearchFilter` (`HaloSearchFilter`)


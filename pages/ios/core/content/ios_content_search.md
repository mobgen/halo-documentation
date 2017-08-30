<!-- ---
title: Content search
keywords: ios
last_updated: February 6, 2017
tags: [core, content]
sidebar: ios_sidebar
toc: false
permalink: ios_content_search.html
folder: ios
properties: [
  'addRelatedInstances',
  'addAllRelatedInstances',
  'addSortBy',
  'fields',
  'instanceIds',
  'locale',
  'metaFilter',
  'moduleIds',
  'moduleName',
  'pagination',
  'populateFields',
  'populateAll',
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

{% include ios_sample_code.html id="search-api"
swift-content="public func search(query: SearchQuery, completionHandler handler: @escaping (HTTPURLResponse?, Result<PaginatedContentInstances?>) -> Void) -> Void

public func searchAsData(query: SearchQuery, completionHandler handler: @escaping (HTTPURLResponse?, Result<Data>) -> Void) -> Void"
objc-content="- (void)searchWithQuery:(HaloSearchQuery * _Nonnull)query success:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, HaloPaginatedContentInstances * _Nonnull))success failure:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSError * _Nonnull))failure;

- (void)searchAsDataWithQuery:(HaloSearchQuery * _Nonnull)query success:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSData * _Nonnull))success failure:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSError * _Nonnull))failure;"
%}

There is a set of parameters that can be specified in order to define the search operation and the desired results, and those are provided using the `SearchQuery` object.

### The `SearchQuery` (`HaloSearchQuery`)

The `SearchQuery` provides a flexible mechanism to build an object containing all the parameters that will be forwarded to the search engine in HALO. Since the functions return a `SearchQuery`, the calls can be conveniently chained.

{% include ios_sample_code.html id="search-query" 
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
        {% include_relative search_query_options/{{ p }}.md %}
      </div>
    </div>
  </div>

{% endfor %}

</div>

### The `SearchFilter` (`HaloSearchFilter`)

A `SearchFilter` can be created through the existing Swift *high level* functions (static methods in Objective-C), which will allow to define conditions over different fields and their values:

{% include ios_sample_code.html id='search-filter-functions'
swift-content='public func eq(property: String, value: Any?, type: String? = nil) -> SearchFilter
public func neq(property: String, value: Any?, type: String? = nil) -> SearchFilter
public func gt(property: String, value: Any?, type: String? = nil) -> SearchFilter
public func lt(property: String, value: Any?, type: String? = nil) -> SearchFilter
public func gte(property: String, value: Any?, type: String? = nil) -> SearchFilter
public func lte(property: String, value: Any?, type: String? = nil) -> SearchFilter
public func valueIn(property: String, value: Any?, type: String? = nil) -> SearchFilter
public func valueNotIn(property: String, value: Any?, type: String? = nil) -> SearchFilter
public func like(property: String, value: String) -> SearchFilter 
public func or(_ elements: SearchFilter...) -> SearchFilter
public func and(_ elements: SearchFilter...) -> SearchFilter'
objc-content='+ (HaloSearchFilter * _Nonnull)eq:(NSString * _Nonnull)property value:(id _Nullable)value;
+ (HaloSearchFilter * _Nonnull)neq:(NSString * _Nonnull)property value:(id _Nullable)value;
+ (HaloSearchFilter * _Nonnull)gt:(NSString * _Nonnull)property value:(id _Nullable)value;
+ (HaloSearchFilter * _Nonnull)lt:(NSString * _Nonnull)property value:(id _Nullable)value;
+ (HaloSearchFilter * _Nonnull)gte:(NSString * _Nonnull)property value:(id _Nullable)value;
+ (HaloSearchFilter * _Nonnull)lte:(NSString * _Nonnull)property value:(id _Nullable)value;
+ (HaloSearchFilter * _Nonnull)valueIn:(NSString * _Nonnull)property value:(id _Nullable)value;
+ (HaloSearchFilter * _Nonnull)valueNotIn:(NSString * _Nonnull)property value:(id _Nullable)value;
+ (HaloSearchFilter * _Nonnull)likeWithProperty:(NSString * _Nonnull)property value:(NSString * _Nonnull)value;
+ (HaloSearchFilter * _Nonnull)and:(NSArray<HaloSearchFilter *> * _Nonnull)elements;
+ (HaloSearchFilter * _Nonnull)or:(NSArray<HaloSearchFilter *> * _Nonnull)elements;'
%}

Since all these operations return a `SearchFilter`, they can be conveniently combined to compose more complex filtering criteria.

{% include ios_sample_code.html id='search-filter-sample' 
swift-content='let searchFilter = and(
  or(
    and(
      gte(property: "age", value: 18),
      lt(property: "age", value: 100)
    ),
    eq(property: "registration", value: nil)
  ),
  neq(property: "name", value: "July Young"),
  valueIn(property: "name", value: ["Forever alone", "Fake name"])
)'
objc-content='HaloSearchFilter *gte = [HaloSearchFilter gte:@"age" value:@18];
HaloSearchFilter *lt = [HaloSearchFilter lt:@"age" value:@100];
    
HaloSearchFilter *eq = [HaloSearchFilter eq:@"registration" value:nil];
HaloSearchFilter *neq = [HaloSearchFilter neq:@"name" value:@"July Young"];
    
HaloSearchFilter *valueIn = [HaloSearchFilter valueIn:@"name" value:@[@"Forever alone", @"Fake name"]];
    
HaloSearchFilter *and1 = [HaloSearchFilter and:@[gte, lt]];
HaloSearchFilter *or = [HaloSearchFilter or:@[and1, eq]];
    
HaloSearchFilter *filter = [HaloSearchFilter and:@[or, neq, valueIn]];'
%} -->

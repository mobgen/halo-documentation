---
title: Content search
---

In order to retrieve specific instances, a whole system based on queries and filters is implemented which will allow the developer to perform really fine-grained search operations.

Depending on the desired format of the results, the search operation can return already parsed content instances or, if any extra processing needs to be made, the SDK also offers the chance to receive the response as *raw* data.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
public func search(query: SearchQuery, completionHandler handler: @escaping (HTTPURLResponse?, Result<PaginatedContentInstances?>) -> Void) -> Void

public func searchAsData(query: SearchQuery, completionHandler handler: @escaping (HTTPURLResponse?, Result<Data>) -> Void) -> Void
```
<!--Obj-C-->
```C
- (void)searchWithQuery:(HaloSearchQuery * _Nonnull)query success:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, HaloPaginatedContentInstances * _Nonnull))success failure:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSError * _Nonnull))failure;

- (void)searchAsDataWithQuery:(HaloSearchQuery * _Nonnull)query success:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSData * _Nonnull))success failure:(void (^ _Nonnull)(NSHTTPURLResponse * _Nullable, NSError * _Nonnull))failure;
```
<!--END_DOCUSAURUS_CODE_TABS-->

There is a set of parameters that can be specified in order to define the search operation and the desired results, and those are provided using the `SearchQuery` object.

### The `SearchQuery` (`HaloSearchQuery`)

The `SearchQuery` provides a flexible mechanism to build an object containing all the parameters that will be forwarded to the search engine in HALO. Since the functions return a `SearchQuery`, the calls can be conveniently chained.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
let query = SearchQuery().moduleIds([moduleId1, moduleId2]).searchFilter(filter).skipPagination()
```
<!--Obj-C-->
```C
HaloSearchQuery *query = [[[[HaloSearchQuery new] moduleIds:@[moduleId1, moduleId2]] searchFilter: filter] skipPagination];
```
<!--END_DOCUSAURUS_CODE_TABS-->

The different functions than can be used to customise the `SearchQuery` are the following (expand each section to get all the details):


#### addRelatedInstances

This feature of the `SearchQuery` allows to add to the search results the instances related to those specified in the list of ids using the provided field as *foreign key*.

E.g.: Having set up a collection of authors and books (and the relationship between author and his books), the `addRelatedInstances` would allow us to retrieve all the books written by an author or a subset of authors using their ids.

 
<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
open func addRelatedInstances(fieldName: String, instanceIds: [String]) -> Halo.SearchQuery
```
<!--Obj-C-->
```C
- (HaloSearchQuery * _Nonnull)addRelatedInstancesWithFieldName:(NSString * _Nonnull)fieldName 
instanceIds:(NSArray<NSString *> * _Nonnull)instanceIds;
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### addAllRelatedInstances

 It will include all the related instances using the provided field as *key* field.
 
<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
open func addAllRelatedInstances(fieldName: String) -> Halo.SearchQuery
```
<!--Obj-C-->
```C
- (HaloSearchQuery * _Nonnull)addAllRelatedInstancesWithFieldName:(NSString * _Nonnull)fieldName;
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### addSortBy

Adds a *sort by* criteria, sorting the results by any of the available metadata.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
public enum SortBy: Int {
    case name, createdAt, updatedAt, publishedAt, removedAt, archivedAt, deletedAt
}

public enum SortingOrder: Int {
    case ascending, descending
}

open func addSortBy(field: SortBy, order: SortingOrder) -> Halo.SearchQuery
```
<!--Obj-C-->
```C
typedef SWIFT_ENUM_NAMED(NSInteger, HaloSortBy, "SortBy") {
  HaloSortByName = 0,
  HaloSortByCreatedAt = 1,
  HaloSortByUpdatedAt = 2,
  HaloSortByPublishedAt = 3,
  HaloSortByRemovedAt = 4,
  HaloSortByArchivedAt = 5,
  HaloSortByDeletedAt = 6,
};

typedef SWIFT_ENUM_NAMED(NSInteger, HaloSortingOrder, "SortingOrder") {
  HaloSortingOrderAscending = 0,
  HaloSortingOrderDescending = 1,
};

- (HaloSearchQuery * _Nonnull)addSortByField:(enum HaloSortBy)field order:(enum HaloSortingOrder)order;
```
<!--END_DOCUSAURUS_CODE_TABS-->

The calls can be conveniently chained so that the results can be sorted by several rules.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
let query = SearchQuery().addSortBy(field: .createdAt, order: .ascending).addSortBy(field: .updatedAt, order: .ascending)
```
<!--Obj-C-->
```C
HaloSearchQuery *query = [HaloSearchQuery new];
query = [[query addSortByField:HaloSortByCreatedAt order:HaloSortingOrderAscending]
	addSortByField:HaloSortByUpdatedAt order:HaloSortingOrderAscending];
```
<!--END_DOCUSAURUS_CODE_TABS-->


#### fields

In case only certain fields of the instances of a module need to be retrieved, those can be specified using this property and providing the list of fields that will be included in the response. That way, the results will only contain the desired data, saving space and avoiding unnecessary *noise*.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
open func fields(_ fields: [String]) -> Halo.SearchQuery
```
<!--Obj-C-->
```C
- (HaloSearchQuery * _Nonnull)fields:(NSArray<NSString *> * _Nonnull)fields;
```
<!--END_DOCUSAURUS_CODE_TABS-->


#### instanceIds
Specific targets can be retrieved by providing their identifiers using this property of the `SearchQuery`.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
open func instanceIds(_ ids: [String]) -> Halo.SearchQuery
```
<!--Obj-C-->
```C
- (HaloSearchQuery * _Nonnull)instanceIds:(NSArray<NSString *> * _Nonnull)ids;
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### locale

If the content is localised, then the desired locale of the results can be specified using this property of the `SearchQuery`.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
open func locale(_ locale: Halo.Locale) -> Halo.SearchQuery
```
<!--Obj-C-->
```C
- (HaloSearchQuery * _Nonnull)locale:(enum Locale)locale;
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### metaFilter

The search results can be filtered by the meta-properties (creation date, deletion date, etc) by providing a `SearchFilter` (will be detailed in the next section) with the desired parameters.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
open func metaFilter(_ filter: SearchFilter) -> Halo.SearchQuery
```
<!--Obj-C-->
```C
- (HaloSearchQuery * _Nonnull)metaFilter:(HaloSearchFilter * _Nonnull)filter;
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### moduleIds

The same way we can specify the instance identifiers, we can also use the identifier from the modules we want to retrieve the instances from. It can be provided as a collection of identifiers, so that the result will only contain instances belonging to those modules.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
open func moduleIds(_ ids: [String]) -> Halo.SearchQuery
```
<!--Obj-C-->
```C
- (HaloSearchQuery * _Nonnull)moduleIds:(NSArray<NSString *> * _Nonnull)ids;
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### moduleName

When querying the instances belonging to a specific module, the module name can be used for a better understanding and a clearer code.

**Note:** only one module name can be provided (not like the case of `moduleIds`), since the returned results will not contain any link to the module name (but only to the module id), so it would be impossible to tell which instances belong to which module if providing more than one module name was supported.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
open func moduleName(_ name: String) -> Halo.SearchQuery
```
<!--Obj-C-->
```C
- (HaloSearchQuery * _Nonnull)moduleName:(NSString * _Nonnull)name;
```
<!--END_DOCUSAURUS_CODE_TABS-->


#### pagination

By default, the search results will be paginated. The page to be retrieved and its size can be specified through this property of the `SearchQuery`.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
open func pagination(page: Int, limit: Int) -> Halo.SearchQuery
```
<!--Obj-C-->
```C
- (HaloSearchQuery * _Nonnull)paginationWithPage:(NSInteger)page limit:(NSInteger)limit;
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### populateAll

Instead of specifying which fields will be populated, there is a shortcut that will cause all the fields representing a relationship to be populated.

**Note:** This will only cause the population of the first-level relationships. There is no direct way of getting deep population with just one request and it would need to be done manually.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
open func populateAll() -> Halo.SearchQuery
```
<!--Obj-C-->
```C
- (HaloSearchQuery * _Nonnull)populateAll;
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### populateFields

When instances contain relationships, the fields acting as *foreign keys* will not be populated by default. That behaviour can be changed by specifying a list of those which will be populated with the related instance.

**Note:** This will only cause the population of the first-level relationships. There is no direct way of getting deep population with just one request and it would need to be done manually.
</div> 

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
open func populateFields(_ fields: [String]) -> Halo.SearchQuery
```
<!--Obj-C-->
```C
- (HaloSearchQuery * _Nonnull)populateFields:(NSArray<NSString *> * _Nonnull)fields;
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### searchFilter 

In order to filter the search results based on custom fields, a search filter can be provided. Find the detailed explanation in the next section.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
open func searchFilter(_ filter: SearchFilter) -> Halo.SearchQuery
```
<!--Obj-C-->
```C
- (HaloSearchQuery * _Nonnull)searchFilter:(HaloSearchFilter * _Nonnull)filter;
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### searchMode

When adding tags for segmentation (see `tags` below), using this property will allow to specify whether the segmentation has to be `total` (the instance must be tagged with **all** the tags) or `partial` (as long as any of the tags of the instance matches the ones provided, it will be included in the search results).

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
public enum SegmentMode: Int {
   case total, partial
}

open func segmentMode(_ mode: SegmentMode) -> Halo.SearchQuery
```
<!--Obj-C-->
```C
objc-content='typedef SWIFT_ENUM_NAMED(NSInteger, HaloSegmentMode, "SegmentMode") {
  HaloSegmentModeTotal = 0,
  HaloSegmentModePartial = 1,
};

- (HaloSearchQuery * _Nonnull)segmentMode:(enum HaloSegmentMode)mode;
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### segmentWithDevice 

If `segmentWithDevice` is set to `true`, the device tags (automatically added and provided by the SDK if enabled) will be added in order to filter the search results. If not specified, by default its value will be `false`.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
open func segmentWithDevice(_ segment: Bool) -> Halo.SearchQuery
```
<!--Obj-C-->
```C
- (HaloSearchQuery * _Nonnull)segmentWithDevice:(BOOL)segment;
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### serverCache

By specifying a value, it will allow the server to cache the results of the specific search for the provided amount of seconds. By default, this value will be `0` and the search results will not be cached.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
open func serverCache(seconds: Int) -> Halo.SearchQuery
```
<!--Obj-C-->
```C
- (HaloSearchQuery * _Nonnull)serverCache:(NSInteger)seconds;
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### skipPagination

The search results will be presented with pagination by default, but this behaviour can be modified by using this property of the `SearchQuery`, causing all the results to show together.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
open func skipPagination() -> Halo.SearchQuery
```
<!--Obj-C-->
```C
- (HaloSearchQuery * _Nonnull)skipPagination;
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### tags

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
open func tags(_ tags: [Halo.Tag]) -> Halo.SearchQuery
```
<!--Obj-C-->
```C
- (HaloSearchQuery * _Nonnull)tags:(NSArray<HaloTag *> * _Nonnull)tags;
```
<!--END_DOCUSAURUS_CODE_TABS-->

The tags will need to be provided as the existing model in the SDK:

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
let tag1 = Tag(name: "brand", value: "Lamborghini")
let tag2 = Tag(name: "colour", value: "red")
let query = SearchQuery().tags([tag1, tag2])
```
<!--Obj-C-->
```C
HaloTag *tag1 = [[HaloTag alloc] initWithName:@"brand" value:@"Lamborghini" type:nil];
HaloTag *tag2 = [[HaloTag alloc] initWithName:@"colour" value:@"red" type:nil];
HaloSearchQuery *query = [[HaloSearchQuery new] tags:@[tag1, tag2]];
```
<!--END_DOCUSAURUS_CODE_TABS-->

### The `SearchFilter` (`HaloSearchFilter`)

A `SearchFilter` can be created through the existing Swift *high level* functions (static methods in Objective-C), which will allow to define conditions over different fields and their values:

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
public func eq(property: String, value: Any?, type: String? = nil) -> SearchFilter
public func neq(property: String, value: Any?, type: String? = nil) -> SearchFilter
public func gt(property: String, value: Any?, type: String? = nil) -> SearchFilter
public func lt(property: String, value: Any?, type: String? = nil) -> SearchFilter
public func gte(property: String, value: Any?, type: String? = nil) -> SearchFilter
public func lte(property: String, value: Any?, type: String? = nil) -> SearchFilter
public func valueIn(property: String, value: Any?, type: String? = nil) -> SearchFilter
public func valueNotIn(property: String, value: Any?, type: String? = nil) -> SearchFilter
public func like(property: String, value: String) -> SearchFilter 
public func or(_ elements: SearchFilter...) -> SearchFilter
public func and(_ elements: SearchFilter...) -> SearchFilter
```
<!--Obj-C-->
```C
+ (HaloSearchFilter * _Nonnull)eq:(NSString * _Nonnull)property value:(id _Nullable)value;
+ (HaloSearchFilter * _Nonnull)neq:(NSString * _Nonnull)property value:(id _Nullable)value;
+ (HaloSearchFilter * _Nonnull)gt:(NSString * _Nonnull)property value:(id _Nullable)value;
+ (HaloSearchFilter * _Nonnull)lt:(NSString * _Nonnull)property value:(id _Nullable)value;
+ (HaloSearchFilter * _Nonnull)gte:(NSString * _Nonnull)property value:(id _Nullable)value;
+ (HaloSearchFilter * _Nonnull)lte:(NSString * _Nonnull)property value:(id _Nullable)value;
+ (HaloSearchFilter * _Nonnull)valueIn:(NSString * _Nonnull)property value:(id _Nullable)value;
+ (HaloSearchFilter * _Nonnull)valueNotIn:(NSString * _Nonnull)property value:(id _Nullable)value;
+ (HaloSearchFilter * _Nonnull)likeWithProperty:(NSString * _Nonnull)property value:(NSString * _Nonnull)value;
+ (HaloSearchFilter * _Nonnull)and:(NSArray<HaloSearchFilter *> * _Nonnull)elements;
+ (HaloSearchFilter * _Nonnull)or:(NSArray<HaloSearchFilter *> * _Nonnull)elements;
```
<!--END_DOCUSAURUS_CODE_TABS-->

Since all these operations return a `SearchFilter`, they can be conveniently combined to compose more complex filtering criteria.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
let searchFilter = and(
  or(
    and(
      gte(property: "age", value: 18),
      lt(property: "age", value: 100)
    ),
    eq(property: "registration", value: nil)
  ),
  neq(property: "name", value: "July Young"),
  valueIn(property: "name", value: ["Forever alone", "Fake name"])
)
```
<!--Obj-C-->
```C
'HaloSearchFilter *gte = [HaloSearchFilter gte:@"age" value:@18];
HaloSearchFilter *lt = [HaloSearchFilter lt:@"age" value:@100];
    
HaloSearchFilter *eq = [HaloSearchFilter eq:@"registration" value:nil];
HaloSearchFilter *neq = [HaloSearchFilter neq:@"name" value:@"July Young"];
    
HaloSearchFilter *valueIn = [HaloSearchFilter valueIn:@"name" value:@[@"Forever alone", @"Fake name"]];
    
HaloSearchFilter *and1 = [HaloSearchFilter and:@[gte, lt]];
HaloSearchFilter *or = [HaloSearchFilter or:@[and1, eq]];
    
HaloSearchFilter *filter = [HaloSearchFilter and:@[or, neq, valueIn]];
```
<!--END_DOCUSAURUS_CODE_TABS-->
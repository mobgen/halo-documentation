---
title: Android SDK - Content SDK Overview
keywords: android, content, getting started, halo, instance, module, query, search, sync
last_updated: November 14, 2016
tags: [content]
sidebar: android_sidebar
permalink: android_content_overview.html
folder: android
---

[![Download](https://api.bintray.com/packages/halo-mobgen/maven/HALO-Content/images/download.svg) ](https://bintray.com/halo-mobgen/maven/HALO-Content/_latestVersion)

## Add dependency

In the HALO plugin add the following to enable the content sdk.

```java
apply plugin: 'halo'

halo {
	...
	services {
		content true
	}
	...
}
```

## Content API methods

The content API is the facade for the Content HALO SDK. Importing this library will need a valid HALO instance configured with some credentials.
The HALO Content SDK allows the user to retrieve instances from the HALO Backend in two main ways:

* Search
* Sync

{% include tip.html content="Use the search method to get conent when you want to get some concrete elements, segmented data or certain information." %}
{% include tip.html content="Use the sync method if you prefer to download the whole module to use if offline. It is better for performance than search." %}

Creating an instance of the Content API is really simple once you have your HALO running. Just write the following line:

```java
HaloContentApi contentApi = HaloContentApi.with(halo);
```

In addition you can provide a default locale to include it in all the queries even if you didn't provide it in the search/sync.

### Search
If you want to bring certain data based on some criteria or search some of them in the HALO Backed, you have to use the search operation in the API. To do that we provide a class called ```SearchQuery``` with a simple fluent API that allows you to specify the criterias for the search. Once selected, you can perform the search and cache the result in local for offline use. See the example above:

```java
SearchQuery query = SearchQuery.builder()
	.moduleIds("myModuleId")
	.beginSearch()
		.eq("name", "Sample")
	.end()
	.build();
contentApi.search(Data.NETWORK_ONLY, query)
	.asContent()
	.execute(callback);
```

This search will request all the instances for the module id "myModuleId" and which body contains a name with the value "Sample". Check out the rest of the available options in [the detailed documentation](./android_content_detailed_api.html).

{% include warning.html content="The query builder search will return all results available including deleted or draft items. You must provide the appropiate query to return only published ones." %}

#### SearchQuery Factory

If you want to use common search options the ```SearchQueryBuilderFactory``` helps you to get items that has been published or removed or drafted.

```java
SearchQuery query = SearchQueryBuilderFactory.getPublishedItemsByName(moduleName, searchTag, searchQuery)
    .onePage(true)
    .segmentWithDevice()
    .build();
contentApi.search(Data.NETWORK_ONLY, query)
    .asContent()
    .execute(callback);
```
Here you can find the list of predefined search common operations with the ```SearchQueryBuilderFactory```:

| SearchQueryBuilderFactory | Explanation |
|--------------|-------------|
| **getPublishedItems** | Brings all the published items for the given module. |
| **getPublishedItemsByName** | Brings all the published items for the given module filtered by name. |
| **getItemsByContentValue** | Brings all items for the given module filtered by a content value. |
| **getExpiredItems** | Provides the expired items. |
| **getArchivedItems** | Provides the archived items. |
| **getLastUpdatedItems** | The updated items during the given millis from now. |
| **getDraftItems** | Provides the draft items for the given module. |


### Sync
The sync operation is thought for performance critical tasks. It allows to synchronize a full module consuming the less amount of data possible.

Syncing involves three steps:

* Listening for sync updates.
* Requesting a sync for a module.
* Requesting synced local instances.

Check out the following example for a full sync lifecycle:

**Listen for sync updates**

```java
//Start listening for updates
ISubscription subscription = contentApi.subscribeToSync("my module name", listener);
//When you are done or to free memory
subscription.unsubscribe();
```

**Request a sync for a module**

```java
//Create the sync query
SyncQuery query = SyncQuery.create("my module name", Threading.POOL_QUEUE_POLICY);
contentApi.sync(query);
```

**Request the synced instances**

```java
//Request the synced content
contentApi.getSyncInstances("my module name")
	.asContent(MyCustomClass.class)
	.execute(callback);
```

{% include note.html content="Make sure your MyCustomClass.class is properly annotated with LoganSquare ```@JsonObject``` annotation to make it work properly, otherwise the result will not be parsed. You can check it in [content parsing section](./android_content_detailed_api.html#content-parsing)." %}

If you want to go in deep into this module, please refer to [the detailed documentation](./android_content_detailed_api.html).

## Edit Content API

### Basic content manipulation

The Edit Content API is the way to manipulate the general content instances. If you have the proper credentials you will be able to create, update or delete general content instances. See [Halo Auth API](./android_auth_overview.html) to get apropiate credentials. 

For example if you want to update an instance.

{% include important.html content="Please refer to [the detailed documentation](./android_edit_content_detailed_api.html) to see other operations." %}

You must set a map with the content values. In this example: title and backgroundColor) 

```java
Map<String,Object> values = new HashMap<>();
values.put("title","the title");
values.put("backgroundColor", "#987654");
```

or set a custom object properly configured

{% include note.html content="Make sure your MyCustomClass.class is properly annotated with LoganSquare ```@JsonObject``` annotation to make it work properly, otherwise the result will not be parsed. You can check it in [content parsing section](./android_content_detailed_api.html#content-parsing)." %}

```java
MyCustomClass values = new MyCustomClass("the title","#987654");
```

You must provide the item id, module id, instance name. As optional parameters you should provide segmentation tags, publication date and deletion date:

```java
HaloContentInstance.Builder instanceBuilder = new HaloContentInstance.Builder(moduleName)
    .withId(instanceId)
    .withModuleId(moduleId)
    .withPublishDate(publishDate)
    .withName(instanceName)
    .withContentData(values);
```

```java
HaloContentEditApi.with(halo)
    .updateContent(instanceBuilder.build())
    .threadPolicy(Threading.POOL_QUEUE_POLICY)
    .execute(new CallbackV2<HaloContentInstance>() {
        @Override
        public void onFinish(@NonNull HaloResultV2<HaloContentInstance> result) {
            if(result.status().isSecurityError()){
               //there is an authentication error. Notify user to login.
            } else {
                if(result.data()!=null) {
                    //handle result of the update operation.                
                }
            }
        }
     });
```

If you want to go in deep into this module, please refer to [the detailed documentation](./android_edit_content_detailed_api.html).

### Advanced content manipulation

If you want to be able to add, modify and remove content instances in advanced use cases you must use the batch operation. You need to provide a ```BatchOperations``` which contains all the operations to perfom.

```java
BatchOperations operations = new BatchOperations.Builder()
    .create(createInstances)
    .delete(deleteInstances)
    .update(updateInstaces)
    .truncate(truncateInstance)
    .build();
HaloContentEditApi.with(halo
    .batch(operations)
    .threadPolicy(Threading.POOL_QUEUE_POLICY)
    .execute(new CallbackV2<BatchOperationResults>() {
        @Override
        public void onFinish(@NonNull HaloResultV2<BatchOperationResults> result) {
            //handle response with halo backend results             
        }
    });
```

If you want to go in deep into this module, please refer to [the detailed documentation](./android_edit_content_detailed_api.html#batch-operations).

## Code generation tool to annotate custom models

The Content SDK provides an API to generate code based on annotations. The HALO plugin will fetch all necessary dependencies to generate code using Java Poet in the ```AbstractProcessor```.

{% include important.html content="Please refer to [Java Poet](https://github.com/square/javapoet) to go in deep about code generation." %}

You can use this feature if you would like to:

- use the code generation tool in compile time to make sure that the proper code is generated to be able to create tables based on my custom model content structurethe.
- use the code generation tool to create a shared table with the version of the table based on your custom model.
- use the generated code to be able to perform queries into the local database based on your custom model content (insert, delete, update or select) in the same way as we use the general content API.

Check out the following example creating a query to select in a database table by title.

### Perfom a select query on a custom table with the generation tool

First create the generated database using the ```HalocontentApi``` with a new instance of ```GeneratedDatabaseFromModel``` that was autogenerated in compile time. This operation should be done in the Application to ensure the database was created after launching the app.

```java
//...
HaloContentApi.with(haloinstance, locale, new GeneratedDatabaseFromModel());
//...
```

Then annotate your model with the ```@HaloSearchableAnnotation``` to create the database table and with the ```@HaloQuery``` annotation you will generate the code to perfom the query with the ```HaloContentQueryApi```.

{% include note.html content="The ```@HaloQuery``` parameters must be declared with the following format **@{name:class}**" %}

{% include note.html content="The ```@HaloQueries``` annotation is just an array of ```@HaloQuery``` annotations" %}

```java
//...
@HaloQueries(queries = {@HaloQuery(name="selectByTitle",query="select * from Article where Title = @{mTitle:String}")})
@HaloSearchable(version = 13 , tableName = "Article")
public class Article implements Parcelable {
//...
```

Then annotate your model constructor with the ```@HaloConstructor``` annotation to indicate the names of the columns of your autogenerated table. 

{% include warning.html content="The order of the attributes must be the same on the annotation and in the constructor." %}

```java
//...
@HaloConstructor(columnNames = {"Title","Date","ContentHtml","Summary","Thumbnail","Image"})
public Article(String title, Date date, String article, String summary, String thumnail, String image) {
    mTitle = title;
    mDate = date;
    mArticle = article;
    mSummary = summary;
    mThumbnail = thumnail;
    mImage = image;
}
//...
```

This annotations will generate the code on the **build/generated/source/apt/** folder. You only need to import ```com.mobgen.halo.android.app.generated``` package to use the ```HaloContentQueryApi``` to perfom the operation as follows. 

{% include tip.html content="The way to use the autogenerated ```HaloContentQueryApi``` is the same as in the general content API." %}

```java
//...
HaloContentQueryApi.with(haloInstance).selectByTitle("My article title.")
    .asContent(Article.class)
    .execute(new CallbackV2<List<Article>>() {
        @Override
        public void onFinish(@NonNull HaloResultV2<List<Article>> result) {
            if(result.data().size()!=0){
                populateArticles();
            }
        }
    });
//...
```

If you want to go in deep into this module, please refer to [the detailed documentation](./android_content_generated_api.html).

---
title: Android SDK - Content SDK Detailed APIs
keywords: android, content, getting started, halo, instance, module, edit content, create content, delete content, update content, detailed
last_updated: January 10, 2017
tags: [content, edit content, user content]
sidebar: android_sidebar
permalink: android_edit_content_detailed_api.html
folder: android
---

Here you can find fine grained explanations for every public param of the edit content SDK. The rest of the library is obfuscated over proguard and only intended methods are public and properly named although the code is (and will be) Open Source.

With the edit content API you can add, modify or delete general content instances if you have appropiate credentials. See [Halo Auth API](./android_auth_overview.html) to get apropiate credentials.

## HaloContentInstance

To create, update or delete a general content instance on the server you must provide a valid ```HaloContentInstance```. You have to use the fluent API to create a valid object through  ```Builder``` pattern by calling ```HaloContentInstance.builder()```. 

The build object is parcelable and so you can send it across activities if needed.

```java
HaloContentInstance.Builder instanceBuilder = new HaloContentInstance.Builder(moduleName)
    .withId(instanceId)
    .withModuleId(moduleId)
    .withPublishDate(publishDate)
    .withName(instanceName)
    .withContentData(values);
```

Here you have the complete list of methods you can use to create a ```HaloContentInstance.Builder```.

| HaloContentInstance| Explanation |
|--------------|-------------|
| **withId** | the item id to use on update or delete operations. |
| **withModuleId** | the module id. |
| **withAuthor** | the instance author. |
| **withName** | the name of the content item. |
| **withTags** | the segmentation tags to the content instance. |
| **withContentData** | the content values of the instance. |
| **withCreationDate** | the creation date. |
| **withLastUpdateDate** | the last update date. |
| **withPublishDate** | the publish date. |
| **withRemovalDate** | the removal date shceduled. |




The ```withContentData``` method will accept a Map of values or a properly annotated class. 

### Map values

Simply map the values.

```java
Map<String,Object> values = new HashMap<>();
values.put("title","the title");
values.put("pubDate", "01/10");

HaloContentInstance.Builder instanceBuilder = new HaloContentInstance.Builder(moduleName)
    .withId(instanceId)
    .withModuleId(moduleId)
    .withPublishDate(publishDate)
    .withName(instanceName)
    .withContentData(values);
```

### Annotated class

Create your custom class with the fields properly annotated to map with the values.

```java
@JsonObject
public class MyObjectAnnotated implements Parcelable {

    @JsonField(name = "title")
    String mTitle;

    @JsonField(name = "pubDate")
    Date mDate;

    ...
}
```
{% include important.html content="Remember to annotate the class with the correct annotations from LoganSquare. Please refer to [LoganSquare documentation](https://github.com/bluelinelabs/LoganSquare) for more details." %}

```java
MyObjectAnnotated myObject = new MyObjectAnnotated(title, pubDate);

HaloContentInstance.Builder instanceBuilder = new HaloContentInstance.Builder(moduleName)
    .withId(instanceId)
    .withModuleId(moduleId)
    .withPublishDate(publishDate)
    .withName(instanceName)
    .withContentData(values);
```

Finally to create the ```HaloContentInstance``` call the build method.

```java
HaloContentInstance haloContentInstance = instanceBuilder.build();
```

## Operations

{% include tip.html content="If you want to receive updates about sync process please remember to subscribe. The ```HaloEditContentApi``` perfoms internally a sync after every requested operation. Please refer to [sync process documentation](./android_content_detailed_api.html#sync) to know more about sync." %}

```java
ISubscription mSyncSubscription = HaloContentApi.with(halo).subscribeToSync(moduleName,this);
```

### Add content

With the ```addContent``` method you can add new general content instances on the HALO Backend. To create a general content instance on the server you must provide a new valid ```HaloContentInstance```. The result will provide feedback about any error (authentication, parsing or network exception) during the request or the result parsed as ```HaloContentInstance```.


```java
HaloContentEditApi.with(halo)
    .addContent(haloContentInstance)
    .threadPolicy(Threading.POOL_QUEUE_POLICY)
    .execute(new CallbackV2<HaloContentInstance>() {
        @Override
        public void onFinish(@NonNull HaloResultV2<HaloContentInstance> result) {
            if(result.status().isSecurityError()){
               //there is an authentication error. Notify user to login.
            } else {
                if(result.data()!=null) {
                    //handle result of the add operation.                
                }
            }
        }
     });
```

### Update Content

With the ```updateContent``` method you can update current general content instances on the HALO Backend. To update a general content instance on the server you must provide the ```HaloContentInstance``` to perfom the update. The result will provide feedback about any error (authentication, parsing or network exception) during the request or the result parsed as ```HaloContentInstance```.


```java
HaloContentEditApi.with(halo)
    .updateContent(haloContentInstance)
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

### Delete Content

With the ```updateContent``` method you can remove current general content instances on the HALO Backend. To delete a general content instance on the server you must provide the ```HaloContentInstance``` to perfom the removal operation. The result will provide feedback about any error (authentication, parsing or network exception) during the request or the result parsed as ```HaloContentInstance```.


```java
HaloContentEditApi.with(halo)
    .deleteContent(haloContentInstance)
    .threadPolicy(Threading.POOL_QUEUE_POLICY)
    .execute(new CallbackV2<HaloContentInstance>() {
        @Override
        public void onFinish(@NonNull HaloResultV2<HaloContentInstance> result) {
            if(result.status().isSecurityError()){
               //there is an authentication error. Notify user to login.
            } else {
                if(result.data()!=null) {
                    //handle result of the delete operation.                
                }
            }
        }
     });
```

### Batch operations
 
When you need to perfom multiple operations like add, modify or remove content instances in advanced use cases you must use the batch operation method. You need to provide a ```BatchOperations``` which contains all the operations to perfom.

Saving engine will handle two ways of saving changes:

* Directly by trying to make the call and failing if it is not possible giving a callback with ```BatchOperationResults``` which contains all opertions result ordered by operation type.
* In background so it is done when the internet connection is ready again by storing modifications in local temporarily. SDK user will be notified with a notification event if user was subscribed to receive this events.

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
You should subscribe to batch events if you want to receive notifications with conflict operations (when server has a newer version of the instance) or to receive a notification event when the SDK tried to retry a previous batch operation that failed.

{% include important.html content="Please remember to keep a reference to the subscrition." %}

```java
ISubscription subscription = HaloContentEditApi.with(halo)
    .subscribeToBatch(new HaloContentEditApi.HaloBatchListener() {
        @Override
        public void onBatchConflict(@Nullable BatchOperations operations) {
            //handle conflict operations as you need
        }
  
        @Override
        public void onBatchRetrySuccess(@NonNull HaloStatus status, @Nullable BatchOperationResults operations) {
           //handle operations after internet connection works again
        }
    });
```
{% include important.html content="Please remember to unsbscribe from events when your are done to avoid leaking" %}

```java
subscription.unsubscribe();
```


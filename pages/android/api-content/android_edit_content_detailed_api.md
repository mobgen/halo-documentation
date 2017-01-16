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

## HaloEditContentOptions

To create, update or delete a general content instance on the server you must provide a valid ```HaloEditContentOptions```. You have to use the fluent API to create a valid object through  ```Builder``` pattern by calling ```HaloEditContentOptions.builder()```. 

The build object is parcelable and so you can send it across activities if needed.

```java
HaloEditContentOptions.Builder instanceBuilder = new HaloEditContentOptions.Builder(moduleName)
    .withId(instanceId)
    .withModuleId(moduleId)
    .withPublishDate(publishDate)
    .withName(instanceName)
    .withContentData(values);
```

Here you have the complete list of methods you can use to create a ```HaloEditContentOptions.Builder```.

| HaloEditContentOptions| Explanation |
|--------------|-------------|
| **withId** | the item id to use on update or delete operations. |
| **withModuleId** | the module id. |
| **withName** | the name of the content item. |
| **withTags** | the segmentation tags to the content instance. |
| **withContentData** | the content values of the instance. |
| **withPublishDate** | the publish date. |
| **withRemovalDate** | the removal date shceduled. |

The ```withContentData``` method will accept a Map of values or a properly annotated class. 

### Map values

Simply map the values.

```java
Map<String,Object> values = new HashMap<>();
values.put("title","the title");
values.put("pubDate", "01/10");

HaloEditContentOptions.Builder instanceBuilder = new HaloEditContentOptions.Builder(moduleName)
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

HaloEditContentOptions.Builder instanceBuilder = new HaloEditContentOptions.Builder(moduleName)
    .withId(instanceId)
    .withModuleId(moduleId)
    .withPublishDate(publishDate)
    .withName(instanceName)
    .withContentData(values);
```

Finally to create the ```HaloEditContentOptions``` call the build method.

```java
HaloEditContentOptions haloEditContentOptions = instanceBuilder.build();
```

## Operations

{% include tip.html content="If you want to receive updates about sync process please remember to subscribe. The ```HaloEditContentApi``` perfoms internally a sync after every requested operation. Please refer to [sync process documentation](./android_content_detailed_api.html#sync) to know more about sync." %}

```java
ISubscription mSyncSubscription = HaloContentApi.with(MobgenHaloApplication.halo()).subscribeToSync(moduleName,this);
```

### Add content

With the ```addContent``` method you can add new general content instances on the HALO Backend. To create a general content instance on the server you must provide a new valid ```HaloEditContentOptions```. The result will provide feedback about any error (authentication, parsing or network exception) during the request or the result parsed as ```HaloContentInstance```.


```java
HaloContentEditApi.addContent(haloEditContentOptions)
    .threadPolicy(Threading.POOL_QUEUE_POLICY)
    .execute(new CallbackV2<HaloContentInstance>() {
        @Override
        public void onFinish(@NonNull HaloResultV2<HaloContentInstance> result) {
            if(result.status().isAuthenticationError()){
               //there is an authentication . Notify user to login.
            } else {
                if(result.data()!=null) {
                    //handle result of the add operation.                
                }
            }
        }
     });
```

### Update Content

With the ```updateContent``` method you can update current general content instances on the HALO Backend. To update a general content instance on the server you must provide the ```HaloEditContentOptions``` to perfom the update. The result will provide feedback about any error (authentication, parsing or network exception) during the request or the result parsed as ```HaloContentInstance```.


```java
HaloContentEditApi.updateContent(haloEditContentOptions)
    .threadPolicy(Threading.POOL_QUEUE_POLICY)
    .execute(new CallbackV2<HaloContentInstance>() {
        @Override
        public void onFinish(@NonNull HaloResultV2<HaloContentInstance> result) {
            if(result.status().isAuthenticationError()){
               //there is an authentication . Notify user to login.
            } else {
                if(result.data()!=null) {
                    //handle result of the update operation.                
                }
            }
        }
     });
```

### Delete Content

With the ```updateContent``` method you can remove current general content instances on the HALO Backend. To delete a general content instance on the server you must provide the ```HaloEditContentOptions``` to perfom the removal operation. The result will provide feedback about any error (authentication, parsing or network exception) during the request or the result parsed as ```HaloContentInstance```.


```java
HaloContentEditApi.deleteContent(haloEditContentOptions)
    .threadPolicy(Threading.POOL_QUEUE_POLICY)
    .execute(new CallbackV2<HaloContentInstance>() {
        @Override
        public void onFinish(@NonNull HaloResultV2<HaloContentInstance> result) {
            if(result.status().isAuthenticationError()){
               //there is an authentication . Notify user to login.
            } else {
                if(result.data()!=null) {
                    //handle result of the delete operation.                
                }
            }
        }
     });
```


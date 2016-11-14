# Halo Content SDK: Detailed documentation

Here you can find fine grained explanations for every public param of the content SDK. The rest of the library is obfuscated over proguard and only intended methods are public and properly named although the code is (and will be) Open Source.

## Search
With the search query you can request some instances from the HALO Backend based on some query parameters. See the Search query section for all the available params.

```java
HaloContentApi api = HaloContentApi.with(halo);
api.search(Data.NETWORK_AND_STORAGE, query)
	.asContent()
	.execute(callback);
```

### Search Query
The ```SearchQuery``` object supports many params to help in the search task. To create a new instance of the ```SearchQuery``` you have to use the ```Builder``` pattern by calling ```SearchQuery.builder()```. The build object is parcelable and so you can send it across activities if needed.

Here you can find the full list of options you can chain into the ```SearchQuery```:

- **moduleName**: requests a module by its name. You must owe it and it must be available for client applications.
- **moduleIds**: the list of module ids to request.
- **instanceIds**: the list of instance ids to request.
- **pickFields**: filters the values returned from the api, so it will not send more information than the needed by the application.
- **segmentMode**: specifies how the segmentation should work against the tags. It can take two values: ```PARTIAL_MATCH```or  ```TOTAL_MATCH```. Partial match checks if there is at least one tag in the content provided while total match ensures the content retrieved contains all the tags provided.
- **tags**: segmentation tags to apply to this content. This param is related to the segmentMode one since it selects and segments the content based on those tags.
- **setDevice**: applies all the tags from the current device and matches the segment mode to PARTIAL_MATCH if no mode was set. Refer to the segmentMode param.
- **segmentWithDevice**: applies automatically the current device in the core to the search specified.
- **populateAll**: if there are fields with relations, they are populated.
- **populate**: a list of the fields that should be populated.
- **beginSearch/end**: syntax declaration to make custom queries inside the content info. For example, if we have instances in halo with two fields, name and amount, we would be able to filter the searched instances based in both values.
- **beginMetaSearch/end**: it has the same concept as the search but allows the user to filter based on meta-data of the instance, such as the updated time or the instance name.
- **searchTag**: tag name that will be used as an id for offline caching. This allows to override previous search data tagging them. It is useful for searches that include timestamps, since those searches would generate much more content than the needed for offline.
- **locale**: the locale specified for localized fields. If no locale is provided an object with all the locales will be provided for the given field.
- **ttl**: time that the content should remain available offline.
- **pagination**: indicates which page and which limit should be requested to get the instances.
- **onePage**: allows to make a request with a single page. It is equivalent to make the request without pagination but provides the information as if you did it in a single page. The priority of this param is higher than the pagination one.

In the beginSearch/end and beginMetaSearch/end parameters there are many query parameters supported. Here you have an index on how to use them and an example.

- **and**: adds a condition to make both expression work together with an and condition.
- **or**: adds a contition to make both expressions work together with an or condition.
- **in**: check if the field has the values provided inside it.
- **nin**: ensures the field has not the values inside.
- **eq**: checks fields that are equals to the given value.
- **neq**: checks the fields are not equals to the given value.
- **lt**: checks the value is less than the provided value.
- **lte**: checks the value is less than or equals the provided value.
- **gt**: checks the value is greater than the provided value.
- **gte**: checks the value is greater than or equals the provided value.
- **beginGroup**: begins a parenthesis group.
- **endGroup**: ends a parenthesis group.

**Custom search sample**

```java
SearchQuery.builder()
    .beginSearch()
        .in("name", listOfNames)
        .and()
        .beginGroup()
            .nin("name", bannedNames)
            .and()
            .eq("active", "Activated")
        .endGroup()
    .end()
    .build();
```

> If the expression built for the search is not correct it will throw a Runtime exception.

### Data provider
The search supports 3 modes to select the source where the content comes from:

- **Data.NETWORK_ONLY**: this would be the simplest one. Just does the request and provides you the result.
- **Data.NETWORK_AND_STORAGE**: in this case the data is brought from network, stored in the local storage and retrieved to the user.
- **Data.STORAGE_ONLY**: this option provides only the cached data for the given request.

### Data parsing
When you call the ```api.search``` method you are not actually doing the request, it provides you an object that can be further configured to bring the data in the format you expect. In this case you have 3 different options:

- **asRaw()**: provides a cursor you can parse by your own. Usually this will not be used unless you need some sort of performance critical task in a list.
- **asContent()**: provides a ```HaloContentInstance``` list. This can be useful if you need to check also the metadata. To parse it to a custom class you can use the following operation on each instance:
```java
HaloContentHelper.from(instance, MyCustomClass.class, halo.framework().parser());
```
- **asContent(Class<T> clazz)**: this is the typical configuration you will need. Just pass your custom class to the content parameter and it will parse the list for you directly from the json received. Also the class must be annotated with ```@JsonObject``` and the fields with ```@JsonField```. Refer to [LoganSquare documentation](https://github.com/bluelinelabs/LoganSquare) for more details.

## Sync
When a given module has so many items that handling them takes too much time or you want to have some content available in the background for the user, synchronization can make that work for you.

The process of the synchronization is the following:

- Subscribe to the synchronization hub to ensure when the synchronization process is done.
```java
HaloContentApi contentApi = HaloContentApi.with(halo);
ISubscription subscription = contentApi.subscribeToSync(moduleName, new HaloSyncListener() {
    @Override
    public void onSyncFinished(@NonNull HaloStatus status, @Nullable HaloSyncLog log) {
    	if(log != null){
        	Log.i("Sync", log.toString());
        } else {
        	Log.e("Sync", "Error " + status);
        }
    }
});

```
- Then you can request an internal module name to be synced:
```java
SyncQuery query = SyncQuery.create("my module name", Threading.POOL_QUEUE_POLICY);
contentApi.sync(query);
```

- You can then get the instances of the synced module even if you are offline:
```java
contentApi.getSyncInstances("my module name")
	.asContent(MySampleClass.class)
	.execute(callback);
```

- Remember to unsubscribe from the ```Subscription``` created when you are done, this will avoid possible memory leaks:
```java
subscription.unsubscribe();
```

- For debugging purposes, we keep a log for all the synchronizations that are done by an application. You can take them by module or all using the following call:
```java
contentApi.getSyncLog("my module name")
	.asContent()
	.execute(callback);
```
- Finally you can remove your stored data for a given module using:
```java
contentApi.clearSyncInstances("my module name")
	.asContent()
	.execute(callback);
```

The result provided by all the callbacks is a HaloResult as many other calls, so you can always take advantage of the state of the data and the possible errors that can appear, whether they are from the database or network.

## Execution options
This api supports some execution options based on the sdk. Checkout them to see how productive you can be.

### Threading
Almost every request supports the threading more. This mode allows you to select which is the threading context in which the request will be executed. Lets say you are already in another thread and you don't want to spawn another one, with this param you can specify this behavior. There are 3 modes supported:

- **Threading.POOL_QUEUE_POLICY**: spawns a new thread into a thread pool that will be executed as soon as possible.
- **Threading.SINGLE_QUEUE_POLICY**: spawns a new thread into a thread queue that will execute it once the other threads enqueued free the queue.
- **Threading.SAME_THREAD_POLICY**: does not spawn a thread, it uses the same context as it was called so everything will be executed synchronously.

### Content parsing
We use LoganSquare for performance reasons inside our sdk. It allows us to parse really fast and without too much methods (avoiding the method count limit). Here we are providing a sample of how to annotate some content to parse it properly. Refer to [LoganSquare documentation](https://github.com/bluelinelabs/LoganSquare) for more details.

**Mapping sample**

```java
@JsonObject
public class Article {

    @JsonField(name = "Title")
    public String mTitle;
    
    @JsonField(name = "Date")
    public Date mDate;
    
    @JsonField(name = "ContentHtml")
    public String mArticle;

    @JsonField(name = "Summary")
    public String mSummary;

    @JsonField(name = "Thumbnail")
    public String mThumbnail;

    @JsonField(name = "Image")
    public String mImage;
}
```

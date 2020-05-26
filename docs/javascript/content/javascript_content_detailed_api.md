---
title: Detailed APIs
---

Here you can find fine grained explanations for every public param of the content SDK. The rest of the library is obfuscated over proguard and only intended methods are public and properly named although the code is (and will be) Open Source.

## Search

With the search query you can request some instances from the HALO Backend based on some query parameters. See the Search query section for all the available params.

```javascript
import { content } from 'halo-sdk-js';

await content.search(searchQuery);
```

### Search Query

The ```searchValues``` object supports many params to help in the search task. To create a new instance of the ```searchValues``` you have to use the ```Builder``` pattern by calling ```new content.QueryBuilder()```. The build object is parcelable and so you can send it across activities if needed.

Here you can find the full list of options you can chain into the ```searchValues```:

| Search param | Explanation |
|--------------|-------------|
| **moduleName** | requests a module by its name. You must owe it and it must be available for client applications. |
| **moduleIds** | the list of module ids to request. |
| **setTags** | segmentation tags to apply to this content. This param is related to the segmentMode one since it selects and segments the content based on those tags. |
| **setDevice** | applies all the tags from the current device and matches the segment mode to ```PARTIAL_MATCH``` if no mode was set. Refer to the segmentMode param. |
| **setSearchValuesQuery** | syntax declaration to make custom queries inside the content info. For example, if we have instances in halo with two fields, name and amount, we would be able to filter the searched instances based in both values. |
| **setMetaSearch** | it has the same concept as the search but allows the user to filter based on metadata of the instance, such as the updated time or the instance name. |
| **setSlowSearch** | to allow to search in more complex fields. |

In the setSearchValuesQuery and setMetaSearch parameters there are many query parameters supported. Here you have an index on how to use them and an example.

| Search condition | Explanation |
|--------------|-------------|
| **&&** | Adds a condition to make both expression work together with an and condition. |
| **ll** | Adds a condition to make both expressions work together with an or condition. |
| **in** | Check if the field has the values provided inside it. |
| **!in** | Ensures the field has not the values inside. |
| **=** | Checks fields that are equals to the given value. |
| **!=** | Checks the fields are not equals to the given value. |
| **<** | Checks the value is less than the provided value. |
| **=<** | Checks the value is less than or equals the provided value. |
| **>** | Checks the value is greater than the provided value. |
| **=>** | Checks the value is greater than or equals the provided value. |
| **like** | Search a value that match with the provided value (you must provide at least 3 characters).  |
| **(** | Begins a parenthesis group. |
| **)** | Ends a parenthesis group. |

**Custom search sample**

```java
builder = new content.QueryBuilder();

searchQuery = builder
    .setSearchValuesQuery('name in listOfNames && (name !in bannedNames && active = Activated)')
    .build()
```

> If the expression built for the search is not correct it will throw a Runtime exception.


### Data parsing
When you call the ```content.search``` method you are making the request, it returns a Promise with the content.


## Sync
When a given module has so many items that handling them takes too much time or you want to have some content available in the background for the user, synchronization can make that work for you by storing it in one of the three storage options we provide.


* ```memory``` (default)
* ```session```
* ```localstorage```

| Parameter name                 | Explanation                                                                                                                                                        |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **moduleName** (Required)  | This field specifies the module you want to synchronize. |
| **locales** (Optional)| This field specifies the locales you want to use to synchronize. |
| **storage** (Optional) ```['localstorage', 'session', 'memory']```| This field specifies what kind of browser storage you want to use to store the data. Defaults to ```memory```. |
| **refreshFromServer** (Optional)    | This field specifies if you want to get the new data from the server, or use the data from the browser storgage. By default ```true```. |

The process of the synchronization is the following:

- You can request an internal module name to be synced:

```java
await content.syncModule('my module name', 'en-US', 'session', true);
```

- You can then get the instances of the synced module even if you are offline:

```java
await content.syncModule('my module name', 'en-US', 'session', false);
```

The results from the sync is a Promise within the list of instances.

## Get
When you want to request all the content modules, use the ```getModules``` function.


| Parameter name                 | Explanation                                                                                                                                                        |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **withFields** (Optional)  | This field specifies if you want to add the module fields. |

```java
await content.getModules(true);
```


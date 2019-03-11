---
title: Overview
---

[![Download](https://api.bintray.com/packages/halo-mobgen/maven/HALO-Content/images/download.svg) ](https://bintray.com/halo-mobgen/maven/HALO-Content/_latestVersion)

## Content API

To start using the content API, you just import the content module from the HALO SDK.

```javascript
import { content } from 'halo-sdk';
```

## Content API methods

The content API is the facade for the Content HALO SDK. Using this module will need a valid HALO configuration.
The HALO Content SDK allows the user to retrieve instances from the HALO Backend in three main ways:

* Search
* Sync
* Get

> **Tip:** Use the search method to get conent when you want to get some concrete elements, segmented data or certain information.

> **Tip:** Use the sync method if you prefer to download the whole module to use if offline. It is better for performance than search.

### Search
If you want to bring certain data based on some criteria or search some of them in the HALO Backed, you have to use the search operation in the API. To do that we provide a class called ```QueryBuilder``` with a simple fluent API that allows you to specify the criterias for the search. Once selected, you can perform the search and it will return a Promise. See the example below:

```java
query = new QueryBuilder()
	.setModuleName('myModuleName')
        .setSearchValuesQuery('name = Sample')
	.build();

searchResult = await content.search(query);
```

This search will request all the instances for the module name "myModuleName" and which body contains a name with the value "Sample". Check out the rest of the available options in [the detailed documentation](./javascript_content_detailed_api).

> **Warning:** The query builder search will return all results available including deleted or draft items. You must provide the appropiate query to return only published ones.

### Sync
The sync operation is thought for performance critical tasks. It allows to synchronize a full module consuming the less amount of data possible.

Syncing involves three steps:

* Requesting a sync for a module.
* Requesting synced local instances.

Check out the following example for a full sync lifecycle:

**Request a sync for a module**

```java
await content.syncModule('my module name', 'en-US', 'session', true);
```

**Request the synced instances**

```java
await content.syncModule('my module name', 'en-US', 'session', false);
```

If you want to go in deep into this module, please refer to [the detailed documentation](./javascript_content_detailed_api).

### Get
The get operation allows to get all the content modules. You can specify if you want to request with fields or without.

```java
await content.getModules(true);
```


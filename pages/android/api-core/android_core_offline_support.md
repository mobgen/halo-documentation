---
title: Android SDK - Offline support
keywords: android, offline, content, core, database, strategy, request
last_updated: November 15, 2016
tags: [core]
sidebar: android_sidebar
toc: false
permalink: android_core_offline_support.html
folder: android
---

The SDK supports an offline database that caches the responses for many requests and provides some cached data when the device is offline or cannot stablish a connection.

Most of the requests support a flag to tell the request how it should be synchronized with the server and which kind of that should provide. This flags belong to the ```Data``` class and can take the following values:

* **NETWORK_AND_STORAGE**: Will make the request and cache the response, providing this cached response. If the device has no internet connection will provide the previously cached response, or nothing if there is no data inside.
* **NETWORK_ONLY**: Will make the request to the network and provide the same data received bypassing the cache.
* **STORAGE_ONLY**: Will get the cached data no matter if there is internet connection or not in the device.

The result of a request using the sync engine comes in a ```HaloResultV2``` which contains two methods:
* **status()**: Provides the status of the data. It allows you to know if there was any error while performing the operation and the status of the thata (wether it is fresh, local or inconsistent).
* **data()**: Provides the data brought. It can be null if there was an error or no data is cached while in offline mode. You must always nullcheck it.

The callback for an operation comes only with one method which is ```onFinish``` and receives a ```HaloResultV2``` with the status and the data.

## Example
```java
halo.core().manager().getModules(Data.NETWORK_AND_STORAGE)
	.asContent()
	.threading(Threading.POOL_QUEUE_POLICY)
	.execute(new CallbackV2<List<HaloModule>>() {
	  @Override
	  public void onFinish(@NonNull HaloResultV2<List<HaloRemoteModule>> result) {
	      if(result.status().isSuccess()){
	          showData(result)
	      }else{
	          showError(result)
	      }
	  }
	});
```

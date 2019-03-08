---
title: Android SDK - Pocket SDK Overview
keywords: android, auth, identified user, pocket, reference filter, custom class, custom data
last_updated: June 23, 2017
tags: [pocket]
sidebar: android_sidebar
permalink: android_pocket_api.html
folder: android
---

## Pocket API

The pocket API is the way to store and fetch data from identified users. Importing this library will need a valid HALO instance configured and the you will need a valid identified user credentials to create pocket request.

It is fairly recommendable to create the instance as a singleton in your application class or using Dagger after installing HALO. Creating an instance of the Pocket API is really simple once you have your HALO running. Just write the following lines:

```java
HaloPocketApi pocketApi = HaloPocketApi.with(haloInstance)
                .build();
```
Also you can get a instance of HaloPocketApi from the Auth API as follows:

```java
HaloPocketApi pocketApi = authApi.pocket();
```


As you can see there are some methods that you can use to get or save the pocket data. In the following list you will find an explanation for each of those:

| Method name           | Explanation 																						|
|-----------------------|---------------------------------------------------------------------------------------------------|
| **get**  				| It does the request with ReferenceFilter.all() and fetches all custom data  and filter references.|
| **getData** 			| It does the request with ReferenceFilter.noReferences() to avoid fetching all the references. 	|
| **getReference**      | Fetch all filter references but without all user custom data. 									|
| **save** 				| Update the pocket data and references.															|
| **saveData** 			| Update the custom data of the pocket.																|
| **saveReference** 	| Update the references of the pocket.																|


## Simple use

You can fetch the data in several ways (all, only references, only data as JSON or only data as your custom model).

First get the ```HaloPocketApi``` instance

```java
HaloPocketApi pocketApi = authApi.pocket();
```

### Get data from identified user.

#### Get all data

```java
//get the pocket data (user custom data and filter references)
pocketApi.get().execute(new CallbackV2<Pocket>() {
            @Override
            public void onFinish(@NonNull HaloResultV2<Pocket> result) {
               //handle the result     	    
            }
        });
```

#### Get references 

```java
//set the filter references 
ReferenceFilter referenceFilter = new ReferenceFilter.Builder().filters("favorites").build();
//get the pocket data (user custom data and filter references)
pocketApi.getReferences(referenceFilter).execute(new CallbackV2<List<ReferenceContainer>>() {
            @Override
            public void onFinish(@NonNull HaloResultV2<List<ReferenceContainer>> result) {
                //handle the result
            }
        });
```

#### Get data as custom model

```java
pocketApi.getData()
	.asCustomData(MyModel.class)
	.execute(new CallbackV2<MyModel>() {
            @Override
            public void onFinish(@NonNull HaloResultV2<MyModel> result) {
                //handle the result
            }
        });
```

#### Get data as Pocket


```java
pocketApi.getData()
	.asPocket()
	.execute(new CallbackV2<Pocket>() {
            @Override
            public void onFinish(@NonNull HaloResultV2<Pocket> result) {
                //handle the result
            }
        });
```


### Update identified user data.

#### Save all data

```java
//create the pocket
Pocket pocket = new Pocket.Builder()
                .withData(userDummy)
                .withReferences(referenceContainer)
                .build();
//get the pocket data (user custom data and filter references)
pocketApi.save(pocket).execute(new CallbackV2<Pocket>() {
            @Override
            public void onFinish(@NonNull HaloResultV2<Pocket> result) {
               //handle the result     	    
            }
        });
```

#### Save references 

To save references you will have the following options:

* If you set a array with content you will modify this reference or create a new one if this one doesn't exists.
* If you set an empty array into the list of references on the ReferenceContainer then you will empty this reference.
* If you set to null the list of references on the ReferenceContainer then you will delete this reference.

```java
//set the filter references 
ReferenceContainer referenceContainer = new ReferenceContainer("mycollection", null);
//get the pocket data (user custom data and filter references)
pocketApi.saveReferences(referenceContainer).execute(new CallbackV2<List<Pocket>>() {
            @Override
            public void onFinish(@NonNull HaloResultV2<List<Pocket>> result) {
                //handle the result
            }
        });
```

#### Save data as custom model

```java
pocketApi.saveData(myModelClassInstance)
	.execute(new CallbackV2<Pocket>() {
            @Override
            public void onFinish(@NonNull HaloResultV2<Pocket> result) {
                //handle the result
            }
        });
```


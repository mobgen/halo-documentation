---
title: Manager API
---

## API definition

The manager plugin is in charge to all the management actions that can be done in the core, such as changing the tags 
of the device or requesting the modules that belongs to the current application.

In this guide you will find an explanation of the api available methods. To create an instance for the manager API you should use:
```java
Halo.core().manager();
```

| Method name                    | Functionality                                                                                                                                                      |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| storage                        | Provides the current storage api                                                                                                                                   |
| getModules                     | Provides the modules that belongs to the current application. You can decide if this request supports offline and also in which thread this request should be done |
|printModulesMetaData            | This method is intented for development purposes and provides all modules metadata information from network into the log                 |
| getServerVersion               | Provides the server version for the current sdk. This tells if the sdk is outdated or not                                                                          |
| requestToken                   | Requests a new authentication token                                                                                                                                |
| isAppAuthentication            | Tells if the current authentication is based in the app credentials                                                                                                |
| isPasswordAuthentication       | Tells if the current authentication is based in the password credentials                                                                                           |
| syncDevice                     |  Syncs the current device with the device in HALO                                                                                                                  |
| subscribeForDeviceSync         | Subscribes for the device update                                                                                                                                   |
| syncDeviceWhenNetworkAvailable | Synchronizes the device stored with the one in the server once the network is available. In this case callback is not allowed                                      |
| sendDevice                     | Updates the device that is present in the core sending it to the server                                                                                            |
| getCurrentDevice               | Provides the current cached device                                                                                                                                 |
| addDeviceTag                   | Adds a new tag to the device to segment information and syncs it                                                                                                   | 
| addDeviceTags                  | Adds multiple tags to the device and syncs it                                                                                                                      | 
| removeDeviceTag                | Removes a tag from the device and syncs it                                                                                                                         | 
| removeDeviceTags               | Removes multiple tags                                                                                                                                              |
| sendEvent                      | Send tracking analytic events of the current user.                                                       |

## Example: request the modules

Here is a full example on how to request the modules for the current app:

```java
halo.core().manager()
    .getModules(Data.NETWORK_AND_STORAGE)
    .asContent()
    .threadPolicy(Threading.POOL_QUEUE_POLICY)
    .execute(new CallbackV2<List<HaloModule>>() {
        @Override
        public void onFinish(@NonNull HaloResultV2<List<HaloModule>> result) {
			//Manage the result
		}
	});
```

## Example: request the modules metadata information

Here is a full example on how to request the modules metadata for the current app:

```java
//print module metadata into log
halo.core().manager()
    .printModulesMetaData();
```

## Example: Add a device tag

Here is the full example to add a tag to the current device and sync this device with HALO:

```java
HaloSegmentationTag tagToAdd = new HaloSegmentationTag("myNewTagName","myNewTagValue");
halo.core().manager()
    .addDeviceTag(tagToAdd)
    .threadPolicy(Threading.POOL_QUEUE_POLICY)
    .execute(new CallbackV2<Device>() {
		@Override
	    public void onFinish(@NonNull HaloResultV2<Device> result) {
			//Do something with the new device
		}
	});
```

## Example: Send event

Here is the full example to send a analytic event to HALO:

```java
//create custom object to send as an extra
HashMap<String, Object> eventValues = new HashMap<>();
eventValues.put("idUser", userId);
eventValues.put("userName",userName);
//create halo event to send
HaloEvent event = HaloEvent.builder()
        .withType(HaloEvent.REGISTER_LOCATION)
        .withLocation(locationAsString) //locationAsString = "lat,long"
        .withExtra(eventValues)
        .build();
//send event
halo.core().manager()
        .sendEvent(event)
        .execute(new CallbackV2<HaloEvent>() {
            @Override
            public void onFinish(@NonNull HaloResultV2<HaloEvent> result) {
                //do something with the event            
            }
        });
```

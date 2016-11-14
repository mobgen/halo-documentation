# Manager: modules, tags and device

The manager plugin is in charge to all the management actions that can be done in the core, such as changing the tags of the device or requesting the modules that belongs to the current application.

In this guide you will find an explanation of the api available methods. To create an instance for the manager API you should use:
```java
Halo.core().manager();
```

- **storage**: provides the current storage api.
- **getModules**: provides the modules that belongs to the current application. You can decide if this request supports offline and also in which thread this request should be done.
- **getServerVersion**: provides the server version for the current sdk. This tells if the sdk is outdated or not.
- **requestToken**: requests a new authentication token.
- **isAppAuthentication**: tells if the current authentication is based in the app credentials.
- **isPasswordAuthentication**: tells if the current authentication is based in the password credentials.
- **syncDevice**: syncs the current device with the device in HALO.
- **subscribeForDeviceSync**: subscribes for the device update.
- **syncDeviceWhenNetworkAvailable**: synchronizes the device stored with the one in the server once the network is available. In this case callback is not allowed.
- **sendDevice**: updates the device that is present in the core sending it to the server.
- **getCurrentDevice**: provides the current cached device.
- **addDeviceTag**: adds a new tag to the device to segment information and syncs it.
- **addDeviceTags**: adds multiple tags to the device and syncs it.
- **removeDeviceTag**: removes a tag from the device and syncs it.
- **removeDeviceTags**: removes multiple tags.

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

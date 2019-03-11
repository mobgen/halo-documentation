---
title: Rich push notifications
---

Starting in iOS 10, push notifications can now be enhanced by adding multimedia content.

![](/img/ios/push_notifications/rich_push_sample.png)

In order for it to work and make your app capable of receiving these rich push notifications, there are several configuration steps to be performed.

## Configuration

### Creating an App Group

The first step will be creating what Apple defines as an **App Group**, which is an identifier that will allow to create and identify shared containers so that apps and extensions can share content. The reason behind this is the need for the extension to download images in the background and store them in a place which can later be accessed.

In order to do that, the app group **group.com.mobgen.halo** (that exact one, it is the one the SDK will look for) will need to be created wihin the section *App Groups* in the Developer Portal.

![](/img/ios/push_notifications/app_group.png)

### Creating a new App ID for the extension

Once the App Group is created, the next step will be to add a new **App ID** for the extension. Extensions define new bundle ids (which share the first portion with the hosting app) that will have to be set up also in the Apple Developer Program.

In this case, in the sample image, the identifier chosen for the extension is **richpush**, which will be embedded within a demo app, hence the full bundle id will be **com.mobgen.halo.demo.richpush**.

![](/img/ios/push_notifications/developer_portal_1.png)

You will also need to make sure that both the extension app ID and also the hosting app ID, have the App Groups service enabled, as shown in the following images.

![](/img/ios/push_notifications/app_id_1.png)

And remember to associate the appropriate App Group to the App ID.

![](/img/ios/push_notifications/app_id_2.png)

### Creating a Notification Service Extension

This new feature is achieved through a *Notification Service Extension*, which allows the modification of a push notification prior to being shown. This service extension is added to the app as a new target, so the first step will be adding a new target and selecting the *Notification Service Extension* template when asked.

![](/img/ios/push_notifications/target_1.png)

After that, a few settings need to be specified for the new target. Make sure that the extension is set to be embedded in your application.

![](/img/ios/push_notifications/target_2.png)

Once the extension has been created, double check that the bundle identifier is the one it has been created in previous steps.

![](/img/ios/push_notifications/target_3.png)

Another thing to check is that both the hosting app and the extension have the *App Groups* capability enabled and with the right group(s) selected.

![](img/ios/push_notifications/capabilities.png)

### Search paths

Remember to check that both the hosting app and the extension will need to have the `Framework Search Paths` and `Header Search Paths` correctly set (including the path to the Carthage folder, where the Firebase dependencies are downloaded).

## Implementation

### Dependencies

As of iOS 10.0, a new framework - `UserNotification.framework` - has been added in order to handle everything related to push notifications. Hence, that dependency needs to be added when targeting iOS 10+ devices.

### Coding

When creating the service extension, a sample file with some code in it will be automatically created by Xcode. The HALO Notifications SDK already provides this feature implemented, so that no extra processing needs to be done by the developer.

All the code in that sample file can be replaced by the following one:

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
import HaloNotifications

public class NotificationService: HaloNotificationService {
    
}
```
<!--Obj-C-->
```C
// NotificationService.h

@import HaloNotifications;

@interface NotificationService : HaloNotificationServiceExtensionObjC

@end

// NotificationService.m

#import "NotificationService.h"

@implementation NotificationService

@end
```
<!--END_DOCUSAURUS_CODE_TABS-->


---
title: Rich push notifications
keywords: ios, notifications
last_updated: December 27, 2016
tags: [notifications]
sidebar: ios_sidebar
toc: false
permalink: ios_rich_notifications.html
folder: ios
---

Starting in iOS 10, push notifications can now be enhanced by adding multimedia content.

<p align="center">
<img src="images/ios/push_notifications/rich_push_sample.png" alt="Rich push notifications sample">
</p>

In order for it to work and make your app capable of receiving these rich push notifications, there are several configuration steps to be performed.

## Configuration

### Creating an App Group

The first step will be creating what Apple defines as an **App Group**, which is an identifier that will allow to create and identify shared containers so that apps and extensions can share content. The reason behind this is the need for the extension to download images in the background and store them in a place which can later be accessed.

In order to do that, the app group **group.com.mobgen.halo** (that exact one, it is the one the SDK will look for) will need to be created wihin the section *App Groups* in the Developer Portal.

<p align="center">
<img src="images/ios/push_notifications/app_group.png">
</p>

### Creating a new App ID for the extension

Once the App Group is created, the next step will be to add a new **App ID** for the extension. Extensions define new bundle ids (which share the first portion with the hosting app) that will have to be set up also in the Apple Developer Program.

In this case, in the sample image, the identifier chosen for the extension is **richpush**, which will be embedded within a demo app, hence the full bundle id will be **com.mobgen.halo.demo.richpush**.

<p align="center">
<img src="images/ios/push_notifications/developer_portal_1.png">
</p>

You will also need to make sure that both the extension app ID and also the hosting app ID, have the App Groups service enabled, as shown in the following images.

<p align="center">
	<img src="images/ios/push_notifications/app_id_1.png">
</p>

And remember to associate the appropriate App Group to the App ID.

<p align="center">
	<img src="images/ios/push_notifications/app_id_2.png">
</p>

### Creating a Notification Service Extension

This new feature is achieved through a *Notification Service Extension*, which allows the modification of a push notification prior to being shown. This service extension is added to the app as a new target, so the first step will be adding a new target and selecting the *Notification Service Extension* template when asked.

<p align="center">
<img src="images/ios/push_notifications/target_1.png">
</p>

After that, a few settings need to be specified for the new target. Make sure that the extension is set to be embedded in your application.

<p align="center">
<img src="images/ios/push_notifications/target_2.png">
</p>

Once the extension has been created, double check that the bundle identifier is the one it has been created in previous steps.

<p align="center">
<img src="images/ios/push_notifications/target_3.png">
</p>

Another thing to check is that both the hosting app and the extension have the *App Groups* capability enabled and with the right group(s) selected.

<p align="center">
<img src="images/ios/push_notifications/capabilities.png">
</p>

### Search paths

Remember to check that both the hosting app and the extension will need to have the `Framework Search Paths` and `Header Search Paths` correctly set (including the path to the Carthage folder, where the Firebase dependencies are downloaded).

## Implementation

### Dependencies

As of iOS 10.0, a new framework - `UserNotification.framework` - has been added in order to handle everything related to push notifications. Hence, that dependency needs to be added when targeting iOS 10+ devices.

### Coding

When creating the service extension, a sample file with some code in it will be automatically created by Xcode. The HALO Notifications SDK already provides this feature implemented, so that no extra processing needs to be done by the developer.

All the code in that sample file can be replaced by the following one:

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#swift-1" data-toggle="tab">Swift</a></li>
  <li role="presentation"><a href="#objc-1" data-toggle="tab">Obj-C</a></li>
</ul>

<div class="tab-content">
  <div id="swift-1" class="tab-pane fade in active">
    <pre><code class="swift">import HaloNotifications

public class NotificationService: HaloNotificationService {
    
}</code></pre>
  </div>
  <div id="objc-1" class="tab-pane fade">
    <pre><code class="objective-c">// NotificationService.h

@import HaloNotifications;

@interface NotificationService : HaloNotificationServiceExtensionObjC

@end

// NotificationService.m

#import "NotificationService.h"

@implementation NotificationService

@end</code></pre>
  </div>
</div>



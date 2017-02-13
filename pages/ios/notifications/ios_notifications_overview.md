---
title: HALO Notifications SDK
keywords: ios, notifications
last_updated: December 27, 2016
tags: [notifications]
sidebar: ios_sidebar
toc: false
permalink: ios_notifications_overview.html
folder: ios
---

## Configuration

Adding notifications to a HALO-powered application from the SDK point of view is just as simple as instantiating a notifications addon and registering it within the core.

But in order to do that, the Framework needs to be added as a dependency to the project:

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#carthage" data-toggle="tab">Carthage</a></li>
  <li role="presentation"><a href="#cocoapods" data-toggle="tab">CocoaPods</a></li>
</ul>

<div class="tab-content">
  <div id="carthage" class="tab-pane fade in active">
    <pre><code class="bash">github 'mobgen/halo-notifications-ios' '2.2.0'</code></pre>
  </div>
  <div id="cocoapods" class="tab-pane fade">
    <pre><code class="bash">pod 'HaloNotificationsSDK', '2.2.0'</code></pre>
  </div>
</div>

## Usage

Registering the notifications add-on is then as simple as:

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#swift-1" data-toggle="tab">Swift</a></li>
  <li role="presentation"><a href="#objc-1" data-toggle="tab">Obj-C</a></li>
</ul>

<div class="tab-content">
  <div id="swift-1" class="tab-pane fade in active">
    <pre><code class="swift">import HaloNotifications

let notificationsAddon = NotificationsAddon()
notificationsAddon.delegate = self

Halo.Manager.core.registerAddon(notificationsAddon)</code></pre>

<p>In order to handle the received notifications, a delegate should be set to the notifications add-on, conforming to the <code>NotificationsDelegate</code> protocol.</p>

<pre><code class="swift">public protocol NotificationsDelegate {
  // This handler will be called when any push notification is received (silent or not) 
  func haloApplication(application: UIApplication, 
    didReceiveRemoteNotification userInfo: [NSObject : AnyObject]) -> Void
  
  // Executed when a silent notification is received
  func haloApplication(application: UIApplication, 
    didReceiveSilentNotification userInfo: [NSObject : AnyObject], 
    fetchCompletionHandler completionHandler: ((UIBackgroundFetchResult) -> Void)?) -> Void

  // Executed when a non-silent notification is received
  func haloApplication(application: UIApplication, 
    didReceiveNotification userInfo: [NSObject : AnyObject]) -> Void
}</code></pre>

Also, an already implemented custom app delegate is provided by the core (`HaloAppDelegate`) so that the app delegate can inherit from it. If that's not possible, some methods need to be overwritten to redirect the flow to the Core Manager:

<pre><code class="swift">public func application(application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: NSData) {
    Manager.core.application(application, didRegisterForRemoteNotificationsWithDeviceToken: deviceToken)
}

public func application(application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: NSError) {
    Manager.core.application(application, didFailToRegisterForRemoteNotificationsWithError: error)
}

public func application(application: UIApplication, didReceiveRemoteNotification userInfo: [NSObject : AnyObject], fetchCompletionHandler completionHandler: (UIBackgroundFetchResult) -> Void) {
    Manager.core.application(application, didReceiveRemoteNotification: userInfo, fetchCompletionHandler: completionHandler)
}</code></pre>

  </div>
  <div id="objc-1" class="tab-pane fade">
    <pre><code class="objective-c">#import <Halo/Halo-Swift.h>
#import <HaloObjC/HaloObjC-Swift.h>
#import <HaloNotifications/HaloNotifications-Swift.h>

HaloNotificationsAddon *notifAddon = [HaloNotificationsAddon new];
notifAddon.delegate = self;
    
[HaloManager.core registerAddon:notifAddon];</code></pre>

Since in Objective-C there is a restriction by which the app delegate cannot extend from another class, a mandatory extra step is needed in order for the notifications to work. Some of the flow must be redirected through the core manager of HALO:

<pre><code class="objective-c">- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
  [HaloManager.core application:application didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}

- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
  [HaloManager.core application:application didFailToRegisterForRemoteNotificationsWithError:error];
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler {
  [HaloManager.core application:application didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
}</code></pre>

After doing that, the notifications can be handled using three delegate methods:

<<pre><code class="objective-c">// This handler will be called when any push notification is received (silent or not)
- (void)haloApplication:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo

// Executed when a silent notification is received
- (void)haloApplication:(UIApplication *)application didReceiveSilentNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler

// Executed when a non-silent notification is received
- (void)haloApplication:(UIApplication *)application didReceiveNotification:(NSDictionary *)userInfo</code></pre>
  </div>
</div>

### Configuring the project in Firebase

In order for the notifications to work, the project must be set up in Firebase, the system HALO uses to send the push notifications. A detailed guide provided by Google can be found [here](https://firebase.google.com/docs/ios/setup).

#### Troubleshooting

* When adding the Frameworks from Firebase, their location will have to be added to the `User Header Search Paths` under the project build settings. Probably something like `$(PROJECT_DIR)/Frameworks/Firebase`.


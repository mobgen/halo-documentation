---
title: Android SDK - Notifications SDK Overview
keywords: android, notifications, decorator, firebase, gcm, messages, cloud
last_updated: November 14, 2016
tags: [notifications]
sidebar: android_sidebar
permalink: android_notifications_overview.html
folder: android
---

[![Download](https://api.bintray.com/packages/halo-mobgen/maven/HALO-Notifications/images/download.svg) ](https://bintray.com/halo-mobgen/maven/HALO-Notifications/_latestVersion)

In the HALO plugin add the following to enable the notifications sdk.

```groovy
apply plugin: 'halo'

halo {
	...
	services {
		notifications true
	}
	...
}
```

You also need to add the google play services json you download from the firebase console from google (``google-services.json``). Add it in a proper place to make this work.

## Notifications API
To start using the notifications, in the same way you do with other sdks you must create a new instance using the already configured instance of HALO.

```java
HaloNotificationsApi notificationsApi = HaloNotificationsApi.with(halo);
```

Also you have to release the memory in the ```onTerminate``` method of your application:

```java
notificationsApi.release();
```

## Simple use

Listen all the notifications that arrive to the device by attaching a listener to the api.

```java
ISubscription subscription = notificationsApi.listenAllNotifications(listener);
```

Then you will receive a call on this callback everytime a notification is received. This will contain the bundle with data provided by the notifications service and a bundle with extra data if it is provided.

Once you are done with this listener you can cancel the subscription by calling ```unsubscribe()```.

```java
subscription.unsubscribe();
```

You can also customize your notifications by adding a notification decorator. You will receive as parameter the ```NotificationCompat.Builder``` already configured by HALO, so you can override its behavior. If a decorator returns ```null``` instead the ```NotificationCompat.Builder``` configured, the notification will not be displayed. Refer to [the detailed documentation](/android_notifications_detailed_api) to learn how to write your custom decorator.

```java
notificationsApi.setNotificationDecorator(notificationDecorator);
```

---
title: Overview
---

[![Download](https://api.bintray.com/packages/halo-mobgen/maven/HALO-Notifications/images/download.svg) ](https://bintray.com/halo-mobgen/maven/HALO-Notifications/_latestVersion)

In the HALO plugin add the following to enable the notifications sdk.

```groovy
> project/build.gradle

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
 
> **Warning:** Since android O you have to create a notification channel to receive the push notification when your compileSdkVersion is 26 or greater.

HALO will create a notification channel on devices with Android O but you can override that channel with your own channel with your own settings.

```java
if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
    NotificationChannel channel = new NotificationChannel("NOTIFICATION_CHANNEL_ID", 
            "CHANNEL_NAME", NotificationManager.IMPORTANCE_DEFAULT)
    channel.setShowBadge(false);
    notificationsApi.notificationChannel(channel);
}
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

You can also customize your notifications by adding a notification decorator. You will receive as parameter the ```NotificationCompat.Builder``` already configured by HALO, so you can override its behavior. If a decorator returns ```null``` instead the ```NotificationCompat.Builder``` configured, the notification will not be displayed. Refer to [the detailed documentation](./android_notifications_detailed_api) to learn how to write your custom decorator.

```java
notificationsApi.setNotificationDecorator(notificationDecorator);
```

### Enable notifications usage

When a new notification is received on a device, the SDK will send a request to HALO reporting notification updates. There are three different events they have to report: receipt, open and dismiss. To enable this feature you must enable directly on the notification api singleton. Refer to [the detailed documentation](./android_notifications_report) to learn how to listen to notification events using the HALO SDK.


```java
notificationsApi.enablePushEvents();
```





---
title: Android SDK - Notifications SDK report event action APIs
keywords: android, notifications, decorator, firebase, gcm, messages, cloud
last_updated: January 23, 2018
tags: [notifications]
sidebar: android_sidebar
permalink: android_notifications_report.html
folder: android
---

## Enable notifications usage

There are three different events they have to report: receipt, open and dismiss. To enable this feature you must enable directly on the notification api singleton. As a developer you can set a listener to be notified when a push action (receipt, open or dismiss) was reported to HALO.

Without any listener:

```java
notificationsApi.enablePushEvents();
```

With a listener:

```java
notificationsApi.enablePushEvents(new HaloNotificationEventListener() {
    @Override
    public void onEventReceived(@Nullable HaloPushEvent haloPushEvent) {
        if (haloPushEvent != null) {
            Toast.makeText(halo.context(), "Action: " + haloPushEvent.getAction(), Toast.LENGTH_SHORT).show();
        }
    }
});
```    


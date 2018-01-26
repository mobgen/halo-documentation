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

## How to trigger manually the event?

If you want to trigger those events (receipt, open or dismiss) manually, you can not use the ```enablePushEvents()``` method. Instead you will use the ```notifyPushEvent()``` method.

**1.**  You have to build a HaloPushEvent object (in this example a new push was receipt on the phone). 

{% include tip.html content="To set the action you have yo choose one: {NotificationEventsActions.PUSH_RECEIPT,  NotificationEventsActions.PUSH_OPEN, NotificationEventsActions.PUSH_DISMISS}" %}


```java
HaloPushEvent receiptPush = new HaloPushEvent.Builder(deviceAlias)
    .withAction(NotificationEventsActions.PUSH_RECEIPT) // the action you want to notify
    .withSchedule(scheduleId) //the id of the push notification 
    .build();
```   

**2.** The next step is send the ```HaloPushEvent``` as follows: 


```java
notificationsApi.notifyPushEvent(receiptPush)
    .threadPolicy(Threading.POOL_QUEUE_POLICY)
    .execute(new CallbackV2<HaloPushEvent>() {
        @Override
        public void onFinish(@NonNull HaloResultV2<HaloPushEvent> haloResultV2) {
                //handle HaloResultV2 response
            }
    });
```                


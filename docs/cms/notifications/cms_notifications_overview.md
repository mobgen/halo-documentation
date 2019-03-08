---
title: Notifications overview
id: cms_notifications_overview
sidebar_label: Overview
---

HALO CMS supports sending notifications using Firebase messaging service behind the scenes (a battle-tested) 
and standard notifications system. All together the notifications, the HALO device tracking and the identified users
can be used with segmentation to send certain notifications to targeted devices.

Thanks to HALO Notifications you will be able to reach certain device groups or users based on market characteristics. One use 
case that can suit your needs could be segmenting push notifications by platform.

The different sdks will allow you to manages those notifications and present them properly to the user.

# Push templates and Push notifications

A push notification is a message that sent from the server to trigger some action in a client application even if it is
not being used. This message can trigger a notification message in a phone or a background work like synchronizing some
data, it is up to the business logic how do you use the notifications.

We support 2 different types of notifications:

- **UI notification**: you can listen to them and display some custom information to the user.
- **Silent notifications**: those notifications also arrive to the phone but does not show anything. They only allow to trigger
some custom behaviour in the app (even you can show a UI notification when the job is in progress or done).

To create custom notifications you firstly have to create a notification push template. The push templates are just a way
to specify types of notifications and the data they can carry. Lets say we want a notification that sends a number
and another that sends a text and customises the sound, then you would have to create two different push templates, each
for the different case.

Once you have the template, you can just create your notification, specify which template you wan to use and fill in
some data, segmentation and scheduling behaviour, that is it.

To get more information about push templates checkout the detailed tutorial [here](cms_notifications_template). If 
you want to learn how to send a notification you can follow [this other tutorial](cms_notifications_create). 

You can also add support for the notifications in your [android](../../android/notifications/android_notifications_overview) and [iOS](../../ios/notifications/ios_notifications_overview) devices.
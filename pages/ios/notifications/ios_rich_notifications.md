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

### Creating a Notification Service Extension

This new feature is achieved through a *Notification Service Extension*, which allows the modification of a push notification prior to being shown. This service extension is added to the app as a new target, so the first step will be adding a new target and selecting the *Notification Service Extension* template when asked.

<p align="center">
<img src="images/ios/push_notifications/target_1.png">
</p>

After that, a few settings need to be specified for the new target. Bear in mind that these extensions define new bundle ids (which shares the first portion with the hosting app)

<p align="center">
<img src="images/ios/push_notifications/target_2.png">
</p>

<p align="center">
<img src="images/ios/push_notifications/target_3.png">
</p>
---
title: Android SDK - One to one chat 
keywords: android, notification, content , chat, POC
last_updated: June 14, 2016
tags: [example]
sidebar: android_sidebar
permalink: android_chat.html
folder: android
---

# One to one chat

Using the content module of HALO we store all the data to have the possibility to maintain long lasting one to one conversations that can "survive" even when the app has been closed. The app generate a BIDI code to share with other users and after pairing you can chat with push notifications.

The app uses the following libraries of HALO SDK:

- **HALO Notification API**: to send push notifications. See also [Auth API](./android_auth_overview.html).
- **HALO Content API**: provides all the content of the app. See also [Content API](./android_content_overview.html).
- **HALO Auth API**: to login or create users. See also [Auth API](./android_notifications_overview.html).

You can download the source code in the following link: [Chat POC](https://github.com/mobgen/halo-android/tree/develop/sdk-samples/halo-demo)

<!---You can try this app in the following link: [Chat POC](https://google.com) -->

### Screenshots

| Home screen | Scan BIDI user code |
|-----------------|---------|
| ![Home room](./images/home.png) | ![Scan user QR](./images/scanuser.png)|


| Contact list | Chat screen |
|------------------|---------------------|
| ![Contact list position](./images/contactlist.png)| ![Chat screen list](./images/chatscreen.png)|
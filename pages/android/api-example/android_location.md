---
title: Android SDK - Indoor Location POC
keywords: android, location, content ,POC
last_updated: June 14, 2016
tags: [example]
sidebar: android_sidebar
permalink: android_location.html
folder: android
---

# Indoor location

Using the content module of HALO we store all wifi access points on a room and the app will detect when a user change from one room to another. You must make a fingerprint of every room you will use in the application (this can be done with the same location app). Also the app draws a heatmap of the most used locations.

The app uses the following modules of HALO SDK:

- **HALO Content API**: provides all the content of the app. See also [Content API](./android_content_overview.html).
- **HALO Auth API**: to login or create users. See also [Auth API](./android_auth_overview.html).

You can download the source code in the following link: [Location POC](https://github.com/mobgen/halo-android/tree/develop/sdk-samples/halo-location)

You can try this app in the following link: [Location POC](https://google.com)

### Screenshots

| My current room | Heatmap |
|-----------------|---------|
| ![Current room](./images/myroom.png) | ![Heatmap](./images/heatmap.png)|


|Friend location | Friend list location|
|------------------|---------------------|
| ![Friend position](./images/friend.png)| ![Friends list](./images/friendlist.png)|
---
title: Indoor Location POC
---

# Indoor location

Using the content module of HALO we store all wifi access points on a room and the app will detect when a user change from one room to another. You must make a fingerprint of every room you will use in the application (this can be done with the same location app). Also the app draws a heatmap of the most used locations.

The app uses the following libraries of HALO SDK:

- **HALO Content API**: provides all the content of the app. See also [Content API](../content/android_content_overview.html).
- **HALO Auth API**: to login or create users. See also [Auth API](../auth/android_auth_overview.html).

You can download the source code in the following link: [Location POC](https://github.com/mobgen/halo-android/tree/develop/sdk-samples/halo-location)

### Screenshots

| My current room | Heatmap |
|-----------------|---------|
| ![Current room](/img/myroom.png) | ![Heatmap](/img/heatmap.png)|


|Friend location | Friend list location|
|------------------|---------------------|
| ![Friend position](/img/friend.png)| ![Friends list](/img/friendlist.png)|
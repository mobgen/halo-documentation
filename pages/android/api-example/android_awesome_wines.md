---
title: Android SDK - Awesome wines 
keywords: android, loyalty, content, segmentation, flutter , POC
last_updated: September 1, 2017
tags: [example]
sidebar: android_sidebar
permalink: android_awesome_wines.html
folder: android
---

# Awesome wines

List of wines based on dynamic image slideshows with a comment related module to rate every wine. Using the loyalty module of HALO we can have promotions with our clients or share by push the promotion code to another user. You can change the screen settings with a silent push notification ( colors, sizes, fonts, menu options, etc). The app can scan a BIDI code to redeem a stamp or a price discount (loyalty points), show details of the promotion and current number of stamp collected, redeem a gift and show updated results the operations.

The app uses the following libraries of HALO SDK:

- **HALO Loyalty API**: to generate and redeem promotion codes.
- **HALO Content API**: provides all the content of the app. See also [Content API](./android_content_overview.html).
- **HALO Auth API**: to login or create users. See also [Auth API](./android_auth_overview.html).
- **HALO Notification API**: send push notifications. See also [Notification API](./android_notifications_overview).

You can download the source code in the following link: [Awesome wines POC](https://bitbucket.org/fernandosouto/halo-awesome-wines-flutter)

### BIDI Codes

The valid types for redeemables are stamps, items and prizes. Stamps are promotional codes that a user can redeem to collect badges until a number when the user can request a gift. Prizes are objects you can exchange for points, so they must have a non positive value in pointsOperated field. In case of items, the amount must be non negative.

<style type="text/css">
img[alt="Stamp code"] { 
  max-width:  100px; 
  display: block;
}
img[alt="Prize 1000"] { 
  max-width:  100px; 
  display: block;
}
img[alt="Item 200"] { 
  max-width:  100px; 
  display: block;
}
</style>

| Stamp | |
|-----------------|---------|
| ![Stamp code](./images/FREE_COFFEE.png) | This is an example of stamp. You need to collect 5 stamps until you can request the gift with this example.|

| Pize 1000 | |
|-----------------|---------|
| ![Prize 1000](./images/WINE_1_1000.png) | This is an example of prize. If you have loyalty points on your balance you can redeem the code to obtain the offer. Prize always is a non positive value. In this case it will use 1500 points. |

| Item 200 | |
|-----------------|---------|
| ![Item 200](./images/WINE_1-200.png) | This is an example of item. You can redeem the code to obtain loyalty points on your balance. Item always is a positive value. In this case you get 200 points. |


### Screenshots

| Wines catalog | Wines detail |
|-----------------|---------|
| ![Wines catalog](./images/wines.png) | ![Wines detail](./images/winedetail.png)|


| Wines comment |  Wines offers |
|------------------|---------------------|
| ![Wine comment](./images/comments.png)| ![Wines offers](./images/offers.png)|

| Scan codes screen | User profile |
|------------------|---------------------|
| ![Scan code screen](./images/scanwines.png)| ![Transaction result screen](./images/profile.png)|
---
title: Android SDK - Loyalty 
keywords: android, loyalty, content , POC
last_updated: August 10, 2017
tags: [example]
sidebar: android_sidebar
permalink: android_loyalty.html
folder: android
---

# Loyalty

Using the loyalty module of HALO we can have promotions with our clients. The app can scan a BIDI code to redeem a stamp or a price discount (loyalty points), show details of the promotion and current number of stamp collected, redeem a gift and show updated results the operations.

The app uses the following libraries of HALO SDK:

- **HALO Loyalty API**: to generate and redeem promotion codes.
- **HALO Content API**: provides all the content of the app. See also [Content API](./android_content_overview.html).
- **HALO Auth API**: to login or create users. See also [Auth API](./android_notifications_overview.html).

You can download the source code in the following link: [Loyalty POC](https://bitbucket.org/fernandosouto/halo-loyalty)

### BIDI Codes

The valid types for redeemables are stamps, items and prizes. Stamps are promotional codes that a user can redeem to collect badges until a number when the user can request a gift. Prizes are objects you can exchange for points, so they must have a non positive value in pointsOperated field. In case of items, the amount must be non negative.

<style type="text/css">
img[alt="Stamp code"] { 
  max-width:  100px; 
  display: block;
}
img[alt="Prize 20"] { 
  max-width:  100px; 
  display: block;
}
img[alt="Item 1000"] { 
  max-width:  100px; 
  display: block;
}
</style>

| Stamp | |
|-----------------|---------|
| ![Stamp code](./images/stamp.png) | This is an example of stamp. You need to collect 5 stamps until you can request the gift with this example.|

| Pize 20 | |
|-----------------|---------|
| ![Prize 20](./images/prize20.png) | This is an example of prize. If you have loyalty points on your balance you can redeem the code to obtain the offer. Prize always is a non positive value. In this case it will use 20 points. |

| Item 1000 | |
|-----------------|---------|
| ![Item 1000](./images/item1000.png) | This is an example of item. You can redeem the code to obtain loyalty points on your balance. Item always is a positive value. In this case you get 1000 points. |


### Screenshots

| Home screen | User transaction data |
|-----------------|---------|
| ![Home screen](./images/home_loyalty.png) | ![User transaction data](./images/user_data.png)|


| Promotions list | Scan codes screen |
|------------------|---------------------|
| ![Promotions list](./images/stamp_list.png)| ![Scan codes](./images/scan.png)|

| Redeem codes screen | Transaction result screen |
|------------------|---------------------|
| ![Redeem codes screen](./images/purchase_item.png)| ![Transaction result screen](./images/transaction_info.png)|
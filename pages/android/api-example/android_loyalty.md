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
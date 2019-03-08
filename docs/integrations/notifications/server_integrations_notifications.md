---
title: Notifications API
sidebar_label: API Details
---

## Server triggered notifications

HALO integrates FCM (Firebase cloud messaging) to create notifications and trigger them to the user based on certain conditions. Although the system HALO provides has many features,
you can always need some custom behavior in the server to trigger an automatic notification instead of a manual one. This integration will show you how to call the web services
and the different options you have.

If you already know how to use the API you can check the different use cases you can implement [here](./server_integrations_notifications_usecases.html).

## Notifications web service parameters

The web service used to send push notifications is:

```sh
POST /api/push/schedule/
```

The body can contain many parameters to customize your push schedule in a way that works for your application. Here we will describe the
parameters and after that some possible scenarios that can solve the different needs.

**Body sample**

```json
{
  "appId": 0,
  "name": "string",
  "sendOn": "timestamp",
  "filterTags": [
    {
      "id": "string"
    }
  ],
  "aliases": [
    "string"
  ],
  "payload": {
    "notification": {
      "title": "string",
      "icon": "string",
      "body": "string",
      "sound": "string",
      "badge": 0,
      "tag": "string",
      "color": "string",
      "click_action": "string",
      "body_loc_key": "string",
      "body_loc_args": "string",
      "title_loc_key": "string",
      "title-loc-args": "string"
    },
    "data": {
      "url": "string",
      "content_available": 0,
      "extra": {
        "any object": "any object"
      }
    }
  }
}
```

## Schedule fields

### Mandatory fields

The only mandatory fields are ```appId``` and  ```name```. The name is used to identify visually the schedule in the CMS but it is
has no restrictions if you send the same name multiple times. The most meanfull the name is, the easier will be to locate it in the list.

The app id is the identifier of the application in HALO and allows you to send push notifications to all the users of the app. This identifier
can be found in the ```Apps``` menu of the CMS. It is a normal integer number.

### Optional fields

Here we will detail all the possible fields you can fill inside the request based on your needs:

**Root**

- ```sendOn (integer, optional)```: Timestamp date when push was sent.
- ```filterTags (Array[FilterTag], optional)```: Segmentation tags that, when applied to certian application users, only these ones will receive this push.
- ```payload (Payload, optional)```: Data that will be sent to the applications. It can be metadata on how to diplay the notification or data related to the action itself.
- ```aliases (Array[string], optional)```: Array of application user aliases. These aliases identify a user uniquelly in HALO.

**Filter tags**

For the tag to be filtered you can send two different options:
- ```id```: HALO id of the tag that will be filtered.
- ```name and value```: The name and the value of the tag that we will search in the system to send the push.

**Payload notification**

- ```title (string, optional)```: Indicates notification title. This field is not visible on iOS phones and tablets.
- ```icon (string, optional)```: Indicates notification icon. On Android: sets value to myicon for drawable resource myicon.png.
- ```body (string, optional)```: Indicates notification body text.
- ```sound (string, optional)```: Indicates sound to be played. Posible options ['adara', 'alya', 'antimony', 'argon', 'ariel', 'beryllium', 'blip', 'carme', 'castor', 'ceres', 'chime', 'cobalt', 'cyanmessage', 'dontpanic', 'elara', 'element', 'europa', 'f1_missedcall', 'f1_new_sms', 'fluorine', 'hello', 'hojus', 'ivory', 'mira', 'modular', 'moto', 'natural', 'organic', 'ping', 'pixiedust', 'pizzicato', 'proxima', 'radon', 'rhea', 'selenium', 'sirius', 'tada', 'tethys', 'upsilon', 'voila'].
- ```badge (integer, optional)```: Indicates the badge on client app home icon(iOS only).
tag (string, optional)```: Indicates whether each notification message results in a new entry on the notification center on Android. If not set, each request creates a new notification. If set, and a notification with the same tag is already being shown, the new notification replaces the existing one in notification center.
- ```color (string, optional)```: Indicates color of the icon, expressed in #rrggbb format. Posible options ['#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#800080', '#A52A2A', '#FF9800']
- ```click_action (string, optional)```: The action associated with a user click on the notification. On Android, if this is set, an activity with a matching intent filter is launched when user clicks the notification. For example, if one of your Activities includes the intent filter: (Appendix:1)Set click_action to OPEN_ACTIVITY_1 to open it. If set, corresponds to category in APNS payload.
- ```body_loc_key (string, optional)```: Indicates the key to the body string for localization. On iOS, this corresponds to "loc-key" in APNS payload.
- ```body_loc_args (string, optional)```: Indicates the string value to replace format specifiers in body string for localization. On iOS, this corresponds to "loc-args" in APNS payload.
- ```title_loc_key (string, optional)```: Indicates the key to the title string for localization. On iOS, this corresponds to "title-loc-key" in APNS payload.
- ```title-loc-args (string, optional)```: Indicates the string value to replace format specifiers in title string for localization. On iOS, this corresponds to "title-loc-args" in APNS payload.

**Payload data**

- ```url (string, optional)```: Deeplink to indicates where you want to go in your app/web.
- ```content_available (integer, optional)```: On iOS, use this field to represent content-available in the APNS payload. When a notification or message is sent and this is set to true, an inactive client app is awoken. On Android, data messages wake the app by default. On Chrome, currently not supported.
- ```extra (object, optional)```: Extra field where you could send extra data to apps.


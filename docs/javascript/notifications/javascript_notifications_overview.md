---
title: Overview
---

## Notifications API
To start using the notifications, you apply the basic configuration for the Push module based on your HALO project.

```javascript
import { push } from 'halo-sdk-js';

push.setup({
  firebaseSenderId: 'YOUR_FIREBASE_SENDER_ID'
});
```

## Simple use

Listen all the notifications that arrive to the device by calling the listener.

```javascript
push.listenNotifications();
```

Before the you can receive notifications you have to get a push token, this will show a permission request from the 
browser after this is accepted you are ready to receive notifications.

```javascript
await push.getToken();
```

Then you will receive a call on this callback everytime a notification is received. This will contain the bundle 
with data provided by the notifications service and a bundle with extra data if it is provided.

Once you are done with this listener you can cancel the subscription by calling ```unlistenNotifications()```.

```javascript
push.unlistenNotifications();
```

You can also customize your notifications by adding a custom notification callback. Instead of calling 
```listenNotifications()``` without params, you will provide a callback. Refer to [the detailed documentation](./javascript_notifications_detailed_api) to learn how to write your callback.

```java
push.listenNotifications(callback);
```

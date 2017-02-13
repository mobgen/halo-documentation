---
title: HALO Server Integrations - Notifications
keywords: home
sidebar: server_integrations
last_updated: February 13, 2017
permalink: server_integrations_notifications_usecases.html
folder: integrations
---

The Notifications API is really flexible but there are certain use cases that can be to the interest of the integration 
development team.

## Send a notification to a certain user

If you want to send a notification to just one user there are two steps to follow:

- The user need to register in the integration server the alias.
- The server needs to trigger a push notification by calling the service with the following body:

```json
{
  "appId": "Application id",
  "name": "Name of the push notification",
  "aliases": [
    "alias1",
    "alias2"
  ]
}
```

As you can see the integration server needs to know which user goes to which device alias, so the device applications must send 
the alias everytime want, based on the logic. It is a responsability of the server to provide an API to receive the current user and its device
alias and to link them to send the push to our server.

To get the alias using the sdks you can use any of the following snippets:

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#android" data-toggle="tab">Android</a></li>
  <li role="presentation"><a href="#swift" data-toggle="tab">Swift</a></li>
  <li role="presentation"><a href="#objc" data-toggle="tab">Obj-C</a></li>
</ul>

<div class="tab-content">
  <div id="android" class="tab-pane fade in active">
    <pre><code class="java">Halo.instance().core().device().alias();</code></pre>
  </div>
  <div id="swift" class="tab-pane fade">
    <pre><code class="swift">Halo.Manager.core.device?.alias</code></pre>
  </div>
  <div id="objc" class="tab-pane fade">
    <pre><code class="objective-c">HaloManager.core.device.alias</code></pre>
  </div>
</div>

## Send a notification to everybody using the app

This is the easiest way to send a push notification. You only need to provide the appId and a name for it, and the notification will be delivered to every device using an app
configured to receive those notifications.

```json
{
  "appId": "Application id",
  "name": "Name of the push notification"
}
```

## Send a notification to a certain group of users

Segmentation can be performed by using tags. Tags can be applied to the content, to the users and to push notifications. This way if a user has a tag applied and you send a push
notification with a tag, all the users with it will receive this push.

A tag can be identified by id or by name and value, which are actually the fields you need to send to the schedule web service. Here it is an example to send a push notification
to all the android devices:

```json
{
  "appId": 0,
  "name": "My push to Android",
  "filterTags": [
    {
      "id": "1n1k2hk01231l238901c"
    }
  ]
}

OR

{
  "appId": 0,
  "name": "My push to Android",
  "filterTags": [
    {
      "name": "Platform name",
      "value": "Android"
    }
  ]
}
```

## Schedule a notification for certain time

This use case is compatible with the ones before. Every notification can be scheduled to be sent at any certain timestamp, so the devices will receive it
later than when it was sent. To do it you need to fill the ```sendOn``` field in the body of the schedule with the timestamp in milliseconds.

```json
{
  "appId": "Application id",
  "name": "Name of the push notification",
  "sendOn": 1486992630019
}
```
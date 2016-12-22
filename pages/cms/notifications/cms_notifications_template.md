---
title: HALO CMS - Notifications templates
keywords: cms, notifications, template, configuration
last_updated: December 21, 2016
tags: [cms]
sidebar: cms_sidebar
permalink: cms_notifications_template.html
folder: cms
---

Notification templates are a way to specify different types of noifications that can be sent to the app depending on the 
business rules. You can create, update and delete those templates if you have the manage push templates permission. In
this document we describe the different operations and elements that conform a push template.

## Push template fields

You can configure as many push templates as you need, but there are some predefined elemnts that can be added. Here we
will describe this parameters and the effect they have in the push notifications received in the device:

- **Silent content**: Allows to mark the push notification as silent or not. When a push notification sent is silent the 
push will not trigger any UI behavior.
- **Allow text**: You can enter a custom text that will appear in the body of the notification.
- **Badge**: Allows you to add a number in the notification. This number will be displayed in the bottom right corner in Android,
and in the application icon in iOS for UI notifications.
- **URL**: This url will not add any additional behavior to the UI notifications, but you can process it for example to add a
deep link.
- **Custom sound**: The default sound of the system will be replaced with a custom sound selected from a predefined list.
- **LED (Only Android)**: In certain android devices you can select the color of the led that notifies the user for a new 
notification.

In addition you can configure the template to support certain tags for segmentation and some default content you would like 
send and maybe modify in the future. To learn more about segmenting push notifications check [this documentation page](./cms_segmentaiton_operations).

## Push template operations

### Create a push template

- In the top left menu select 'Notifications'.
- You will have selected the first tab 'Notification templates'.
- In the top action bar click on '<span class="fa fa-plus" /> *New push template*'.
- Enter a template name. This will identify the operation for this template.
- Enable the items you want to modify for this push (optional).
- Apply segmentation tags to make them available in the push sending screen (optional).
- Enter a default message (optional).
- Finally in the top action bar select '<span class="fa fa-floppy-o"/> *Save*'

{% include note.html content="You can always edit the created template by selecting it in the pushn templates list." %}

### Delete a push template

- In the top left menu select 'Notifications'.
- You will have selected the first tab 'Notification templates'.
- In the list you have, click on the <span class="fa fa-trash"/> trash button.
- The push template will be removed.
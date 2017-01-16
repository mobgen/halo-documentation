---
title: HALO CMS - Applications operations
keywords: cms, applications, native, fcm, configuration, social, google, facebook, token, client id, client secret, operations
last_updated: December 22, 2016
tags: [cms]
sidebar: cms_sidebar
permalink: cms_applications_operations.html
folder: cms
---

## Application operations

### Create an application

- Open the top left menu and select 'Apps' using a user with 'Manage apps' permission.
- In the top action bar press the button '*New app*'.
- Put a name to the app, the rest of the fields are optional (and will be explained in the following sections).
- In the top action bar press the '<span class="fa fa-floppy-o"/> *Save*' button.
- Your application will be created.

<img src="./images/tutorial_create_app.gif" />

### Delete an application

- Open the top left menu and select 'Apps' using a user with 'Manage apps' permission.
- In the list find the app you want to delete and press in the right the <span class="fa fa-trash"/> trash button.
- Optionally you can select multiple apps in the left square and perform a bulk delete with the <span class="fa fa-ellipsis-v"/> menu.

{% include warning.html content="Keep in mind that deleting an application that is in production can damage your business and the applications using the client id and secret of this app will not work again." %}

### Receive the client id and secret by mail

- Open the top left menu and select 'Apps' using a user with 'Manage apps' permission.
- Select the application for which you want to get the credentials.
- In the top action bar press '*Send app information*'.
- Enter one or multiple emails comma separated.
- Press the '*Send*' button.
- You will receive an email with the native application client id and client secret information.

### Grant access to certain content

Each module can be accessed by multiple apps. If you want an application to have access to certain data:

- Open the top left menu and select 'Apps' using a user with 'Manage apps' permission.
- Select the application you want to grant access to some module.
- Go to the section 'Access Rights' and find the modules you want to enable.
- Click on the right switch to enable them.

### Configure fcm

To enable notifications in your application you need firstly to create a firebase project. Please refer
to the [notifications section]() to get more details. Once you have this project then:

- Open the top left menu and select 'Apps' using a user with 'Manage apps' permission.
- Select the application you want to configure the notifications for.
- In the '*General*' section add the legacy firebase token in the FCM key field.
- In the top action bar click on the '<span class="fa fa-floppy-o"/> *Save*' button.

### Configure security for social login

HALO supports identified users using different social networks, but it is important to protect the
users data. To enable an enhanced security mode for the applications using facebook and google accounts,
you can provide additional security info:

- Open the top left menu and select 'Apps' using a user with 'Manage apps' permission.
- Select the application you want to configure the social security for.
- For facebook: bring the facebook client id and client secret from the facebook developer console project.
- For google: create a project in the google developer console and create keys for android and ios.
- In the top action bar click on the '<span class="fa fa-floppy-o"/> *Save*' button.
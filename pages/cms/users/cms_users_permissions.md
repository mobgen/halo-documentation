---
title: HALO CMS - Users Permissions
keywords: cms, users, security, admin, management, roles, permissions, rights
last_updated: May 28, 2018
tags: [cms]
sidebar: cms_sidebar
permalink: cms_users_permissions.html
folder: cms
---

We have a fine grained permission system that allows you to filter in a better way what are the items
or services the different users have in the CMS. In this document we will detail what is the 
behavior of every permission and how to create a custom role that can be attached to a user 
afterwards.

## Permissions description

The permissions are classified by the module they belong to:

- **General content**: Handles the permissions related to content creation and structures and the links it has
with other modules such as segmentation.
- **Push notifications**: Handles the permissions for creation and deletion of push templates and notifications. Also
has the possibility to enable push notifications in content.
- **Core**: Handles the permissions for the main elements of the system like customers, users, apps and custom
middlewares.
- **OAuth**: Handles the permissions for the authentications server and some essential user management operations. It is linked
in many cases with the authentication module.
- **Authentication**: Handles permissions with the tokens attaching them to the roles, apps and its access rights and the
access to custom content elements.
- **Segmentation**: Handles the permissions to create segmentation tags that then can be attached to content or notifications. Also handles
business helpers like the statistics or the application devices.
- **Media**: Handles permissions with the media module that allows you to upload content to cloudinary services.
- **Others**: Here it comes other permissions related to different elements in the system that can be traversal
and do not belong to any of the modules mentioned before.

### General content

- **Access to all content structures**:  allows the user to access the content items in all the content structures without granting them manually via access rights.
- **Manage content structures**: allows to create, edit or remove structures from the general content section.
- **Manage content items**: allows the user to create, edit or delete content items from content structures.
- **Enable segmented content**: allows the user to attach segmentation tags into the structure while defining the content structure.
- **Access content**: allows the user to access structures or instances.

### Push notifications

- **Manage push templates**: allows the user to create, edit or delete push templates. Learn more about push templates [here](./cms_notifications_template).
- **Manage push notifications**: allows the user to create, send, edit or delete push notifications.
- **Enable segmented push notifications**: allows the user to attach to the push templates some selected segmentation tags.
- **Enable push notifications with content**: allows the user to attach a push notification while scheduling a general content item publication. Learn 
more about general content items in [this document](./cms_content_items).

### Core

- **Manage users**: allows the user to create, edit, delete and manage the roles of a CMS user.
- **Manage apps**: allows the user to create, edit or delete applications with all its attached access rights.
- **Manage module types**: allows the user to manage the module types and middlewares of the system.
- **Manage customers**: allows the user to manage customers, being able to create, update and delete new customers.

### OAuth

- **Essential user operations**: allows the minimal web services needed by a user to do something with the HALO APIs.
- **Essential app operations**: allows the minimal web services needed by applications to do something with the HALO APIs.
- **Essential module operations**: allows the minimal web services needed by modules (middlewares) to do something with the HALO APIs.

### Authentication

- **Manage access rights**: allows the user to create access rights for the applications so they can access the content they have access to.
- **Manage roles**: allows the user to create custom roles and edit the current ones.

### Segmentation

- **Application statistics**: allows the user to access the dashboard where the applications stats are shown.
- **Manage tags**: allows the user to create, edit or delete segmentation tags in the platform.
- **Create/update devices**: allows the applications to create or update device information to track the users for segmentation.
- **App user login/register**: allows the applications to access the login and register services for identified users.
- **Register daily events**: allows the user to see the daily registered events for the HALO platform.

### Media

- **Manage media**: allows the user to create, edit or delete media items into the cloudinary platform that HALO
uses to upload the images for content items.

### Others

- **Manage loyalty items and prizes**: allows the user to access the loyalty module and the prize management.

## Create a custom role

- Open the top left menu and click on the '*Users*' menu.
- Click on a user you want to change the role to.
- Click on the  '<span class="fa fa-lock" /> *Permissions*' tab.
- In the top action bar click on '<span class="fa fa-plus"/> *New custom role*'.
- Enter a name of the custom role.
- Modify the permissions for this role.
- Then you can assign this permission to all the users you want.
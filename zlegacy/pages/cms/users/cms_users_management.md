---
title: HALO CMS - Users Management
keywords: cms, users, security, admin, management, roles, permissions, rights
last_updated: May 28, 2018
tags: [cms]
sidebar: cms_sidebar
permalink: cms_users_management.html
folder: cms
---

We take security in HALO in serious so managing who has permission to what is for us really important. 
Because of that we provide a fine grained permission system based on features that allows the administrators
to manage which parts of the CMS can be accessed by whom.

To group those permissions we use the role concept so each role has some permissions allowed but not others.
By default we provide 3 different roles, but you can create your own custom roles:

- **Admin**: The admin has access to all the CMS and all the features available for you as a client. He can 
change the information for everything and it is thought for the most advanced users.
- **Manager**: The manager has permissions to manage content structures, tags, notifications and content but it cannot handle
permissions or app configurations or users.
- **Editor**: The editor only has permissions to create or edit content for the content structures it has access. This role
can also create push notifications but it cannot handle push templates.

If any of this roles suits your needs you can always create a custom role based on the permissions. See the 
[permissions document](./cms_users_permissions) for more information.

## Operations over CMS users

### Create a CMS user

- Open the top left menu and click on the '*Users*' menu.
- It will appear a list with the current users.
- In the top action bar press '<span class="fa fa-user"/> *New user*'.
- In the form that appears fill in the name, surname, email, password, predefined role and allowed ips (if 
you want to protect from where is it accessed to the CMS).
- You can also select a profile picture from different networks.
- Finally in the top action bar press on '<span class="fa fa-floppy-o"/> *Save*'.

You will be always able to edit the entered data and to modify the permissions afterwards.

### Delete a CMS user

- Open the top left menu and click on the '*Users*' menu.
- In the list that appears find the user you want to delete.
- In the right of the row click on the <span class="fa fa-trash"/> trash button.
- Optionally you can delete multiple users by clicking in the empty square in the left of the row and selecting
delete in the bulk edition <span class="fa fa-ellipsis-v"/> menu.

### Filtering users

To make the selection and finding process of the users an easier task we provide many filters in the list:

- Open the top left menu and click on the '*Users*' menu.
- You can press '*Search*' in the top action bar to navigate between the users.
- In the top left dropdown you can select which roles are available in the list (admin, manager, editor and custom).
- Show and hide some columns by pressing in the columns dropdown.

### Assign custom permissions

- Open the top left menu and click on the '*Users*' menu.
- Find the user you want to modify the permissions and click on it.
- Create a custom role following the instruction detailed [here](./cms_users_permissions).
- Assign the new role created in the '*Role*' field of the user.
- Finally in the top action bar press on '<span class="fa fa-floppy-o"/> *Save*'.
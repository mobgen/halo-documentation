---
title: HALO CMS - Manage Content Items
keywords: cms, content, items, create item, item, delete, edit, schedule, publish, date
last_updated: May 28, 2018
tags: [cms]
sidebar: cms_sidebar
permalink: cms_content_items.html
folder: cms
---

## What is a Content Item?

A Content Item is one of each elements that can be consumed from an application and that defines the behavior of this application.
Content Items must match with the fields of a Content structure (for more information about content structures [click here](./cms_content_modules.html))
and its fields contain the information that will be consumed.

Content Items can be created, saved as draft, published, archived and deleted. Here we are describing how to operate over this content
items to change their states. The description of the states are:

1. **Created**: You can create a Content Item by filling the title for this item. This is the only mandatory information, since
all the fields are optional.
2. **Saved as draft**: Once you create an item it will not be published by default. This item will be saved as draft unless you click on
   '*Publish now*'. Saved as draft items can be changed and scheduled for publication, but they are not actually published.
3. **Published**: Those are the considered visible items for the apps. A Content Item can be '*Unpublished*' and will not be visible anymore 
and change its status to Saved as draft. 
4. **Archived**: A published Content Item can be archived using the '*Archive*' button or automatically is changed to this state 
when reaches the '*Archive on*' date.
5. **Deleted**: Every element deleted in the CMS has a logic deletion, so the information can be retrieved by an administrator
   if it would be possible.
   
The state flow of the Content Items respond to this following state diagram.


<img src="./images/content-item-states-flow.png" />


## Operations over a Content Item

### Create Content Item

{% include note.html content="To fill in a content item with data you must create previously a content structure. Otherwise the fields will not be available in the CMS." %}

- Access the left panel menu '*Content*'.
- Click in the list the Content structure you want to create a Content Item for.
- In the tabs, select the '*Content tab*'.
- In the action button bar, click on the ‘New content item' button.
- Fill in the title and the fields you want to be present.


<img src="./images/tutorial_create_content_item.gif" />


### Delete Content Item
- Access the left panel menu '*Content*'.
- Click in the list the Content structure you want to create a Content Item for.
- In the tabs, select the '*Content tab*'.
- In the list of Content Items click on the right action button with a bin <span class="fa fa-trash" />.
- Confirm the deletion.

Optionally you can remove multiple Content structure at the same time:

- Access Content structure list.
- Select multiple structures by clicking the selection square in the left of each row.
- Open the bulk options pressing the top right 3 dots icon <span class="fa fa-ellipsis-v"/>.
- Press on '*Delete*'. This will remove all the selected items.

### Duplicate Content Item

You can duplicate an already existing content item and his content. This will create a new content item with the same name 
but finished with 'Copy N' where N is the number of copies. To do it follow the instructions below:

- Access the left panel menu '*Content*'.
- Click in the list the Content structure you want to duplicate a Content Item for.
- In the tabs, select the '*Content tab*'.
- In the list of content items select all the content items you want to duplicate by pressing the selection square in the left of each row.
- Open the bulk options pressing the top right 3 dots icon <span class="fa fa-ellipsis-v"/>.
- Press on '*Duplicate*'. This will duplicate all the selected items.

{% include note.html content="The duplicated content item will not inherit the publish and archive date. Also, if the original content item had a push notification attached, this push will not be attached in the copy." %}


### Search Content Items

- Access the left panel menu '*Content*'.
- Click in the list the Content structure where you want to search a specific Content Item.
- In the tabs, select the '*Content tab*'.
- In the top action bar, click on '<span class="fa fa-search" /> *Search*'.
- Enter your query and see how the list is getting updated.

{% include important.html content="This operation only searches in the content items by title name. It does not use any of the contents stored inside the item." %}

### Schedule for publication and archival

To schedule a **publication**:

- Enter the content item you want to schedule.
- On the '*Parameters*' panel, fill the '*Publish on*' calendars.
- Click on '<span class="fa fa-upload" /> *Save*'.
- This content will be published at the scheduled date and time.

To schedule an **archive**:

- Enter the content item you want to schedule.
- On the '*Parameters*' panel, fill the '*Archive on*' calendars.
- Click on '<span class="fa fa-upload" /> *Save*'.
- This content will be archived at the scheduled date and time.

### Schedule notification

When publishing content, you can schedule this publication with a Push notification. This means that when the item is published, a new
push notification will be sent to all the devices targeted by the segmentation tags. To perform this sort of publication:

- Create a new Content Item or access one already created.
- Fill in all the fields and the title for the item.
- '*Parameters*' panel, click on '*Add push notification*'.
- In the form that appears, select a template already configured in the Content Structure.
- Fill in the app, the publication date and time and the tags.
- Fill in the template information that reflects the notification that will be displayed in the apps.
- On the top action bar click on '<span class="fa fa-upload"/> *Save*' button.
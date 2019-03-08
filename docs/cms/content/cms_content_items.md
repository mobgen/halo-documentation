---
title: Manage Content Items
id: cms_content_items
sidebar_label: Content items
---

## What is a content item?

A content item is one of each elements that can be consumed from an application and that defines the behavior of this application.
content items must match with the fields of a content structure (for more information about content structures [click here](cms_content_modules.html))
and its fields contain the information that will be consumed.

Content items can be created, saved as draft, published, archived and deleted. Here we are describing how to operate over this content
items to change their states. The description of the states are:

1. **Created**: You can create a content item by filling the title for this item. This is the only mandatory information, since
all the fields are optional.
2. **Saved as draft**: Once you create an item it will not be published by default. This item will be saved as draft unless you click on
   '*Publish now*'. Saved as draft items can be changed and scheduled for publication, but they are not actually published.
3. **Published**: Those are the considered visible items for the apps. A content item can be '*Unpublished*' and will not be visible anymore 
and change its status to Saved as draft. 
1. **Archived**: A published content item can be archived using the '*Archive*' button or automatically is changed to this state 
when reaches the '*Archive on*' date.
5. **Deleted**: Every element deleted in the CMS has a logic deletion, so the information can be retrieved by an administrator
   if it would be possible.
   
The state flow of the content items respond to this following state diagram.


![](/img/content-item-states-flow.png)


## Operations over a content item

### Create content item

> **Note:** To fill in a content item with data you must create previously a content structure. Otherwise the fields will not be available in the CMS.

- Access the left panel menu '*Content*'.
- Click in the list the content structure you want to create a content item for.
- In the tabs, select the '*Content tab*'.
- In the action button bar, click on the ‘New content item' button.
- Fill in the title and the fields you want to be present.


![](/img/tutorial_create_content_item.gif)


### Delete content item
- Access the left panel menu '*Content*'.
- Click in the list the content structure you want to create a content item for.
- In the tabs, select the '*Content tab*'.
- In the list of content items click on the right action button with a bin <span class="fa fa-trash"></span>.
- Confirm the deletion.

Optionally you can remove multiple content structure at the same time:

- Access content structure list.
- Select multiple structures by clicking the selection square in the left of each row.
- Open the bulk options pressing the top right 3 dots icon <span class="fa fa-ellipsis-v"></span>.
- Press on '*Delete*'. This will remove all the selected items.

### Duplicate content item

You can duplicate an already existing content item and his content. This will create a new content item with the same name 
but finished with 'Copy N' where N is the number of copies. To do it follow the instructions below:

- Access the left panel menu '*Content*'.
- Click in the list the content structure you want to duplicate a content item for.
- In the tabs, select the '*Content tab*'.
- In the list of content items select all the content items you want to duplicate by pressing the selection square in the left of each row.
- Open the bulk options pressing the top right 3 dots icon <span class="fa fa-ellipsis-v"></span>.
- Press on '*Duplicate*'. This will duplicate all the selected items.

> **Note:** The duplicated content item will not inherit the publish and archive date. Also, if the original content item had a push notification attached, this push will not be attached in the copy."

### Search content items

- Access the left panel menu '*Content*'.
- Click in the list the content structure where you want to search a specific content item.
- In the tabs, select the '*Content tab*'.
- In the top action bar, click on '<span class="fa fa-search"></span> *Search*'.
- Enter your query and see how the list is getting updated.

> **Important:** This operation only searches in the content items by title name. It does not use any of the contents stored inside the item.

### Schedule for publication and archival

To schedule a **publication**:

- Enter the content item you want to schedule.
- On the '*Parameters*' panel, fill the '*Publish on*' calendars.
- Click on '<span class="fa fa-upload"></span> *Save*'.
- This content will be published at the scheduled date and time.

To schedule an **archive**:

- Enter the content item you want to schedule.
- On the '*Parameters*' panel, fill the '*Archive on*' calendars.
- Click on '<span class="fa fa-upload"></span> *Save*'.
- This content will be archived at the scheduled date and time.

### Schedule notification

When publishing content, you can schedule this publication with a Push notification. This means that when the item is published, a new
push notification will be sent to all the devices targeted by the segmentation tags. To perform this sort of publication:

- Create a new content item or access one already created.
- Fill in all the fields and the title for the item.
- '*Parameters*' panel, click on '*Add push notification*'.
- In the form that appears, select a template already configured in the content structure.
- Fill in the app, the publication date and time and the tags.
- Fill in the template information that reflects the notification that will be displayed in the apps.
- On the top action bar click on '<span class="fa fa-upload"></span> *Save*' button.
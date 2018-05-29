---
title: HALO CMS - Segmentation operations
keywords: cms, content, notifications, segmentation, users, target user, target, user, modules, structure, tag, market, device, localization, translations
last_updated: May 28, 2018
tags: [cms]
sidebar: cms_sidebar
permalink: cms_segmentation_operations.html
folder: cms
---


## Add a custom tag

- Open the left menu and select '*Segmentation*'.
- A list with all the available tags will appear.
- On the top action bar menu select '<span class="fa fa-plus"/> *New segmentation tag*'.
- Fill in the form with the name of the tag, the value and a description.
- Click on the top action bar menu where it says '<span class="fa fa-floppy-o"/> *Save*'.
- Your tag now will be available as a *User* tag in other sections of the CMS.

## Segment content items based on tags

To add a tag to a content item you firstly need to configure this tag in the content structure. Refer to [this documentation](./cms_content_module_structure.html#apply-a-segmentation-tag-to-a-content-item) for more information 
on how to configure the tags in the content structure.

Once a tag is configured in the content structure:

- Access the '*Content*' section in the left menu.
- Enter the content structure where your instance is inside.
- Click the tab for the list of content items.
- Select the item you want to add a tag to.
- Add the tag in the '*Apply tags*' section.
- Save the content item

## Add localized texts

Since localization texts are just a special way to segment your content, you can create texts in different languages:

- Attach some language tags to your content structure as described [here](./cms_content_module_structure.html#apply-a-segmentation-tag-to-a-content-item).
- Create a localized field. If you are not sure how to create a field in a content structure refer to [this documentation](./cms_content_module_structure.html#fields).
- Go to a content item in the '*Content tab*'.
- Select the localized field and add some texts in different languages.

## Segment notifications

You can segment the notifications using the same tags as explained in this section. To do that, in a similar way as you do with the content structures, create a push template
that supports those notifications as part of the template. Then:

- Open the left menu '*Notifications*'.
- On the top menu click on '*New push message*'.
- Select the template you created before with some tags.
- In the  '*Apply tags*' section select the tags you to this push to be sent.
- Add other information and send the push notification to the specific users.


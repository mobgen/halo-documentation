---
title: HALO CMS - Manage Content Modules
keywords: cms, content, modules, create module, module, delete, edit
last_updated: December 1, 2016
tags: [cms]
sidebar: cms_sidebar
permalink: cms_content_modules.html
folder: cms
---

## What is a Module?

When you are working with the content management using HALO you will work with content modules and content items.
A Content module is the definition of the structure of content items. Imagine you want to build a *library*, then you will
need books, subscriptors and retrievals. Each of this entities is a different module and have to be created with
the needed structure.

Content items are each of the items that comply the structure of a module, so if we keep going with the same example, a module called
books can have content items of books, which is the real data.

## Module Configuration

You can configure the modules by accessing the left panel menu <span class="fa fa-bars"/> content icon. When creating a module you can
customize 3 main parameters:

- **Module structure**: Here you will define the fields of a module. Imagine your entity book has an ISBN, an internal id,
a title and some description. Each of this elements is a field, and you can select the type of field so HALO can make some
checks and validations agains it.
- **Segmentation tags**: You can configure which tags will be available for this content. A tag is just a way to differenciate
content and the audiences it has access. Lets say we have some content that is only available for US market, but not for UK,
then we can add a market tag to avoid it to appear for those markets.
- **Push templates**: You can also schedule with the content items a push notification. This way you can update the apps
in background seemlesly and without worrying about the publication time.

You can also assign the users that have access to this module using the '*assign users*' form.

{% include warning.html content="You can also change the name of the module, but keep in mind this is very risky since the applications in production may crash and stop showing the content" %}

## Operations over a Module

### Create a Content Module

- Access the left panel menu '*Content*'.
- In the action button bar, click on the '*New module*' button.
- Enter the name and select if this module is single or not.
- Start configuring your module.

<img src="./images/tutorial_create_module.gif" />

### Delete Content Modules

- Access the left panel menu '*Content*'.
- In the list of modules, click the bin icon <span class="fa fa-trash"/>.

Optionally you can remove multiple modules at the same time:

- Access the left panel menu '*Content*'.
- Select multiple modules by clicking the selection square in the left of each row.
- Open the bulk options pressing the top right 3 dots icon <span class="fa fa-ellipsis-v"/>.
- Press on '*Delete*'. This will remove all the selected items.

### Duplicate Content Modules

You can duplicate an already existing module with all its fields, tags and push templates. This will create a 
new module with the same name but finished with 'Copy N' where N is the number of copies. To do it follow the instructions
below:

- Access the left panel menu '*Content*'.
- In the list of modules select all the modules you want to duplicate by pressing the selection square in the left of each row.
- Open the bulk options pressing the top right 3 dots icon <span class="fa fa-ellipsis-v"/>.
- Press on '*Duplicate*'. This will duplicate all the selected items.

{% include note.html content="Duplication of modules only duplicates its structure but not the instances. The module will remain empty once duplicated." %}




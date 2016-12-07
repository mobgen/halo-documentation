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

### Change Module name

- Access the left panel menu '*Content*'.
- Enter the details of the module you wish to change the name.
- In the '*Structure tab*' there is a field that states the Module name.
- Change it and click '<span class="fa fa-floppy-o" /> *Save*' on the top action button bar.

{% include warning.html content="Changing the name of an already created module may break your apps in production. Make sure this is what you want to do before saving the module with a different name." %}

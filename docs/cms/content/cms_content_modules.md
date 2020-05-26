---
title: Manage Content Structures
id: cms_content_modules
sidebar_label: Content structures
---

> *Note:* The 'module' name has change to 'content structure'.

## What is a content structure?

When you are working with the content management using HALO you will work with content structures and content items.
A content structure is the definition of the structure of content items. Imagine you want to build a *library*, then you will
need books, subscribers and retrievals. Each of this entities is a different content structure and have to be created with
the needed structure.

Content items are each of the items that comply the structure of a content structure, so if we keep going with the same example, a content structure called
books can have content items of books, which is the real data.

## Operations over a content structure

### Create a content structure

- Access the left panel menu '*Content*'.
- In the action button bar, click on the '*Create new structure*' button.
- Enter the name and select if this structure is single or not. Single structures can have only one content item.
- Start configuring your content structure.

![](../../../img/tutorial_create_module.gif)

### Delete content structures

- Access the left panel menu '*Content*'.
- In the list of content structures, click the bin icon <span class="fa fa-trash"/>.

Optionally you can remove multiple content structures at the same time:

- Access the left panel menu '*Content*'.
- Select multiple content structures by clicking the selection square in the left of each row.
- Open the bulk options pressing the top right 3 dots icon <span class="fa fa-ellipsis-v"></span>.
- Press on '*Delete*'. This will remove all the selected items.

### Duplicate content structures

You can duplicate an already existing content structure with all its fields, tags and push templates. This will create a 
new content structure with the same name but finished with 'Copy N' where N is the number of copies. To do it follow the instructions
below:

- Access the left panel menu '*Content*'.
- In the list of content structures select all the structures you want to duplicate by pressing the selection square in the left of each row.
- Open the bulk options pressing the top right 3 dots icon <span class="fa fa-ellipsis-v"></span>.
- Press on '*Duplicate*'. This will duplicate all the selected items.

{% include note.html content="Duplication of content structures only duplicates its structure but not the instances. The content structure will remain empty once duplicated." %}

### Change content structure name

- Access the left panel menu '*Content*'.
- Enter the details of the content structure you wish to change the name.
- In the '*Structure tab*' there is a field that states the content structure name.
- Change it and click '<span class="fa fa-floppy-o"></span> *Save*' on the top action button bar.

> *Warning*: Changing the name of an already created content structure may break your apps in production. Make sure this is what you want to do before saving the content structure with a different name.

## Display options

The content structures overview is displayed in a list view and ordered by last updated one by default. This display options can be modified to provide a customized
user experience.

### Grid view

In the top right section of the list overview we can select the display option '<span class="fa fa-th-large"></span> *Grid view*' to access to this
display configuration. 

- In the grid view we can perform the same actions than in the list view. 
- A content structure can be selected/deselected by clicking in the title section of the card element.
- A content structure can be accessed and edited by clicking in the edit icon present in the bottom of the card element '<span class="fa fa-pencil"></span> *Edit*'. 

![](../../../img/tutorial_grid_view.png)

### Columns display

It is possible to select the columns that are going to be displayed in the content structure list view. The '*Columns*' selector in the list overview 
header allows to check/uncheck the different columns and display them in the list.

### Sorting options

By default, the content structures list is sorted by date modified. This sorting can be modified clicking in the selector present in the list overview header.
The different sorting options are:

- Name Ascendant
- Name Descendant
- Last Updated Ascendant
- Last Updated Descendant (default)

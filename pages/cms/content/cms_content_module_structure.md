---
title: HALO CMS - Content Module Structure
keywords: cms, content, modules, structure, fields, template, notification template, tag, segmentation, module
last_updated: December 7, 2016
tags: [cms]
sidebar: cms_sidebar
permalink: cms_content_module_structure.html
folder: cms
---

## Module Structure: Configuration

You can configure the modules by accessing the left panel menu <span class="fa fa-bars"/> content icon. When configuring a module you can
customize 3 main parameters:

- **Module structure**: Here you will define the fields of a module. Imagine your entity book has an ISBN, an internal id,
a title and some description. Each of this elements is a field, and you can select the type of field so HALO can make some
checks and validations agains it.
- **Segmentation tags**: You can configure which tags will be available for this content. A tag is just a way to differenciate
content and the audiences it has access. Lets say we have some content that is only available for US market, but not for UK,
then we can add a market tag to avoid it to appear for those markets.
- **Push templates**: You can also schedule with the content items a push notification. This way you can update the apps
in background seemlesly and without worrying about the publication time.

You can also assign the users that have access to this module using the '*assign users*' form, but this is out of the scope of this document.

<img src="./images/tutorial_create_module_structure.gif" />


## Fields

When you model your data you may need different types of fields to fit it. In HALO we provide a huge amount of different fields 
that you can use in your Modules:

### Basics
- **Text**: This field accepts just plain text to match a typical String field.
- **Long text**: Same as text field, but accepts a way bigger text and html formatting.
- **Boolean**: Accepts or true or false.
- **Number**: Accepts a number.
- **Date**: This field accepts a date (day/month/year).
- **Time**: Time field which accepts a moment in the day in terms of hh:mm:ss.
- **Image**: You can add a link that refers an image or upload your own image to the cloudinary service connected with HALO.
- **Video**: It behaves the same way as the image field. You can paste a video url or you can upload a video to the platform.
- **Object**: It is a generic object field that accepts a json object format, for all the items that are not matching with all the other options.
- **List**: Text field that has to be expressed as a JSON Array, storing multiple items.

### Validation fields
- **Website**: You can enter a website and this field will validate the format of the website. It should be something like `http(s)://pre.website.domain/acceptsThis?andAlso=params`
- **Youtube**: Accepts a youtube video and validates the source. Some sort of special video field.
- **Color**: Accepts hexadecimal colors.

### Multichoice and complex relations
- **Localized text**: Based on the tags of the structure, localized fields allows the user to enter the value for different
countries in different languages.
- **Single choice**: Allows to select between multiple values as a radio button in the content creation form.
- **Multiple choice**: Allows to select multiple values as a multiple checkboxes in the content creation form.
- **Single select dropdown**: Displays a dropdown that only allows one item selection in the content creation form.
- **Multiple select dropdown**: Displays a dropdown that allows multiple item selection in the content creation form.
- **Single relation**: Allows the creation of a relation between this field and a different module instance.
- **Multiple relation**: Allows the creation of multiple relations between the field and different modules.

## Segmentation

Modules can segment the content so the applications request the content that is targetted to them. Segmentation doesn't protect the content from accessibility between users to the same module,
but it is intended to be used as a way to clasify content.

To enable segmentation in content instances, firstly it is needed to attach the segmentation tags to a module. Segmentation tags have 4 different categories:

- **Device**: default tags created with the default tags from the devices.
- **User**: custom tags created by users.
- **Market**: allows segmentation based on countries. This way the instances can be divided or used differently per country.
- **Language**: this tags contain all the standard languages in the world so the content can be segmented by language. For localized fields, all the tags attached as language tags to the module
are the ones that will be available as languages for the localization.

### Apply a segmentation tag to a Content Item

- Go to the module structure menu.
- In content tags section, press the button '*Add tags*'.
- In the left dropdown select the tag type that will be looked at. In the right part you can search for a specific tag.
- Once you have selected the tags that will be added to the content, press the '*Add*' button.
- Go to the content item you want to attach a tag to by selecting the content item list.
- Click on the concrete item.
- In the '*Apply tags*' section click on the tags you want to add to this content.
- Don't forget to save your content once you finish the edition.

### Delete a segmentation tag from a Content Item

- Access the left panel menu '*Content*'.
- Open the content items tab.
- Select the item you want to remove the tag from.
- Click on the 'X' next to the tag to remove it.
- Don't forget to save the content item.

## Notification templates

As well as the tags, when you send a notification attached to the publication of a content item, you can specify which templates are available. Once you have defined in the notifications
section the possible templates, you can select which of those templates can be used in the notifications for this content.

To add new templates to the module structure:

- Access the left panel menu '*Content*'.
- In the module structure tab, scroll to the '*Push templates*' section.
- From all the available push templates, click on the ones you want to have available in this module. They will be automatically added.
- From now on, you can select this push templates when sending push notifications with applied content to your users.

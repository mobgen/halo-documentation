---
title: Content Structure Fields
id: cms_content_module_structure
sidebar_label: Content structure fields
---

## Content structure fields: Configuration

You can configure the content structures by accessing the left panel menu <span class="fa fa-bars"></span> content icon. When configuring a content structure you can
customize 4 main parameters:

- **Fields**: Here you will define the fields of a content structure. Imagine your entity book has an ISBN, an internal id,
a title and some description. Each of this elements is a field, and you can select the type of field so HALO can make some
checks and validations against it.
- **Multilanguage**: You can add and configure which languages will be avaliable. You can add a list of diferent languages and select one of this to be the default language to the content items that use this structure.
- **Segmentation tags**: You can configure which tags will be available for this content. A tag is just a way to differentiate
content and the audiences it has access. Lets say we have some content that is only available for US market, but not for UK,
then we can add a market tag to avoid it to appear for those markets.
- **Push templates**: You can also schedule a push notification attached to a content item. This way you can update the apps
in background seamlessly and without worrying about the publication time.

You can also assign the users that have access to this content structure using the '*assign users*' form, but this is out of the scope of this document.

![](/img/tutorial_create_module_structure.gif)


## Fields

When you model your data you may need different types of fields to fit it. In HALO we provide a huge amount of different fields 
that you can use in your content structures:

### Basics
- **Text**: This field accepts just plain text to match a typical String field.
- **Long text**: This field accepts the same as text field, but accepts a way bigger text and html formatting.
- **Boolean**: This field accepts or true or false.
- **Number**: This field accepts a number that can be decimal.
- **Date**: This field accepts a date (day/month/year).
- **Time**: This field accepts a moment in the day in terms of hh:mm:ss.
- **Image**: This field accepts a link that refers an image or upload your own image to the cloudinary service connected with HALO.
- **Video**: This field behaves the same way as the image but with video. You can paste a video url or you can upload a video to the platform.
- **Object**: This field is a generic object field that accepts a json object format, for all the items that are not matching with all the other options.
- **List**: This field is a text field that has to be expressed as a JSON Array, storing multiple items.

### Validation fields
- **Website**: This field accepts a website and this field will validate the format of the website. It should be something like `http(s)://pre.website.domain/acceptsThis?andAlso=params`
- **Youtube**: This field accepts a youtube video and validates the source. Some sort of special video field.
- **Color**: This field accepts hexadecimal colors.

### Multichoice and complex relations
- **Localized text**: This field allows the user to enter the value for different countries in different languages based on the tags of the structure.
- **Single choice**: This field allows to select between multiple values as a radio button in the content creation form.
- **Multiple choice**: This field allows to select multiple values as a multiple checkboxes in the content creation form.
- **Single select dropdown**: This field displays a dropdown that only allows one item selection in the content creation form.
- **Multiple select dropdown**: This field displays a dropdown that allows multiple item selection in the content creation form.
- **Single relation**: This field allows the creation of a relation between this field and a different content item.
- **Multiple relation**: This field allows the creation of multiple relations between the field and different content structures.

## Segmentation

The content can be segmented based on tags, meaning the applications can display just the content targeted to them. Segmentation doesn't protect the content from accessibility between users to the same content structure,
but it is intended to be used as a way to classify content.

In order to segment your content, first you need to add the relevant tags to the content structure itself.

### Apply a segmentation tag to a content item

- Go to the content structure menu.
- In content tags section, press the button '*Add tags*'.
- In the left dropdown select the tag type that will be looked at. In the right part you can search for a specific tag.
- Once you have selected the tags that will be added to the content, press the '*Add*' button.
- Go to the content item you want to attach a tag to by selecting the content item list.
- Click on the concrete item.
- In the '*Apply tags*' section click on the tags you want to add to this content.
- Don't forget to save your content once you finish the edition.

### Delete a segmentation tag from a content item

- Access the left panel menu '*Content*'.
- Open the content items tab.
- Select the item you want to remove the tag from.
- Click on the 'X' next to the tag to remove it.
- Don't forget to save the content item.

## Notification templates

As well as the tags, when you send a notification attached to the publication of a content item, you can specify which templates are available. Once you have defined in the notifications
section the possible templates, you can select which of those templates can be used in the notifications for this content.

To add new templates to the content structure:

- Access the left panel menu '*Content*'.
- In the content structure tab, scroll to the '*Push templates*' section.
- From all the available push templates, click on the ones you want to have available in this content structure. They will be automatically added.
- From now on, you can select this push templates when sending push notifications with applied content to your users.

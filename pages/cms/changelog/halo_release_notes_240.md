---
title: HALO Release Notes - Changelog for 2.4.0
keywords: cms, server, changelog, 2.4
last_updated: Aug 9, 2017
tags: [changelog]
sidebar: cms_sidebar
toc: false
permalink: halo_release_notes_240.html
folder: cms
---

## Changelog

## CMS changes
- UX improvements: highlight created / updated items, usage of snack-bars, better switch buttons, copy / paste of dropdown values, explanatory texts, undesirable click zones, inconsistent namings, annoying popups...
- Image support for push notifications
- Navigation improvements for modules, content items and structure fields
- Better handling for user session expiration and overall improvements for error handling
- Possibility to remove push notifications, dates, times, colors and relations on content items
- Improvements for sorting media files, content items, push notifications and apps
- Possibility to show the selected tags on the tags popup
- Contextual user segmentation chart for content item page
- Media files links to content items where are used
- Dynamic logic background image (based on day time)
- Progress loader for import and batch operations of content items
- Support for deeplinks on the url field of a push notification
- Sensitive audit data removal available on the configuration of the apps
- Possibility to filter by Published and Concept content items
- Autocomplete for tag names and values
- More granularity for module / item permissions for apps (read, write, update, delete)
- RTL support for arabic and other languages
- Multiple bug fixes...

## Server changes
- Enabled targeted push notifications to identified app users
- Content data type checks improvement
- Improvements for sorting content items: support for additional attributes and field values
- Search by long values, possibility to search content items by any field
- Dynamic app user data / references saving
- Loyalty: user list, points and trasactions, stamps behaviour
- Fixed memory leak for instances batch
- Azure deployment compatibility
- Improved API documentation: https://halo.mobgen.com/api/docs/
- Multiple bug fixes...

### New webservices

- Allows to send "targeted" push notifications to identified app users
[POST /api/push/schedule/toIdentified]()

- Allows to send "targeted" push notifications to anonymous app users
[POST /api/push/schedule/toAliases]()

- Returns the list of loyalty users
[POST /api/loyalty/user/search]()

- Returns the loyalty information of the logged user
[GET /api/loyalty/user/self]()

- Returns the loyalty information of the user
[GET /api/loyalty/user/{id}]()

- Recalculates user points balance
[POST /api/loyalty/user/rebalance]()

- Saves or deletes a reference to media files
[POST /api/media/file/updateByUrl]()

### Breaking changes

- None



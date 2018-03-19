---
title: HALO Release Notes - Changelog for 2.5.0 Cambados
keywords: cms, server, changelog, 2.5
last_updated: March 19, 2018
tags: [changelog]
sidebar: cms_sidebar
toc: false
permalink: halo_release_notes_250.html
folder: cms
---

There is a document that explains visually the most important changes of this release. You can download it [here](files/halo_release_notes_250.pdf).

## CMS Changes
- First-time user assistance tooltips
- Ability to add tags to multiple content items simultaneously via list view
- Breadcrumbs in header to help navigate
- User profile enabled for all CMS users and direct link via header bar
- Media search enabled in content items
- CMS branding per customer possible
- Dynamic columns for fields on the content item list & improvements
- More clarifying texts in templates
- Several visual improvements for icons/buttons
- Geolocation field added
- Categorize media library items (tag and segment media)
- GDPR compliance implementations
- Multiple error messages improved
- Several bug fixes

## Server changes
- Push notifications improvements: to web browsers, scheduling, deletion, 
- Loyalty: campaigns creation,
- Audit compliance implementations
- Customization the sender (sms, email, push) in the 2-factor authentication
- Error registering in device on push notifications
- GDPR consent registrations 

### New webservices

- Returns the list of changes applied to an item
[POST /api/audit/record/search]()

- Generates a report with all changes for a specific period
[GET /api/audit/record/report]()

- Retrieves CMS settings for color schema and logo
[GET /api/core/customer/settings/self]()

- Updates CMS settings color schema and logo
[POST /api/core/customer/settings/self]()

- Validates email or requests a new email to validate it
[POST /api/core/user/emailconfirmation]()

- Updates fields order for the specified module
[POST /api/generalcontent/field/order]()

- Exports module data including fields and instances
[POST /api/generalcontent/module/export/]()

- Reports push activity based on app users behavior
[POST /api/push/schedule/activity]()

- Returns the list of users registered with social accounts
[POST /api/segmentation/identified/search]()

- Creates or updates the personal key-value storage of the logged user
[PUT /api/segmentation/identified-pocket/self]()

### Breaking changes

- None



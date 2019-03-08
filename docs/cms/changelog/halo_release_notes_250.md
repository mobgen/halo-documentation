---
title: Changelog for 2.5.0 - Cambados
---

There is a document that explains visually the most important changes of this release. You can download it [here](/files/halo_release_notes_250.pdf).

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
[POST /api/audit/record/search](https://web-halo.mobgen.com/api/docs/)

- Generates a report with all changes for a specific period
[GET /api/audit/record/report](https://web-halo.mobgen.com/api/docs/)

- Retrieves CMS settings for color schema and logo
[GET /api/core/customer/settings/self](https://web-halo.mobgen.com/api/docs/)

- Updates CMS settings color schema and logo
[POST /api/core/customer/settings/self](https://web-halo.mobgen.com/api/docs/)

- Validates email or requests a new email to validate it
[POST /api/core/user/emailconfirmation](https://web-halo.mobgen.com/api/docs/)

- Updates fields order for the specified module
[POST /api/generalcontent/field/order](https://web-halo.mobgen.com/api/docs/)

- Exports module data including fields and instances
[POST /api/generalcontent/module/export/](https://web-halo.mobgen.com/api/docs/)

- Reports push activity based on app users behavior
[POST /api/push/schedule/activity](https://web-halo.mobgen.com/api/docs/)

- Returns the list of users registered with social accounts
[POST /api/segmentation/identified/search](https://web-halo.mobgen.com/api/docs/)

- Creates or updates the personal key-value storage of the logged user
[PUT /api/segmentation/identified-pocket/self](https://web-halo.mobgen.com/api/docs/)

### Breaking changes

- None



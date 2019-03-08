---
title: HALO Release Notes - Changelog for 2.2.0
keywords: cms, server, changelog, 2.2
last_updated: January 30, 2017
tags: [changelog]
sidebar: cms_sidebar
toc: false
permalink: halo_release_notes_220.html
folder: cms
---

## Changelog

## CMS changes
- Dynamic columns on the lists (columns selector with semi-responsive width)
- Admin dashboard improvements (push notifications, segmentation statistics)
- Content management detailed permissions for apps (add, modify, remove content)
- Tag statistics for segmentation, tag type filter, search by value improvement
- Contextual help panel
- Duplicate modules and content items
- Module import / export functionality
- Lists now remembers pagination, filters, search and mode uppon navigation (url and state)
- Content item state flow simplified ( draft => published => archived )
- Forgot password functionality
- Confirmation email for user creation
- Total of content items on the module list
- Detailed push feedback (success, failure, devices)
- General CMS navigation improvements
- Multiple bug fixes...

## Server changes
- Social login functionality (Facebook, Google, Halo)
- APP+ role for identified app users
- Content management enabled for App SDKs
- Initial work on 2 factor confirmation webservices
- Database health check and reconnection improvements
- Push notification performance and memory comsuption improvements
- App user events (ip geolocation tracking)
- App user tracking improvements for billing
- Multiple bug fixes...

### New webservices

- Get app user events by day: 
[POST /api/events/daily/](https://halo.mobgen.com/api/docs/#!/Events-_Daily/createDailyEvent)

- Duplicate module with fields and items: 
[POST /api/generalcontent/module/duplicate/](https://halo.mobgen.com/api/docs/#!/General_content_-_Module/duplicateModule)

- Import module with fields and items:
[POST /api/generalcontent/module/import/](https://halo.mobgen.com/api/docs/#!/General_content_-_Module/importModule)

- Search multiple push archives by schedule id:
[POST /api/generalcontent/module/upload/](https://halo.mobgen.com/api/docs/#!/Push_-_Archive/push_archive_search)

- [Beta] Redeem a loyalty item
[POST /api/loyalty/redeemable/](https://halo.mobgen.com/api/docs/#!/Loyalty_-_Redeemable/loyalty_redeemable_create)

- [Beta] Get a loyalty item
[GET /api/loyalty/redeemable/](https://halo.mobgen.com/api/docs/#!/Loyalty_-_Redeemable/loyalty_redeemable_list)

- [Beta] Register 2 factor confimation user
[POST /api/2-factor/user/register/](https://halo.mobgen.com/api/docs/#!/2-factor_-_User/2-factor_register)


### Breaking changes

- None



---
title: HALO Release Notes - Changelog for 2.3.0
keywords: cms, server, changelog, 2.3
last_updated: May 8, 2017
tags: [changelog]
sidebar: cms_sidebar
toc: false
permalink: halo_release_notes_230.html
folder: cms
---

## Changelog

## CMS changes
- New Media section on the menu (management, gallery, ...)
- Multi-language improvements across all Content sections
- Single/Multiple relationships popup selector
- System webhooks section - Publish content webhook
- Content section navigation improvements
- Support for Audio fields (Media)
- Go to top button for big Content modules
- Multiple bug fixes...

## Server changes
- HTTP V2 support
- Added search support for text patterns (short texts)
- 2-Factor authentication / confirmation services (channels: email, sms, push notifications, ...)
- Webhooks integrations for third parties
- Multi-language field migrations
- Support for case insensitive sorting
- Multiple locales and related content filtering
- Import/Batch content improvements (streaming and SSE)
- Security improvements
- Healthcheck improvements
- Multiple bug fixes...

### New webservices

- Get app user events by day: 
[POST /api/2-factor/code/send](https://halo.mobgen.com/api/docs/#!/2-factor_-_Code/2_factor_send_code)

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



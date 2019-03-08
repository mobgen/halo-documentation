---
title: Changelog for 2.3.0 - Altamira
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
- Server version visible on the homepage
- Multiple bug fixes...

## Server changes
- 2-Factor authentication / confirmation services (channels: email, sms, push notifications, ...)
- Enabled content editing for identified app users (add, remove and modify content)
- Webhooks integrations for third parties
- Multiple locales and related content filtering
- Added search support for text patterns (short texts)
- Multi-language field migrations
- Support for case insensitive sorting
- Import/Batch content improvements (streaming and SSE)
- Push notifications process divided in webservices, producer, consumer and checker containers
- HTTP V2 support
- Security improvements
- Healthcheck improvements
- Multiple bug fixes...

### New webservices

- Sends 2-Factor messages with a code: 
[POST /api/2-factor/code/send](https://web-halo..mobgen.com/api/docs/#!/2-factor_-_Code/2_factor_send_code)

- Validates 2-Factor codes: 
[POST /api/2-factor/code/validate](https://web-halo..mobgen.com/api/docs/#!/2-factor_-_Code/2_factor_validate_code)

- Registers an user for the 2-Factor services:
[POST /api/2-factor/user/register](https://web-halo..mobgen.com/api/docs/#!/2-factor_-_User/2_factor_register)

- Unregisters an user or channel for the 2-Factor services:
[POST /api/2-factor/user/unregister](https://web-halo..mobgen.com/api/docs/#!/2-factor_-_User/2_factor_unregister)

- Obtains the list of system actions (including web-hooks):
[GET /api/events/action](https://web-halo..mobgen.com/api/docs/#!/Events_-_Action/events_action_list)

- Search for an specific system action by key (including web-hooks):
[GET /api/events/action/{key}](https://web-halo..mobgen.com/api/docs/#!/Events_-_Action/events_action_get)

- Creates or updates a system action (including web-hooks):
[POST /api/events/action](https://web-halo..mobgen.com/api/docs/#!/Events_-_Action/events_action_create)

- Triggers a system action (including web-hooks):
[POST /api/events/action/trigger](https://web-halo..mobgen.com/api/docs/#!/Events_-_Action/events_action_trigger)

### Breaking changes

- None



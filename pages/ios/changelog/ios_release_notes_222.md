---
title: iOS Framework - Changelog for 2.2.2
keywords: ios, changelog, 2.2.2
last_updated: March 22, 2017
tags: [changelog]
sidebar: ios_sidebar
toc: false
permalink: ios_release_notes_222.html
folder: ios
---

## Changelog

### Core SDK

- **New feature:** Content. Added the possibility of using relationships to retrieve related instances (new functions in `SearchQuery`).
- Timeouts for network requests are now configurable from outside the SDK (`timeoutIntervalForRequest` and `timeoutIntervalForResource`).
- Improved logging.
- Minor bugfixes.

### Notifications SDK

- Added a new delegate protocol (`TwoFactorAuthenticationDelegate`) to specifically handle two factor authentication push notifications.

## Breaking changes

### Notifications SDK

- Replaced the three existing methods with only one. Created the `HaloNotification` model, which also contains a `type` helpful when trying to differentiate what kind of push notification the device is receiving (`normal`, `silent`, `twoFactor`).
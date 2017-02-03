---
title: iOS SDK - Changelog for 2.1.0
keywords: android, changelog, 2.1.0
last_updated: January 9, 2017
tags: [changelog]
sidebar: ios_sidebar
toc: false
permalink: ios_release_notes_210.html
folder: ios
---

## Changelog

- Fix some issues related to NSCoding and Swift 3.
- Information related to the app/user is now safely stored in the keychain (added new dependency to `SwiftKeychainWrapper`).
- Extended protocols for add-ons to handle urls.
- Created the `AuthManager` to handle all the authentication-related operations. Provide user authentication (HALO users) as part of the core.
- Update SSL certificate and enable SSL pinning by default (having also an option to disable it).
- Solve a bug when retrying requests.
- Added more tests and improved code coverage.

## Breaking changes

- Changed the configuration and launching process of the core. All the setup should now be done inside the `application:willFinishLaunchingWithOptions:` function.
- Removed some redundant parameter names from some functions.
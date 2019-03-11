---
title: 2.4.0 - Balboa
---

## Changelog

### Core SDK

* Added support for the sort operation of content instances via the search query
* Implemented the pocket feature to store custom data associated to an identified user
* Added support for rich notifications (notifications with image)
* Other minor bugfixes
* Allow to sync by name
* Allow to change user and app credentials to change environment dynamically
* Fix several bugs.

### Notifications SDK

* Added last firebase dependencies
* Fixed an issue where the device wouldn't get a valid push token in the startup process
* Fixed an issue where silent notifications were received as regular ones

### Social SDK

* Removed unused Firebase dependencies
* Added new Google and Facebook dependecies
* Fix minor issues
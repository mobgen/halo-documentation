---
title: iOS Framework - Changelog for 2.2.0
keywords: android, changelog, 2.2.0
last_updated: February 3, 2017
tags: [changelog]
sidebar: ios_sidebar
toc: false
permalink: ios_release_notes_220.html
folder: ios
---

## Changelog

### Core SDK

- **New feature:** content creation/modification/deletion through the new functions in the ```ContentManager```.
- Added a new ```like``` operator intended to be used when searching content.
- Added more verbose logging showing also the network responses (when in ```info``` level).
- Improvements and fixes to the user authentication process

### Social SDK

- Release of the HALO Social SDK, providing the implementations of addons to log in using Facebook or Google credentials.

## Breaking changes

### Core SDK

- Removed some redundant named parameters in some functions.
- New way of logging messages. More flexible and powerful way, by implementing different loggers and registering them within the core.
---
title: 2.0.0
---

## Changelog
- Bug fix: Server version not working properly
- Bug fix: Errors on search
- Bug fix: "in" and "not in" operator in SearchOptions were not working properly
- Bug fix: paginated items parsing was not working properly. Now it is ```Paginated<Class>``` instead of ```Paginated<List<Class>>```
- Bug fix: deleted items were still present using ```SearchOptionsBuilderFactory.getPublishedItems```.

- New feature: Adds "Module name" search in the SearchOptions
- New feature: Sync works with module name instead of module id
- New feature: logout support for user credentials
- New feature: parser changed so it can be customized
- New feature: Adds segment mode for partial or total matching in tag search
- New feature: Support for authenticated users with App+ tokens
- New feature: Firebase support for analytics and notifications
- New feature: Rewrite of the plugin to make the getting started easier
- New feature: Plugin now supports the different sdks and does not generate anymore information in a json

- Improvement: Cold start even faster
- Improvement: Stability improvements with sensor app
- Improvement: ```HaloNetworkApi``` simplifies the parser interface
- Improvement: Firebase messages library updated
- Improvement: documentation completely updated for the published sdks (content, notifications, translations, presenter and core). More to come

## Breaking changes

- Complete redesign of the sdks, libraries and plugins. Please follow the implementation details in the documentation to change your current ones. Contact support if you have any thoughts or concerns
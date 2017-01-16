---
title: HALO CMS - System overview
keywords: cms, middleware, configuration, admin
last_updated: December 21, 2016
tags: [cms]
sidebar: cms_sidebar
permalink: cms_system_overview.html
folder: cms
---

The system section allows you to create a middleware as an admin. A middleware is needed in the case our system does
not support some custom feature that is needed by your business. 

This section can only be accessed by with administration rights and it is located in the left menu. Within this 
section you can:

- Configure a new middleware located in some url.
- Remove any of the modules configured for your company.

{% include warning.html content="Be careful when removing this entries. They perform the link between different parts of the system and removing them can break some key links and make content not available or your apps useless." %}

## Operations on system

### Create your custom middleware link

- As an admin, in the top left menu select 'System'.
- In the top action bar click on '*New module type*'.
- Enter a name for the middleware.
- Enter its external url link. The link must be under `https://modules.halo.com/authentication`
- The Api url will be internally defined automatically.

### Search a custom middleware

- As an admin, in the top left menu select 'System'.
- In the top action bar click on '*Search*'.
- Enter the name you want to search and the list will be automatically filtered.
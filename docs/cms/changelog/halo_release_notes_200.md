---
title: 2.0.0
---

## Changelog

## CMS changes
- Complete redesign and UX improvements
- User ip security filtering (whitelist)


## Server changes

### New webservices

- Get current user: GET /api/core/user/self
- Update current user: PUT /api/core/user/self
- Get moduletype config: GET /api/core/moduletype/download/<id>
- Revoking an user right: POST /api/authentication/right/revoke
- Granting an user right: POST /api/authentication/right/grant

### Breaking changes

- Removed webservice: GET /api/authentication/module 
- Removed webservice: GET /api/authentication/module 
- Removed webservice: GET /api/generalcontent/fieldTypeFormat/
- Removed webservice: GET /api/generalcontent/fieldTypeFormat/<id>
- Removed webservice: DELETE /api/segmentation/appuser/<id>
- Removed webservice: GET /api/authentication/useraddons/
- Removed webservice: POST /api/authentication/useraddons/
- Removed webservice: DELETE /api/authentication/useraddons/<id>
- Removed webservice: PUT /api/authentication/useraddons/<id>
- Removed webservice: GET /api/authentication/usermodules/
- Removed webservice: POST /api/authentication/usermodules/
- Removed webservice: DELETE /api/authentication/usermodules/<id>
- Removed webservice: PUT /api/authentication/usermodules/<id>
- Removed webservice: GET /core-api/module
- Removed webservice: GET /core-api/module/<id>
- Removed webservice: GET /core-api/module/<id>
- Removed webservice: GET /api/authentication/module
- Removed webservice: PUT '/api/authentication/module/<id>
- Deprecated webservices: GET, POST, PUT /api/segmentation/appuser
- Migrated webservice: GET /api/authentication/app/  =>  GET /core-api/app/
- Migrated webservice: GET /api/authentication/user/  =>  GET /core-api/user/
- Migrated webservice: PUT /api/authentication/user/<id>  =>  PUT /core-api/user/<id>
- Migrated webservice: GET /api/authentication/user/<id>  =>  GET /core-api/user/<id>
- Migrated webservice: GET /api/authentication/instance/  =>  GET /api/generalcontent/instance/


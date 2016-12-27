---
title: User authentication
keywords: ios, auth
last_updated: December 27, 2016
tags: [auth]
sidebar: ios_sidebar
toc: false
permalink: ios_auth_overview.html
folder: ios
---

HALO provides a way to register and store user accounts within the platform, allowing those users to later log in into the platform. All these operations will be performed through the ```AuthManager```.

## Registration

```swift
public func register(authProfile: AuthProfile,
                     userProfile: UserProfile,
                     completionHandler handler: @escaping (UserProfile?, NSError?) -> Void) -> Void
```

parameter | description
---- | ----
**authProfile** | Instance of ```AuthProfile``` containing the credentials to be used for the authentication
**stayLoggedIn** | 
**completionHandler** | 

### Sample code

```swift
Halo.Manager.auth.register()
```

## Login

```swift
public func login(authProfile: AuthProfile,
                  stayLoggedIn: Bool, 
                  completionHandler handler: @escaping (User?, NSError?) -> Void) -> Void
```

parameter | description
---- | ----
**authProfile** | Instance of ```AuthProfile``` containing the credentials to be used for the authentication
**stayLoggedIn** |
**completionHandler** |

## Logout

```swift
public func logout(completionHandler handler: @escaping (Bool) -> Void) -> Void
```

parameter | description
---- | ----
**completionHandler** |
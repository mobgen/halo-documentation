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

### Sample code

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#swift-2" data-toggle="tab">Swift</a></li>
  <li role="presentation"><a href="#objc-2" data-toggle="tab">ObjC</a></li>
</ul>

<div class="tab-content">
  <div id="swift-2" class="tab-pane fade in active">
    <pre><code class="swift">import Halo

[...]

// Device should be set after calling startup. 
guard let deviceAlias = Halo.Manager.core.device?.alias else {
  // Without a device, you cannot login.
  return
}

// Set an AuthProfile to login
let authProfile = AuthProfile(email: "your@email.com", password: "yoursecretpassword", deviceId: deviceAlias)

// Request login with the AuthProfile
Manager.auth.login(authProfile: authProfile, stayLoggedIn: false) { (user, error) in
  if error != nil {
    // Something went wrong.
  } else {
    // User logged in succesfully. Do something with "user".
  }
}</code></pre>
  </div>
  <div id="objc-2" class="tab-pane fade">
    <pre><code class="objective-c">#import <Halo/Halo-Swift.h>
#import <HaloObjC/HaloObjC-Swift.h>

[...]

// Set an AuthProfile to login
HaloAuthProfile *authProfile = [[HaloAuthProfile alloc] initWithEmail:@"your@email.com" password:@"yoursecretpassword" deviceId:HaloManager.core.device.alias];    

// Request login with the HaloAuthProfile
[HaloManager.auth loginWithAuthProfile:authProfile stayLoggedIn:false completionHandler:^(HaloUser * _Nullable user, NSError * _Nullable error) {
  if error != NULL {
    // Something went wrong.
  } else {
    // User logged in succesfully. Do something with "user".
  }
}];</code></pre>
  </div>
</div>

## Logout

```swift
public func logout(completionHandler handler: @escaping (Bool) -> Void) -> Void
```

parameter | description
---- | ----
**completionHandler** |


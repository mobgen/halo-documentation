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

The HALO SDK provides a way to register and store user accounts within the platform, allowing those users to later log in into the platform. All these operations will be performed through the ```AuthManager```.

## `UserProfile` and `AuthProfile`

The two basic structures involved in the authentication process within HALO are the `UserProfile` and the `AuthProfile`. 

The first one will be needed when registering a user, and it will contain basic information about the user, such as email, name, surname, etc. On the other hand, the latter will store information about the credentials (username, password, token, etc) and will be needed both when registering a new user and also when performing the login action.

### `UserProfile`

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#swift-1" data-toggle="tab">Swift</a></li>
  <li role="presentation"><a href="#objc-1" data-toggle="tab">ObjC</a></li>
</ul>

<div class="tab-content">
  <div id="swift-1" class="tab-pane fade in active">
    <pre><code class="swift">public init(id: String?, 
            email: String, 
            name: String, 
            surname: String, 
            displayName: String?, 
            profilePictureUrl: String?)</code></pre>
  </div>
  <div id="objc-1" class="tab-pane fade">
    <pre><code class="objective-c">- (nonnull instancetype)initWithId:(NSString * _Nullable)id 
      email:(NSString * _Nonnull)email 
      name:(NSString * _Nonnull)name 
      surname:(NSString * _Nonnull)surname 
      displayName:(NSString * _Nullable)displayName 
      profilePictureUrl:(NSString * _Nullable)profilePictureUrl</code></pre>
  </div>
</div>

### `AuthProfile`

An `AuthProfile` can be constructed in two ways, either by providing the email, password and deviceId (being the latter optional in Swift, it will default to the deviceId of the current device if any) or by providing a token, the identifier of a network and the deviceId (same as before).

This last option is intended to be used when integrating the login in HALO with other social networks (Google, Facebook).

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#swift-2" data-toggle="tab">Swift</a></li>
  <li role="presentation"><a href="#objc-2" data-toggle="tab">ObjC</a></li>
</ul>

<div class="tab-content">
  <div id="swift-2" class="tab-pane fade in active">
    <pre><code class="swift">public init(email: String, password: String, deviceId: String? = default)

public init(token: String, network: Halo.Network, deviceId: String? = default)</code></pre>
  </div>
  <div id="objc-2" class="tab-pane fade">
    <pre><code class="objective-c">- (nonnull instancetype)initWithEmail:(NSString * _Nonnull)email 
      password:(NSString * _Nonnull)password 
      deviceId:(NSString * _Nullable)deviceId

- (nonnull instancetype)initWithToken:(NSString * _Nonnull)token 
      network:(enum Network)network 
      deviceId:(NSString * _Nullable)deviceId</code></pre>
  </div>
</div>

## Registration

Registering a user in the platform is really simple after creating the two structures containing the required information. Once the call is performed, the result will be provided within the completion handler, either by returning the successfully registered user in HALO, or an error if any has occurred.

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#swift-3" data-toggle="tab">Swift</a></li>
  <li role="presentation"><a href="#objc-3" data-toggle="tab">ObjC</a></li>
</ul>

<div class="tab-content">
  <div id="swift-3" class="tab-pane fade in active">
    <pre><code class="swift">public func register(authProfile: AuthProfile,
                userProfile: UserProfile,
                completionHandler handler: @escaping (UserProfile?, HaloError?) -> Void) -> Void</code></pre>
  </div>
  <div id="objc-3" class="tab-pane fade">
    <pre><code class="objective-c">- (void)registerWithAuthProfile:(HaloAuthProfile * _Nonnull)authProfile 
    userProfile:(HaloUserProfile * _Nonnull)userProfile 
    completionHandler:(void (^ _Nonnull)(HaloUserProfile * _Nullable, NSError * _Nullable))handler</code></pre>
  </div>
</div>

## Login

For an already registered user, the login action can be performed by providing the corresponding `AuthProfile` containing the credentials of that user. An extra parameter (`stayLoggedIn`) allows the developer to decide whether those credentials should be safely stored (in the keychain) to try and automatically log in again when the app is restarted.

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#swift-4" data-toggle="tab">Swift</a></li>
  <li role="presentation"><a href="#objc-4" data-toggle="tab">ObjC</a></li>
</ul>

<div class="tab-content">
  <div id="swift-4" class="tab-pane fade in active">
    <pre><code class="swift">public func login(authProfile: AuthProfile,
                  stayLoggedIn: Bool, 
                  completionHandler handler: @escaping (User?, HaloError?) -> Void) -> Void</code></pre>
  </div>
  <div id="objc-4" class="tab-pane fade">
    <pre><code class="objective-c">- (void)loginWithAuthProfile:(HaloAuthProfile * _Nonnull)authProfile
    stayLoggedIn:(BOOL)stayLoggedIn
    completionHandler:(void (^ _Nonnull)(HaloUser * _Nullable, NSError * _Nullable))handler</code></pre>
  </div>
</div>

### Sample code

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#swift-5" data-toggle="tab">Swift</a></li>
  <li role="presentation"><a href="#objc-5" data-toggle="tab">ObjC</a></li>
</ul>

<div class="tab-content">
  <div id="swift-5" class="tab-pane fade in active">
    <pre><code class="swift">import Halo

[...]

// Set an AuthProfile to login
let authProfile = AuthProfile(email: "your@email.com", password: "yoursecretpassword")

// Request login with the AuthProfile
Manager.auth.login(authProfile: authProfile, stayLoggedIn: false) { (user, error) in
  if error != nil {
    // Something went wrong.
  } else {
    // User logged in succesfully. Do something with "user".
  }
}</code></pre>
  </div>
  <div id="objc-5" class="tab-pane fade">
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
<br/>

The **current user**, if any, can be accessed at any time through the `currentUser` property of the `AuthManager` instance (optional in Swift, nullable in Objective-C).

## Logout

The logout action is fairly simple as well. Only by calling the `logout` function, the `currentUser` will be removed and the result of the operation will be provided in the completion handler.

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#swift-6" data-toggle="tab">Swift</a></li>
  <li role="presentation"><a href="#objc-6" data-toggle="tab">ObjC</a></li>
</ul>

<div class="tab-content">
  <div id="swift-6" class="tab-pane fade in active">
    <pre><code class="swift">public func logout(completionHandler handler: @escaping (Bool) -> Void) -> Void</code></pre>
  </div>
  <div id="objc-6" class="tab-pane fade">
    <pre><code class="objective-c">- (void)logout:(void (^ _Nonnull)(BOOL))handler</code></pre>
  </div>
</div>
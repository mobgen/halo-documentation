---
title: User authentication
---

The HALO SDK provides a way to register and store user accounts within the platform, allowing those users to later 
log in into the platform. All these operations will be performed through the ```AuthManager```.

## `UserProfile` and `AuthProfile`

The two basic structures involved in the authentication process within HALO are the `UserProfile` and the `AuthProfile`. 

The first one will be needed when registering a user, and it will contain basic information about the user, such as email, name, surname, etc. On the other hand, the latter will store information about the credentials (username, password, token, etc) and will be needed both when registering a new user and also when performing the login action.

### `UserProfile`

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
public init(id: String?, 
            email: String, 
            name: String, 
            surname: String, 
            displayName: String?, 
            profilePictureUrl: String?)
```
<!--Obj-C-->
```C
- (nonnull instancetype)initWithId:(NSString * _Nullable)id 
      email:(NSString * _Nonnull)email 
      name:(NSString * _Nonnull)name 
      surname:(NSString * _Nonnull)surname 
      displayName:(NSString * _Nullable)displayName 
      profilePictureUrl:(NSString * _Nullable)profilePictureUrl
```
<!--END_DOCUSAURUS_CODE_TABS-->

### `AuthProfile`

An `AuthProfile` can be constructed in two ways, either by providing the email, password and deviceId 
(being the latter optional in Swift, it will default to the deviceId of the current device if any) or by providing 
a token, the identifier of a network and the deviceId (same as before).

This last option is intended to be used when integrating the login in HALO with other social networks (Google, Facebook).

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
public init(email: String, password: String, deviceId: String? = default)

public init(token: String, network: Halo.Network, deviceId: String? = default)
```
<!--Obj-C-->
```C
- (nonnull instancetype)initWithEmail:(NSString * _Nonnull)email 
      password:(NSString * _Nonnull)password 
      deviceId:(NSString * _Nullable)deviceId

- (nonnull instancetype)initWithToken:(NSString * _Nonnull)token 
      network:(enum Network)network 
      deviceId:(NSString * _Nullable)deviceId
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Registration

Registering a user in the platform is really simple after creating the two structures containing the required 
information. Once the call is performed, the result will be provided within the completion handler, either by 
returning the successfully registered user in HALO, or an error if any has occurred.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
public func register(authProfile: AuthProfile,
                userProfile: UserProfile,
                completionHandler handler: @escaping (UserProfile?, HaloError?) -> Void) -> Void
```
<!--Obj-C-->
```C
- (void)registerWithAuthProfile:(HaloAuthProfile * _Nonnull)authProfile 
    userProfile:(HaloUserProfile * _Nonnull)userProfile 
    completionHandler:(void (^ _Nonnull)(HaloUserProfile * _Nullable, NSError * _Nullable))handler
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Login

For an already registered user, the login action can be performed by providing the corresponding `AuthProfile` 
containing the credentials of that user. An extra parameter (`stayLoggedIn`) allows the developer to decide 
whether those credentials should be safely stored (in the keychain) to try and automatically log in again when 
the app is restarted.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
public func login(authProfile: AuthProfile,
                  stayLoggedIn: Bool, 
                  completionHandler handler: @escaping (User?, HaloError?) -> Void) -> Void
```
<!--Obj-C-->
```C
- (void)loginWithAuthProfile:(HaloAuthProfile * _Nonnull)authProfile
    stayLoggedIn:(BOOL)stayLoggedIn
    completionHandler:(void (^ _Nonnull)(HaloUser * _Nullable, NSError * _Nullable))handler
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Sample code

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
import Halo

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
}
```
<!--Obj-C-->
```C
#import <Halo/Halo-Swift.h>
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
}];
```
<!--END_DOCUSAURUS_CODE_TABS-->

The **current user**, if any, can be accessed at any time through the `currentUser` property of the `AuthManager` 
instance (optional in Swift, nullable in Objective-C).

## Logout

The logout action is fairly simple as well. Only by calling the `logout` function, the `currentUser` will be 
removed and the result of the operation will be provided in the completion handler.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
public func logout(completionHandler handler: @escaping (Bool) -> Void) -> Void
```
<!--Obj-C-->
```C
- (void)logout:(void (^ _Nonnull)(BOOL))handler
```
<!--END_DOCUSAURUS_CODE_TABS-->
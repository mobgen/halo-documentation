---
title: HALO Social Framework Overview
keywords: ios, social
last_updated: December 27, 2016
tags: [social, auth]
sidebar: ios_sidebar
toc: false
permalink: ios_social_overview.html
folder: ios
---

## Adding the dependency

In order to use all the features provided by the HALO Social Framework, its dependency will have to be added to the project. Depending on the tool that it's being used for dependency management, the steps may change.

### Carthage

Adding the dependency on the HALO Social Framework is as easy as adding the following line to the ```Cartfile```:

```sh
github "mobgen/halo-social-ios" "2.2.0"
```

After that, performing a ```carthage update``` should download all the required resources in order to use this Framework.

### CocoaPods

Similarly, configuring the dependency using CocoaPods is fairly simple:

```sh
pod 'HaloSocial', :git => 'https://github.com/mobgen/halo-social-ios.git', :tag => '2.2.0'
```

### Social API

The social API is the way to sign in with social providers on HALO SDK. Importing this framework will need a valid HALO instance configured with some credentials and the credentials of the network providers you want to import.
The HALO SDK allows the user to sign in using a HALO username and password.
The HALO Social SDK allows the user to sign in in two more ways:

* Facebook integration. If you want go in deep, please refer to [the detailed documentation](ios_social_facebook.html)
* Google plus integration. If you want go in deep, please refer to [the detailed documentation](ios_social_google.html)

## Simple use

### Login with HALO
Once the Halo SDK is started, you can use the HaloAuthManager and try to login.

#### Swift

```swift
import Halo
[...]
// Device should be set after calling startup. 
guard let deviceAlias = Halo.Manager.core.device?.alias else {
	// Without a device, you cannot login.
	return
}
//set an AuthProfile to login
let authProfile = AuthProfile(email: "your@email.com", password: "yoursecretpassword", deviceId: deviceAlias)
// Request login with the AuthProfile
Manager.auth.login(authProfile: authProfile, stayLoggedIn: false) { (user, error) in
	if error != nil {
		// Something went wrong.
	} else {
		// User logged in succesfully. Do something with "user".
	}
}
```

#### Objective-C

```objc
#import <Halo/Halo-Swift.h>
#import <HaloObjC/HaloObjC-Swift.h>
[...]
//set an AuthProfile to login
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

### Login with a social provider (Facebook or Google)
Once the Halo SDK is started and you add the Social SDK, you can use a social provider to login.

{% include warning.html content="If you want go in deep on Facebook integration, please refer to [the detailed documentation](ios_social_facebook.html)" %}
{% include warning.html content="If you want go in deep on Google integration, please refer to [the detailed documentation](ios_social_google.html)" %}

If you choose Facebook:

#### Swift

```swift
Halo.Manager.auth.loginWithFacebook(viewController: self, stayLoggedIn: false) { (user, error) in
	if error != nil {
		// Something went wrong.
	} else {
		// User logged in succesfully. Do something with "user".
	}
}
```

#### Objective-C

```objc
[HaloManager.auth loginWithFacebookWithViewController:self stayLoggedIn:false completionHandler:^(HaloUser * _Nullable user, NSError * _Nullable error) {
        if (error != NULL) {
            // Something went wrong.
        } else {
            // User logged in succesfully. Do something with "user".
        }
}];
```

If you choose Google:

#### Swift

```swift
// Your ViewController should implement GIDSignInUIDelegate protocol.
Halo.Manager.auth.loginWithGoogle(uiDelegate: self, stayLoggedIn: false) { (user, error) in
	if error != nil {
		// Something went wrong.
	} else {
		// User logged in succesfully. Do something with "user".
	}
}
```

#### Objective-C

```objc
// Your ViewController should implement GIDSignInUIDelegate protocol.
[HaloManager.auth loginWithGoogleWithUIDelegate:self stayLoggedIn:false completionHandler:^(HaloUser * _Nullable user, NSError * _Nullable error) {
        if (error != NULL) {
            // Something went wrong.
        } else {
            // User logged in succesfully. Do something with "user".
        }
}];
```

### Register
Once the Halo SDK is started, you can use the HaloAuthManager and try to register a new user.

{% include tip.html content="This process only register the user against HALO so you must call to login after registration process finishes correctly." %}

#### Swift

```swift
import Halo
[...]
// Device should be set after calling startup. 
guard let deviceAlias = Halo.Manager.core.device?.alias else {
	// Without a device, you cannot login.
	return
}
let email = "your@email.com"
// set an AuthProfile to register.
let authProfile = AuthProfile(email: email, password: "yoursecretpassword", deviceId: deviceAlias)
// set a UserProfile to register.
let userProfile = UserProfile(id: nil, email: email, name: "YourName", surname: "YourSurname", displayName: nil, profilePictureUrl: nil)
Manager.auth.register(authProfile: authProfile, userProfile: userProfile) { (userProfile, error) in
	if error != nil {
		// Something went wrong.
	} else {
		// User registered succesfully. Do something with "userProfile".
	}
}
```

#### Objective-C

```objc
#import <Halo/Halo-Swift.h>
#import <HaloObjC/HaloObjC-Swift.h>
[...]
NSString *email = @"your@email.com"
HaloAuthProfile *authProfile = [[HaloAuthProfile alloc] initWithEmail:email password:@"yoursecretpassword" deviceId:HaloManager.core.device.alias];
HaloUserProfile *userProfile = [[HaloUserProfile alloc] initWithId:nil email:email name:@"YourName" surname:@"YourSurname" displayName:nil profilePictureUrl:nil];
[HaloManager.auth registerWithAuthProfile:authProfile userProfile:userProfile completionHandler:^(HaloUserProfile * _Nullable userProfile, NSError * _Nullable error) {
	if (error != NULL) {
 		// Something went wrong.
    	} else {
		// User registered succesfully. Do something with "userProfile".
    	}
}];
```

### Logout
Once the Halo SDK is started and user is logged in, you can use theHaloAuthManager and try to logout.

#### Swift

```swift
import Halo
[...]
Halo.Manager.auth.logout { success in
	// If success is true, logout is succesful.
}
```

#### Objective-C

```objc
#import <Halo/Halo-Swift.h>
#import <HaloObjC/HaloObjC-Swift.h>
[...]
[HaloManager.auth logout:^(BOOL success) {
        // If success is true, logout is succesful.
}];
```
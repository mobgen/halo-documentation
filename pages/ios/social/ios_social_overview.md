---
title: HALO Social SDK
keywords: ios, social
last_updated: March 14, 2018
tags: [social, auth]
sidebar: ios_sidebar
toc: false
permalink: ios_social_overview.html
folder: ios
---

## Adding the dependency

In order to use all the features provided by the HALO Social Framework, its dependency will have to be added to the project. Depending on the tool that it's being used for dependency management, the steps may change.

### Carthage

Adding the dependency on the HALO Social Framework is as easy as adding the following line to the `Cartfile`:

```sh
github "mobgen/halo-social-ios" "{{ site.ios_version }}"
```

After that, performing a `carthage update` all the required resources to use this Framework should be downloaded.

### CocoaPods

Similarly, configuring the dependency using CocoaPods is fairly simple:

```sh
pod 'HaloSocialSDK', '{{ site.ios_version }}'
```

### Social API

The social API is the way to sign in with social providers on HALO SDK. Importing this framework will need a valid HALO instance configured with some credentials and the credentials of the network providers you want to import.

{% include warning.html content="You should add a build phase to code sign all the embedded frameworks." %}

```sh
pushd ${TARGET_BUILD_DIR}/${PRODUCT_NAME}.app/Frameworks/HaloSocialFacebook.framework/Frameworks

for EACH in *.framework; do

echo "-- signing ${EACH}"

/usr/bin/codesign --force --deep --sign "${EXPANDED_CODE_SIGN_IDENTITY}" --entitlements "${TARGET_TEMP_DIR}/${PRODUCT_NAME}.app.xcent" 

--timestamp=none $EACH

done

popd
```


The HALO Social SDK provides at the moment two integrations with existing social networks:

* Facebook integration. If you want to learn more, please refer to [the detailed documentation](ios_social_facebook.html)
* Google integration. If you want to learn more, please refer to [the detailed documentation](ios_social_google.html)

## Simple usage

### Login with a social provider (Facebook or Google)

Once the HALO SDK is started and you add the Social SDK, you can use a social provider to log in.

{% include tip.html content="If you want to learn more about the Facebook integration, please refer to [the detailed documentation](ios_social_facebook.html)." %}

{% include tip.html content="If you want to learn more about the Google integration, please refer to [the detailed documentation](ios_social_google.html)" %}

If you choose Facebook:

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#swift-2" data-toggle="tab">Swift</a></li>
  <li role="presentation"><a href="#objc-2" data-toggle="tab">Obj-C</a></li>
</ul>

<div class="tab-content">
  <div id="swift-2" class="tab-pane fade in active">
    <pre><code class="swift">Halo.Manager.auth.loginWithFacebook(viewController: self, stayLoggedIn: false) { (user, error) in
  if error != nil {
    // Something went wrong.
  } else {
    // User logged in succesfully. Do something with "user".
  }
}</code></pre>
  </div>
  <div id="objc-2" class="tab-pane fade">
    <pre><code class="objective-c">[HaloManager.auth loginWithFacebookWithViewController:self stayLoggedIn:false completionHandler:^(HaloUser * _Nullable user, NSError * _Nullable error) {
        if (error != NULL) {
            // Something went wrong.
        } else {
            // User logged in succesfully. Do something with "user".
        }
}];</code></pre>
  </div>
</div>

If you choose Google:

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#swift-3" data-toggle="tab">Swift</a></li>
  <li role="presentation"><a href="#objc-3" data-toggle="tab">Obj-C</a></li>
</ul>

<div class="tab-content">
  <div id="swift-3" class="tab-pane fade in active">
    <pre><code class="swift">// Your ViewController should implement GIDSignInUIDelegate protocol.
Halo.Manager.auth.loginWithGoogle(uiDelegate: self, stayLoggedIn: false) { (user, error) in
  if error != nil {
    // Something went wrong.
  } else {
    // User logged in succesfully. Do something with "user".
  }
}</code></pre>
  </div>
  <div id="objc-3" class="tab-pane fade">
    <pre><code class="objective-c">// Your ViewController should implement GIDSignInUIDelegate protocol.
[HaloManager.auth loginWithGoogleWithUIDelegate:self stayLoggedIn:false completionHandler:^(HaloUser * _Nullable user, NSError * _Nullable error) {
        if (error != NULL) {
            // Something went wrong.
        } else {
            // User logged in succesfully. Do something with "user".
        }
}];</code></pre>
  </div>
</div>

### Register
Once the HALO SDK is started, you can use the HaloAuthManager and try to register a new user.

{% include tip.html content="This process only register the user against HALO so you must call to login after registration process finishes correctly." %}

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#swift-4" data-toggle="tab">Swift</a></li>
  <li role="presentation"><a href="#objc-4" data-toggle="tab">Obj-C</a></li>
</ul>

<div class="tab-content">
  <div id="swift-4" class="tab-pane fade in active">
    <pre><code class="swift">import Halo

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
}</code></pre>
  </div>
  <div id="objc-4" class="tab-pane fade">
    <pre><code class="objective-c">#import <Halo/Halo-Swift.h>
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
}];</code></pre>
  </div>
</div>

### Logout
Once the HALO SDK is started and user is logged in, you can use theHaloAuthManager and try to logout.

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#swift-5" data-toggle="tab">Swift</a></li>
  <li role="presentation"><a href="#objc-5" data-toggle="tab">Obj-C</a></li>
</ul>

<div class="tab-content">
  <div id="swift-5" class="tab-pane fade in active">
    <pre><code class="swift">import Halo

[...]

Halo.Manager.auth.logout { success in
  // If success is true, logout is succesful.
}</code></pre>
  </div>
  <div id="objc-5" class="tab-pane fade">
    <pre><code class="objective-c">#import <Halo/Halo-Swift.h>
#import <HaloObjC/HaloObjC-Swift.h>

[...]

[HaloManager.auth logout:^(BOOL success) {
        // If success is true, logout is succesful.
}];</code></pre>
  </div>
</div>
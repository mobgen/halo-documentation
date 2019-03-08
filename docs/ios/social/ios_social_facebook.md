---
title: Facebook Integration
keywords: ios, facebook
last_updated: December 27, 2016
tags: [social, auth]
sidebar: ios_sidebar
permalink: ios_social_facebook.html
folder: ios
---

This getting started guide will guide you on setting up Facebook SDK for iOS in a few minutes. We will provide a step by step guide to get everything working with the most basic setup.

{% include warning.html content="Remember to set ```Always Embed Swift Standard Libraries``` to ```Yes```" %}

{% include warning.html content="You should add a build phase run script to code sign all the embedded frameworks." %}

```sh
pushd ${TARGET_BUILD_DIR}/${PRODUCT_NAME}.app/Frameworks/HaloSocialFacebook.framework/Frameworks

for EACH in *.framework; do

echo "-- signing ${EACH}"

/usr/bin/codesign --force --deep --sign "${EXPANDED_CODE_SIGN_IDENTITY}" --entitlements "${TARGET_TEMP_DIR}/${PRODUCT_NAME}.app.xcent" 

--timestamp=none $EACH

done

popd
```

### Step 1: Create the app 

Register in the facebook console and create a new app. You must have a properly configured developer account.

#### Optional Step to add security

{% include note.html content="You can add extra security if you add the client secret and client id into the Halo CMS." %}

![Configure Facebook Application](./images/facebook-console.png)

This step is optional and if you add this field to the HALO CMS it would verify that the tokens you provide belongs to the Facebook application. In another case the HALO system only verifies if it is a valid token against Facebook.

You can add this information in app section on HALO CMS.

![Add extra security to facebook tokens](./images/halo-cms-secure-social.png)

### Step 2: Add your package 

Add the package name and your potential deeplink activity on the facebook console.

### Step 3: Generate the hashes

To generate a hash of your release key, run the following command substituting your release key alias and the path to your keystore.

```
keytool -exportcert -alias <RELEASE_KEY_ALIAS> -keystore <RELEASE_KEY_PATH> | openssl sha1 -binary | openssl base64
```
This command should generate a string. Copy and paste this Release Key Hash into your facebook console.

### Step 4: Configure the project

Add **Bolts.framework**, **FBSDKCoreKit.framework**, **FBSDKLoginKit.framework**,  **FBSDKShareKit.framework**, **FacebookCore.framework**, **FacebookLogin.framework** and **FacebookShare.framework**
to your project.

Open your project's *.plist* file as Source Code and insert the following XML snippet into the body of your file just before the final *</dict>* element.

```
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>fb{your-app-id}</string>
    </array>
  </dict>
</array>
<key>FacebookAppID</key>
<string>{your-app-id}</string>
<key>FacebookDisplayName</key>
<string>{your-app-name}</string>
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>fbapi</string>
  <string>fb-messenger-api</string>
  <string>fbauth2</string>
  <string>fbshareextension</string>
</array>
<key>NSPhotoLibraryUsageDescription</key>
  <string>{human-readable reason for photo access}</string>
```

Replace *fb{your-app-id}* with your Facebook app ID, prefixed with *fb*.

Replace *{your-app-id}* with your app ID.

Replace *{your-app-name}* with the **display name** you specified in the App Dashboard.

Replace *{human-readable reason for photo access}* with the reason your app needs photo access.

### Step 5: Enable single sign-on

Open the app in the console, open settings and enable "Single sign-on" by setting it to YES. Make sure you save the changes.

### Step 6: Register the Facebook Addon

In your AppDelegate, register the Facebook Addon before you call the **startup** method of Halo.

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#swift-1" data-toggle="tab">Swift</a></li>
  <li role="presentation"><a href="#objc-1" data-toggle="tab">Obj-C</a></li>
</ul>

<div class="tab-content">
  <div id="swift-1" class="tab-pane fade in active">
    <pre><code class="swift">import Halo
import HaloSocialFacebook

[...]
      
let facebookAddon = FacebookSocialAddon()
Halo.Manager.core.registerAddon(addon: facebookAddon)
      
[...]
      
Halo.Manager.core.startup()</code></pre>
  </div>
  <div id="objc-1" class="tab-pane fade">
    <pre><code class="objective-c">#import <Halo/Halo-Swift.h>
#import <HaloObjC/HaloObjC-Swift.h>
#import <HaloSocialFacebook/HaloSocialFacebook.h>
  
[...]
  
FacebookSocialAddon *facebookAddon = [FacebookSocialAddon new];
[HaloManager.core registerAddon:facebookAddon];
  
[...]
  
[HaloManager.core startup:^(BOOL success) {
  NSLog(@"Halo started");
}];</code></pre>
  </div>
</div>

### Step 7: Login with Facebook

Use the **loginWithFacebook** method to login with Facebook. 

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#swift-2" data-toggle="tab">Swift</a></li>
  <li role="presentation"><a href="#objc-2" data-toggle="tab">Obj-C</a></li>
</ul>

<div class="tab-content">
  <div id="swift-2" class="tab-pane fade in active">
    <pre><code class="swift">import Halo
import HaloSocialFacebook

[...]

Halo.Manager.auth.loginWithFacebook(viewController: self, stayLoggedIn: false) { (user, error) in
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
#import <HaloSocialFacebook/HaloSocialFacebook.h>

[...]

[HaloManager.auth loginWithFacebookWithViewController:self stayLoggedIn:false completionHandler:^(HaloUser * _Nullable user, NSError * _Nullable error) {
  if (error != NULL) {
    // Something went wrong.
  } else {
    // User logged in succesfully. Do something with "user".
  }
}];</code></pre>
  </div>
</div>

{% include note.html content="For further information about Facebook SDK visit the [official Facebook documentation page](https://developers.facebook.com/docs/facebook-login/ios)" %}
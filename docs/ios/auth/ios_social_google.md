---
title: Google Integration
---

This getting started guide will guide you on setting up Google Sign-In SDK for Android in a few minutes. We will provide a step by step guide to get everything working with the most basic setup.

### Step 1: Create the app

Register in the firebase console and create a new app, if you don’t already have one. If you already have an existing Google project associated with your mobile app, click Import Google Project. Otherwise, click Create New Project.

### Step 2: Generate an oAuth web key

Add the package name and and follow the setup steps.

#### Optional Step to add security

You can add extra security if you add the google id into the Halo CMS.

![Configure Google project](/img/google-console.png)

This step is optional and if you add this field to the HALO CMS it would verify that the tokens you provide belongs to the Google application. You can provide as many ids as you need for different platforms. In another case the HALO system only verifies if it is a valid token against Google.

You can add this information in app section on HALO CMS.

![Add extra security to facebook tokens](/img/halo-cms-secure-social.png)

### Step 3: Generate the hashes (Optional)

To generate a hash of your release key, run the following command substituting your release key alias and the path to your keystore.

```bash
keytool -exportcert -alias <RELEASE_KEY_ALIAS> -keystore <RELEASE_KEY_PATH> | openssl sha1 -binary | openssl base64
```
This command should generate a string. Copy and paste this Release Key Hash into your firebase console.

### Step 4: Download and setup configuration file

At the end, you'll download a GoogleService-Info.plist. You can download this file again at any time. Copy this file into your project's files.

> **Warning:** Ensure you have a ```GoogleService-Info.plist``` with that exact name on your project, otherwise the Google Social Framework will not work.

### Step 5: Configure the project

If you are not using Carthage you will need to add some libraries manually:

- ```GoogleSignInDependencies.framework```
- ```GoogleSignIn.framework```
- ```GoogleSignIn.bundle```

> **Warning:** You can download the **GoogleSignIn.framework** [official GoogleSignIn documentation page](https://developers.google.com/identity/sign-in/ios/start-integrating)

Remove all the libraries from ```Linked Frameworks and Libraries``` and ```Embedded Binaries```.

Add the ```-ObjC``` flag to ```Other Linker Settings```. This can be found inside ```Build Settings``` tab in the Linking section.

Open app in **TARGETS**, click on ```Info``` tab and expand ```URL Types``` section.

Click on the ```+``` button and add a new Url Scheme. Find the key ```REVERSED_CLIENT_ID``` inside your ```GoogleService-Info.plist``` file. Copy the value of this key and paste it into the field ```URL Schemes```. Let the other fields empty.

Click again on the ```+``` button and add a second scheme. Copy the ID of your package ```com.example.app``` and paste it into ```URL Schemes``` field. You can find the ID of your package in the **General** tab below **Identity > Bundle Identifier**.

### Step 6: Register the Google Addon

In your ```AppDelegate```, register the GoogleAddon before you call the **startup** method of Halo.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
import Halo
import HaloSocialGoogle

[...]

let googleAddon = GoogleSocialAddon()
Halo.Manager.core.registerAddon(addon: googleAddon)

[...]

Halo.Manager.core.startup()
```
<!--Obj-C-->
```C
#import <Halo/Halo-Swift.h>
#import <HaloObjC/HaloObjC-Swift.h>
#import <HaloSocialGoogle/HaloSocialGoogle.h>

[...]

GoogleSocialAddon *googleAddon = [GoogleSocialAddon new];
[HaloManager.core registerAddon:googleAddon];

[...]

[HaloManager.core startup:^(BOOL success) {
  NSLog(@"Halo started");
}];
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Step 7: Log in with Google

Use the ```loginWithGoogle``` function to log in with Google. 

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
import Halo
import HaloSocialGoogle

[...]

// Your ViewController should implement GIDSignInUIDelegate protocol.
Halo.Manager.auth.loginWithGoogle(uiDelegate: self, stayLoggedIn: false) { (user, error) in
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
#import <HaloSocialGoogle/HaloSocialGoogle.h>

[...]

// Your ViewController should implement GIDSignInUIDelegate protocol.
[HaloManager.auth loginWithGoogleWithUIDelegate:self stayLoggedIn:false completionHandler:^(HaloUser * _Nullable user, NSError * _Nullable error) {
  if (error != NULL) {
    // Something went wrong.
  } else {
    // User logged in succesfully. Do something with "user".
  }
}];
```
<!--END_DOCUSAURUS_CODE_TABS-->

For further information about Firebase SDK visit the [official Firebase documentation page](https://firebase.google.com/docs/ios/setup)
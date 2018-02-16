---
title: Android SDK - Integration with Google
keywords: android, getting started, google logging, android sdk
last_updated: November 15, 2016
tags: [social]
sidebar: android_sidebar
toc: false
map_name: android_started_workflow
permalink: android_social_provider_google.html
folder: android
---

This getting started guide will guide you on setting up Google Sign-in SDK for Android in a few minutes. We will provide a step by step guide to get everything working with the most basic setup.

{% include warning.html content="You don't need to import Firebase Android SDK. It's automatically done by the HALO plugin." %}

### Step 1: Create the app 

Register in the firebase console and create a new app, if you don't already have one. If you already have an existing Google project associated with your mobile app, click Import Google Project. Otherwise, click Create New Project.

### Step 2: Generate an oAuth web key

Add the package name and and follow the setup steps.

#### Optional Step to add security

{% include note.html content="You can add extra security if you add the google id into the Halo CMS." %}

![Configure Google project](./images/google-console.png)

This step is optional and if you add this field to the HALO CMS it would verify that the tokens you provide belongs to the Google application. You can provide as many ids as you need for different platforms. In another case the HALO system only verifies if it is a valid token against Google.

You can add this information in app section on HALO CMS.

![Add extra security to facebook tokens](./images/halo-cms-secure-social.png)

### Step 3: Generate the hashes

To generate a hash of your release key, run the following command substituting your release key alias and the path to your keystore.

```
keytool -exportcert -alias <RELEASE_KEY_ALIAS> -keystore <RELEASE_KEY_PATH> | openssl sha1 -binary | openssl base64
```
This command should generate a string. Copy and paste this Release Key Hash into your firebase console.

### Step 4: Download and setup configuration file

At the end, you'll download a google-services.json file. You can download this file again at any time. Copy google-services.json into your apps main folder.

### Step 5: Configure HALO

To enable google signin integration on HALO you must use the GOOGLE_CLIENT_ID: 

```groovy
apply plugin: 'halo'

halo {
    ...
    services {
            auth {
                google "GOOGLE_CLIENT_ID"
            }
    }
    ...
}
```

### Step 6: Create the halo auth instance 

Create the ```HaloAuthApi``` instance to login with google. It is fairly recommendable to create the instance as a singleton in your application class.

```java
HaloAuthApi authApi = HaloAuthApi.with(halo)
                .withGoogle()
                .build();
```

### Step 7: Login with Google

With the ```HaloAuthApi``` instance login with google provider.

```java
CallbackV2<HaloUserProfile> callback = new CallbackV2<HaloUserProfile>() {
        @Override
        public void onFinish(@NonNull HaloResultV2<HaloUserProfile> result) {
            //handle response
        }
    };
authApi.loginWithSocial(HaloAuthApi.SOCIAL_GOOGLE_PLUS, callback);
```


{% include note.html content="For further information about Firebase SDK visit the [official Firebase documentation page](https://firebase.google.com/docs/android/setup)" %}


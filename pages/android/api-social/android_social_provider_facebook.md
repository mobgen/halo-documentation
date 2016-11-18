---
title: Android SDK - Integration with Facebook
keywords: android, getting started, facebook android sdk
last_updated: November 15, 2016
tags: [social]
sidebar: android_sidebar
toc: false
map_name: android_started_workflow
permalink: android_social_provider_facebook.html
folder: android
---


This getting started guide will guide you on setting up Google  SDK for Android in a few minutes. We will provide a step by step guide to get everything working with the most basic setup.

{% include warning.html content="You don't need to import Facebook Android SDK. It's automatically done by the HALO plugin." %}

### Step 1: Create the app 

Register in the facebook console and create a new app. You must have a properly configured developer account.

### Step 2: Add your package 

Add the package name and your potential deeplink activity on the facebook console.

### Step 3: Generate the hashes

To generate a hash of your release key, run the following command substituting your release key alias and the path to your keystore.

```
keytool -exportcert -alias <RELEASE_KEY_ALIAS> -keystore <RELEASE_KEY_PATH> | openssl sha1 -binary | openssl base64
```
This command should generate a string. Copy and paste this Release Key Hash into your facebook console.

### Step 4: Configure HALO

To enable facebook integration on HALO you must use the FACEBOOK_APP_ID: 

```groovy
apply plugin: 'halo'

halo {
    ...
    services {
            social {
                facebook "FACEBOOK_APP_ID"
            }
    }
    ...
}
```


### Step 5: Enable single sign-on

Open the app in the console, open settings and enable "Single sign-on" by setting it to YES. Make sure you save the changes.

### Step 6: Create the halo social instance 

Create the ```HaloSocialApi``` instance  login with facebook. It is fairly recommendable to create the instance as a singleton in your application class.

```java
HaloSocialApi socialApi = HaloSocialApi.with(halo)
                .withFacebook()
                .build();
```

### Step 7: Login with Facebook

With the ```HaloSocialApi``` instance login with facebook provider.

```java
CallbackV2<HaloSocialProfile> callback = new CallbackV2<HaloSocialProfile>() {
        @Override
        public void onFinish(@NonNull HaloResultV2<HaloSocialProfile> result) {
            //handle response
        }
    };
socialApi.loginWithSocial(HaloSocialApi.SOCIAL_FACEBOOK, callback);
```


{% include note.html content="For more information about Facebook SDK visit the [official Facebook documentation page](https://developers.facebook.com/docs/facebook-login/android)" %}


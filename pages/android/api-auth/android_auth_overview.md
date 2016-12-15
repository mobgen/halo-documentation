---
title: Android SDK - Auth SDK Overview
keywords: android, social login, facebook integration, google integration, auth
last_updated: November 15, 2016
tags: [social]
sidebar: android_sidebar
permalink: android_auth_overview.html
folder: android
---

## Add dependency

In the HALO plugin add the following to enable the social sdk.

```groovy
apply plugin: 'halo'

halo {
	...
	services {
            auth {
                google "GOOGLE_CLIENT_ID"
                facebook "FACEBOOK_APP_ID"
            }
	}
	...
}
```

{% include note.html content="The provider credentials are optional so you may include only the social provider you want to use." %}

## Social API

The social API is the way to sign in with social providers on HALO SDK. Importing this library will need a valid HALO instance configured with some credentials and the credentials of the network providers you want to import.
The HALO Social SDK allows the user to sign in in three ways:

* HALO username and password.
* Facebook integration. If you want go in deep, please refer to [the detailed documentation](android_social_provider_facebook.html)
* Google plus integration. If you want go in deep, please refer to [the detailed documentation](android_social_provider_google.html)

It is fairly recommendable to create the instance as a singleton in your application class or using Dagger after installing HALO. Creating an instance of the Social API is really simple once you have your HALO running. Just write the following lines:

```java
HaloAuthApi authApi = HaloAuthApi.with(haloInstance)
                .recoveryPolicy(HaloAuthApi.RECOVERY_ALWAYS)
                .storeCredentials("halo.account.demoapp")
                .withHalo()
                .withFacebook()
                .withGoogle()
                .build();
```
Also you have to release the memory in the onTerminate method of your application:

```java
authApi.release();
```


As you can see there are some parameters that you can provide to configure your social instance. In the following list you will find an explanation for each of those:

| Parameter name                 | Explanation                                                                                                                                                        |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **recoveryPolicy** (Optional)  | This field specifies if HALO will store your credentials with Android account manager. By default is set to HaloAuthApi.RECOVERY_NEVER so HALO will not store credentials.|
| **storeCredentials** (Optional)| This field specifies which is the account type to store on Android account manager. It is mandatory if recoveryPolicy is set to HaloAuthApi.RECOVERY_ALWAYS.              |
| **withHalo** (Optional)        | To use HALO as provider to login or sign in.                                                                                                                            |
| **withFacebook** (Optional)    | To use facebook as provider to login.                                                                                                                             |
| **withGoogle** (Optional)      | To use google as a provider to login.                                                                                                                             |


## Simple use

### Login with HALO
Once the instance is created you can login with username and password only if the ```wihtHalo()``` was especified on the ```HaloAuthApi``` instance. This will try to login the user with this credentials(username,password):

```java
//set a authentication profile to login
HaloAuthProfile authProfile = new HaloAuthProfile(username,password);
//request login with the authoritation profile
authApi.loginWithHalo(HaloAuthApi.SOCIAL_HALO, authProfile, this);
```

{% include note.html content="The third parameter is the callback of type ```CallbackV2<HaloSocialProfile>``` in wich you will handle the result of the authentication query." %}


### Login with a social provider (Facebook or Google)
Once the instance is created you can login with social network access token only if the ```wihtFacebook()``` or ```withGoogle()``` was especified on the ```HaloAuthApi``` instance. This will try to login the user after the system obtain the social provider accessToken with the providers:

{% include warning.html content="If you want go in deep on Facebook integration, please refer to [the detailed documentation](android_social_provider_facebook.html)" %}
{% include warning.html content="If you want go in deep on Google integration, please refer to [the detailed documentation](android_social_provider_google.html)" %}

If you set ```withFacebook()```:

```java
authApi.loginWithSocial(HaloAuthApi.SOCIAL_FACEBOOK, this);
```

If you set ```withGoogle()```:

```java
authApi.loginWithSocial(HaloAuthApi.SOCIAL_GOOGLE_PLUS, this);
```

{% include note.html content="The second parameter is the callback of type ```CallbackV2<HaloSocialProfile>``` in wich you will handle the result of the authentication query." %}

### Register
Once the instance is created you can register on HALO providing authoritation object and a user profile only if the ```withHalo()``` was especified on the ```HaloAuthApi``` instance. This will try to register the user with HALO:

{% include tip.html content="This process only register the user against HALO so you must call to login after registration process finishes correctly." %}

```java
//the authentication profile for the user
HaloAuthProfile authProfile = new HaloAuthProfile(username,password);
//the user profile to register
HaloUserProfile userProfile = new HaloUserProfile(null, displayName, username, password, photoUrl, email);
//make registration with auth profile and user profile given.
authApi.register(authProfile,userProfile)
    .execute(new CallbackV2<HaloSocialProfile>() {
        @Override
        public void onFinish(@NonNull HaloResultV2<HaloSocialProfile> result) {
            if (result.status().isOk()) { 
                // Handle result
            }
        }
    });
```
{% include note.html content="You will handle the result of the registration process with a ```CallbackV2<HaloSocialProfile>``` as a parameter of execute." %}

### Check a provider

Once the instance is created you can check if a given provider is available. A provider will be available if it was defined when creating the instance and the library of the provider is available.

```java
//the authentication profile for the user
authApi.isAuthProviderAvailable(HaloAuthApi.SOCIAL_HALO);
```

### Release 

You could release the memory in the ```onTerminate``` method of your application.


```java
//release resources
authApi.release();
```




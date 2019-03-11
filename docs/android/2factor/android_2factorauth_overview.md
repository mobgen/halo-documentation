---
title: Overview
---

[![Download](https://api.bintray.com/packages/halo-mobgen/maven/HALO-TwoFactor/images/download.svg)](https://bintray.com/halo-mobgen/maven/HALO-TwoFactor/_latestVersion)

## Add dependency

In the HALO plugin add the following to enable the two factor authentication sdk.

```groovy
> project/build.gradle

apply plugin: 'halo'

halo {
	...
	twofactorauth {
            push true
            sms true
	}
	...
}
```

{% include note.html content="You can enable sms or push notification two factor confirmation." %}

## Two Factor Authentication API

The Two Factor Authentication API is the helper to confirm you authentication code on HALO SDK. Importing this library will need a valid HALO instance configured (it will import push notification automatically if needed).
The HALO Two Factor Authentication SDK allows the user to listen to confirmation codes in a simple listener from two providers:

* Push notification. If you want go in deep about notifications, please refer to [the detailed documentation](../notifications/android_notifications_overview.html)
* SMS notification.

It is fairly recommendable to create the instance as a singleton in your application class or using Dagger after installing HALO. Creating an instance of the Two Factor Authentication API is really simple once you have your HALO running. Just write the following lines:

```java
HaloTwoFactorApi twoFactorAuthentication = HaloTwoFactorApi.with(halo)
                .smsProvider("HALO")
                .withNotifications(mHaloNotificationApi)
                .withSMS()
                .build();
```
Also you have to release resources when you are done:

```java
twoFactorAuthentication.release();
```


As you can see there are some parameters that you can provide to configure your two factor authentication instance. In the following list you will find an explanation for each of those:

| Parameter name                  | Explanation                                                                                                                                                        |
|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **smsProvider** (Optional)      | Set the name of the sms sender. By default it is set to HALO.                                                                                                     |
| **withNotifications** (Optional)| Prepare the two factor auth listener to receive codes from push notifications. You must provide a valid HALO notification API.                                    |
| **withSMS** (Optional)          | Prepare the two factor auth listener to receive codes from SMS notification.                                                                                      |


## Simple use

### Listen two factor attempts
Once the instance is created you can listen to Two Factor Api to receive a ```TwoFactorCode``` object. This object store the two factor code and the issuer (SMS or push) of the code. You will handle two types of issuers:

* ```HaloTwoFactorApi.TWO_FACTOR_NOTIFICATION_ISSUER```
* ```HaloTwoFactorApi.TWO_FACTOR_SMS_ISSUER```

```java
twoFactorAuthentication.listenTwoFactorAttempt(new HaloTwoFactorAttemptListener() {
            @Override
            public void onTwoFactorReceived(@NonNull TwoFactorCode twoFactorCode) {
                if(twoFactorCode.getIssuer().equals(HaloTwoFactorApi.TWO_FACTOR_NOTIFICATION_ISSUER)){
                    //handle when comes from a push notification
                    //you could show a notification on the bar.
                    showNotificationOnTheBar();
                } else {
                    Toast.makeText(context, "This is the code received: " +
                    twoFactorCode.getCode() + " from a: " + twoFactorCode.getIssuer(), Toast.LENGTH_LONG).show();
                }
                
            }
        });
```

> **Note:** If you are using the push notification provider remember that push notifications are silents so it is your responsability to show them if you want.

> **Note:** If you are using the SMS provider remember to set the SMS provider name to listen to the two factor authentication codes.


### Release 

You should release the memory when you are done. After release the attempt listener is not available anymore.


```java
//release resources
twoFactorAuthentication.release();
```




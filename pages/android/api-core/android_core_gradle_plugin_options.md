---
title: Android SDK - Gradle Plugin Options
keywords: android, gradle, configuration, tool, clientId, clientSecret, secret, id
last_updated: November 15, 2016
tags: [core]
sidebar: android_sidebar
permalink: android_core_gradle_plugin_options.html
folder: android
---

## Gradle plugin options

### What does the plugin do?
To avoid lines and lines of configuration we decided to create a gradle plugin to make your life as a developer easier. It handles the dependencies and the magic numbers you need to access HALO.

In your project you need to use Android Studio, or at least, a gradle build system. With that in mind we will describe how to put this plugin in your application project and the possible options to customize the SDK we are offering.

### Options
In the HALO configuration inside the build.gradle there are many options you can configure to keep the SDK configured as you need. Here you have the reference for each property:

#### clientId

Client id of the application created in HALO. Its a required string you can find it in the CMS under apps section.


#### clientSecret

Client secret of the application created in HALO. Its a required string you can find it in the CMS under apps section.

#### clientIdDebug

Client id of the application created in HALO for testing purposes, this will be used when the debug flag is set in the installer. Its a optional string you can find the string in the CMS under apps section.


#### clientSecretDebug

Client secret of the application created in HALO for testing purposes, this will be used when the debug flag is set in the installer. Its a optional string you can find the string in the CMS under apps section.



#### services

Allows you to add more services from HALO. Only when you enable a service the dependencies will be automatically imported. This closure is mandatory also if you dont want to enable any service. In the following table we list all the service available:

| Service               | Description                  |
|-----------------------|------------------------------|
| **analytics** (Boolean:Optional)|Enables the analytics library for HALO SDK.|
| **auth** (Closure:Optional)    |Enables the authentication library for the HALO SDK. This closure should contain **google** or **facebook** optional strings with each Google and Facebook api credentials.|
| **content** (Boolean:Optional) |You will enable the content library. This library helps when retrieving content.|
| **notifications** (Boolean:Optional)|Enables Google FCM integration with HALO used to receive push notifications. Remember to add also the google-services.json to your project.|
| **presenter** (Boolean:Optional)|Enables the presenter UI library for HALO. It is a small helper to use the MVP pattern in the UI.|
| **translations** (Boolean:Optional)|Enables the translations library for HALO.|
| **twofactorauth** (Boolean:Optional) |Enables the two factor authentication library for HALO. You will have to use **sms** or **push** boolean to enable one or both services under this closure.|

If you want to have both credentials for debug and prod and the following services enabled (twofactor, notifications, translations, content and auth) you have to provide the following HALO closure:

```groovy

halo {
    clientId "halotestappclient"
    clientSecret "halotestapppass"
    clientIdDebug "halotestappclientdebug"
    clientSecretDebug "halotestapppassdebug"
    services {
        twofactorauth {
            push true
            sms true
        }
        notifications true
        translations true
        content true
        analytics false
        auth {
            google "google_credential"
            facebook "facebook_credential"
        }
    }
}
```


In the case you want different configurations for different variants, you can enable it with this configuration. You have to put the same configuration with services and clientId/clientSecret as you do in the global config. Both kind of configurations cannot be mixed. In this example we have three differente flavours: dev, qa and prod:

```groovy
halo {
    androidVariants {
        dev {
            clientId "YOUR_HALO_KEY"
            clientSecret "YOUR_HALO_SECRET"
            services {
                //you will need to apply here all modules you want to import
            }
        }
        qa {
            clientId "YOUR_HALO_KEY"
            clientSecret "YOUR_HALO_SECRET"
            services {
                //you will need to apply here all modules you want to import
            }
        }
        prod {
            clientId "YOUR_HALO_KEY"
            clientSecret "YOUR_HALO_SECRET"
            services {
                //you will need to apply here all modules you want to import
            }
        }
    }
}
```

### Full working example copy/paste script
Here you can find a HALO plugin configuration you can put and fill in your project:

```groovy
apply plugin: 'com.android.application'
apply plugin: 'halo'

android {
    ...
}

halo {
    clientId "halotestappclient"
    clientSecret "halotestapppass"
    clientIdDebug "halotestappclient"
    clientSecretDebug "halotestapppass"
    services {
        content true
        notifications true
    }
}
```

Here the same configuration, but with notifications enabled only for release builds.

```groovy
apply plugin: 'com.android.application'
apply plugin: 'halo'

android {
    ...
}

halo {
    androidVariants {
        debug {
            clientId "TestDebug"
            clientSecret "TestDebug"
            services {
                content true
            }
        }

        release {
            clientId "TestRelease"
            clientSecret "TestRelease"
            services {
                content true
                notifications true
            }
        }
    }
}
```

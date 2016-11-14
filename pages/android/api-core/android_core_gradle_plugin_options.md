# Gradle plugin options

## What does the plugin do?
To avoid lines and lines of configuration we decided to create a gradle plugin to make your life as a developer easier. It handles the dependencies and the magic numbers you need to access HALO.

In your project you need to use Android Studio, or at least, a gradle build system. With that in mind we will describe how to put this plugin in your application project and the possible options to customize the SDK we are offering.

## Options
In the HALO configuration inside the build.gradle there are many options you can configure to keep the SDK configured as you need. Here you have the reference for each property:

```groovy
halo { 
    **clientId** // Client id of the application created in HALO. *String:Required*.
    **clientSecret** // Client secret of the application created in HALO. *String:Required*.
    **clientIdDebug** // Client id of the application created in HALO for testing purposes, this will be used when the debug flag is set in the installer. *String:Optional*.
    **clientSecretDebug**: Client secret of the application created in HALO for testing purposes, this will be used when the debug flag is set in the installer. *String:Optional*.
    **services** { // Allows you to add more services from HALO. *Closure:Optional*.
        **content** // You will enable the content library. This library helps when retrieving content. *Boolean:Optional*.
        **notifications** // Enables Google FCM integration with HALO used to receive push notifications. Remember to add also the google-services.json to your project. *Boolean:Optional*.
        **translations**: Enables the translations library for HALO. *Boolean:Optional*.
        **presenter**: Enables the presenter UI library for HALO. It is a small helper to use the MVP pattern in the UI. *Boolean:Optional*.
    }
    **androidVariants** { // In the case you want different configurations for different variants, you can enable it with this configuration. *Optional:Closure*
        **variantName** { //You can put here the same configuration with services and clientId/clientSecret as you do in the global config. Both kind of configurations cannot be mixed.
            //Here it goes the same config with clientId, clientSecret and services for the current variant.
        }
    }
}
```

## Full example copy/paste script
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

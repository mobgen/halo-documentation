---
title: Getting Started With Gradle Plugin
---

Here we provide the step by step guide to add the plugin to your project and start using it with the minimal configuration.

> **Warning:** HALO SDK is compatible with the Android Plugin for Gradle 3.0.1+

## 1. Apply the classpath to the buildscript
Open the build.gradle of the project root and add the plugin to the classpath:

```groovy
> root/build.gradle

buildscript {
    dependencies {
          classpath 'com.mobgen.halo.android:halo-plugin:{pluginVersion}'
    }
}
```

## 2. Apply the plugin
Now apply the configuration plugin to your HALO managed application project after applying the android application plugin.

```groovy
> project/build.gradle

apply plugin: 'halo'
```

You can also use the name `com.mobgen.halo.android` for the plugin if you want to.

> **Warning:** The plugin can only be applied to android application projects, don't apply it to any android library project.

## 3. Add the HALO configuration
Open the build.gradle of your app and apply the basic configuration based on your HALO project. This is the minimal configuration you have to add to the plugin. If you add less information than that the plugin will not allow to compile.

```groovy
> project/build.gradle

halo {
    clientId 'YOUR_HALO_KEY'
    clientSecret 'YOUR_HALO_SECRET'
    services {
        //you have to add this closure empty if you dont want any service
    }
}
```

If you want go in deep with all the options with the gradle configuration or variants configuration, please refer to [the detailed documentation](android_core_gradle_plugin_options.html)
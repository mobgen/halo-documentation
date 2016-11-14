---
title: Android SDK - Getting started
keywords: android, getting started, start, how to
last_updated: November 10, 2016
tags: [getting_started]
sidebar: android_sidebar
toc: false
map_name: android_started_workflow
permalink: android_getting_started.html
folder: android
---

{% include custom/android_started_workflow.html %}

This getting started guide will guide you on setting up HALO SDK for Android in a few minutes. We will provide a step by step guide to get everything working with the most basic setup, for more detailed information about specific calls or how a module works check the sidebar.

## Step 1: Add the HALO plugin 
Open the build.gradle of the project root and add the plugin to the classpath:

```groovy
buildscript {
    dependencies {
          classpath 'com.mobgen.halo.android:halo-plugin:{{version}}'
    }
}
```

Now apply the halo plugin to your HALO application after the android one:

```groovy
apply plugin: 'halo'
```

## Step 2: Add HALO configuration
Open the build.gradle of your app and apply the basic configuration based on your HALO project. Here you have the minimal configuration you will need. Put it after the Android node.

```groovy
halo {
    clientId "YOUR_HALO_KEY"
    clientSecret "YOUR_HALO_SECRET"
}
```

## Step 3: Init the Halo instance inside your app

### Option 1: I don't have a custom Application class

If you **don't** have a custom application class, follow this instructions.
Open your AndroidManifest.xml and apply the following configuration to your Application node:

```xml
 <application
        ...
        android:name="com.mobgen.halo.android.sdk.api.HaloApplication">
        ...
</application>
```
{% include note.html content="This will create the ```Halo``` instance for you. You can always access this instance by calling ```HaloApplication.halo()```" %}


### Option 2: I do have a custom application class

In this case you can either install HALO by yourself or extend the ```HaloApplication``` class provided and override some of the methods that come with it.

**Adding to your custom application class**:

```java
public class MyCustomApplication extends AnotherApplicationClass {
    @Override
    public void onCreate(){
        super.onCreate();
        Halo.installer(this).install();
    }
}
```

**Extending the ```HaloApplication``` class**:

```java
public class MyCustomApplication extends HaloApplication {
    public Halo.Installer onCreateInstaller(){}
    public Halo.Installer beforeInstallHalo(@NonNull Halo.Installer installer){}
    public Halo onHaloCreated(@NonNull Halo halo){}
}
```

## Step 4: Start using HALO in your app
Use any of the HALO APIs or plugins without worrying when is it ready, since this is managed internally by the different libraries.

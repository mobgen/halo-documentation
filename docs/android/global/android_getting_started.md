---
title: Getting Started
---

<div id="userMap">
<div class="content"><a><div class="box box1">Add HALO plugin</div></a></div>
<div class="arrow">→</div>
<div class="content"><a><div class="box box1">Add HALO Configuration</div></a></div>
<div class="arrow">→</div>
<div class="content"><a><div class="box box1">Install HALO instance</div></a></div>
<div class="arrow">→</div>
<div class="content"><a><div class="box box1">Enjoy the libraries</div></a></div>
</div>

This getting started guide will guide you on setting up HALO SDK for Android in a few minutes. We will provide a step by step guide to get everything working with the most basic setup, for more detailed information about specific calls or how a module works check the sidebar.

> **Important:** HALO SDK is compatible with Android Plugin for Gradle 3.0.1+

## Step 1: Add the HALO plugin 
Open the build.gradle of the project root and add the plugin to the classpath:

```groovy
> root/build.gradle

buildscript {
    dependencies {
          classpath 'com.mobgen.halo.android:halo-plugin:{version}'
    }
}
```

Now apply the halo plugin to your HALO application after the android one:

```groovy
> project/build.gradle

apply plugin: 'halo'
```

## Step 2: Add HALO configuration
Open the build.gradle of your app and apply the basic configuration based on your HALO project. Here you have the minimal configuration you will need. Put it after the Android node.

```groovy
> project/build.gradle

halo {
    clientId "YOUR_HALO_KEY"
    clientSecret "YOUR_HALO_SECRET"
    services {
        //you have to add this closure empty if you dont want any service
    }
}
```
See more options in [the detailed documentation](android_core_gradle_plugin_options.html)



## Step 3: Init the Halo instance inside your app

### Option 1: I don't have a custom Application class

If you **don't** have a custom application class, follow this instructions.
Open your AndroidManifest.xml and apply the following configuration to your Application node:

```xml
> manifest.xml

<application
        ...
        android:name="com.mobgen.halo.android.sdk.api.HaloApplication">
        ...
</application>
```
You can access later on to the HALO instance calling ```HaloApplication.halo()```.


### Option 2: I do have a custom application class

In this case you can either install HALO by yourself or extend the ```HaloApplication``` class provided and override some of the methods that come with it.

**Adding to your custom application class**:

```java
> project/YourApplication.java

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
> project/MyCustomApplication.java

public class MyCustomApplication extends HaloApplication {
    public Halo.Installer onCreateInstaller(){}
    public Halo.Installer beforeInstallHalo(@NonNull Halo.Installer installer){}
    public Halo onHaloCreated(@NonNull Halo halo){}
}
```

## Step 4: Start using HALO in your app
Use any of the HALO APIs or plugins without worrying when is it ready, since this is managed internally by the different libraries.

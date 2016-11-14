# Gradle plugin getting started guide

Here we provide the step by step guide to add the plugin to your project and start using it with the minimal configuration.

## 1. Apply the classpath to the buildscript
Open the build.gradle of the project root and add the plugin to the classpath:
```groovy
buildscript {
    dependencies {
          classpath 'com.mobgen.halo.android:halo-plugin:{{pluginVersion}'
    }
}
```

## 2. Apply the plugin
Now apply the configuration plugin to your HALO managed application project after applying the android application plugin.
```groovy
apply plugin: 'halo'
```
> You can also use the name 'com.mobgen.halo.android' for the plugin if you want to.


> The plugin can only be applied to android application projects, don't apply it to any android library project.

## 3. Add the HALO configuration
Open the build.gradle of your app and apply the basic configuration based on your HALO project. This is the minimal configuration you have to add to the plugin. If you add less information than that the plugin will not allow to compile.
```groovy
halo {
    clientId 'YOUR_HALO_KEY'
    clientSecret 'YOUR_HALO_SECRET'
}
```

---
title: Getting Started
keywords: ios, getting started, start, how to
last_updated: December 26, 2016
tags: [getting_started]
sidebar: ios_sidebar
toc: false
permalink: ios_getting_started.html
folder: ios
---

In the sections below the process to integrate the Halo Framework into a new project will be described in depth. The Framework is developed in Swift 3 and compiled against the latest iOS SDK (10.2). In order to offer higher compatibility, the deployment target is set to iOS 8.0.

## Carthage

One of the easiest ways to integrate the Halo Framework into your project and manage all the dependencies is by using [`Carthage`](https://github.com/Carthage/Carthage).

In order to do that, we would need to add the following line to our `Cartfile`:

```sh
github "mobgen/halo-ios" "2.2.2"
```

After that, and by performing the following command in the terminal

```sh
carthage update --platform iOS

*** Checking out halo-ios at "2.2.2"
*** xcodebuild output can be found in /var/folders/51/r2wsrcnx1t9d991gs_bnwqsr0000gn/T/carthage-xcodebuild.syE1RN.log
*** Building scheme "Halo ObjC" in HALO.xcworkspace
*** Building scheme "Halo iOS" in HALO.xcworkspace
```

we will get the compiled frameworks we need in order to make our project work.

![](images/ios/carthage.png)

We would then need to add those frameworks as embedded frameworks (iOS 8+). Depending on the language we are using in our project (Swift/Objective-C) we will either need to just add the `Halo.framework` or also the `HaloObjC.framework` (as shown in the image).

![](images/ios/carthageProjectSetup.png)

## CocoaPods

CocoaPods is also supported, so if this is your choice to manage your dependencies, you can add the Halo Framework to your project by adding the following line to your `Podfile`

```sh
pod 'HaloSDK', '2.2.2'
```

If using Objective-C, the corresponding SDK the line should be

```sh
pod 'HaloObjCSDK', '2.2.2'
```

# Configuration

The configuration process is quite simple. Your app will only need to contain a `.plist` file within the main bundle where its credentials are set. By default, the Framework will look for a `Halo.plist`, but a custom name can also be specified if needed. That will be covered later on in this wiki.

This `.plist` file should contain at least the `CLIENT_ID` and `CLIENT_SECRET` key-value pairs, with the right values for your app.

![](images/ios/plist.png)

The full list of available keys for this configuration file is the following:

| Key | Type | Description | Default value |
|----|:----:|----|:----:|
| `CLIENT_ID` | String | Client id for the authentication as application | - |
| `CLIENT_SECRET` | String | Client secret associated to the account used by the application | - |
| `ENVIRONMENT` | String | The desired Halo environment | `https://halo.mobgen.com` |
| `DISABLE_SSL_PINNING` | Boolean | Disable SSL pinning (usually for testing purposes). | `NO` |
| `ENABLE_SYSTEM_TAGS` | Boolean | Enable a set of default system tags added to the user (OS, device, etc). | `NO` |

# Troubleshooting

**Q: I'm getting the following error when trying to run my app including the Halo SDK.**

```sh
dyld: Library not loaded: @rpath/libswiftCore.dylib
  Referenced from: [...]/Frameworks/Halo.framework/Halo
  Reason: Incompatible library version: Halo requires version 1.0.0 or later, but libswiftCore.dylib provides version 0.0.0
```

**A:** Regardless the method you choose to integrate the Halo SDK, you will need to make sure that the `Always Embed Swift Standard Libraries` under the Build Settings in your project is set to `YES` in order to avoid errors related to Swift.

![](images/ios/embedded.png)
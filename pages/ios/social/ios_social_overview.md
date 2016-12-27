---
title: HALO Social Framework Overview
keywords: ios, social
last_updated: December 27, 2016
tags: [social, auth]
sidebar: ios_sidebar
toc: false
permalink: ios_social_overview.html
folder: ios
---

## Adding the dependency

In order to use all the features provided by the HALO Social Framework, its dependency will have to be added to the project. Depending on the tool that it's being used for dependency management, the steps may change.

### Carthage

Adding the dependency on the HALO Social Framework is as easy as adding the following line to the ```Cartfile```:

```sh
github "mobgen/halo-social-ios" "2.2.0"
```

After that, performing a ```carthage update``` should download all the required resources in order to use this Framework.

### CocoaPods

Similarly, configuring the dependency using CocoaPods is fairly simple:

```sh
pod 'HaloSocial', :git => 'https://github.com/mobgen/halo-social-ios.git', :tag => '2.2.0'
```
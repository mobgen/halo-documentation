---
title: Android SDK - Presenter SDK Overview
keywords: android, presenter, UI, UX, helper
last_updated: November 15, 2016
tags: [getting_started, ui]
sidebar: android_sidebar
permalink: android_presenter_overview.html
folder: android
---


[![Download](https://api.bintray.com/packages/halo-mobgen/maven/HALO-Presenter/images/download.svg)](https://bintray.com/halo-mobgen/maven/HALO-Presenter/_latestVersion)

This library is intended to help an application to implement and attach the presenter lifecycle with the Activity or Fragment one. It provides a default implementation of the presenter called ```EmptyPresenter``` if you want to have an activity without a real presenter.

The MVP architecture is widely used when creating interfaces and having a helper in Android is really useful. Follow the next sections to learn how to use it and which are the functionalities provided.

In MVP there are three roles:

- The model: represents the content that will be displayed.
- The view: contains the UI elements and all the logic related to views and they way they are displayed.
- The presenter: brings the data and calls the needed methods from the view to allow the bridge between real business logic and the presentation logic.

## Setup the lib

You can use the HALO plugin to configure it in an easy way:

```groovy
halo {
	...
	services {
		presenter true
	}
	...
}
```

Since it is really well integrated with HALO, it provides in the presenter a method called ```onInitialized``` called once halo is ready. This can help us to show something while HALO is being prepared and also having a notification to perform some actions with it.

We provide also an interface called ```HaloViewTranslator``` that has some typical methods like ```startLoading```, ```stopLoading``` or ```showError```. This view translator should be implemented by your activity or other interfaces that inherits from it to provide functionality to the presenter.

To persist data also in the bundle the presenter provides two methods: ```onSaveInstanceState``` and ```onInitStarted```, both managing the bundles on which the data is stored and retrieved respectively.

You can also inherit from the ```AbstractHaloPresenter``` to avoid reimplementing everyting and because it has already implemented the support for network conection drops and presenter lifecycle management.

## How can I use it?

1. Inherit from one of ```HaloActivity```, ```HaloActivityV4```, ```HaloFragment``` or ```HaloFragmentV4```.
2. Create a presenter that inherits from ```AbstractHaloPresenter```.
3. Create an interface for your view that inherits from ```HaloViewTranslator```.
4. Make your activity implement that interface.
5. Start coding your MVP logic in both, presenter and view.

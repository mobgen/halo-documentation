---
title: Advanced Firebase Use Cases
keywords: ios, notifications, firebase
last_updated: October 18, 2017
tags: [notifications]
sidebar: ios_sidebar
toc: false
permalink: ios_advanced_firebase_usecases.html
folder: ios
---

## Advanced Firebase Use Cases

The Halo Push add-on module make usage of the Firebase libraries, including setting up their configuration and downloading the complete set of Firebase libs in order to be available for the developer by just by importing / referencing the required file. That helps on easing the setup process of the push notifications by taking care internally of the Firebase dependencies and setup.


### External Configuration

The amount of flexibility of the Notifications add-on allows the developer to configure Firebase directly, the add-on will reuse that configuration by default. But TAKE CARE, the responsability of having a correct and functional push notifications config relays on your end on those cases. 

<pre><code class="swift">
    var firebaseConfigFile: String = "path/of/your/firebase/config/file"

    if let firOptions = FirebaseOptions(contentsOfFile: firebaseConfigFile) {
        FirebaseApp.configure(options: firOptions)
    } else {
        FirebaseApp.configure()
    }
</code></pre>


### Usage of additional Firebase libs

As an example of another Firebase libs usage, the developer can add the Analitics lib (located at: $(SRCROOT)/Carthage/Build/iOS/ ) to their project configuration (under Embedded Binaries) and later after the  Halo Firebase configure [case 1] (occurring on the Push add-on startup) or their own configure [case 2] (explained on the above example) start making using of the initialized instance of Firebase Analitics. 

<pre><code class="swift">	
	// [case 1] - After the Halo startup
	import FirebaseAnalytics

	halo.startup(application) { (success) in
		// from this moment the Firebase configuration is assured then is safe to make use of any other Firebase lib
        Analytics.logEvent("event", parameters: nil)
    }
</code></pre>

<pre><code class="swift">
	// [case 2] - After an external Firebase configuration
	import FirebaseAnalytics

	FirebaseApp.configure() // external configure not handled by the Halo Notifications SDK

	Analytics.logEvent("event", parameters: nil)
</code></pre>


### Custom name support for the Firebase config .plist 

Additionaly you can set a diferent file name distinct than the Firebase default "GoogleService-Info.plist" by using an additional property keyed "FIREBASE_PLIST_NAME" on the Halo config .plist

<pre><code class="xml">
	<key>FIREBASE_PLIST_NAME</key>
	<string>GoogleService-Info-Production</string>
</code></pre>

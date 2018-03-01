---
title: Android SDK - Installer Options
keywords: android, getting started, installer, options, halo
last_updated: Febreruary 28, 2018
tags: [core]
sidebar: android_sidebar
toc: false
permalink: android_core_installer_options.html
folder: android
---

In the install step of HALO there are many parameters that can be configured. Here is the list of items and what are their purposes:

- **config**: provides the configuration for the HALO framework so you can add some aditional behaviour or configuration on it.
- **credentials**: sets the credentials client id and secret. They are added with gradle by default.
- **debug**: sets the debug flag to see what is going behind the scenes in HALO. See also [the debug recipe](./android_core_debug.html).
- **printLogToFile**: if debug mode is enabled then you can print the log to file. See also [the print log policies](./android_core_debug.html#print-log-information-to-file).
- **endProcess**: adds a startup process that will be run during the installation process in HALO.
- **addTagCollector**: adds a tag collector that allows you to add some tags in the moment the app is initialized.
- **enableDefaultTags**: adds the halo default tags into the tag collectors. This was enabled by default some time ago but now it is optional.
- **environment**: sets the environment that will be used for the calls of halo. See also [server enviroment](./android_core_environment.html).
- **disablePinning**: disables the SSL pinning in the HALO SDK. See also [SSL pinning](./android_core_environment.html).
- **enableServiceOnBoot**: enable the startup receiver to launch the service on foreground after a device reboot (only for android api 26+)
- **channelServiceNotification**: set the channel name and the icon for the notification if the service is running on foreground. If you don't set any channel nor icon you will get a Halo one (only for android api 26+)

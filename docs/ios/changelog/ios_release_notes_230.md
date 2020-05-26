---
title: 2.3.0
---

## Changelog

### Core SDK

* Added a new function to the `CoreManager` to retrieve registered addons by type:
```swift
public func getAddons<T: Addon>(type: T.Type) -> [T]
```
* Improved logging verbosity
* Other minor fixes

### Notifications SDK

* Add a way to request permissions to receive remote notifications manually (intended to delay that step if desired). 
The constructor of the `NotificationsAddon` accepts now a new parameter (`autoRegister`, `true` by default), 
which allows to disable the auto-registration for these notifications. After that, one of the following functions 
would have to be called to request permission to get remote notifications depending on the iOS version:
```swift
/// iOS 10+
public func registerApplicationForNotificationsWithAuthOptions(
	_ app: UIApplication = UIApplication.shared,
	authOptions options: UNAuthorizationOptions = [.alert, .badge, .sound]) -> Void
```
```swift
/// Older versions of iOS
public func registerApplicationForNotificationsWithSettings(
	_ app: UIApplication = UIApplication.shared,
	notificationSettings settings: UIUserNotificationSettings = 
  	UIUserNotificationSettings(types: [.alert, .badge, .sound], categories: nil)) -> Void
```
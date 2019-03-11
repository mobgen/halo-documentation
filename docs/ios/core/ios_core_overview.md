---
title: Overview
---

## The Core Manager

Once all the configuration is done, the only remaining step is to call the `startup` method on the core manager to start all the process and initialise the SDK.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
Halo.Manager.core.startup { [weak self] (success) -> Void in
  // Do your stuff     
}
```
<!--Obj-C-->
```C
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  // Override point for customization after application launch.
  [HaloManager.core startup:^(BOOL success) {
    // Do some stuff
  }];
    
  return YES;
}
```
<!--END_DOCUSAURUS_CODE_TABS-->



It should also be mentioned here that apart from that `.plist` configuration file, the same configuration can be 
achieved through code, setting the corresponding properties within the manager (credentials and authentication mode) 
before calling the `startup` method.

This manager also has a delegate conforming to the `ManagerDelegate` protocol, that the developer could implement 
to customise the setup and launching process of the Framework.

The Core Manager also holds the configurable parameters of the Framework that can be set according to the needs 
of each project. 

### `delegate`

Setting the delegate of the core manager will allow to implement some hook methods that will be executed during the setup process of the Framework. This delegate must conform to the `Halo.ManagerDelegate` protocol. 

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
public protocol ManagerDelegate {
    func managerWillSetupDevice(device: Halo.Device) -> Void
}
```
<!--Obj-C-->
```C
@protocol HaloManagerDelegate
- (void)managerWillSetupDevice:(HaloDevice * _Nonnull)device;
@end
```
<!--END_DOCUSAURUS_CODE_TABS-->

`managerWillSetupDevice` will be called when the device is being set up, so that the developer could potentially add any details to the it. E.g.:

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
// MARK: ManagerDelegate methods
    
func managerWillSetupDevice(device: Halo.Device) -> Void {
	device.addTag(name: "test", value: "testValue")
}
```
<!--Obj-C-->
```C
- (void)managerWillSetupDevice:(HaloDevice *)device {
    [device addTagWithName:@"tagName" value:@"tagValue"];
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

Later on, the device will be accessible through the Core Manager's `device` property.

### `environment`

Apart from the configuration `.plist`, this is one of the properties that can also be set programatically. There is a set of predefined environments, but also an option to specify a custom one by providing the full url.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
public enum HaloEnvironment {
  case int
  case qa
  case stage
  case prod
  case custom(String)
}
```
<!--Obj-C-->
```C
Because of the way it is defined, this property is not accessible from Objective-C. Hence, the only way to configure it is through the `.plist` file.
```
<!--END_DOCUSAURUS_CODE_TABS-->

### `defaultOfflinePolicy`

A caching system is available out of the box for the network requests executed through the Framework. There are three modes in which the Framework can operate: 

* `None`: No caching for the network requests is done
* `LoadAndStoreLocalData`: The data is fetched from the network and also stored in order to be used in other scenarios (e.g. temporary lack of internet connection)
* `ReturnLocalDataDontLoad`: Don't even try to fetch data and just return whatever information is cached locally 

|**Policy** | **Swift** | **Obj-C**|
|-----------|-----------|----------|
`None`| `.none` | `HaloOfflinePolicyNone`
`LoadAndStoreLocalData` | `.loadAndStoreLocalData` | `HaloOfflinePolicyLoadAndStoreLocalData`
`ReturnLocalDataDontLoad` | `.returnLocalDataDontLoad` | `HaloOfflinePolicyReturnLocalDataDontLoad`

Although this is the default mode, it can also be specified per request, overriding this default value if needed.

### `numberOfRetries`

A retry system for failed requests is implemented within the Framework. If desired, a value can be set so that the requests are retried `n` times before finally failing. The default value is `0`, so no retries will be automatically done.

Just like the `defaultOfflinePolicy`, this is a default value that will be used only if a specific value is not set per request.

### `authenticationMode`

The SDK provides and uses three authentication modes (app/app+/user), based on which it will use the credentials provided.

```swift
public enum AuthenticationMode {
  case app
  case appPlus
  case user
}
```

Those credentials can either be specified through the already mentioned `.plist` configuration file (using the keys `CLIENT_ID`, `CLIENT_SECRET`, `USERNAME` and `PASSWORD`) or through code, setting the properties `appCredentials` and/or `userCredentials` as follows:

```swift
Halo.Manager.core.appCredentials = Credentials(clientId: "clientId", clientSecret: "clientSecret")
Halo.Manager.core.userCredentials = Credentials(username: "username", password: "password")
```

Switching the authentication mode would be then as easy as:

```swift
Halo.Manager.core.authenticationMode = .user
```

And again, this authentication mode will be used throughout the framework when no specific mode is set per request.

### Other functions

Apart from the aforementioned properties, the Core Manager provides a set of functions:

```swift
public func startup(completionHandler handler: ((Bool) -> Void)?) -> Void
```

Will be called in order to start the setup and launching process of the Framework. The closure will be executed once the whole process has finished and all the Framework features are ready to be used.


```swift
public func saveDevice(completionHandler handler: ((NSHTTPURLResponse?, Halo.Result<Halo.Device?, NSError>) -> Void)? = nil) -> Void
```

It will save the device model that the HALO SDK is currently holding and using for the different operations.

### Add-ons

The architecture of the Halo Framework is based on a system of add-ons intended to easily integrate and provide extra features and functionalities.

Currently there are three protocols that are being used by different existing addons in the Framework's ecosystem:

```swift
public protocol Addon {

  var addonName: String {get}

  func setup(core: Halo.CoreManager, completionHandler handler: ((Halo.Addon, Bool) -> Void)?) -> Void
  func startup(core: Halo.CoreManager, completionHandler handler: ((Halo.Addon, Bool) -> Void)?) -> Void

  func willRegisterAddon(core: Halo.CoreManager) -> Void
  func didRegisterAddon(core: Halo.CoreManager) -> Void

  func willRegisterDevice(core: Halo.CoreManager) -> Void
  func didRegisterDevice(core: Halo.CoreManager) -> Void

  func applicationDidFinishLaunching(application: UIApplication, core: Halo.CoreManager) -> Void
  func applicationDidEnterBackground(application: UIApplication, core: Halo.CoreManager) -> Void
  func applicationDidBecomeActive(application: UIApplication, core: Halo.CoreManager) -> Void
}
```

Every single add-on will conform to the protocol shown above, so that it has the chance to perform the desired operations in different steps of the setup and lifecycle of the app.

More specific protocols exist depending on the purpose of the add-on (notifications, network traffic).

```swift
public protocol NotificationsAddon: Addon {

  func application(application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: NSData, core: Halo.CoreManager) -> Void
  func application(application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: NSError, core: Halo.CoreManager) -> Void

  func application(application: UIApplication, didReceiveRemoteNotification userInfo: [NSObject : AnyObject], core: Halo.CoreManager, fetchCompletionHandler completionHandler: (UIBackgroundFetchResult) -> Void) -> Void

}
```

```swift
public protocol NetworkAddon: Addon {

    func willPerformRequest(request: NSURLRequest) -> Void
    func didPerformRequest(request: NSURLRequest, time: NSTimeInterval, response: NSURLResponse?) -> Void

}
```

Adding an add-on to the core is as simple as registering it using the appropriate function (always before calling the `startup` function):

```swift
fileprivate func setup() -> Void {

  [...]

  let notificationsAddon = FirebaseNotificationsAddon()
  Halo.Manager.core.registerAddon(notificationsAddon)

  [...]
}
```
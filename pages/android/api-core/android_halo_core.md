# HALO Core API

You will be able to access some internals of HALO by accessing to its ```HaloCore``` instance. This instance keeps the current device with its segmentation tags, the credentials, token and configuration provided in the plugin.

You can always access the core from the instance but be careful when modifying anything, since most of it is automatically assigned and you typically don't want to change the internals:

* ```sessionManager()```: provides the session manager bucket where the HALO session is stored.
* ```debug()```: returns the current debug configuration.
* ```credentials()```: returns the current credentials stored in the core.
* ```credentials(credentials)```: sets the current credentials and reauthenticates the APIs.
* ```logout()```: if you are logged in with some credentials you will be logged out from those user credentials.
* ```version()```: provides the library version which is the version of all the items in the sdk.
* ```flushSession()```: removes the current session token, so another one will be requested when any request is done with Halo.
* ```framework()```: provides the instance of the HALO framework used internally to manage all the calls.
* ```manager()```: provides access to the ```HaloManagerApi``` which contains all the operations you can do to manage the internal state of the HALO instance.
* ```device()```: provides the current stored device. If HALO is not fully installed the device will be an anonymous one not ready yet. This cannot be null.
* ```pushSenderId()```: provides the configured sender id for the push notifications. If it is null, the push notifications are not enabled.
* ```notificationsToken()```: provides the token from the Firebase cloud messaging service if the notifications library is enabled.
* ```notificationsToken(token)```: sets the FCM token. Just for internal use.
* ```segmentationTags()```: collects all the segmentation tags for the current device.
* ```serverVersionCheck()```: tells if the current sdk is outdated based on the server version. 1 means valid, 2 means outdated, 3 means not checked (ie, no internet).
* ```isVersionValid()```: checks the serverVersionCheck to ensure wether this version is valid or not. Valid means it has not been checked for some reason (typically network problems) or it is outdated.

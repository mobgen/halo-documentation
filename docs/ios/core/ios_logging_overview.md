---
title: Logging

---

The HALO SDK provides a flexible and powerful logging system, based on a protocol (`Logger`) which allows a developer to even extend the already existing functionality.

## Registering loggers

In order for a logger to be used, it must be instantiated and registered in the `CoreManager`. This should be done prior to calling the `startup` function, to make sure all the requests are taken into account when logging the results.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
Halo.Manager.core.addLogger(ConsoleLogger())
```
<!--Obj-C-->
```C
id<HaloLogger> logger = [HaloConsoleLogger new];
[HaloManager.core addLogger:logger];
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Logging levels

There are several logging levels which can be set to the `CoreManager` instance (property `logLevel`). The different values and meanings of each of the values of the enumeration are:

**Level** | **Description** | **Swift** | **Obj-C**
|---------|-----------------|-----------|----------|
`NONE` | Disable any logging output. No information will be shown | ```.none``` | ```LogLevelNone```
`ERROR` | Only show critical messages (errors) | ```.error``` | ```LogLevelError```
`WARNING` | Show also messages related to warnings and potential issues | ```.warning``` | ```LogLevelWarning```
`INFO` | The most verbose option, showing all the info related to requests and responses. Useful for debugging purposes | ```.info``` | ```LogLevelInfo```

**NOTE:** Each level includes all the less verbose ones below it (i.e. setting the log level to `INFO` will provide the messages from `ERROR` and `WARNING` apart from the own ones of the `INFO` level).

A log message can easily be added through the core manager as follows:

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
Halo.Manager.core.logMessage(message: "message", level: .info)
```
<!--Obj-C-->
```C
[HaloManager.core logMessageWithMessage:@"log message" level:LogLevelInfo];
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Available loggers

There are some loggers already implemented, but as mentioned earlier, a new logger could be implemented and used as long as it conforms to the `Logger` protocol.

### `ConsoleLogger`

This is the most simple logger. It will print all the messages to the debugging console.

### `FileLogger`

In this case, the logger dumps all the messages of the execution to a file, which can be later accessed. It could be useful if a log file needs to be sent via email or something similar.

The path of the file being written can be accessed via the property `filePath` of the logger (a reference to the file in the file system as a URL).
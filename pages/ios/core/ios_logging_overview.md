---
title: Logging
keywords: ios
last_updated: February 9, 2017
tags: [core]
sidebar: ios_sidebar
toc: false
permalink: ios_logging_overview.html
folder: ios
---

The HALO SDK provides a flexible and powerful logging system, based on a protocol (`Logger`) which allows a developer to even extend the already existing functionality.

## Registering loggers

In order for a logger to be used, it must be instantiated and registered in the `CoreManager`. This should be done prior to calling the `startup` function, to make sure all the requests are taken into account when logging the results.

<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#swift-1" data-toggle="tab">Swift</a></li>
  <li role="presentation"><a href="#objc-1" data-toggle="tab">ObjC</a></li>
</ul>

<div class="tab-content">
  <div id="swift-1" class="tab-pane fade in active">
    <pre><code class="swift">Halo.Manager.core.addLogger(ConsoleLogger())</code></pre>
  </div>
  <div id="objc-1" class="tab-pane fade">
    <pre><code class="objective-c">id&lt;HaloLogger&gt; logger = [HaloConsoleLogger new];
[HaloManager.core addLogger:logger];</code></pre>
  </div>
</div>

### Logging levels

There are several logging levels which can be set to the `CoreManager` instance (property `logLevel`). The different values and meanings of each of the values of the enumeration are:

|:---:|----|
`NONE` | Disable any logging output. No information will be shown
`ERROR` | Only show critical messages (errors)
`WARNING` | Show also messages related to warnings and potential issues
`INFO` | The most verbose option, showing all the info related to requests and responses. Useful for debugging purposes

**NOTE:** Each level includes all the less verbose ones below it (i.e. setting the log level to `INFO` will provide the messages from `ERROR` and `WARNING` apart from the own ones of the `INFO` level).

## Available loggers

There are some loggers already implemented, but as mentioned earlier, a new logger could be implemented and used as long as it conforms to the `Logger` protocol.

### `ConsoleLogger`

This is the most simple logger. It will print all the messages to the debugging console.

### `FileLogger`

In this case, the logger dumps all the messages to a file, which can be later accessed. It could be useful if a log file needs to be sent via email or something similar.

The path of the file being written can be accessed via the property `filePath` of the logger (a reference to the file in the file system as a URL).
---
title: Enable Debug Mode
---

## Debug mode

HALO supports a debugging mode that allows you to see many information of what is going on behind the scenes. To enable this mode you have to add it in the installer instance.

```java
Halo.installer(context)
	.debug(true)
	.install();
```

This change will:

1. Enable the logging for HALO.
2. Take the client id debug and the client secret debug configuration.
3. Take the debug id to enable the push notifications if it is available.

## Print log information to file

HALO can also print the log information to file if debug mode is enabled. You have to add it in the installer instance as follows:

```java
Halo.installer(context)
	.debug(true)
	.printLogToFile(PrintLog.SINGLE_FILE_POLICY)
	.install();
```

### Print log policies

You can choose between three different policies to print the log to file:

| Policy                       |                                                                                         |
|------------------------------|-----------------------------------------------------------------------------------------|
| ```NO_FILE_POLICY```         | do not print any log (default behaviour)     		   										 |
| ```SINGLE_FILE_POLICY```     | print each app execution in a single log file											 |
| ```MULTIPLE_FILE_POLICY```   | print each execution in a new log file 												 |



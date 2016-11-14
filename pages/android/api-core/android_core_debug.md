# Debug: enable debug mode

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

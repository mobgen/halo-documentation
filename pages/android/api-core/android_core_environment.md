# URL Environment

Maybe you don't want to use HALO in the default production environment (<https://halo.mobgen.com>). To change the environment in which HALO is working on, you have to customize your installation process. See the example above:

```java
Halo.installer(context)
	.environment("https://halo-int.mobgen.com")
	.install();
```

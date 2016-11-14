# Custom Modules: Make a request

It is likely that you want to create a custom module and add its functionalities to HALO. You can do it using HALO by adding his module endpoint into the administration console. Use the help on the CMS to make sure you configure it properly.

When a new module is added, it generates urls in the following way:

```
https://halo.mobgen.com/api/---proxy---/{{companyName}}-{{type}}/{{url}}
```

Keep in mind that the endpoint depends on the environment configured when Halo is installed and the default environment is production.

Using the SDK you can make custom requests to your endpoint to get the data, already being authenticated using the HALO authentication system. The available API to do so includes using the ```HaloMiddlewareRequest``` class.
If, for example, we would like to make a request to our custom module with:

1. The company name "mobgen"
2. The Module type "cake"
3. The final url being ```cakes/{id}```
4. Is under a proxy

The final url result would be:
```
https://halo.mobgen.com/api/---proxy---/mobgen-cake/cakes/{id}
```

Where id is the id of the cake you want to get. In the following pieze of code you will get an example of how to bring this data from the web service. Remember you can only make this request if HALO is already installed.

```java
Map<String, String> params = new HashMap<String,String>(1);
params.put("id", myId);
HaloMiddlewareRequest.builder(halo.framework().network().client())
		.method(HaloRequestMethod.GET)
		.module("mobgen", "cake")
		.hasProxy(true)
		.url("cakes/{id}", params)
		.callback(callback)
		.build().execute();
```

The response that comes from this web service call is an okHttp3 ```Response``` object, so you can rely on their documentation to process it.

---
title: Overview
---

[![Download](https://api.bintray.com/packages/halo-mobgen/maven/HALO-Translations/images/download.svg) ](https://bintray.com/halo-mobgen/maven/HALO-Translations/_latestVersion)

## What is it for?

The HALO Translations SDK is a helper library that works as a plugin for HALO that, given a module name and the fields for the key and value it is able to bring the texts to your UI. The typical use case for this library goes over showing in the UI the translated texts that are present in the HALO backend. It makes it easy to make it work offline and asynchronous.

This library only supports one text for the same module at the same time so, once you change the language it will be cached removing the previous one.

Texts are synchronized based on the changes of the CMS, so if one text is removed, added or updated only those changes will be downloaded when the plugin is used. You can use push notifications also to redownload the texts if they have changed and you want them to be updated on the opened apps, but this use case is just a possible implementation and does not come directly implemented in the library.

## Setup the lib

You can setup the translations using the HALO plugin:

```groovy
halo {
    services {
        translations true
    }
}
```

## How can I use it?

### Create a the plugin instance

It is fairly recommendable to create the instance as a singleton in your application class or using Dagger after installing HALO. 

To make this work with HALO you will need to configure the module in the following way:

- A module created in HALO and its *module name*.
- Create as a manager two fields for this module, *one as a text* and a *second as a localized text*.
- Create some instances for this module with some localized texts.

![halo-translations.png](/img/halo-key-value-tutorial.png)


To create the Android Application translations instance you will have to do the following:

```java
Halo halo = Halo.installer(context).install();
HaloTranslationsApi translations = HaloTranslationsApi.with(halo)
                .locale(HaloLocale.ENGLISH_UNITED_STATES)
                .keyValue("key", "value")
                .moduleName(moduleName)
                .defaultText("No translation found")
                .defaultLoadingText("Translating...")
                .provideDefaultOnAsync(true)
                .build();
translations.load();
```

As you can see there are some parameters that you can provide to configure your translations plugin. In the following list you will find an explanation for each of those:

- **Locale** (Mandatory): This field specifies which is the locale that will be cached. You can change it later in the same instance using the ```changeLocale()``` method.
- **KeyValue** (Mandatory): To let the plugin know which of the values for the instance should be cached, you have to provide the name of the field that serves as a key and the name of the value that serves as a localized text. Afterwards you will be able to load a text by the key name in a TextView view.
- **ModuleName** (Mandatory): The name of the module. This name will be used to select which module should be synchronized. You can have as many modules as you want for localized texts as long as each module has its own instance of ```HaloTranslationsApi```.
- **DefaultText** (Optional): You can provide either a default text or a strategy callback to select which text will be used as default in the case this text is not present in the module provided for any reason (no connection, someone removed it...). This parameter is optional.
- **DefaultLoadingText** (Optional): You can also optionally select a text that will be displayed when the translations are being loaded.
- **ProvideDefaultOnAsync** (Optional): The callback that provides the texts allows also to get the default value when loading. While loading the values it will call the text ready listener with the default value meanwhile the real one is being loaded.

Once the instance is created you can load the text as Strings or using a direct TextView. You don't have to worry about memory leaks, rotations or so, just use your key, the plugin handles that for you. In the following snippet you can have a look how to do it:

```java
translationsInstance.textOn(textView, keyName);
```

or

```java
mTranslationApi.getTextAsync(keyName, new TextReadyListener() {
    @Override
    public void onTextReady(@Nullable String key, @Nullable String text) {
        
    }
});
```

You can also use one of the following methods to interact with the translations api.

| Method name | Explanation |
|-------------|-------------|
| ```cancel``` | Cancels the query done to sync the process. |
| ```changeLocale``` | Changes the locale in the current instance with another removing the previous translations and loading the new ones again. |
| ```clearCallbacks``` | Clears the pending callbacks. |
| ```clearTranslations``` | Clears the in memory translations. The ones in the database will remain. |
| ```clearCachedTranslations``` | Clears the in database and in memory translations. |
| ```clearAll``` | Clears callbacks and in mememory translations. |
| ```getAllTranslations``` | Provides a list of all the texts in the in memory map. |
| ```getInMemoryTranslations``` | Provides a map copy for the items in memory. |
| ```getDefaultText``` | Get the default text for the given key. |
| ```getText``` | Gets the in memory text for the given key. |
| ```getTextAsync``` | Gets the text as an async process to make sure it is loaded when it is provided. |
| ```textOn``` | Assigns a text on a text view when it is ready. It internally used the ```setTextAsync```. |
| ```load``` | Loads asynchronously and sync the pending texts. |
| ```isLoading``` | Tells if the plugin is still syncing the data. |
| ```locale``` | Provides the current locale configured. |
| ```moduleName``` | Provides the module name for this translations instance. |
| ```setErrorListener``` | Listen for possibly errors. |
| ```removeLoadCallback``` | Removes a loading callback in case you are in a context dependent environment. |

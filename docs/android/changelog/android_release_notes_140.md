---
title: 1.4.0
---

## SDK Changelog
- Performance improvements
- Plugin change to support new annotation processors
- Sdk dependency not needed anymore
- Parser has changed to logan square instead of gson for performance. Change your ```@SerializedName``` for ```@JsonField``` and add in your model ```@JsonObject```.

## Needed change
- Play services updated
```groovy
compile 'com.google.android.gms:play-services-gcm:9.0.0'
```
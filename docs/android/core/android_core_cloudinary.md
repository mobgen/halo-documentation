---
title: Cloudinary Media Helper
---

HALO uses the Cloudinary service to upload media files. We have added to our SDK a helper with the filtering options. 
Check the javadoc documentation to learn more about this helper.

Here we are providing an example to blur an image provided:

```java
HaloCloudinary.builder()
                .addEffects(HaloCloudinary.Effects.blur(100))
                .build("http://cloudinary.com/..."); //Cloudinary image url
```

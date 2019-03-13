---
title: Detailed APIs
---

## Configure segmentation module

First of all we need to apply the basic configuration for the segmentation module.

As you can see there are some parameters that you can provide to configure your segmentation module. In the following list you will find an explanation for each of those:

| Parameter name                 | Explanation                                                                                                                                                        |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **addDefaultTags** (Optional)  | This field specifies if HALO will add default tags to the device gathered by the SDK. By default this is set to ```false```. |
| **syncPushToken** (Optional)| This field specifies if the device should get the pushToken from the **push** module. By default this is set to ```false```. |
| **syncLocation** (Optional) | This field specifies if HALO will snyc the device location, this will prompt for premission by the browser. By default this is set to ```false```. |
| **alias** (Optional)    | This field specifies your device alias, if you specify this from localstorage you can receive your device again without making a new one. By default this is set to ```null``` |
| **id** (Optional)      | This field specifies your device id, if you specify this from localstorage you can receive your device again without making a new one. By default this is set to ```null``` |

```javascript
import { segmentation } from 'halo-sdk';

segmentation.setup({
  addDefaultTags: true,
  syncPushToken: true,
  syncLocation: false,
});
```

## Get device

### Sample 1

Get a new device from HALO

```javascript
import { segmentation } from 'halo-sdk';

const device = await segmentation.getDevice();

// store id and alias in local storage
```

### Sample 2

Get synced device from HALO

```javascript
import { segmentation } from 'halo-sdk';

// get id and alias from local storage
const { id, alias } from 'localstorage'
segmentation.setup({
  addDefaultTags: true,
  syncPushToken: true,
  syncLocation: false,
  id,
  alias,
});

const device = await segmentation.getDevice();

```

## Sync device

### Sample 1

Sync current device with HALO

```javascript
import { segmentation } from 'halo-sdk';

const device = await segmentation.syncDevice();

// store id and alias in local storage
```

### Sample 2

Sync current device with HALO with additional tags

```javascript
import { segmentation } from 'halo-sdk';

const additionalTags = [
  {
    name: 'First name',
    value: 'SomeName'
  }
]

const device = await segmentation.syncDevice(additionalTags);

```

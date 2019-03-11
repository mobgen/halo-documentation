---
title: Overview
---

## Segmentation API

To start using the segmentation, you apply the basic configuration for the segmentation module based on your HALO project.

```javascript
import { segmentation } from 'halo-sdk';

config.setup({
  addDefaultTags: true,
  syncPushToken: true,
  syncLocation: false,
});
```

## Simple use

### Get device

Obtain your device by using ```getDevice()```, if the current device is not known in the HALO backend, it will create a new device.

```javascript
import { segmentation } from 'halo-sdk';

const device = await segmentation.getDevice();
```

### Sync device

Synchronize your device by using ```syncDevice()```, This will synchronize your local device with the device which is stored in the HALO backend.

```javascript
import { segmentation } from 'halo-sdk';

const device = await segmentation.syncDevice();
```

You can also add additional tags to your device, by calling ```syncDevice(tags)``` with an array of tags. Refer to [the detailed documentation](javascript_segmentation_detailed_api) to learn more about adding tags.
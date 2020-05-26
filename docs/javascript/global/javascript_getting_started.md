---
title: Getting Started
---

<div id="userMap">
<div class="content"><a><div class="box box1">Add HALO library</div></a></div>
<div class="arrow">→</div>
<div class="content"><a><div class="box box1">Add HALO Configuration</div></a></div>
<div class="arrow">→</div>
<div class="content"><a><div class="box box1">Get HALO authToken</div></a></div>
<div class="arrow">→</div>
<div class="content"><a><div class="box box1">Enjoy the libraries</div></a></div>
</div>

This getting started guide will guide you on setting up HALO SDK for JavaScript in a few minutes. We will provide a step by step guide to get everything working with the most basic setup, for more detailed information about specific calls or how a module works check the sidebar.

## Step 1: Add the HALO SDK 
Install the Halo SDK npm dependency:

```
npm install --save @mobgen-halo/halo-sdk-js
```

## Step 2: Add HALO configuration
Import config from halo-sdk and apply the basic configuration based on your HALO project. Here you have the minimal configuration you will need. 

```javascript
import { config } from 'halo-sdk';

config.setup({
  entrypoint: 'https://web-halo.mobgen.com/',
  credentials: {
    clientId: 'YOUR_HALO_KEY', // you can obtain this value on the Halo CMS
    clientSecret: 'YOUR_HALO_SECRET', // you can obtain this value on the Halo CMS   
  }
});
```

## Step 3: Request a authToken
To start using the halo-sdk, you first need to receive a authToken.

```javascript
import { auth } from 'halo-sdk';

const authToken = await auth.getToken();
```

## Step 4: Start using HALO in your app
Use any of the HALO APIs or plugins without worrying when is it ready, since this is managed internally by the different libraries.

---
title: JavaScript HALO SDK - Getting Started
keywords: javascript, getting started, start, how to
last_updated: November 9, 2017
tags: [getting_started]
sidebar: javascript_sidebar
toc: false
permalink: javascript_getting_started.html
folder: javascript
---

{% include custom/javascript_started_workflow.html %}

This getting started guide will guide you on setting up HALO SDK for JavaScript in a few minutes. We will provide a step by step guide to get everything working with the most basic setup, for more detailed information about specific calls or how a module works check the sidebar.

## Step 1: Add the HALO SDK 
Open the package.json of the project root and add the SDK to the dependencies:

```json
{
  "dependencies": {
    "halo-sdk": "git+ssh://git@bitbucket.org/mobgen/halo-sdk-js.git#{version}"
  }
}
```

## Step 2: Add HALO configuration
Import config from halo-sdk and apply the basic configuration based on your HALO project. Here you have the minimal configuration you will need. 

```javascript
import { config } from 'halo-sdk';

config.setup({
  entrypoint: 'https://halocms.****.com/',
  credentials: {
    clientId: 'YOUR_HALO_KEY',
    clientSecret: 'YOUR_HALO_SECRET',   
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

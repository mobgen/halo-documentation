---
title: JavaScript HALO SDK - Auth SDK Overview
keywords: javascript, auth, authToken, token
last_updated: November 10, 2017
tags: [auth]
sidebar: javascript_sidebar
permalink: javascript_auth_overview.html
folder: javascript
toc: false
---

## Request authToken

In the HALOSDK config, make sure you have set the **ClientID** and **ClientSecret**.

```javascript
import { config } from 'halo-sdk';

config.setup({
    credentials: {
        clientId: 'YOUR_HALO_KEY',
        clientSecret: 'YOUR_HALO_SECRET'
    }
});
```

Now we are ready to request the authToken.

```javascript
import { auth } from 'halo-sdk';

const authToken = await auth.getToken();
```

Once the **authToken** is set, you are ready to use any halo module.

{% include note.html content="The **authToken** is required to use any halo module." %}

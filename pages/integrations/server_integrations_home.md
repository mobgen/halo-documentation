---
title: HALO Server Integrations
keywords: home
sidebar: server_integrations
last_updated: February 13, 2017
permalink: server_integrations_home.html
folder: integrations
toc: false
---

## Introduction

HALO not only provides a complete built in server for your apps, it also allows you to integrate every API it has from your server by using the built 
in [documentation](https://halo.mobgen.com/api/docs) with swagger. For every integration you can create a new user and store the credentials server side, so the only one with access
is your server.

The steps for every integration are quite simple:

1. Create a user for your server and give it a password.
2. Integrate the authentication logic so the server can obtain a token.
3. Call the proper web services according to the documentation.
4. Provide some external APIs for your integration to your apps.

You can start checking the [authentication documentation](./sever_integrations_authentication.html).
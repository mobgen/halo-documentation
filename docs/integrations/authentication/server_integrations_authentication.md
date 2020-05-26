---
title: Authentication
sidebar_label: Integrate authentication
---

## Retrieve the token

In HALO we use a token to authenticate the request against a certain user. With this method and the permissions the user has we are able to
manage fine grained security and issue the content to the people who can actually see, update and delete it. After retrieving the token
every request against HALO can be performed using this token and the header as follows:

```sh
-H Authentication: Bearer {token}
```

> From now on the documentation will always detail the calls using the ```curl``` tool.

The steps to get the token are:

- Create a user in the CMS. You can access the documentation [here](../../cms/users/cms_users_management).
- Configure the user permissions. You can see the documentation [here](../../cms/users/cms_users_permissions).
- Take the user and password and add it with your environment details in your own server.
- Perform a call to the login web service.

## Performing the authentication call

To perform the authentication call you need the username and password encoded in base64 separated by ':' character: base64(username:password). Then you can perform
the following call to issue a token:

**Command**

```sh
curl -X POST 
  -H "Authorization: Basic BASE64(USERNAME:PASSWORD)" 
  -H "Content-Type: application/x-www-form-urlencoded" 
  -d "grant_type=password&username=EDITOR_USERNAME&password=EDITOR_PASSWORD"
  "https://web-halo.mobgen.com/api/oauth/token?_user"
```

**Response**

```
Response:
{
  "access_token": "{ACCESS_TOKEN}",
  "refresh_token": "{REFRESH_TOKEN}",
  "expires_in": {expire_time},
  "scope": {scope},
  "token_type": "Bearer"
}
``` 

Now with the ```access_token``` property you can perform calls to the other HALO services available in the [swagger documentation](https://web-halo.mobgen.com/api/docs) if the user you are using 
has permissions for it.
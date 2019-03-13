---
title: SSL pinning
---

Using SSL for network connections is the de facto method of ensuring secure data transmission in today's mobile apps.

The default way iOS SSL connections work is as follows: the client makes a connection to the server and the server responds with its SSL certificate. If that certificate was issued by a Certificate Authority that is trusted by the OS, then the connection is allowed. All data sent through this connection is then encrypted with the server's public key. For an attacker to perform a *man in the middle* attack, the mobile device would have to trust the attacker's certificate. It is very unlikely that the attacker possesses a trusted certificate and therefore this is normally not an issue. However SSL weaknesses have happened before and using SSL Pinning can mitigate this possibility.

**SSL Pinning** is making sure the client checks the server's certificate against a known copy of that certificate.

### SSL pinning within the HALO iOS SDK

SSL pinning is enabled by default in the SDK, and the certificate for those domains under *.mobgen.com are already delivered with it. However, it can happen that the SDK is being used against any other environment/domain. In that case, the certificate for that environment will have to be added to the main bundle of the application.

By adding all the possible certificates in any of the supported formats (.cer, .crt, .der), the SDK will automatically try to match those against the server's certificate.

#### Disabling SSL pinning

If for any reason the SSL pinning needs to be disabled (testing, debugging... not recommended in final builds), it can be done by adding the boolean key `DISABLE_SSL_PINNING` in the configuration `.plist` and setting it to `YES`.

---
title: Auth with JWT
description: Endpoints for Auth with JWT
layout: ../../layouts/MainLayout.astro
---

## Authentication

You can do login by sending an object like the following to `/auth/login/`

```
[POST] http://api.escuelajs.co/api/v1/auth/login
```

```json
{
  "email": "john@mail.com",
  "password": "changeme"
}
```

The response is a JWT Token, like this:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AbWFpbC5jb20iLCJzdWIiOjEsImlhdCI6MTY0Nzg3NTY5MywiZXhwIjoxNjQ3ODc5MjkzfQ.yrPEqd3YEgmxwEXq3SFy33bhV2jcIKc8BMGZfwuWyHM"
}
```


## Get user with session

You can get the profile the current user with session if in the headers include the `Authorization` key with the value `Bearer {your token}` to `/auth/profile`

```bash
[GET] http://api.escuelajs.co/api/v1/auth/profile
```

```json
{
  "id": 1,
  "email": "john@mail.com",
  "password": "changeme",
  "name": "Jhon",
  "role": "customer"
}
```

---
title: Auth with JWT
description: Endpoints for Auth with JWT
---

## Authentication

You can do login by sending an object like the following to `/auth/login/`

Request:

```sh
[POST] https://api.escuelajs.co/api/v1/auth/login
# Body
{
  "email": "john@mail.com",
  "password": "changeme"
}
```

The response is an access and refresh JWT tokens, like this:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjcyODAyMDI4fQ.P1_rB3hJ5afwiG4TWXLq6jOAcVJkvQZ2Z-ZZOnQ1dZw"
}
```

> Note: The access token is valid for 20 days, and the refresh token is valid for 10 hours.

## Get user with session

You can get the profile the current user with session if in the headers include the `Authorization` key with the value `Bearer {your access token}` to `/auth/profile`

Request:

```sh
[GET] https://api.escuelajs.co/api/v1/auth/profile
# Headers
{
  "Authorization": "Bearer {your access token}"
}
```

Response:

```json
{
  "id": 1,
  "email": "john@mail.com",
  "password": "changeme",
  "name": "Jhon",
  "role": "customer",
  "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867"
}
```

## Get a new Access Token with a Refresh Token

Request:

```sh
[POST] https://api.escuelajs.co/api/v1/auth/refresh-token
# Body
{
  "refreshToken": "{your refresh token}"
}
```

The response is a new access and refresh JWT tokens, like this:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjcyODAyMDI4fQ.P1_rB3hJ5afwiG4TWXLq6jOAcVJkvQZ2Z-ZZOnQ1dZw"
}
```

> Note: The access token is valid for 20 days, and the refresh token is valid for 10 hours.

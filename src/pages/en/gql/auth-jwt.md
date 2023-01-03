---
title: Auth with JWT
description: Endpoints for Auth with JWT
layout: ../../../layouts/MainLayout.astro
---

## Authentication

You can do login by sending an object like the following to the `login` mutation.

Mutation:

```graphql
mutation {
  login(email: "john@mail.com", password: "changeme") {
    access_token
    refresh_token
  }
}
```

The response is an access and refresh JWT tokens, like this:

```json
{
  "data": {
    "login": {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc3ODY4MywiZXhwIjoxNjc0NTA2NjgzfQ.kq-NxeQb-IT5SRKNV1BYEiYwFih2jhXXjJZMKsN5ziU",
      "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc3ODY4MywiZXhwIjoxNjcyODE0NjgzfQ.XMjQQ6tTHAvy2ELrsYN0enWcQTo0PTeqb46-OrhUK7o"
    }
  }
}
```

> Note: The access token is valid for 20 days, and the refresh token is valid for 10 hours.

## Get user with session

You can get the profile the current user with session if in the headers include the `Authorization` key with the value `Bearer {your access token}` to `/auth/profile`

Request:

```graphql
# Headers
{
  "Authorization": "Bearer {your access token}"
}
query {
  myProfile {
    id
    name
    avatar
  }
}
```

Response:

```json
{
  "data": {
    "myProfile": {
      "id": "1",
      "name": "Jhon",
      "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=1229"
    }
  }
}
```

## Get a new Access Token with a Refresh Token

Request:

```graphql
mutation {
  refreshToken(
    refreshToken: {your refresh token}
  ) {
    access_token
    refresh_token
  }
}
```

The response is a new access and refresh JWT tokens, like this:

```json
{
  "data": {
    "refreshToken": {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc3ODgwMiwiZXhwIjoxNjc0NTA2ODAyfQ.HjsfDRBlSu1W5jBTUmfk_sS3SfrZGppjarrVGOt2IuI",
      "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc3ODgwMiwiZXhwIjoxNjcyODE0ODAyfQ.vVBGJYyxlTaI5k_pseGAOKHhuACIFo1wOzHI20oRF6M"
    }
  }
}
```

> Note: The access token is valid for 20 days, and the refresh token is valid for 10 hours.

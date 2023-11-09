---
title: Users
description: Endpoints for Users
---

## Get all users

You can access the list of users by using the `users` query.

Query:

```graphql
query {
  users {
    id
    name
    email
  }
}
```

Response:

```json
{
  "data": {
    "users": [
      {
        "id": "1",
        "name": "Jhon",
        "email": "john@mail.com"
      },
      ...
    ]
  }
}
```

## Get a single user

You can get a single user by adding the `id` as a parameter to the `user` query.

Query:

```graphql
query {
  user(id: 1) {
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
    "user": {
      "id": "1",
      "name": "Jhon",
      "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=6355"
    }
  }
}
```

## Create a user

You can create a new user by sending an object like the following to the `addUser` mutation.

Mutation:

```graphql
mutation {
  addUser(
    data: {
      name: "Nicolas"
      email: "nico@gmail.com"
      password: "123"
      avatar: "https://api.lorem.space/image/face?w=150&h=220"
    }
  ) {
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
    "addUser": {
      "id": "10",
      "name": "Nicolas",
      "avatar": "https://api.lorem.space/image/face?w=150&h=220"
    }
  }
}
```

> Note that the password is will not encrypted.

## Update a user

You can update a user by sending an object like the following and adding the `id` as a parameter to `updateUser` mutation.

Mutation:

```graphql
mutation {
  updateUser(id: 1, changes: { name: "change" }) {
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
    "updateUser": {
      "id": "1",
      "name": "change",
      "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=6355"
    }
  }
}
```

> Note that it is not necessary to send all user attributes, just send the attributes that want to update.

## Check the email

You can verify if an email is already registered in the API.

Request:

```graphql
query {
  isAvailable(email: "john@mail.com")
}
```

Response:

```json
{
  "data": {
    "isAvailable": false
  }
}
```

This feature is so useful for features like showing a message in a form and verifying the email before creating a user. For example:

![Example](https://i.imgur.com/Igy8mhu.png)

## Schema User

| Attribute | Type   | Description                               |
| --------- | ------ | ----------------------------------------- |
| id        | number | The id of the user.                       |
| name      | string | The name of the user.                     |
| role      | string | The role of the user is customer or admin |
| email     | string | The email of the user.                    |
| password  | string | The password of the user.                 |

---
title: Users
description: Endpoints for Users
layout: ../../layouts/MainLayout.astro
---

## Get all users

You can access the list of 3 users by using the `/users` endpoint.

```
[GET] https://api.escuelajs.co/api/v1/users
```

```json
[
  {
    "id": 1,
    "email": "john@mail.com",
    "password": "changeme",
    "name": "Jhon",
    "role": "customer"
  },
  // ...
]
```

## Get a single user

You can get a single user by adding the `id` as a parameter: `/users/{id}`

```bash
[GET] https://api.escuelajs.co/api/v1/users/1
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

## Create a user

You can create a new user by sending an object like the following to `/users/`

```bash
[POST] https://api.escuelajs.co/api/v1/users/
```
```json
{
  "name": "Nicolas",
  "email": "nico@gmail.com",
  "password": "123"
}
```

> Note that the password is not encrypted.

## Update a user

You can update a user exists by sending an object like the following and adding the `id` as a parameter: `/users/{id}`

```bash
[PUT] https://api.escuelajs.co/api/v1/users/1
```
```json
{
  "email": "john@mail.com",
  "name": "Change name",
}
```

> Note that it is not necessary to send all user attributes, just send the attributes that want to update.

## Check the email

You can verify if an email is already registered in the API.

```bash
[POST] https://api.escuelajs.co/api/v1/users/is-available
```
```json
{
  "email": "john@mail.com"
}
```

This feature is so useful for doing feature like show a message in a form and verify the email before create and user, for example:

![Example](https://i.imgur.com/Igy8mhu.png)

## Schema User

| Attribute  | Type | Description |
| --- | --- | --- |
| id | number | The id of the user. |
| name | string | The name of the user. |
| role | string | The role of the user is customer or admin |
| email | string | The email of the user. |
| password | string | The password of the user. |

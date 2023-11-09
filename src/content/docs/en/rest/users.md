---
title: Users
description: Endpoints for Users
---

## Get all users

You can access the list of 3 users by using the `/users` endpoint.

Request:

```sh
[GET] https://api.escuelajs.co/api/v1/users
```

Response:

```json
[
  {
    "id": 1,
    "email": "john@mail.com",
    "password": "changeme",
    "name": "Jhon",
    "role": "customer",
    "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867",
  },
  // ...
]
```

## Get a single user

You can get a single user by adding the `id` as a parameter: `/users/{id}`

Request:

```sh
[GET] https://api.escuelajs.co/api/v1/users/1
```

Response:

```json
{
  "id": 1,
  "email": "john@mail.com",
  "password": "changeme",
  "name": "Jhon",
  "role": "customer",
  "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867",
}
```

## Create a user

You can create a new user by sending an object like the following to `/users/`

Request:

```sh
[POST] https://api.escuelajs.co/api/v1/users/
# Body
{
  "name": "Nicolas",
  "email": "nico@gmail.com",
  "password": "1234",
  "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867",
}
```

Response:

```json
{
	"email": "nico@gmail.com",
	"password": "1234",
	"name": "Nicolas",
	"avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867",
	"role": "customer",
	"id": 24
}
```

> Note that the password is not encrypted.

## Update a user

You can update a user exists by sending an object like the following and adding the `id` as a parameter: `/users/{id}`

Request:

```sh
[PUT] https://api.escuelajs.co/api/v1/users/1
# Body
{
  "email": "john@mail.com",
  "name": "Change name",
}
```

Response:

```json
{
	"id": 4,
	"email": "john@mail.com",
	"password": "1234",
	"name": "Change name",
	"role": "admin",
	"avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867",
}
```

> Note that it is not necessary to send all user attributes, just send the attributes that want to update.

## Check the email

You can verify if an email is already registered in the API.

Request:

```sh
[POST] https://api.escuelajs.co/api/v1/users/is-available
# Body
{
  "email": "john@mail.com"
}
```

Response:

```json
{
	"isAvailable": false
}
```

This feature is so useful for features like showing a message in a form and verifying the email before creating a user. For example:

![Example](https://i.imgur.com/Igy8mhu.png)

## Schema User

| Attribute  | Type | Description |
| --- | --- | --- |
| id | number | The id of the user. |
| name | string | The name of the user. |
| role | string | The role of the user is customer or admin |
| email | string | The email of the user. |
| password | string | The password of the user. |
| avatar | string | The string with URL to a image  |

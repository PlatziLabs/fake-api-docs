---
title: Categories
description: Endpoints for Categories
---

## Get all categories

You can access the list of 5 categories by using the `/categories` endpoint.

Request:

```
[GET] https://api.escuelajs.co/api/v1/categories
```

Response:

```json
[
  {
    "id": 1,
    "name": "Clothes",
    "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=4278"
  }
  // ...
]
```

## Get a single category

You can get a single category by adding the `id` as a parameter: `/categories/<id>`

Request:

```sh
[GET] https://api.escuelajs.co/api/v1/categories/1
```

Response:

```json
{
  "id": 1,
  "name": "Clothes",
  "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=4278"
}
```

## Create a category

You can create a new category by sending an object like the following to `/categories/`

Request:

```sh
[POST] https://api.escuelajs.co/api/v1/categories/
# Body
{
  "name": "New Category",
  "image": "https://placeimg.com/640/480/any"
}
```

Response:

```json
{
  "name": "New Category",
  "image": "https://placeimg.com/640/480/any",
  "id": 6
}
```

> Note that the image is an URLs.

## Update a category

You can update a category exists by sending an object like the following and adding the `id` as a parameter: `/categories/<id>`

Request:

```sh
[PUT] https://api.escuelajs.co/api/v1/categories/3
# Body
{
  "name": "Change title"
}
```

Response:

```json
{
  "id": 3,
  "name": "Change title",
  "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=7358"
}
```

> Note that it is not necessary to send all product attributes, just send the attributes that want to update.

## Delete a category

You can delete a category exists by adding the `id` as a parameter: `/categories/{id}`

Request:

```sh
[DELETE] https://api.escuelajs.co/api/v1/categories/1
```

Response:

```json
true
```

## Get all products by category

You can get the products by category adding the `categoryID` as a parameter to `/categories/{categoryID}/products`

Request:

```
[GET] https://api.escuelajs.co/api/v1/categories/1/products
```

Response:

```json
[
  {
    "id": 4,
    "title": "Handmade Fresh Table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 1,
      "name": "Others",
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
    },
    "images": [
      "https://placeimg.com/640/480/any?r=0.9178516507833767",
      "https://placeimg.com/640/480/any?r=0.9300320592588625",
      "https://placeimg.com/640/480/any?r=0.8807778235430017"
    ]
  }
  // ...
]
```

## Schema Category

| Attribute | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| id        | number | The id of the category.        |
| name      | string | Name of the category.          |
| image     | string | The string with URL to a image |

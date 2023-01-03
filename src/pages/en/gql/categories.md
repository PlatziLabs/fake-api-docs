---
title: Categories
description: Endpoints for Categories
layout: ../../../layouts/MainLayout.astro
---

## Get all categories

You can access the list of 5 categories by using the `categories` query.

Query:

```graphql
query {
  categories {
    id
    name
    image
  }
}
```

Response:

```json
{
  "data": {
    "categories": [
      {
        "id": "1",
        "name": "Clothes",
        "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=7943"
      },
      ...
    ]
  }
}
```

## Get a single category

You can get a single category by adding the `id` as a parameter to `category` query.

Query:

```graphql
query {
  category(id: 1) {
    id
    name
    image
  }
}
```

Response:

```json
{
  "data": {
    "category": {
      "id": "1",
      "name": "Clothes",
      "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=7943"
    }
  }
}
```

## Create a category

You can create a new category by sending an object like the following to the `addCategory` mutation.

Mutation:

```graphql
mutation {
  addCategory(
    data: { name: "New Category", image: "https://placeimg.com/640/480/any" }
  ) {
    id
    name
    image
  }
}
```

Response:

```json
{
  "data": {
    "addCategory": {
      "id": "6",
      "name": "New Category",
      "image": "https://placeimg.com/640/480/any"
    }
  }
}
```

> Note that the image is an URLs.

## Update a category

You can update a category exists by sending an object like the following and adding the `id` as a parameter to the `updateCategory` mutation.

Mutation:

```graphql
mutation {
  updateCategory(id: 1, changes: { name: "change" }) {
    id
    name
    image
  }
}
```

Response:

```json
{
  "data": {
    "updateCategory": {
      "id": "1",
      "name": "change",
      "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=7943"
    }
  }
}
```

> Note that it is not necessary to send all product attributes, just send the attributes that want to update.

## Delete a category

You can delete a category exists by adding the `id` as a parameter to the `deleteCategory` mutation.

Mutation:

```graphql
mutation {
  deleteCategory(id: 12)
}

```

Response:

```json
{
  "data": {
    "deleteCategory": true
  }
}
```

## Schema Category

| Attribute | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| id        | number | The id of the category.        |
| name      | string | Name of the category.          |
| image     | string | The string with URL to a image |

---
title: Products
description: Endpoints for products
layout: ../../../layouts/MainLayout.astro
---

## Get all products

You can access the list of 200 products by using the `products` query.

Query:

```graphql
query {
  products {
    id
    title
    price
    description
    images
    category {
      id
      name
      image
    }
  }
}
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
      "id": 5,
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

## Get a single product

You can get a single product by adding the `id` as a parameter using `product` query.

Query:

```graphql
{
  product(id: "4") {
    title
    price
  }
}
```

Response:

```json
{
  "data": {
    "product": {
      "id": "1",
      "title": "Fantastic Rubber Towels",
      "price": 800,
      "images": [
        "https://api.lorem.space/image/furniture?w=640&h=480&r=5902",
        "https://api.lorem.space/image/furniture?w=640&h=480&r=164",
        "https://api.lorem.space/image/furniture?w=640&h=480&r=8528"
      ],
      "description": "The Football Is Good For Training And Recreational Purposes"
    }
  }
}
```

You can use aliases to get different products in the same request, for example:

Query:

```graphql
{
  ProductA: product(id: "1") {
    title
    price
  }
  ProductB: product(id: "2") {
    title
    price
  }
}
```

Response:

```json
{
  "data": {
    "ProductA": {
      "title": "Fantastic Rubber Towels",
      "price": 800
    },
    "ProductB": {
      "title": "Rustic Plastic Soap",
      "price": 682
    }
  }
}
```

## Create a product

You can create a new product by sending an object like a parameter to the `addProduct` mutation.

Mutation:

```graphql
mutation {
  addProduct(
    data: {
      title: "New Product"
      price: 10
      description: "A description"
      categoryId: 1
      images: ["https://placeimg.com/640/480/any"]
    }
  ) {
    title
    price
    images
    category {
      id
      name
      image
    }
  }
}
```

Response:

```json
{
  "title": "New Product",
  "price": 10,
  "description": "A description",
  "images": ["https://placeimg.com/640/480/any"],
  "category": {
    "id": 1,
    "name": "Clothes",
    "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=4278"
  },
  "id": 210
}
```

> Note that the `categoryId` should be an ID that exists in `categories` and the images are an array with URLs.

## Update a product

You can update a product by sending an object like the following and adding the `id` as a parameter to the `updateProduct` mutation.

Mutation:

```graphql
mutation {
  updateProduct(id: "1", changes: { title: "udpate" }) {
    title
    price
    images
  }
}
```

Response:

```json
{
  "data": {
    "updateProduct": {
      "title": "udpate",
      "price": 800,
      "images": [
        "https://api.lorem.space/image/furniture?w=640&h=480&r=5902",
        "https://api.lorem.space/image/furniture?w=640&h=480&r=164",
        "https://api.lorem.space/image/furniture?w=640&h=480&r=8528"
      ]
    }
  }
}
```

> Note that it is not necessary to send all product attributes, just send the ones you want to update.

## Delete a product

You can delete a product by adding the `id` as a parameter to the `deleteProduct` mutation.

Mutation:

```graphql
mutation {
  deleteProduct(id: 1)
}
```

Response:

```json
{
  "data": {
    "deleteProduct": true
  }
}
```

## Pagination

APIs that use offset-based paging use the offset and limit query parameters to paginate through items in a collection.

Offset-based pagination is often used where the list of items is of a fixed and predetermined length.

To fetch the first page of entries in a collection, the API needs to be called with the `offset` set to 0 and the `limit` the products that you want in the response.

Query:

```graphql
query {
  products(limit: 2, offset: 0) {
    title
    price
  }
}
```

Response:

```json
{
  "data": {
    "products": [
      {
        "title": "udpate",
        "price": 800
      },
      {
        "title": "Rustic Plastic Soap",
        "price": 682
      }
    ]
  }
}
```

To fetch the **next page** of entries, the API needs to be called with an offset parameter that equals the sum of the previous offset value and limit returned to the previous result,

To get the **next page** of entries, use an offset parameter equal to the sum of the previous offset value and the limit returned to the previous result, `previous_offset + previous_limit`.

> Note that the offset should be increased by the previous limit and not by the size of the entries in the response array, as this may be less than the limit. Generally, we advise using the value of the limit in the response object to increase the offset value.

For example, for a pagination with 10 items per page, it looks like this:

| Query                           | Description                   |
| ------------------------------- | ----------------------------- |
| products(limit: 10, offset: 0)  | Return the first 10 products. |
| products(limit: 10, offset: 10) | Return products from 10 to 20 |
| products(limit: 10, offset: 20) | Return products from 20 to 30 |

Or for a pagination with 20 items per page, it looks like this:

| Query                           | Description                   |
| ------------------------------- | ----------------------------- |
| products(limit: 20, offset: 0)  | Return the first 20 products. |
| products(limit: 20, offset: 20) | Return products from 20 to 40 |
| products(limit: 20, offset: 40) | Return products from 40 to 60 |

## Schema Product

| Attribute   | Type     | Description               |
| ----------- | -------- | ------------------------- |
| id          | number   | The id of the product.    |
| title       | string   | The name of the product.  |
| price       | number   | Price the product.        |
| description | string   | Description the product.  |
| category    | number   | Object of category.       |
| images      | string[] | List of images like URLs. |

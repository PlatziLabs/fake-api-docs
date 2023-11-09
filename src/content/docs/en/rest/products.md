---
title: Products
description: Endpoints for products
---

## Get all products

You can access the list of 200 products by using the `/products` endpoint.

Request:

```sh
[GET] https://api.escuelajs.co/api/v1/products
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

You can get a single product by adding the `id` as a parameter: `/products/<id>`

Request:

```sh
[GET] https://api.escuelajs.co/api/v1/products/4
```

Response:

```json
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
```

## Create a product

You can create a new product by sending an object like the following to `/products/`

Request:

```sh
[POST] https://api.escuelajs.co/api/v1/products/
# Body
{
  "title": "New Product",
  "price": 10,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
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
    "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=4278",
    "creationAt": "2023-01-03T15:58:58.000Z",
    "updatedAt": "2023-01-03T15:58:58.000Z"
  },
  "id": 210,
  "creationAt": "2023-01-03T16:51:33.000Z",
  "updatedAt": "2023-01-03T16:51:33.000Z"
}
```

> Note that the `categoryId` should be an ID that exists in `/categories` and the images are an array with URLs.

## Update a product

You can update a product by sending an object like the following and adding the `id` as a parameter: `/products/<id>`

Request:

```sh
[PUT] https://api.escuelajs.co/api/v1/products/1
# Body
{
  "title": "Change title",
  "price": 100
}
```

Response:

```json
{
  "id": 1,
  "title": "Change title",
  "price": 100,
  "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
  "images": ["https://placeimg.com/640/480/any"],
  "creationAt": "2023-01-03T15:58:58.000Z",
  "updatedAt": "2023-01-03T16:54:02.000Z",
  "category": {
    "id": 4,
    "name": "Shoes",
    "image": "https://api.lorem.space/image/shoes?w=640&h=480&r=4508",
    "creationAt": "2023-01-03T15:58:58.000Z",
    "updatedAt": "2023-01-03T15:58:58.000Z"
  }
}
```

> Note that it is not necessary to send all product attributes, just send the ones you want to update.

## Delete a product

You can delete a product by adding the `id` as a parameter: `/products/<id>`

Request:

```sh
[DELETE] https://api.escuelajs.co/api/v1/products/1
```

Response:

```json
true
```

## Pagination

APIs that use offset-based paging use the offset and limit query parameters to paginate through items in a collection.

Offset-based pagination is often used where the list of items is of a fixed and predetermined length.

To fetch the first page of entries in a collection, the API needs to be called with the `offset` set to 0 and the `limit` the products that you want in the response.

Request:

```sh
[GET] https://api.escuelajs.co/api/v1/products?offset=0&limit=10
```

Response:

```json
[
  {
    "id": 1,
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
  // ... and 9 items more
]
```

To fetch the **next page** of entries, the API needs to be called with an offset parameter that equals the sum of the previous offset value and limit returned to the previous result,

To get the **next page** of entries, use an offset parameter equal to the sum of the previous offset value and the limit returned to the previous result, `previous_offset + previous_limit`.

```sh
[GET] https://api.escuelajs.co/api/v1/products?offset=10&limit=10
```

> Note that the offset should be increased by the previous limit and not by the size of the entries in the response array, as this may be less than the limit. Generally, we advise using the value of the limit in the response object to increase the offset value.

For example, for a pagination with 10 items per page, it looks like this:

<!-- ```bash
[GET] http://api.escuelajs.co/api/v1/products?offset=0&limit=10
[GET] http://api.escuelajs.co/api/v1/products?offset=10&limit=10
[GET] http://api.escuelajs.co/api/v1/products?offset=20&limit=10
``` -->

| Request                          | Description                   |
| -------------------------------- | ----------------------------- |
| /products?**offset=0&limit=10**  | Return the first 10 products. |
| /products?**offset=10&limit=10** | Return products from 10 to 20 |
| /products?**offset=20&limit=10** | Return products from 20 to 30 |

Or for a pagination with 20 items per page, it looks like this:

| Request                          | Description                   |
| -------------------------------- | ----------------------------- |
| /products?**offset=0&limit=20**  | Return the first 20 products. |
| /products?**offset=20&limit=20** | Return products from 20 to 40 |
| /products?**offset=40&limit=20** | Return products from 40 to 60 |

## Schema Product

| Attribute   | Type     | Description               |
| ----------- | -------- | ------------------------- |
| id          | number   | The id of the product.    |
| title       | string   | The name of the product.  |
| price       | number   | Price the product.        |
| description | string   | Description the product.  |
| category    | number   | Object of category.       |
| images      | string[] | List of images like URLs. |

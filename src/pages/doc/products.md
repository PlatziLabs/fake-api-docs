---
title: Products
description: Endpoints for products
layout: ../../layouts/MainLayout.astro
---

## Get all products

You can access the list of 200 products by using the `/products` endpoint.

```
[GET] https://api.escuelajs.co/api/v1/products
```

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
  },
  // ...
]
```

## Get a single product

You can get a single product by adding the `id` as a parameter: `/products/1`

```bash
[GET] https://api.escuelajs.co/api/v1/products/1
```

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

```bash
[POST] https://api.escuelajs.co/api/v1/products/
```
```json
{
  "title": "New Product",
  "price": 10,
  "description": "A description",
  "categoryId": 1,
  "images": [
    "https://placeimg.com/640/480/any"
  ]
}
```

> Note that the `categoryId` should be an ID exists in `/categories` and the images is an array with URLs

## Update a product

You can update a product exists by sending an object like the following and adding the `id` as a parameter: `/products/1`

```bash
[PUT] https://api.escuelajs.co/api/v1/products/1
```
```json
{
  "title": "Change title",
  "price": 100,
}
```

> Note that it is not necessary to send all product attributes, just send the attributes that want to update.
## Delete a product

You can delete a product exists by adding the `id` as a parameter: `/products/1`

```bash
[DELETE] https://api.escuelajs.co/api/v1/products/1
```

## Pagination

APIs that use offset-based paging use the offset and limit query parameters to paginate through items in a collection.

Offset-based pagination is often used where the list of items is of a fixed and predetermined length.

To fetch the first page of entries in a collection, the API needs to be called with the `offset` set to 0 and with the `limit` the products that you want in the response.

```bash
[GET] https://api.escuelajs.co/api/v1/products?offset=0&limit=10
```
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
  },
  // ... and 9 items more
]
```

To fetch the **next page** of entries, the API needs to be called with an offset parameter that equals the sum of the previous offset value and limit returned to the previous result, `previous_offset + previous_limit`.

```bash
[GET] https://api.escuelajs.co/api/v1/products?offset=10&limit=10
```

> Note that the offset should be increased by the previous limit and not by the size of the entries in the response array, as this may be less than the limit. Generally we advise using the value of the limit in the response object to increase the offset value.

For example, for a pagination with 10 items per page, it looks like this:

<!-- ```bash
[GET] http://api.escuelajs.co/api/v1/products?offset=0&limit=10
[GET] http://api.escuelajs.co/api/v1/products?offset=10&limit=10
[GET] http://api.escuelajs.co/api/v1/products?offset=20&limit=10
``` -->
| Request  |  Description |
| --- | --- |
| /products?**offset=0&limit=10**   | Return the first 10 products. |
| /products?**offset=10&limit=10**   | Return products from 10 to 20 |
| /products?**offset=20&limit=10**   | Return products from 20 to 30 |

Or for a pagination with 20 items per page, it looks like this:


| Request  |  Description |
| --- | --- |
| /products?**offset=0&limit=20**   | Return the first 20 products. |
| /products?**offset=20&limit=20**   | Return products from 20 to 40 |
| /products?**offset=40&limit=20**   | Return products from 40 to 60 |

## Schema Product

| Attribute  | Type | Description |
| --- | --- | --- |
| id   | number | The id of the product. |
| price   | number | Price the product. |
| description   | string | Description the product. |
| category   | number | Object of category. |
| images   | string[] | List of images like URLs. |

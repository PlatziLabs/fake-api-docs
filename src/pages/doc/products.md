---
title: Products
description: Endpoints for products
layout: ../../layouts/MainLayout.astro
---

Sed flavum. Stridore nato, Alcandrumque desint ostendit derat, longoque, eadem
iunxit miserum pedum pectora. Liberat sine pignus cupit, ferit mihi venias
amores, et quod, maduere haec _gravi_ contentusque heros. Qui suae attonitas.

## Get all products

```
[GET] http://api.escuelajs.co/api/v1/products
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

```bash
[GET] http://api.escuelajs.co/api/v1/products/4
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

```bash
[POST] http://api.escuelajs.co/api/v1/products/
```
```json
{
  "title": "string",
  "price": 0,
  "description": "string",
  "categoryId": 0,
  "images": [
    "string"
  ]
}
```

## Update a product

```bash
[PUT] http://api.escuelajs.co/api/v1/products/4
```
```json
{
  "title": "string",
  "price": 0,
  "description": "string",
  "categoryId": 0,
  "images": [
    "string"
  ]
}

```
## Delete a product

```bash
[DELETE] http://api.escuelajs.co/api/v1/products/4
```

## Pagination

APIs that use offset-based paging use the offset and limit query parameters to paginate through items in a collection.

Offset-based pagination is often used where the list of items is of a fixed and predetermined length.

To fetch the first page of entries in a collection the API needs to be called either without the offset parameter, or with the `offset` set to 0.

```bash
[GET] http://api.escuelajs.co/api/v1/products?offset=0&limit=10
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
  // ... 10 items
]
```


To fetch the **next page** of entries the API needs to be called with an offset parameter that equals the sum of the previous offset value and limit returned in the previous result, `previous_offset + previous_limit`.

```bash
[GET] http://api.escuelajs.co/api/v1/products?offset=10&limit=10
```

> Note that the offset should be increased by the previous limit and not by the size of the entries in the response array, as this may be less than the limit. Generally we advise using the value of the limit in the response object to increase the offset value.

For example pagination with 10 items per page, look like this:

<!-- ```bash
[GET] http://api.escuelajs.co/api/v1/products?offset=0&limit=10
[GET] http://api.escuelajs.co/api/v1/products?offset=10&limit=10
[GET] http://api.escuelajs.co/api/v1/products?offset=20&limit=10
``` -->
| Request  |  Description |
| --- | --- |
| /api/v1/products?**offset=0&limit=10**   | Return the fisrt 10 products. |
| /api/v1/products?**offset=10&limit=10**   | Return the fisrt 10 products. |
| /api/v1/products?**offset=20&limit=10**   | Return the fisrt 10 products. |

Or pagination with 20 items per page, look like this:


| Request  |  Description |
| --- | --- |
| /api/v1/products?offset=0&limit=10   | Return the fisrt 10 products. |
| /api/v1/products?offset=0&limit=10   | Return the fisrt 10 products. |
| /api/v1/products?offset=0&limit=10   | Return the fisrt 10 products. |

## Schema Product

| Attribute  | Type | Description |
| --- | --- | --- |
| id   | number | The id of the product. |
| title   | number | The id of the product. |
| description   | number | The id of the product. |
| images   | number | The id of the product. |

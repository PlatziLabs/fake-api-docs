---
title: Filter Products
description: Endpoints to filter products
---

## Filter by title

By using the `/products` endpoint and passing `title` as a query parameter, you can filter for products by title. 

Request:

```sh
[GET] https://api.escuelajs.co/api/v1/products/?title=Generic
```

## Filter by price

By using the `/products` endpoint and passing `price` as a query parameter, you can filter for products by price. 

Request:

```sh
[GET] https://api.escuelajs.co/api/v1/products/price=100
```

## Filter by price range 

By using the `/products` endpoint and passing `price_min` and `price_max` as a query parameter, you can filter for products by price range.

Request:

```sh
[GET] https://api.escuelajs.co/api/v1/products/?price_min=900&price_max=1000
```

## Filter by category

By using the `/products` endpoint and passing `categoryId` as a query parameter, you can filter for products by category.

Request:

```sh
[GET] https://api.escuelajs.co/api/v1/products/?categoryId=1
```

## Join filters

You can filter products using all query parameters and merge them all.

Example: All products with a price between `900` and `1000`, with the title `"Generic"` and category id `1`.

```sh
[GET]
https://api.escuelajs.co/api/v1/products/
?title=Generic&price_min=900&price_max=1000&categoryId=1
```

Example: All products with a price between `900` and `1000`, and category id `1`, with a limit of `10` products and an offset of `10`.

```sh
[GET]
https://api.escuelajs.co/api/v1/products/
?price_min=900&price_max=1000&categoryId=1
```

Example: All products with a price between `100` and `1000`, and with a limit of `10` products and an offset of `10`.

```sh
[GET]
https://api.escuelajs.co/api/v1/products/
?price_min=100&price_max=1000&offset=10&limit=10
```

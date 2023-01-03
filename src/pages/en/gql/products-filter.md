---
title: Filter Products
description: Endpoints to filter products
layout: ../../../layouts/MainLayout.astro
---

## Filter by title

By using the `products` query and passing `title` as a query parameter, you can filter for products by title.

Query:

```graphql
query {
  products(title: "Generic") {
    title
    price
  }
}
```

## Filter by price

By using the `products` query and passing `price` as a query parameter, you can filter for products by price.

Query:

```graphql
query {
  products(price: 100) {
    title
    price
  }
}
```

## Filter by price range 

By using the `products` query and passing `price_min` and `price_max` as a query parameter, you can filter for products by price range.

Query:

```graphql
query {
  products(price_min: 100, price_max: 200) {
    title
    price
  }
}
```

## Filter by category

By using the `products` query and passing `categoryId` as a query parameter, you can filter for products by category.

Query:

```graphql
query {
  products(categoryId: 1) {
    title
    price
    category {
      id
      name
    }
  }
}
```

## Join filters

You can filter products using all query parameters and merge them all.

Example: All products with a price between `900` and `1000`, with the title `"Generic"` and category id `1`.

Query:

```graphql
query {
  products(title: "Generic", categoryId: 1, price_min: 100, price_max: 1000) {
    title
    price
    category {
      id
      name
    }
  }
}
```

Example: All products with a price between `900` and `1000`, and category id `1`, with a limit of `10` products and an offset of `10`.

```graphql
query {
  products(categoryId: 1, price_min: 900, price_max: 1000) {
    title
    price
    category {
      id
      name
    }
  }
}
```

Example: All products with a price between `100` and `1000`, and with a limit of `10` products and an offset of `10`.

```graphql
query {
  products(offset: 10, limit:10, price_min: 900, price_max: 1000) {
    title
    price
    category {
      id
      name
    }
  }
}
```

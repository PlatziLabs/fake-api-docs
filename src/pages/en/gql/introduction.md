---
title: Introduction
description: Docs intro
layout: ../../../layouts/MainLayout.astro
---

Platzi Fake Store API can be used with any type of project that needs products, users, categories, authentication, and users in JSON format. You can use this API for prototyping e-commerce and learning about how to connect to an API with the best practices.

This API includes features like:

- ✅ **Pagination**
- ✅ **Auth with JWT**
- ✅ **Upload Files**
- ✅ **Filter products by category**
- ✅ **Create users and check to see if they already exist**
- ✅ **All CRUD Operations**
- ✅ **Postman and Insomnia Files**
- ✅ **And much more**

## GraqhQL

We have a GraphQL endpoint that you can use to query the data you need. You can use the [GraphQL Playground](https://api.escuelajs.co/graphql) to test your queries.

Example:

```sh
[POST] https://api.escuelajs.co/graphql
# Body
{
  "query": "query { products { id title price } }"
}
```

---
title: Files
description: Endpoints for Categories
layout: ../../layouts/MainLayout.astro
---

## Upload File

You can upload file by using the `/files/upload` endpoint but in header the `Content-Type` should be `multipart/form-data`.

```
[POST] https://api.escuelajs.co/api/v1/files/upload
```

```json
{
  "file": "<Binary File>"
}
```

The response is like this:

```json
{
  "originalname": "Djhv7NO - Imgur.png",
  "filename": "f3a5.png",
  "location": "https://api.escuelajs.co/api/v1/files/f3a5.png"
}
```

## Get a file

You can get a single file by adding the `fileName` as a parameter: `/files/{fileName}`

```bash
[GET] https://api.escuelajs.co/api/v1/files/f3a5.png
```

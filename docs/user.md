# User Api Spec

## Register User Api

Endpoint : Post /api/users

Request Body :

```json
{
  "username": "zuha",
  "password": "rahasia123",
  "name": "Aziz Alfa"
}
```

Response Body:

```json
{
  "data": {
    "username": "zuha",
    "name": "Aziz Alfa"
  }
}
```

Response Body Error

```json
{
  "error": "Username already registered"
}
```

## Login User Api

Endpoint : Post /api/users/login

Request Body :

```json
{
  "username": "zuha",
  "password": "rahasia123"
}
```

Response Body :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Error

```json
{
  "error": "Username and Password wrong"
}
```

## Update User Api

Endpoint PATCH /api/users/current

Header :

- Authorization : token

Response Body :

```json
{
  "name": "Aziz Alfa Zuha", //optional
  "password": "new password" //optional
}
```

Response Body :

```json
{
  "data": {
    "username": "zuha",
    "name": "Aziz Alfa Zuha"
  }
}
```

Response Body Error

```json
{
  "error": "Name length max 100"
}
```

## Get User Api

Enpoint : Get /api/users/current

Header :

- Authorization : token

```json
{
  "data": {
    "username": "zuha",
    "name": "Aziz Alfa Zuha"
  }
}
```

Response Body Error

```json
{
  "error": "Unauthorized"
}
```

## Logout User Api

Endpoint : DELETE /api/users/logout

Header :

- Authorization : token

Response body :

```json
{
  "data": "ok"
}
```


Response Body Error

```json
{
  "error": "Unauthorized"
}
```
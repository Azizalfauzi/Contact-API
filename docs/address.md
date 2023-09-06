# Address Api Spec

## Create Address Api

Endpoint : POST api/contacts/:contactId/address

Headers:

- Authorization : Token

Request Body :

```json
{
  "street": "Jl.Papandayan",
  "city": "Bali",
  "province": "Bali",
  "country": "Indonesia",
  "postal_code": "1234"
}
```

Response Body Success :

```json
{
  "data": {
    "id": "1",
    "street": "Jl.Papandayan",
    "city": "Bali",
    "province": "Bali",
    "country": "Indonesia",
    "postal_code": "1234"
  }
}
```

Response Body Error :

```json
{
  "errors": "Country is required"
}
```

## Update Address Api

Endpoint : PUT api/contacts/:contactId/address/:addressId

Headers:

- Authorization : Token

Request Body :

```json
{
  "street": "Jl.Papandayan",
  "city": "Bali",
  "province": "Bali",
  "country": "Indonesia",
  "postal_code": "1234"
}
```

Response Body Success :

```json
{
  "data": {
    "id": "1",
    "street": "Jl.Papandayan",
    "city": "Bali",
    "province": "Bali",
    "country": "Indonesia",
    "postal_code": "1234"
  }
}
```

Response Body Error :

```json
{
  "errors": "Country is required"
}
```

## Get Address Api

Endpoint : Get api/contacts/:contactId/address/:addressId

Headers:

- Authorization : Token

Response Body Success :

```json
{
  "data": {
    "id": "1",
    "street": "Jl.Papandayan",
    "city": "Bali",
    "province": "Bali",
    "country": "Indonesia",
    "postal_code": "1234"
  }
}
```

Response Body Error :

```json
{
  "errors": "Contact is not found"
}
```

## List Address Api

Endpoint : Get api/contacts/:contactId/address

Headers:

- Authorization : Token

Response Body Success :

```json
{
  "data": [
    {
      "id": "1",
      "street": "Jl.Papandayan",
      "city": "Bali",
      "province": "Bali",
      "country": "Indonesia",
      "postal_code": "1234"
    },
    {
      "id": "2",
      "street": "Jl.Baka",
      "city": "Bali",
      "province": "Bali",
      "country": "Indonesia",
      "postal_code": "3221"
    }
  ]
}
```

Response Body Error :

```json
{
  "errors": "Contact is not found"
}
```

## Remove Address Api

Endpoint : Delete api/contacts/:contactId/address/:addressId

Headers:

- Authorization : Token

Response Body Success :

```json
{
  "data": "Ok"
}
```

Response Body Error :

```json
{
  "errors": "Address is not found"
}
```

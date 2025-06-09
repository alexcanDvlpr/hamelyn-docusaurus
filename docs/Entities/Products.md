---
sidebar_position: 2
---

# Product

Como puedes deducir la colección de **Products** es la colección que representa los datos de los productos que tenemos en el sistema, de cara a poder tener stock de esos productos o a tener data.

Esta colección va de la mano con los proyectos de Data, ya que para generar las fichas de producto que nos solicitan los clientes pasa por un proceso de consulta a unos **Data Providers** y posteriormente un proceso de generación de ficha usando IA.

## Data Providers 💿

Los data providers son algunos sistemas externos a los que pedimos todos los datos disponibles de un determinado **ean**.

### Providers

Tenemos distintos providers, como pueden ser `Amazon España`, `Amazon COM` (USA), `eBay` u `Open Library` entre otros. Y se almacena el resultado de los productos en la colección `productDataRaw` y los datos de las ofertas en `productOfferRaw`.

### Creación de la ficha

Todos esos datos pasan a un prompt de Inteligencia Artificial con GEMINI para crear las fichas de producto.

## Flujo de Pricing 💸

Se va a dedicar una sección entera a **Pricing** [aquí](/BusinessFlows/pricing) pero por explicarlo. El flujo de pricing es nuestra calculadora de precio y lo que nos hace ser competitivos y proporcionar un precio instantaneo a los clientes. Entra un ean y se guarda en la ficha de producto como `sellPrice` y `buyPrice`.


## Ejemplo de producto
Aquí te dejo un ejemplo de ficha de producto:

```json
{
    "_id": "978123123123",
    "title": "Harry Potter y la piedra filosofal"
}
```
---
sidebar_position: 1
---

# Flujo de Marketplaces

Una vez se ha superado la **Revisión** y la **Validación** de los lotes y productos de los usuarios, se crean los productos en la colección de Stocks.

Estos stocks son la representación lógica de un producto que existe en el almacén y esta disponible para su venta.

## ¿Cómo se suben los productos a los Marketplaces?

Tenemos distintos cron-jobs en el sistema que se encargan de esto. Uno de ellos es el **selected candidate**, que es un cron que aplica la lógica de negocio, para determinar qué stocks deben de ser subidos a los marketplaces, para evitar tener subidos varios stocks que sean el mismo producto.

Luego tenemos una clase llamada **Marketplace** que es una abstracción del funcionamiento de todos los canales de venta que tenemos, son funciones que solo se encargan de:

- Crear productos
- Retirar productos
- Actualizar productos
- Obtener los pedidos
- Cancelar los pedidos
- Marcar los pedidos como enviados
- Error recovery

Hay algunos canales de venta que funcionan por ficheros FTP o que tienen otro tipo de comportamiento, que no pueden entrar en esta abstracción, y están implementados de otra manera, aunque muy similar.

Uno de ellos por ejemplo, es nuestro Ecommerce, está desarrollado por nosotros 100% y no está implementado como `Marketplace`, sino que tiene su sistema aparte.
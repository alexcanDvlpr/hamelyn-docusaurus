---
sidebar_position: 1
---

# Flujo de Supply

De lo que se alimenta Hamelyn es de los lotes de productos que nos venden los clientes. La propuesta de valor de Hamelyn es que te damos un valor por tus productos de segunda mano, entre ellos:

- Libros
- Películas
- Música (CDs o Vinilos)
- Videojuegos

Y una vez cierras el lote y lo envías, Hamelyn lo recibe, revisa y abona el dinero prometido al cliente en unas 24/48 horas. El valor que se le abona al cliente depende de los productos que se han aceptado en el proceso de **Revisión**, en otras palabras, los que pasan el flujo de calidad.

## Flujo de Cliente

El cliente completa su carrito en la web de [http://hamelyn.com](Hamelyn), con un precio calculado por el sistema, y durante el proceso de checkout, el sistema crea una `Order` en estado `CHECKOUT` para ir rellenando los valores de dicha order, dirección, productos, cuando quiere el usuario que sea recogido, usuario etc.

Al finalizar el checkout, la order pasa a estar en estado `IN_PICKING`, en este momento, desde almacén, se solicita a la mensajera que vayan a por los lotes que tocan diariamente.

## Flujo de Almacén

Una vez almacén ha solicitado la recogida de los lotes, estos llegan al almacén. Y el equipo de operarios los recepciona y se agrupan por el cliente. Y pasan un proceso de revisión.

### Proceso de revisión

Este proceso consiste en ir lote por lote, y producto por producto, revisando el estado de los lotes que se nos han enviado, con el objetivo de determinar qué productos entran al sistema y por tanto pasan a estar a la venta, o cuales quedan denegados porque no se encuentran en la calidad deseada.

Hay 5 estados `COMO NUEVO`, el mejor estado de todos; `MUY BUENO`, `BUENO`, `ACEPTABLE` y `SIN ESTADO`, este último es para los productos que no han sido aceptados en el sistema y un estado inicial para los productos.

### Finalización del proceso de revisión

Al finalizar este proceso, el encargado de almacén o de las revisiones, se encarga de `Validar` estos lotes, eso significa que mientras se validan, es cuando se genera la entidad `Stock` para cada producto, pasan a ser parte de la base de datos de productos fisicos disponibles para vender en el almacén.

Estos stocks una vez son creados ya entran en los flujos de creación de "Stocks" en los Marketplaces como pueden ser `Amazon COM`, `Amazon ES` o `Casa del Libro`
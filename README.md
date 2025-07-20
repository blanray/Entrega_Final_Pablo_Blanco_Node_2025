# Plantilla de servidor con capas Express

Este proyecto es una plantilla básica para configurar un servidor con **Express** y **Nodemon**, ideal para iniciar rápidamente nuevos desarrollos en Node.js.

## Características

- **Express** para gestionar rutas y middleware.
- **Nodemon** para recargar automáticamente el servidor durante el desarrollo.
- Configuración minimalista lista para usar.

---

## Credito al template de Daniel Riverol de donde me base para armar el servidor


## Estructura del proyecto
``` plaintext
carpeta-destino/
├── config/                 # Configuraciones generales (DB, variables de entorno, etc.)
│   └── db.js               # Configuración de la base de datos
│
├── controllers/           # Controladores: lógica que responde a las rutas
│   └── user.controller.js
│
├── services/              # Servicios: lógica de negocio reutilizable
│   └── user.service.js
│
├── routes/                # Definición de rutas y middlewares asociados
│   └── user.routes.js
│
├── models/                # Modelos de datos (si usás MongoDB, Sequelize, etc.)
│   └── user.model.js
│
├── middlewares/           # Middlewares personalizados
│   └── auth.middleware.js
│
├── index.js               # Punto de entrada del servidor
├── package.json           # Dependencias y scripts
├── README.md              # Documentación del proyecto

```
---

## Funcionalidad

En la URL /auth se genera el Token indicando mail "admin@admin.com" y password "password123" como body de la request.
Luego de autenticado, se accede a las siguientes rutas:

/ Raiz, solo devuelve codigo HTML
/api/products

GET: obtiene todos los productos de la coleccion

POST: se envia en el cuerpo de la request el siguiente contenido: nombre, cantidad y precio

/api/products/id

GET: con el ID solicitado se obtiene el producto

DELETE: se borra de la coleccion el documento con el ID indicado


## Licencia

Este proyecto está licenciado bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

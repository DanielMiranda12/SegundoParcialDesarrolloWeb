# SegundoParcialDesarrollo
Este proyecto consiste en el desarrollo de una aplicación web modular utilizando Vue.js 3 y Bootstrap 5. Su objetivo principal es implementar un sistema básico con autenticación simulada, navegación estructurada y una vista de Dashboard que incluye un componente Sidebar reutilizable.

El negocio elegido fue una tienda de computadores.

Estructura del proyecto

La estructura del proyecto fue organizada siguiendo buenas prácticas de modularización:

src/
│
├── assets/
│   └── usuarios.json
│
├── components/
│   ├── FooterComponent.vue
│   ├── NavbarComponent.vue
│   ├── ProductCardComponent.vue
│   └── SidebarComponent.vue
│
├── router/
│   └── index.js
│
├── services/
│   (reservado para peticiones futuras a API externas)
│
├── views/
│   ├── LoginView.vue
│   ├── DashboardView.vue
│   └── ProductView.vue
│
├── App.vue
└── main.js

Funcionamiento del Login

La aplicación incluye una vista de autenticación creada en LoginView.vue. Esta vista contiene:

Dos campos controlados con v-model (usuario y contraseña).

Validación de credenciales almacenadas localmente.

Redirección al dashboard utilizando Vue Router.

Un mensaje de error en caso de credenciales incorrectas.

Las credenciales se manejan con un arreglo local de usuarios dentro del componente, cumpliendo con el requerimiento educativo del parcial.

Gestión del estado de sesión

Cuando el usuario inicia sesión correctamente:

Se almacena un indicador en localStorage (logueado = true).

Se bloquea el acceso al Dashboard para usuarios no autenticados.

Se realiza una redirección programática con this.$router.push('/dashboard').

Navegación y Ruteo (Vue Router)

En router/index.js se configuraron las rutas principales:

/login
/dashboard


Además, se definió un redireccionamiento automático desde / hacia /login.

El archivo App.vue actúa como punto de montaje principal e incluye:

<router-view />


lo que permite que cada vista definida en el router se renderice dinámicamente.

Dashboard y Componentes Reutilizables
DashboardView.vue

La vista Dashboard funciona como la pantalla principal tras el login.
Incluye:

El componente SidebarComponent.vue.

Un área de contenido para las vistas hijas del dashboard.

Estilo responsivo gracias a Bootstrap.

SidebarComponent.vue

Es un sidebar de navegación creado originalmente con estilos personalizados, HTML estructurado y clases de Bootstrap.
Fue integrado correctamente dentro de la vista Dashboard, convirtiéndolo en un componente reutilizable.

El sidebar contiene:

Enlaces para secciones como Dashboard, Productos, Acerca de, Contacto.

Un diseño de menú lateral fijo.

Soporte para expansión y contracción mediante clases CSS (sin uso de jQuery).

Estilos y diseño

El proyecto utiliza Bootstrap 5 para:

Formularios

Tablas

Cards

Botones

Layout responsivo

Además, algunos componentes contienen estilos locales con <style scoped>.

Tambien se le agrego un API creada especificamente para este trabajo en el cual tiene los datos de los productos los cuales estan el pagina principal utilizamos la herramienta web MOCKAPI para poder crear y personalizar la API necesaria 

Conclusión

El proyecto cumple con los puntos fundamentales solicitados:

Estructura modular clara.

Componentes reutilizables.

Login funcional.

Navegación con Vue Router.

Integración con Bootstrap.

Dashboard con sidebar responsivo integrado como componente.

Implemenetacion de API y conponentes JSON.

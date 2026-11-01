MARCOS — PWA MEJORADA
=====================

CONTENIDO
- index.html: selector de versiones.
- disenador_editorial_marcos_v20.html y v21.html: diseñadores con gestión de proyectos.
- manifest.webmanifest, sw.js e iconos: instalación PWA y caché offline.

NUEVAS FUNCIONES
1. Guardado automático del borrador en el navegador.
2. Guardado de proyectos con nombre en IndexedDB.
3. Mis proyectos: abrir, exportar o eliminar proyectos.
4. Exportar proyecto completo como archivo JSON.
5. Exportar configuración/campos como JSON.
6. Importar un proyecto o configuración JSON.
7. Service worker con caché de archivos locales y caché de bibliotecas externas tras su primera carga exitosa.

IMPORTANTE SOBRE LOS DATOS
- Los proyectos se guardan localmente en el navegador y dispositivo donde se crean.
- No hay sincronización en la nube ni transferencia automática entre dispositivos.
- Para respaldo o traslado, usa "Exportar proyecto" y guarda los archivos JSON en una carpeta segura.
- Si se borran los datos del navegador, los proyectos locales pueden perderse.
- IndexedDB es el almacenamiento principal; el borrador también usa localStorage como recuperación básica.

INSTALACIÓN EN GITHUB PAGES
1. Descomprime todo el ZIP.
2. Sube todos los archivos y carpetas a la raíz del repositorio, respetando los nombres.
3. En GitHub: Settings > Pages > Deploy from a branch > main > /(root).
4. Abre la dirección HTTPS publicada.
5. En Chrome o Edge: menú ⋮ > Instalar aplicación.

USO SIN CONEXIÓN
- Abre cada versión al menos una vez con internet para que el navegador pueda guardar la aplicación y sus recursos.
- El service worker almacena los archivos locales y las bibliotecas externas cuando se descargan correctamente.
- Algunas funciones que dependen de servicios externos, como dictado por voz, pueden no estar disponibles sin conexión.
- La importación/exportación JSON y el guardado local funcionan sin conexión una vez cargada la aplicación.
- No borres los datos del sitio si deseas conservar proyectos guardados.

RECOMENDACIÓN
Exporta periódicamente tus proyectos JSON. Esta versión no implementa cuentas de usuario ni respaldo remoto.

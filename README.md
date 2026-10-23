# Impuestos Puce — sitio web

Landing page estática para un estudio contable e impositivo. Está hecha con HTML, CSS y JavaScript sin dependencias de compilación, por lo que se puede publicar directamente en Vercel.

## Archivos

- `index.html`: contenido y estructura de la página.
- `styles.css`: diseño adaptable a escritorio y dispositivos móviles.
- `script.js`: validación y preparación del correo desde el formulario.

## Formulario de contacto

El formulario pide nombre, tipo de consulta y mensaje. Para recibir respuesta, la persona puede completar su correo electrónico, su teléfono o ambos. Al presionar **Enviar consulta**, el navegador abre la aplicación de correo predeterminada con destinatario `solucionesagiles.ei@gmail.com`, asunto y datos del formulario ya cargados. La persona debe revisar y enviar el correo desde esa aplicación; el sitio no envía mensajes a un servidor.

## Publicación

En Vercel, importar el repositorio y dejar el framework en **Other** (o detección automática), sin comando de build y con `index.html` en la raíz como directorio de salida.

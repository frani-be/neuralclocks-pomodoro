# Pomodoro Timer

- [Pomodoro Timer](#pomodoro-timer)
  - [Descripción](#descripción)
  - [Funcionalidades](#funcionalidades)
    - [Personalización avanzada](#personalización-avanzada)
    - [Interfaz de usuario y experiencia](#interfaz-de-usuario-y-experiencia)
    - [Control y Seguimiento](#control-y-seguimiento)
  - [Tecnologías](#tecnologías)
  - [Instalación y ejecución](#instalación-y-ejecución)
    - [Requisitos previos](#requisitos-previos)
    - [Pasos de instalación](#pasos-de-instalación)
  - [Enlace en producción](#enlace-en-producción)
  - [Opciones de mejora](#opciones-de-mejora)

## Descripción

Pomodoro Timer es una aplicación web diseñada para mejorar la productividad y gestión del tiempo utilizando la técnica Pomodoro. Esta herramienta es ideal para aquellos que buscan una forma eficiente de dividir su tiempo entre periodos de trabajo intenso y descansos cortos, favoreciendo la concentración y la prevención del agotamiento.

## Funcionalidades

### Personalización avanzada

- **Tiempo de ciclos**: Define la duración de los ciclos de trabajo y descanso. Configura desde 1 hasta 60 minutos para cada uno.
    - **Restricciones de descansos**: La duración de un descanso corto no puede ser más larga que la de un descanso largo.
- **Cantidad de ciclos**: Elige cuántos ciclos de trabajo y descanso corto realizarás antes de un descanso largo, con un límite de 1 a 10 ciclos.
- **Autoplay**: Activa el modo de reproducción automática para pasar al siguiente ciclo sin interacciones, o configúralo para manual si prefieres un mayor control.

<div style="background-color: #fff3cd; border-left: 6px solid #ffeeba; padding: 0.5rem; margin-bottom: 1rem;">
  <strong>⚠️ Advertencia: Bloqueo de Configuraciones</strong>
  <p>Una vez iniciado el temporizador, las configuraciones se bloquean hasta que se presione 'restart' o se finalicen todos los ciclos.</p>
</div>

### Interfaz de usuario y experiencia

- **Barra de progreso circular**: Visualiza el tiempo restante de cada ciclo con una interfaz intuitiva y atractiva.
- **Sonido de notificación**: Al finalizar cada ciclo, se reproduce un sutil sonido de clic, proporcionando una señal auditiva del cambio de estado.
- **Fondos diferenciados**: Cada tipo de ciclo (trabajo, descanso corto, descanso largo) cuenta con un fondo único, facilitando la identificación del estado actual.

### Control y Seguimiento

- **Controles de play, pause y restart**: Gestiona el progreso del temporizador según tus necesidades.
- **Indicador de ciclo actual**: Mantente informado sobre el progreso de tus ciclos con un indicador que muestra el ciclo actual respecto al total (ejemplo: 1/4).

## Tecnologías

- **Vite & ReactJS**: Utilizado para una experiencia de usuario fluida y un desarrollo eficiente.
- **Bootstrap & Sass**: Para un diseño responsivo y personalizable.
- **Cypress para Testing:** Para desarrollar pruebas automatizadas con Cypress y así garantizar la calidad y la estabilidad de la aplicación.

## Instalación y ejecución

### Requisitos previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) y npm (incluido con Node.js) en tu computadora.

### Pasos de instalación

1. Clonar el Repositorio:

````bash
git clone https://github.com/frani-be/neuralclocks-pomodoro.git
````

2. Instalar Dependencias:

````bash
cd neuralclocks-pomodoro
npm install
````

3. Iniciar el Servidor de Desarrollo:

````bash
npm run dev
````

4. Acceder a la Aplicación:

Abre tu navegador y visita `http://localhost:[port]/neuralclocks-pomodoro/`.

## Enlace en producción

Para experimentar la aplicación, visita [Pomodoro Timer](https://frani-be.github.io/neuralclocks-pomodoro/) en producción.


## Opciones de mejora

- **Mejoras en los Range Inputs:** Agregar etiquetas con valores mínimos y máximos, y permitir la entrada de valores mediante teclado.
- **Sonidos Diferenciados por Tipo de Ciclo:** Implementar sonidos distintos para el final de cada tipo de ciclo.
- **Añadir soporte multilingüe (en proceso).**
- **Optimización de Bootstrap/Tailwind:** Evaluar y posiblemente migrar a Tailwind CSS para un rendimiento más eficiente y una personalización más flexible.

---

Desarrollado con ❤ por [frani.be](https://frani.be/)
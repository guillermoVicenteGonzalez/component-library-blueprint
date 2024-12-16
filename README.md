# component-library-test

Template para la creación de librerías de componentes utilizando vite

- [uso](#uso-e-instalación) - métodos de instalación de la librería.
- [Desarrollo](#desarrollo) - Metodología de desarrollo y compilación de la librería.
- [Troubleshooting](#troubleshooting) - Errores comunes y como solucionarlos

## Uso e instalación

El modo de empleo mas sencillo consistiria en ejecutar `npm publish` y subir la librería de manera pública a <mark>npm</mark>. De esta forma se puede instalar con un simple `npm install librería` y cada sucesivo `npm install` descargará la versión mas reciente de la librería (en caso de haberla)

El no tener subida la librería a npm dificulta su instalación en otros proyectos, ya que se ha de tener permisos sobre el repositorio o tener la librería descargada localmente. No obstante no es imposible. Existen varias maneras alternativas de hacerlo.

### Github con cli auth

Si tenemos github cli configurado

`npm install https://github.com/guillermoVicenteGonzalez/component-library-test`

### Github sin estar autenticado con el cli

Según las circunstancias existen 3 métodos.

- `git+https://github.com/visionmedia/express.git`
- Si se require clave ssh: `git+ssh://git@github.com/visionmedia/express.git`
- Si es un repositorio GH Enterprise: `git+https://<github enterprise url>/<org>/<repo>.git#<branch>`

### Descargar la librería compilada

La ultima opcion sería descargar la librería desde el repositorio y almacenarla en el propio proyecto.

Idealmente, solo se descargaría lo estrictamente necesario, es decir, la librería compilada (/dist) y los ficheros necesarios para que npm funcione (package.json etc).

En el mejor de los escenarios existiría un flujo de subidas automatizado, tal que un push a main supusiera la compilación de la librería y su compresion, incluyendo solo los ficheros necesarios. El resultado sería un fichero .tar facilmente localizable en el repositorio. Solo con descargarlo, incluirlo en un directorio del proyecto en el que se quiere utilizar y hacer `npm install librería.tar` tendríamos nuestra librería lista.

## Desarrollo

### Compilación de la librería.

Es necesario compilar la librería cada vez que se tenga una version estable. Ya que es la unica manera de hacer efectivos los cambios de modo que al hacer `npm install librería` instalemos la versión mas reciente. Esto también implica subir el numero de versión en el package.json

Para compilar (transpilar) la librería se utiliza el comando `npm run build`, que generará la librería en el directorio `/dist`

<mark>IMPORTANTE:</mark> Para que un componente sea accesible desde la librería, hay que exportarlo desde el fichero `/lib/main.ts`

### Creación de componentes

Para utilizar un estilo de código consistente y promover el uso de buenas prácticas se han definido 2 esquemas de componentes.
Estos esquemas pueden ser utilizados por la extension de VSCode `teamchilla blueprints`, que generará componentes listos para ser utilizados.

Para utilizar esta funcionalidad es necesario haber instalado la extensión previamente. Una vez hecho esto al hacer click derecho sobre una carpeta aparecerá la opción <mark>New file from template</mark>

Los esquemas o blueprints son los siguientes:

- `component` - Genera un componente complejo con la estructura que el creador de la librería considera mejor. Su justificación se encuentra en la sección [estilo de componentes](#estructura-de-componentes-propuesta)

- `flatComponent` - Genera un componente básico y exporta tanto el componente como sus tipos. Está pensado para gente experimentada o que no quiere seguir la estructura predefinida

### Arquitectura y estructura

#### Css modules

Los componentes utilizarán css modules para evitar la colision de clases de css. Las buenas prácticas en cuanto a css y gestion de variantes de componentes se especifican en: [estilo de componentes](#estructura-de-componentes-propuesta)

#### Eslint

Se ha preparado eslint para ser muy estricto y de esta manera asegurar un estilo de código consistente, limpio y que sigue buenas prácticas.

No obstante, ya que es posible que haya que migrar componentes ya existentes que llegan de otas fuentes y que no complen lo propuesto, se ha comentaod aquellas reglas más estrictas, dejando unicamente las recomendadas por eslint y los plugins usados.

#### Husky

También se ha configurado husky para que antes de hacer un commit ejecute eslint y prettier para asegurar que el nuevo código se ajusta al estilo especificado para la librería. Si no es el caso, el commit fallará.

Del mismo modo Husky comprobará el formato del mensaje del commit, que se ha de ajustar a lo propuesto por conventional commits para poder continuar. Esto

#### Storybook

Se ha preparado storybook para hacer mas sencillo el desarrollo de los componentes. Se lanza mediante `npm run story`

Del mismo modo, si se decide utilizar las blueprints preparadas para el proyecto, al crear un nuevo componente se generará automaticamente su historia relacionada, por lo que nada mas ser creado podremos verlo en storybook.

#### Vite

Vite es el elemento clave del repositorio, ya que es quien se encarga de la compilación de la librería. Su fichero de configuración es vite.config.ts y sus aspectos más importantes son:

- exclusion de ficheros stories para no compilar nada relacionado con storybook
- `plugin libInjectCss` - inyecta el fichero css correspondiente a cada componente en la versión compilada del componente
- `/lib` configurado como punto de entrada para la compilación de la librería.

#### SCSS

Aunque es completamente opcional, se ha incluido la posibilidad de utilizar el preprocesador scss. Se ha escogido ya que al contrario que tailwind o bootsrap no es una dependencia fuerte, ya que no añade css codigo como tal, y compilarlo genera codigo css plano.

Adicionalmente considero que css es un apartado que frecuentemente se deja de lado y depender de tailwind (aunque al final sea lo mismo) puede ocasionar que juniors que participen en un proyecto no aprendan css correctamente.

### Estructura de componentes propuesta

En este apartado se explica la estructura de componente propuesta. No es obligatorio seguirla ni mucho menos, pero creo que es un buen punto de entrada y puede ayudar a aquellas personas con menos experiencia. Para seguir esta estructura se puede generar un componente mediante el blueprint "component" utilizando la opcion de "teamchilla blueprints" <mark>new file from blueprint</mark>

Se utilizará un componente "Button" ficticio para explicar la estructura que se recomienda que sigan los componentes. No es necesario seguir al pie de la letra estas directrices pero si se recomienda que los componentes sean implementados siguiendo una filosofía similar.

Un componente de una librería ha de ser lo más agnostico posible y ha de proveer cuantas mas opciones de personalización sea posible <mark>sin saturar el componente</mark> y siguiendo siempre un modelo de caja negra

Teniendo esto en cuenta. Un componente por defecto contará con una prop `variant` para definir una serie de variaciones de estilo, una prop `className` para poder personalizar el componente desde fuera y extenderá de `PropsWithChildren` para poder incrustar hijos al componente

```tsx
import React, { PropsWithChildren } from "react";
import styles from "./button.module.scss";

const buttonVariants = {
	default: styles["default"],
	outlined: styles["outlined"],
};

export interface ButtonProps extends PropsWithChildren {
	variant?: keyof typeof buttonVariants;
	className?: string | undefined | CSSModuleClasses;
	textColor?: string;
	bgColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
	variant = "outlined",
	className = "",
	bgColor,
	textColor,
	children,
}) => {
	const colorVariables = {
		"--button-bg-color": bgColor,
		"--button-text-color": textColor,
	} as React.CSSProperties;

	return (
		<button
			style={{ ...colorVariables }}
			data-testid='button'
			className={`${styles.button} ${buttonVariants[variant]} ${className}`}
		>
			{children}
		</button>
	);
};
```

#### Css

El fichero de estilos correspondiente es el siguiente. Del mismo modo, la estructura del mismo es generada por el blueprint "component"

```scss
:where(.button) {
	--button-width: 100px;
	--button-height: 50px;
	--button-bg-color: red;
	--button-text-color: white;

	width: var(--button-width);
	height: var(--button-height);
	background-color: var(--button-bg-color);
	color: var(--button-text-color);

	border-radius: 1rem;
	cursor: pointer;

	transition: all 0.2s;

	&:hover {
		transform: scale(1.01);
	}
}

//variants
:where(.button.default) {
	--button-bg-color: yellow;
}

:where(.button.outlined) {
	background-color: transparent;
	border: solid 1px var(--button-bg-color);
	color: var(--button-bg-color);
}
```

Se incentiva de gran manera el uso de where para proporcionar unos estilos por defecto para el componente pero que tengan una especificidad 0. De esta manera, es facil añadir css en situaciones mas especificas que sobreescriba el comportamiento por defecto del componente.

En cuanto a la gestion de variantes, al usar css modules podemos simplemente crear clases que se llamen como la variante, como por ejemplo `.outlined` ya que no colisionará con ninguna otra clase con ese nombre <mark>Que se encuentre en otro modulo</mark>

También se recomienda el uso de variables tal y como se hace en el ejemplo. Si se mira de manera aislada esto puede parecer redundante, pero permite que creemos variantes como `bg-color` por ejemplo, que se valen de sobreescribir las variables css para obtener el resultado deseado. De esta forma podríamos definir en el css los estilos especificados en el sistema de diseño, pero valernos de este tipo de props para (en casos extraordinarios) cambiar ese diseño <mark>Sin necesidad de crear clases nuevas</mark>

#### Gestión de variantes

La implementación de variantes depende mucho de la arquitectura de los estilos. Lo que se plantea en este caso es usar un objeto cuyas claves sean los nombres de las variantes, y sus valores sean las clases que se corresponden con esa variante <mark>Pasadas por [css modules](#css-modules)</mark> Para asi evitar que distintas clases colisionen.

## Troubleshooting

## To do

- [x] Blueprints
- [x] Flat
- [x] Default component
- [ ] BEM component
- [x] Eslint (revisar css modules)
- [ ] Husky + conventional
- [ ] tsconfig
- [ ] Acabar Readme

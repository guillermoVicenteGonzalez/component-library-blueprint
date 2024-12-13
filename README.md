# component-library-test

a component library test to see if it can be installed from a repository

- [uso](#uso)
- [Arquitectura](#arquitectura)
- [Troubleshooting](#troubleshooting)

## Uso

Si tenemos github cli configurado
`npm install https://github.com/guillermoVicenteGonzalez/component-library-test`

## Creación de componentes

Para utilizar un estilo de codigo consistente y promover el uso de buenas prácticas se han definido 2 esquemas de componentes.
Estos esquemas pueden ser utilizados por la extension de VSCode `teamchilla blueprints`, que generará componentes listos para ser utilizados.

Para utilizar esta funcionalidad es necesario haber instalado la extensión previamente. Una vez hecho esto al hacer click derecho sobre una carpeta aparecerá la opción <mark>New file from template</mark>

Los esquemas o blueprints son los siguientes:

- `component` - Genera un componente complejo con la estructura que el creador de la libreria considera mejor. Su justificación se encuentra en la sección [estilo de componentes](#estructura-de-componentes)

- `flatComponent` - Genera un componente básico y exporta tanto el componente como sus tipos. Está pensado para gente experimentada o que no quiere seguir la estructura predefinida

## Arquitectura

### Css modules

## Ecosistema y flujo de desarrollo.

## Compilación

Para que se puedan usar los cambios, es necesario compilar la libreria y subirla al repositorio.

Hay que exportar todos los componentes al fichero /lib/main.ts para que la libreria los exponga al ser compilada.

Compilar usando
`npm run build`
Este paso genera la libreria de componentes compilada en el directorio `dist`

## Estructura de componentes

Se utilizará un componente "Button" ficticio para explicar la estructura que se recomienda que sigan los componentes. No es necesario seguir al pie de la letra estas directrices pero si se recomienda que los componentes sean implementados siguiendo una filosofía similar.

Un componente de una libreria ha de ser lo más agnostico posible y ha de proveer cuantas mas opciones de personalización sea posible <mark>sin saturar el componente</mark> y siguiendo siempre un modelo de caja negra

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

### Gestión de variantes

La implementación de variantes depende mucho de la arquitectura de los estilos. Lo que se plantea en este caso es usar un objeto cuyas claves sean los nombres de las variantes, y sus valores sean las clases que se corresponden con esa variante <mark>Pasadas por [css modules](#css-modules)</mark>

## Troubleshooting

## To do

- [ ] Blueprints
- [x] Flat
- [x] Default component
- [ ] BEM component
- [ ] Modulos
- [x] Eslint (revisar css modules)
- [ ] Husky + conventional
- [ ] tsconfig
- [ ] Acabar Readme

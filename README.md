# component-library-test

a component library test to see if it can be installed from a repository

## Uso

Si tenemos github cli configurado
`npm install https://github.com/guillermoVicenteGonzalez/component-library-test`

## Compilación

Para que se puedan usar los cambios, es necesario compilar la libreria y subirla al repositorio.

Hay que exportar todos los componentes al fichero /lib/main.ts para que la libreria los exponga al ser compilada.

Compilar usando
`npm run build`
Este paso genera la libreria de componentes compilada en el directorio `dist`

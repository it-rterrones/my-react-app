# My React App

Este proyecto es una aplicación React que permite gestionar usuarios. La aplicación incluye componentes para mostrar y actualizar información de usuarios, y está configurada para realizar pruebas unitarias utilizando Jest y React Testing Library.

## Requisitos

-   Node.js (versión 12 o superior)
-   npm (versión 6 o superior)

## Instalación

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:

    ```sh
    git clone <URL_DEL_REPOSITORIO>
    cd my-react-app
    ```

2. Instala las dependencias del proyecto:

    ```sh
    npm install
    ```

## Ejecución del Proyecto

Para ejecutar el proyecto en modo de desarrollo, utiliza el siguiente comando:

```sh
npm start
```

Esto abrirá la aplicación en tu navegador predeterminado en `http://localhost:3000`.

## Ejecución de Pruebas

Este proyecto está configurado para utilizar Jest y React Testing Library para pruebas unitarias. Para ejecutar las pruebas, usa el siguiente comando:

```sh
npm test
```

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
my-react-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── UserForm.js
│   │   ├── UserForm.test.js
│   │   └── UserDisplay.js
│   │   └── UserDisplay.test.js
│   ├── api/
│   │   └── userApi.js
│   ├── App.js
│   ├── App.test.js
│   └── index.js
├── package.json
└── .babelrc
```

## Configuración de Pruebas

Las pruebas están configuradas para ejecutarse con Jest y utilizan React Testing Library para interactuar con los componentes React.

### Importante

-   Las pruebas se encuentran en los mismos directorios que los componentes y siguen la convención de nombre `*.test.js`.
-   Asegúrate de que `jest` esté configurado en tu `package.json` para manejar transformaciones de Babel:

    ```json
    "jest": {
      "setupFilesAfterEnv": ["<rootDir>/src/setupTests.js"],
      "transform": {
        "^.+\\.jsx?$": "babel-jest"
      }
    }
    ```

### Archivos de Configuración

-   **.babelrc**:

    ```json
    {
        "presets": ["@babel/preset-env", "@babel/preset-react"]
    }
    ```

-   **package.json**:

    ```json
    {
        "name": "my-react-app",
        "version": "1.0.0",
        "private": true,
        "dependencies": {
            "axios": "^0.21.1",
            "react": "^17.0.2",
            "react-dom": "^17.0.2",
            "react-scripts": "4.0.3"
        },
        "devDependencies": {
            "@babel/preset-env": "^7.14.1",
            "@babel/preset-react": "^7.13.13",
            "@testing-library/jest-dom": "^5.11.10",
            "@testing-library/react": "^11.2.6",
            "babel-jest": "^26.6.3",
            "jest": "^26.6.3"
        },
        "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "jest",
            "eject": "react-scripts eject"
        },
        "jest": {
            "transform": {
                "^.+\\.jsx?$": "babel-jest"
            }
        },
        "browserslist": {
            "production": [">0.2%", "not dead", "not op_mini all"],
            "development": [
                "last 1 chrome version",
                "last 1 firefox version",
                "last 1 safari version"
            ]
        }
    }
    ```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor realiza un fork del repositorio, crea una rama con tu característica o corrección, realiza los cambios necesarios y envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes ver más detalles en el archivo LICENSE.

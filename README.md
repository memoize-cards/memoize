# QCX Web Components (QCX WC)

QCX Web Components is a comprehensive package that contains all the web components of the Kratos project. These web components are designed to be reusable, self-contained, and easily integratable into various parts of the application. By providing a unified collection of components, QCX WC promotes code reusability, maintainability, and consistency across the entire project.

### Setup `.env` Configuration

Create a `.env` file at the root of the project and add the following environment variables with their respective values:

```env
ANALYZER_MODE=
HINTS=warning
MAX_ASSET_SIZE=2000000
MAX_ENTRYPOINT_SIZE=2000000
PORT=5001
PUBLIC_PATH=/
```

Here's a description of each variable:

- **ANALYZER_MODE**: This variable determines the mode for the code analyzer and accepts specific values. (Provide details about possible values if applicable)
- **HINTS**: This variable controls the level of hints generated during the build process and accepts specific values. (Provide details about possible values if applicable)
- **MAX_ASSET_SIZE**: This variable sets the maximum size of an asset and is measured in bytes. (Specify the unit of measurement if different)
- **MAX_ENTRYPOINT_SIZE**: This variable sets the maximum size of an entry point and is measured in bytes. (Specify the unit of measurement if different)
- **PORT**: This variable defines the port number on which the development server will run. (Specify any default value if applicable)
- **PUBLIC_PATH**: This variable determines the public path of the project and its default value. (Specify any default value if applicable)

Please ensure to provide appropriate values for each variable according to your project's requirements.

### Getting Started

To start the project and run a development server, execute the following command:

```bash
yarn start
```

This command will launch the development server, allowing you to experience the QCX Web Components in real-time.

### Building the Project

To build the QCX Web Components for production, use the following command:

```bash
yarn build
```

The build process will generate optimized and minified bundles ready for deployment to your production environment.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

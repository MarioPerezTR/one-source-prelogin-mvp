# ONE SOURCE Pre-login Experience - MVP

This is an Angular 19 project with integrated accessibility linting (Axe) and pre-commit hooks (Husky) for the ONE SOURCE pre-login experience MVP.

## Project Setup

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

### Features

- ✅ Angular 19.2.15
- ✅ SCSS styling
- ✅ Routing enabled
- ✅ Axe Linter for accessibility checking
- ✅ Husky pre-commit hooks
- ✅ Playwright for testing

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Accessibility Testing

### Available Commands

- `npm run axe-linter` - Run accessibility linter on entire src folder (generates reports in `.axe-reports/`)
- `npm run axe-check` - Run linter and validate results
- `npm run axe-file <filepath>` - Run linter on specific file

### Reports Structure

All accessibility reports are organized in the `.axe-reports/` directory:

- **Current reports**: Latest axe-linter-report.json
- **Historical reports**: Timestamped reports for tracking improvements
- **Documentation**: README.md explaining report structure and usage

### Pre-commit Hooks

The project includes automatic accessibility checking on commit. The pre-commit hook will:

- Scan only modified files for accessibility issues
- Block commits if critical accessibility problems are found
- Save detailed reports to `.axe-reports/` folder

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

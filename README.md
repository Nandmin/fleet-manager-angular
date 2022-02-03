# FleetManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## JSON server
Install JSON server package: npm i -g json-server
Start: json-server server\db.json --watch

Dataconnection will automatically refresh if you change any in the source JSON file (db.json).

## Google Chart
Install: npm i ng2-google-charts
configuration: https://npm.io/package/ng2-google-charts

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Deploy
1. Start JSON server: json-server . \server\db.json --watch
2. Start Angular: ng serve -o
3. Build: ng build --prod
        Result goes to 'dist' folder
4. Copy 'dist' folder to webserver f.e. c:\xampp\htdocs
        It's recommended to rename index.html to index.php
5. Edit index.php and change entry to <base href="/FleetManager/">



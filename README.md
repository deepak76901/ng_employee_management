## To create a new Application
```
ng new app_name
```
## To create a new component
```
ng generate component component_name
ng g c component_name
```
## To check angular-cli version
```
ng v
```
## To Add Bootstrap
If I used bootstrap in my Project, then i should add configuration in angular.json file in styles property
```
"./node_modules/bootstrap/dist/css/bootstrap.min.css"
```
## To fetch API's
I need angular's http module and in app.config.ts i have to configure provideHttpClient in providers Array

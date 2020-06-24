# ClassValidatorMonorepo

Repro for FilePathExist Pipe

## Front End Angular Server

Run `nx serve class-validator` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Back End Nest Server

Run `nx serve api` for a dev server. Navigate to http://localhost:3333/. The app will automatically reload if you change any of the source files.

Once the server has started send a request, `{data:{filePath: 'input'}}`.  The mock DatabaseService will return true when the value of 'filePath' is: filePath.length % 2 === 0;
You should receive an error.  Moreover, to enable to api, swap commented lines in apps/api/src/app/app.controller.ts (lines 20 and 21) and everything will work. FYI, I am
also working on another Nest Repro which is why I am using class-validator.

## Libs
api-interface - Only one interface 

nest-database - Global database module to create a singleton service.
  
## Apps
api - Root Nest app.

class-validator - Angular frontend.

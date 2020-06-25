# ClassValidatorMonorepo

This repro is twofold: 

1.) To demonstrate the odd terminal warning (e.g. "export <Name> was not found in <location>") when launching the Storybook server.

2.) How the aforementioned problem is exacerbated when trying to use packages: class-validator and class-transform. These two packages
are powerful tools to keep your code dry by allowing you to leverage decorators on class properties for validation.  This becomes 
even more powerful when combined with a mono repo where the front/backend share the same data models.  By using these packages in a mono repo, such as this, data models can now
easily provide validation on the backend while maintaining a single source of truth, end to end.  However, as you will see, the way certain types export cause
issues for this to work correctly in Storybook.

## Front End Angular Server

Launch the Angular app by running `nx serve class-validator` in a terminal.  The code rendering the content lives in `libs/shared-ui/src/lib/trans/trans.component.ts`.

## Back End Nest Server

Now launch the backend server with `nx serve api`. 

Navigate to `libs/shared-ui/src/lib/trans/trans.component.ts` and change `{data:{filePath: 'input'}}` to `{data:{filePath: 'bad'}}` and the app will refresh and give you the server 
exception object in the browser, as expected. Odd length `filePath` property values produce bad request exceptions while even length values pass and send the request right back.  

The data model used in the front/backend is TranscodeRequest located `libs/api-interfaces/src/lib/api-interfaces.ts`.  There you will see class-validator and class-transform doing their magic. 
Most of the validations are simple checks but sometimes async validation is needed to confirm values in a database such as this example.  FileExists validation is doing just that, I want to be 
sure a filepath exists before creating a job for it that will inevitably fail if it doesn't.

If you change the filePath property in the component, things should be working as expected.

## Storybook Server

Let's change that by commenting out lines 3 and 12 in `libs/api-interfaces/src/lib/api-interfaces.ts` and then fire up our storybook server, `npm run storybook`.

You should see the warnings in the terminal letting you know an export type wasn't found (even though it was).  No matter what value you plug into `filePath` the results won't change.
Let's fix that by going back and uncommenting lines 3 and 12.  You should see the compiler try to "tunnel" back into the backend code (which we imported into our shared class--FileExists as 
the entry point). However, if you go to our Angular server, it should be working as expected.  Obviously Storybook is not compiling correctly.  To fix it, we need to go to 
`libs/shared-ui/src/lib/trans/trans.component.ts` and add `type` to line 2 (e.g. `import type {`).  Now everything, including the warning we got earlier, are gone.

Note that iif you comment out lines 3 and 12 in `libs/api-interfaces/src/lib/api-interfaces.ts`  and then comment out lines 10 and 11 in `libs/shared-ui/src/lib/trans/text/text.ts` , 
restart Storybook's server, you won't have any errors or warnings (make sure you remove `type` as well before restarting the server). Pretty odd this line would cause the waring even 
though it's not mentioned in the warning.

Let me know if you have any questions!

## Libs
api-interface - class, types, interfaces live here.

nest-database - Global database module to create a singleton service.

nest-shared - Global database module to create a mock db service.
  
## Apps
api - Root Nest app.

class-validator - Angular frontend.

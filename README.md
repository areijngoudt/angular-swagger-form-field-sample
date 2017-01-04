# angular-swagger-form-field-sample
Angular (2 and above) sample project which shows how to use the [swagger-ts-generator](https://www.npmjs.com/package/swagger-ts-generator) and 
[angular-swagger-form-field](https://www.npmjs.com/package/angular-swagger-form-field) packages.

It implements functionality to use the generated classes for building form fields with validation. 
See [sample](https://areijngoudt.github.io/angular-swagger-form-field-sample/home) for a running sample of this repo.

# Samples

## Template driven
In the sample `src/app/components/template-driven` a traditional template driven form is implemented.
It's just for reference so you can see what it takes to implement a form in the view. 

Notice the verbosity and the repetetion of the validation stuff in the `template-driven.component.html` view.

## Model driven
In the sample `src/app/components/model-driven`a reactive form is implemented without generated classes. 
The form groups are implemented in the `model-driven.component.ts`.

Notice that the view `model-driven.component.html` is less verbose than that of the template driven form.

## Generated model driven
In the sample `src/app/components/generated-model-driven`a reactive form is implemented with form groups from the generated classes. 
The view is simular to that of the model driven component.

Notice that the component `generated-model-driven.component.ts` does not contain the form groups and validation rules. 
These are all generated using the [swagger-ts-generator](https://www.npmjs.com/package/swagger-ts-generator).

'use strict';

module.exports = config();

function config() {
    var root = './src/';
    var srcAppFolder = root + 'app/';
    var folders = {
        // root
        root: root,
        // sources
        srcWebapiFolder: srcAppFolder + 'models/webapi/',
        srcLanguagesFolder: root + 'assets/i18n/',
        // swagger
        swaggerFolder: root + 'swagger/',
    }
    var files = {
        swaggerJson: 'swagger.json',
    }

    var swagger = {
        url: 'http://petstore.swagger.io/v2/swagger.json',
        swaggerFile: folders.swaggerFolder + files.swaggerJson,
        swaggerFolder: folders.swaggerFolder,
        swaggerTSGeneratorOptions: {
            modelFolder: folders.srcWebapiFolder,
            enumTSFile: folders.srcWebapiFolder + 'enums.ts',
            enumLanguageFiles: [
                folders.srcLanguagesFolder + 'nl.json',
                folders.srcLanguagesFolder + 'en.json',
            ],
            modelModuleName: 'webapi.models',
            enumModuleName: 'webapi.enums',
            enumRef: './enums',
            namespacePrefixesToRemove: [
            ],
            typeNameSuffixesToRemove: [
            ]
        }
    }

    var config = {
        root: root,
        swagger: swagger,
    }
    return config;
}

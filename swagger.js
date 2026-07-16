const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "Contacts API",
        description: "API for managing contacts",
        version: "1.0.0"
    },
    host: "localhost:8080",
    schemes: ["http"]
};


const outputFile = "./swagger-output.json";

const endpointsFiles = ["./server.js"];


swaggerAutogen(outputFile, endpointsFiles, doc);
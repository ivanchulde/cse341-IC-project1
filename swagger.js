const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "Contacts API",
        description: "API for managing contacts",
        version: "1.0.0"
    },
    host: "cse341-ic-project1.onrender.com",
    schemes: ["https"]
};


const outputFile = "./swagger-output.json";

const endpointsFiles = ["./server.js"];


swaggerAutogen(outputFile, endpointsFiles, doc);
const express = require('express');
const { server } = require('./src/config/config');
const app =  express();
const categoryRoutes = require('./src/routes/category');
const personRoutes = require('./src/routes/person');
const notFoundRoutes = require('./src/routes/404');
const oracle = require('./src/utils/oracle');
//const errorMiddelware = require('./src/middlewares/errorMiddelware');

//middelware
app.use(express.json());

//routes
app.use(categoryRoutes);
app.use(personRoutes);
//error middelware
//app.use(errorMiddelware);

app.use(notFoundRoutes);

oracle.start().then(()=>{
    console.log('oracle database connected.');
    app.listen(server.port,()=>{
        console.log(`Server listening on port: ${server.port}`);
    })
}).catch((error)=>{
    console.log(error);
    process.exit(1);
})
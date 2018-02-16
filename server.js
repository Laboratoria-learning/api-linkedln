const express = require('express');
const app = express();
const server = app.listen(8080, listening);
function listening(){
    console.log('Encendido')
}
app.use(express.static('public'));
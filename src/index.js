const express = require('express');
const app = express();
const morgan=require('morgan');
const cors = require('cors');

app.use(cors({
    origin: '*'
}));


//Configuraciones
app.set('port', process.env.PORT || 1000);
app.set('json spaces', 1)
 
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
 
//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});

//Routes
app.use('/client',require('./controller/ClientController'));
app.use('/bill',require('./controller/BillController'));
app.use('/product',require('./controller/ProductController'));
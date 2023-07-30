import  express  from 'express'
import cors from 'cors'

const app = express();

const port = 3000;

app.use(express.json())

app.use(cors());

import { pool } from './service/database_service.js';
import { GET_TODOS_QUERIES,POST_TODO_QUERY } from './core/queries.js'

// crear rutas 



app.get('/todos/:id',(req,res) => {
    const id = req.params.id
    pool.query(GET_TODOS_QUERIES,(err,result)=>{
      res.json(result.rows)
    })
    //falta try catch y where
    
});

app.post('/todos',(req,res) =>{
    const body = req.body
    // res.json(body.name)
    pool.query(POST_TODO_QUERY,[body.name,body.description], (err,result)=>{
      res.json(result.rows)
    })
});

app.delete('/todos/:id',(req,res)=>{
    const id = req.params.id
    res.send('elimine un todo con id ' + id)
});



app.listen(port,()=>{
    pool.connect((err, client, done) => {
        if (err) {
          console.error('Error al conectar a la base de datos:', err);
        } else {
          console.log('Conexión a la base de datos exitosa!');
          done(); // Liberar el cliente cuando no se necesite más.
        }
      });
})


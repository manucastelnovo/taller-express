import pg from 'pg'

const Pool = pg.Pool


const config = {
    user:'postgres',
    host: 'localhost',
    database: 'todos',
    password: 'password',
    port:5432,
};

export const pool = new Pool(config);




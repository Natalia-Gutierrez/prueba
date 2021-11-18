//cliente knex
const databaseService = () => {

    const knex = require('knex')({
        client : 'mssql',
        connection:{
            server : process.env.DB_HOST,
            user: process.env.DB_USER,
            password : process.env.DB_PASS,
            database : process.env.DB,
        }
        
    });

    //Nombre de la tabla
    const table = 'departamento';

    const crearDpto = ({cd, nombre, costo_envio}) =>{ //Deconstruyendo json
        return knex(table).insert({
            cd: cd,
            nombre : nombre,
            costo_envio : costo_envio,
        });//retorna una promesa
    };

    const leer = () =>{
        return knex(table).select();
    };

    return {crearDpto, leer};
    

};
//Exportamos a toda la aplicacion
module.exports = {
    databaseService
};

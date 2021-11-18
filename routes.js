module.exports = function(app, databaseService){
    
    //ruta tipo get -> inicial(apenas ingrese a la página)
    app.get('/',(request, response) => {
        // Status 200 -> todo bien 🤠
        response.status(200).json({"mensaje":"Todo bien"});
    });

    //ruta tipo post -> agregar datos
    // 2 argumentos, ruta y función
    app.post('/ejemplo', (request, response) =>{
        const dato = request.body; //request.body -> la info que viene 
        console.log(dato);
        
        databaseService.crearDpto(dato)
            .then(()=>{
                response.json({"mensaje":"dato ingresado!"});
                console.log('dato ingresado!');
            }).catch(e =>{
                response.status(500).json(e);
                console.log(e);
            });
            
    });

    //ruta para leer -> get(navegador o postman)
    app.get('/ejemplo',(request, response) =>{
        databaseService.leer()
        .then(resultado =>{
            response.json(resultado);
        }).catch(e=> {
            response.status(500).json(e)
            console.log(e);
        });
    });
};
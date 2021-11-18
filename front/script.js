const formElement = document.getElementById('formulario');
formElement.addEventListener("submit", (event) =>{
    event.preventDefault();
    let cod_id = document.getElementById('cod_id').value;
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let transaction = {cd:cod_id, nombre:nombre, costo_envio:precio};
    let transactionJson = JSON.stringify(transaction);
    console.log(transactionJson);
    fetch('http://localhost:3000/ejemplo', {
        method: 'Post',
        body: transactionJson
    }).then(x => console.log('hola'))
    .catch(e=> {
        console.log(e);
    });
})

//Detecta si hay conexion o no y deshabilita el boton enviar agregando el atributo disabled al tag

const sinConexion = () =>{
    console.error('No hay conexión');
    enviar.setAttribute('disabled', 'true');
}

const conConexion = () =>{
    console.warn('Volvio la conexión');
    enviar.removeAttribute('disabled');
}

window.addEventListener('online', ()=>{
    conConexion();
});

window.addEventListener('offline', ()=>{
    sinConexion();
});
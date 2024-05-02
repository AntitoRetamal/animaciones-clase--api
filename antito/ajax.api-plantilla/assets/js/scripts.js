//funcion para obtener los datos del usuario
function obtenerDatosUsuario(username){
    const url  = `https://api.github.com/users/${username}`;

    
    //Una solicitud de GET con FETCH, solicitud de tipo ajax
    fetch(url)
    .then(response=> response.json())
    .then(data =>{
    console.log(data);

    //Actualizar el contenido de HTML con los datos de usuario
    document.getElementById('nombre').textContent = data.name;
    document.getElementById('bio').textContent = data.bio;
    document.getElementById('seguidores').textContent = data.followers;
    document.getElementById('repositorios').textContent = data.public_repos;
})

.catch(error=>{
    console.log('Error: ',error);
});
};
obtenerDatosUsuario('AntitoRetamal');

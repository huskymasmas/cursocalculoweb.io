var usuario = document.getElementById("usuario");
var contrasella = document.getElementById("contrasella");


function precionar()
{

    if(usuario.value == "Alumno" && contrasella.value == 2024){
       window.location.href = '/curso.html';



    }else{

        alert("error de secion vuelba a ingresar la contraseña 2024 y el usuario Alumno ")
    }



}


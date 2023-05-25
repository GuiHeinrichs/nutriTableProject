var searchButton = document.querySelector("#buscar-pacientes");

searchButton.addEventListener("click", ()=>{
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", () => {
        var apiError = document.querySelector("#apiError");
        if(xhr.status == 200){
            apiError.classList.add("invisivel");
            let response = xhr.responseText;
            let pacientes = JSON.parse(response);
            
            pacientes.forEach(paciente => {
                addPacienteIntoTable(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            apiError.classList.remove("invisivel");
        }
    });

    xhr.send();

});
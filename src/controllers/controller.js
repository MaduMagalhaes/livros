document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    var titulo = document.getElementById("titulo"); 
    var ano = document.getElementById("ano"); 
    var porNome = document.getElementById("porNome");
    var porAno = document.getElementById("porAno");

    if (porNome.checked) {
        ano.value = "";
        ano.disabled = true;
        window.location.href = `/buscar/?titulo=${titulo.value}`;
    } else if (porAno.checked) {
        titulo.value = "";
        titulo.disabled = true;
        window.location.href = `/buscar/${ano.value}`;
    }
});

document.getElementById('porNome').addEventListener('click', function (){ 
    if(porNome.checked) {
        titulo.disable = false;
        ano.value = "";
        ano.disabled = true;
    } else {
        porNome.checked = false;
        ano.disabled = false;
    }
})

document.getElementById('porAno').addEventListener('click', function (){ 
    if(porAno.checked) {
        ano.disable = false;
        titulo.value = "";
        titulo.disabled = true;
    } else {
        porAno.checked = false;
        titulo.disabled = false;
    }
})
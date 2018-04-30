loggeado = false;







function acceso() {
    var f = document.getElementById("form1");
    while (f.hasChildNodes()) f.removeChild(f.firstChild);
    var user = document.createElement("input");
    user.setAttribute("type", "text");
    user.setAttribute("placeholder", "Usuario");
    user.setAttribute("id", "campouser")
    var pass = document.createElement("input");
    pass.setAttribute("type", "password");
    pass.setAttribute("placeholder", "Contraseña");
    pass.setAttribute("id", "campopass")
    var boton = document.createElement("button");
    boton.textContent = "Acceder";

    f.appendChild(user);
    f.appendChild(pass);
    f.appendChild(boton);


    boton.addEventListener("click", validar);
}









function validar() {
    var user = document.getElementById("campouser").value;
    var pass = document.getElementById("campopass").value;
    if (user == "prueba" && pass == "prueba") {
        loggeado = true;
        var f = document.getElementById("form1");
        while (f.hasChildNodes()) f.removeChild(f.firstChild);
        var saludo = document.createElement("h2");
        saludo.textContent = "Usuario loggeado:";
        var saludo2 = document.createElement("h2");
        saludo2.textContent = user;
        var cerrarsesion = document.createElement("button");
        cerrarsesion.addEventListener("click", acceso);
        cerrarsesion.textContent = "Cerrar sesión";

        f.appendChild(saludo);
        f.appendChild(saludo2);
        f.appendChild(cerrarsesion);
    } else {

    }
}









function setCookie(nombre, valor, expiracion) {
    var d = new Date();
    d.setTime(d.getTime() + expiracion * 24 * 60 * 60 * 1000);
    var expiracion = "expires=" + d.toUTCString();
    documen.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}





function getCookie(nombre) {
    var nom = nombre + "=";
    var array = dpcument.cookie.split(";");
    for (var i = 0; i < array.length; i++) {
        var c = array[i];
        while (c.charAt(0) = " ") {
            c.c.substring(1);
        }
        if (c.indexOf(nombre) == 0) {
            return c.substring(nombre.length, c.length);
        }
    }
    return "";
}

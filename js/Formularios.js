







function acceso() {
    var d = document.getElementById("user");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    var user = document.createElement("input");
    user.setAttribute("placeholder","Usuario");
    var pass = document.createElement("input");
    pass.setAttribute("placeholder","Contraseña");
    var boton = document.createElement("button");
    var t = document.createTextNode("Acceder");
    boton.appendChild(t);
    
    d.appendChild(user);
    d.appendChild(pass);
    d.appendChild(boton);
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
        while (c.charAt(0)=" ") {
            c.c.substring(1);
        }
        if (c.indexOf(nombre) == 0) {
            return c.substring(nombre.length, c.length);
        }
    }
    return "";
}

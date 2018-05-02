loggeado = false;
moduloscreados=false;
validado();




function validado(){
    if(loggeado==false){
        document.getElementById("modulos").style.display="none";
    }else{
        document.getElementById("modulos").style.display="flex";
    }
}





function acceso() {
    loggeado=false;
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
    validado();
    initPopulate();
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
        
        modulos();
        validado();
    } else {
        alert("Usuario incorrecto.");
    }
}











function modulos(){
    if(moduloscreados==false){
    var modulocat= document.getElementById("modulocat");
    var modulonav= document.getElementById("modulonav");
    var moduloprod= document.getElementById("moduloprod");
    var modulostock= document.getElementById("modulostock");
    
    var addcat= document.createElement("div");
    addcat.setAttribute("class","editar");
    addcat.textContent="Añadir categoría";
    addcat.setAttribute("onclick","addcat()");
    addcat.setAttribute("style","cursor:pointer");
    var removecat= document.createElement("div");
    removecat.setAttribute("class","editar");
    removecat.textContent="Borrar categoría";
    removecat.setAttribute("onclick","removecat()");
    removecat.setAttribute("style","cursor:pointer");
    var modifycat= document.createElement("div");
    modifycat.setAttribute("class","editar");
    modifycat.textContent="Modificar categoría";
    modifycat.setAttribute("onclick","modifycat()");
    modifycat.setAttribute("style","cursor:pointer");
    var addshop= document.createElement("div");
    addshop.setAttribute("class","editar");
    addshop.textContent="Añadir tienda";
    addshop.setAttribute("onclick","addshop()");
    addshop.setAttribute("style","cursor:pointer");
    var removeshop= document.createElement("div");
    removeshop.setAttribute("class","editar");
    removeshop.textContent="Borrar tienda";
    removeshop.setAttribute("onclick","removeshop()");
    removeshop.setAttribute("style","cursor:pointer");
    var modifyshop= document.createElement("div");
    modifyshop.setAttribute("class","editar");
    modifyshop.textContent="Modificar tienda";
    modifyshop.setAttribute("onclick","modifyshop()");
    modifyshop.setAttribute("style","cursor:pointer");
    var addprod =document.createElement("div");
    addprod.setAttribute("class","editar");
    addprod.textContent="Añadir producto";
    addprod.setAttribute("onclick","addprod()");
    addprod.setAttribute("style","cursor:pointer");
    var removeprod= document.createElement("div");
    removeprod.setAttribute("class","editar");
    removeprod.textContent="Borrar producto";
    removeprod.setAttribute("onclick","removeprod()");
    removeprod.setAttribute("style","cursor:pointer");
    var modifyprod =document.createElement("div");
    modifyprod.setAttribute("class","editar");
    modifyprod.textContent="Modificar producto";
    modifyprod.setAttribute("onclick","modifyprod()");
    modifyprod.setAttribute("style","cursor:pointer");
    var modifystock =document.createElement("div");
    modifystock.setAttribute("class","editar");
    modifystock.textContent="Modificar stock";
    modifystock.setAttribute("onclick","modifystock()");
    modifystock.setAttribute("style","cursor:pointer");
    
    modulocat.appendChild(addcat);
    modulocat.appendChild(removecat);
    modulocat.appendChild(modifycat);
    
    modulonav.appendChild(addshop);
    modulonav.appendChild(removeshop);
    modulonav.appendChild(modifyshop);
    
    moduloprod.appendChild(addprod);
    moduloprod.appendChild(removeprod);
    moduloprod.appendChild(modifyprod);
    
    modulostock.appendChild(modifystock);
        
    moduloscreados=true;
    }
    validado();
}








function addcat(){
    var d=document.getElementById("prod");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    var form=document.createElement("form");
    form.setAttribute("class","formprod");
    var nuevo=document.createElement("p");
    nuevo.textContent="Nueva categoría:";
    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("class", "campos");
    input1.setAttribute("id","inputcat");
    var boton = document.createElement("button");
    boton.textContent="Aceptar";
    boton.setAttribute("onclick","addcat2()");
    
    d.appendChild(form);
    form.appendChild(nuevo);
    form.appendChild(input1);
    form.appendChild(boton); 
    validado();
}
function addcat2(){
    var x=document.getElementById("inputcat").value;
    var x1 = new Category(x);
        almacen.addCategory(x1);
        menuCategoryShopPopulate();
    validado();
}












function removecat(){
    var d=document.getElementById("prod");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    var form=document.createElement("form");
    form.setAttribute("class","formprod");
    var nuevo=document.createElement("p");
    nuevo.textContent="Seleccionar categoría:";
    var input1 = document.createElement("select");
    input1.setAttribute("class", "campos");
    input1.setAttribute("id","selectcat");
    for(var i=0;i<categorias.length;i++){
        var option =document.createElement("option");
        option.textContent=categorias[i].title;
        input1.appendChild(option);
    }
    var boton = document.createElement("button");
    boton.textContent="Aceptar";
    boton.setAttribute("onclick","removecat2()");
    
    d.appendChild(form);
    form.appendChild(nuevo);
    form.appendChild(input1);
    form.appendChild(boton); 
    validado();
}
function removecat2(){
    var combo = document.getElementById("selectcat");
    var selected = combo.options[combo.selectedIndex].text;
        almacen.removeCategory(selected);
        menuCategoryShopPopulate();
        removecat();
    validado();
}











function modifycat(){
    var d=document.getElementById("prod");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    var form=document.createElement("form");
    form.setAttribute("class","formprod");
    var modif=document.createElement("p");
    modif.textContent="Seleccionar categoría:";
    var input1 = document.createElement("select");
    input1.setAttribute("class", "campos");
    input1.setAttribute("id","selectcat");
    for(var i=0;i<categorias.length;i++){
        var option =document.createElement("option");
        option.textContent=categorias[i].title;
        input1.appendChild(option);
    }
    var nuevo=document.createElement("p");
    nuevo.textContent="Nuevo nombre:";
    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("class", "campos");
    input2.setAttribute("id","inputcatnombre");
    var boton = document.createElement("button");
    boton.textContent="Aceptar";
    boton.setAttribute("onclick","modifycat2()");
    
    d.appendChild(form);
    form.appendChild(modif);
    form.appendChild(input1);
    form.appendChild(nuevo);
    form.appendChild(input2);
    form.appendChild(boton); 
    validado();
}
function modifycat2(){
    var combo = document.getElementById("selectcat");
    var selected = combo.options[combo.selectedIndex].text;
        for(var i=0;i<categorias.length;i++){
            if(categorias[i].title==selected){
                categorias[i].title=document.getElementById("inputcatnombre").value;
            }
        }
        menuCategoryShopPopulate();
    modifycat();
    validado();
}














function addshop(){
    var d=document.getElementById("prod");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    var form=document.createElement("form");
    form.setAttribute("class","formprod");
    var nuevo=document.createElement("p");
    nuevo.textContent="Nueva tienda:";
    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("class", "campos");
    input1.setAttribute("id","inputcat");
    var boton = document.createElement("button");
    boton.textContent="Aceptar";
    boton.setAttribute("onclick","addshop2()");
    
    d.appendChild(form);
    form.appendChild(nuevo);
    form.appendChild(input1);
    form.appendChild(boton); 
    validado();
}
function addshop2(){
    var x=document.getElementById("inputcat").value;
    var x1 = new Shop(x);
        almacen.addShop(x1);
        shopsMenusPopulate();
    validado();
}













function removeshop(){
    var d=document.getElementById("prod");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    var form=document.createElement("form");
    form.setAttribute("class","formprod");
    var nuevo=document.createElement("p");
    nuevo.textContent="Seleccionar tienda:";
    var input1 = document.createElement("select");
    input1.setAttribute("class", "campos");
    input1.setAttribute("id","selectcat");
    for(var i=0;i<tiendas.length;i++){
        var option =document.createElement("option");
        option.textContent=tiendas[i].name;
        input1.appendChild(option);
    }
    var boton = document.createElement("button");
    boton.textContent="Aceptar";
    boton.setAttribute("onclick","removeshop2()");
    
    d.appendChild(form);
    form.appendChild(nuevo);
    form.appendChild(input1);
    form.appendChild(boton); 
    validado();
}
function removeshop2(){
    var combo = document.getElementById("selectcat");
    var selected = combo.options[combo.selectedIndex].text;
        almacen.removeShop(selected);
        shopsMenusPopulate();
        removeshop();
    validado();
}














function modifyshop(){
    var d=document.getElementById("prod");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    var form=document.createElement("form");
    form.setAttribute("class","formprod");
    var modif=document.createElement("p");
    modif.textContent="Seleccionar tienda:";
    var input1 = document.createElement("select");
    input1.setAttribute("class", "campos");
    input1.setAttribute("id","selectcat");
    for(var i=0;i<tiendas.length;i++){
        var option =document.createElement("option");
        option.textContent=tiendas[i].name;
        input1.appendChild(option);
    }
    var nuevo=document.createElement("p");
    nuevo.textContent="Nuevo nombre:";
    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("class", "campos");
    input2.setAttribute("id","inputcatnombre");
    var boton = document.createElement("button");
    boton.textContent="Aceptar";
    boton.setAttribute("onclick","modifyshop2()");
    
    d.appendChild(form);
    form.appendChild(modif);
    form.appendChild(input1);
    form.appendChild(nuevo);
    form.appendChild(input2);
    form.appendChild(boton); 
    validado();
}
function modifyshop2(){
    var combo = document.getElementById("selectcat");
    var selected = combo.options[combo.selectedIndex].text;
        for(var i=0;i<tiendas.length;i++){
            if(tiendas[i].name==selected){
                tiendas[i].name=document.getElementById("inputcatnombre").value;
            }
        }
        shopsMenusPopulate();
    modifyshop();
    validado();
}












function addprod(){
    var d=document.getElementById("prod");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    var form=document.createElement("form");
    form.setAttribute("class","formprod");
    var nuevo=document.createElement("p");
    nuevo.textContent="Nuevo producto:";
    var modif=document.createElement("p");
    modif.textContent="Seleccionar tienda:";
    var input = document.createElement("select");
    input.setAttribute("class", "campos");
    input.setAttribute("id","selectcat");
    for(var i=0;i<tiendas.length;i++){
        var option =document.createElement("option");
        option.textContent=tiendas[i].name;
        input.appendChild(option);
    }
    var nuevo2=document.createElement("p");
    nuevo2.textContent="Nombre:";
    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("class", "campos");
    input1.setAttribute("id","inputnombre");
    var nuevo3=document.createElement("p");
    nuevo3.textContent="Imagen:";
    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("class", "campos");
    input2.setAttribute("id","inputimagen");
    var nuevo4=document.createElement("p");
    nuevo4.textContent="Precio:";
    var input3 = document.createElement("input");
    input3.setAttribute("type", "text");
    input3.setAttribute("class", "campos");
    input3.setAttribute("id","inputprecio");
    var nuevo5=document.createElement("p");
    nuevo5.textContent="Stock:";
    var input4 = document.createElement("input");
    input4.setAttribute("type", "text");
    input4.setAttribute("class", "campos");
    input4.setAttribute("id","inputstock");
    
    
    var boton = document.createElement("button");
    boton.textContent="Aceptar";
    boton.setAttribute("onclick","addprod2()");
    
    d.appendChild(form);
    form.appendChild(nuevo);
    form.appendChild(modif);
    form.appendChild(input);
    form.appendChild(nuevo2);
    form.appendChild(input1);
    form.appendChild(nuevo3);
    form.appendChild(input2);
    form.appendChild(nuevo4);
    form.appendChild(input3);
    form.appendChild(nuevo5);
    form.appendChild(input4);
    form.appendChild(boton); 
    validado();
}
function addprod2(){
    var serial=productos[productos.length-1].serialNumber-1;
    var combo = document.getElementById("selectcat");
    var selected = combo.options[combo.selectedIndex].text;
    var x=new Product(serial,document.getElementById("inputnombre").value,document.getElementById("inputprecio").value);
    x.images[0]=document.getElementById("inputimagen");
    almacen.addProductInShop(x, selected, document.getElementById("inputstock"));
        shopPopulate(selected);
        validado();
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

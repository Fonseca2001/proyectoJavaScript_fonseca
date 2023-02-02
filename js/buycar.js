window.addEventListener('load', function () {
    alert("It's loaded!")

    function saludar (){
        alert('Search a new car?');
    }
    
    saludar();
    
    // car data
    class Producto {
        constructor(id, marca, nombre, color, transmision, precio){
            this.id = id;
            this.marca = marca;
            this.nombre = nombre;
            this.color = color;
            this.genero = transmision;
            this.precio = precio;
        }
    }
    
    // inventory
    let producto1 = new Producto( 1, 'Volkswagen', 'UP!', 'Blanco', 'Transmision Manual', "29990");
    let producto2 = new Producto( 2, 'Volkswagen', 'SAVEIRO', 'Blanco', 'Transmision Manual', "17990");
    let producto5 = new Producto( 5, 'Volkswagen', 'AMAROK', 'Blanco', 'Transmision Automatica', "47990");
    let producto3 = new Producto( 3, 'Volkswagen', 'GOL', 'Blanco','Transmision Manual', "21990");
    let producto4 = new Producto( 4, 'Volkswagen', 'TOUAREG', 'Blanco', 'Transmision Automatica', "45000");
    
    // product list in stock
    let listaDeProductos = [producto1, producto2, producto3, producto4, producto5];
    
    // product list
    let productosDisponibles = '';
    
    function mostrarProductosDisponibles (){
        listaDeProductos.map(producto => {
            productosDisponibles += (`\n ${producto.id}. ${producto.nombre} ${producto.precio} usd`);
        });
    }
    
    mostrarProductosDisponibles();
    
    // car selection
    let idProducto = 0;
    let productoElegido = 0;
    let compra = '';
    let precio = 0;
    
    function seleccionProducto(){
        idProducto = Number(prompt(`Indica cual de estos ${listaDeProductos.length} autos desea comprar
        ${productosDisponibles}`));
    
        productoElegido = listaDeProductos[idProducto -1];
    
        if (idProducto > 0 && idProducto <= listaDeProductos.length){
            compra = productoElegido.nombre;
            precio = productoElegido.precio;
        }    
    }
    
    seleccionProducto();
    
    // validation
    while(idProducto <= 0 || idProducto > listaDeProductos.length || idProducto === "no"){
        alert(`El valor ingresado no es valido intente un numero del 1 al ${listaDeProductos.length} o escriba no para salir`);
        seleccionProducto();
    }
    
    // to buy
    let unidades = 0;
    
    function cantidadDeUnidades () {
        unidades = Number(prompt(`¿Cuantas unidades del ${productoElegido.nombre} quieres comprar?`));
    }
    cantidadDeUnidades ()
    
    // name
    let usuario = prompt("Nombre y aprellido");
    
    function validarNombre (){
        while((usuario.length < 6 )){
            alert('Debes incluir por lo menos 6 caracteres');
            usuario = prompt("Intenta nuevamente");
        }
        alert(`Usuario : ${usuario}`);
    
    }
    
    validarNombre() ;
    
    // address
    let direccion = prompt("Ingrese direccion");
    
    function validarDireccion () {
        while((direccion.length < 6)){
            alert('Debes incluir por lo menos 6 caracteres');
            direccion = prompt("Intenta nuevamente");
        }
        alert(`Direccion registrada : ${direccion}`);
    }
    
    validarDireccion();
    
    // mail and confirmation
    let correo = prompt("Ingrese correo electronico");
    alert("Confirmar correo");
    let correoConfirmado = "";
    
    function validarCorreo (){
        do {
            correoConfirmado = prompt("Confirmacion de correo");
            if (correo === correoConfirmado){
                alert("Registro exitoso!");
            }else{
                alert("correo ingresado no coincide");
            }
        }while(correo != correoConfirmado);
        return correo;
    }
    
    validarCorreo();
    
    // type of delivery of your car
    let envio = 1000;
    let retiroEnTienda = 100;
    let tipoDeEntrega = '';
    let precioDeEntrega = 0;
    
    let entrega = prompt(`Tipo de entrega
    1. Envio a domicilio : ${envio} usd
    2. Retiro en tienda : ${retiroEnTienda} usd
    `);
    
    function validarEntrega (){
        while(entrega != 1 && entrega != 2){
            entrega = prompt(`Ingresa una opcion valida
            1. Envio a domicilio : ${envio} usd
            2. Retiro en tienda : ${retiroEnTienda} usd
            `);
        }    
    
        if (entrega == 1){
            alert(`Envio a domicilio ${envio} usd`);
            tipoDeEntrega = 'Envio a domicilio';
            precioDeEntrega = envio;
        }
        else if(entrega == 2){
            alert(`Retiro en tienda ${retiroEnTienda} usd`);
            tipoDeEntrega = 'Retiro en tienda';
            precioDeEntrega = retiroEnTienda;
        }
    }
    
    validarEntrega();
    
    // payment method
    let metodosDePago = ['1. Efectivo', '2. Debito', '3. Credito', '4. PayPal'];
    let seleccionDePago = '';
    
    function mostrarMetodosDePago (){
        metodosDePago.forEach(metodo => {
            seleccionDePago += (`\n${metodo }`);
        });   
    }
    mostrarMetodosDePago();
    
    // select method
    let idPago = 0;
    let metodoDePagoSeleccionado = '';
    function seleccionMetodoDePago(){
        idPago = Number(prompt(`Elige con un numero el metodo de pago ${seleccionDePago} `));
        alert(`Motodo de pago seleccionado: ${metodosDePago[idPago -1]}`);
        metodoDePagoSeleccionado = metodosDePago[idPago -1];
    }
    seleccionMetodoDePago();
    
    while(idPago <= 0 || idPago > metodosDePago.length){
        alert(`El valor ingresado no es valido intente un numero del 1 al ${metodosDePago.length}`);
        seleccionMetodoDePago();
    }
    
    // last step
    function resumenDeCompra (){
        console.log('RESUMEN DE COMPRA: ');
        console.log('Cliente: ' + usuario);
        console.log('Direccion: ' + direccion);
        console.log('Correo: ' + correo);   
        console.log('Producto: ' + compra);
        console.log('Unidades: ' + unidades);
        console.log('Precio: ' + precio +' usd');
        console.log('Subtotal: ' + `${(precio * unidades)} usd`);
        console.log('Tipo de entrega: ' + tipoDeEntrega);
        console.log('Costo de entrega: ' + precioDeEntrega +' usd');
        console.log('Total: ' + `${(precio * unidades) + precioDeEntrega} usd`);
        console.log('Metodo de pago: ' + metodoDePagoSeleccionado);
        console.log(`Participaste en el metodo de compras de Car-Max, Gracias!`)
    }
    
    resumenDeCompra();
  })
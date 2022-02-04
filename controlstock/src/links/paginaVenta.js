import React, {Fragment, useState} from 'react';
function PaginaVenta() {
    const [values, setValues] = useState({
      nroSerie: '',
      cantidad: ''
    });
    const [carrito] = useState([]);
    const [venta, setVenta] = useState({
      fecha: "",
      nombre: "",
      dni:"",
      monto:""
    });
    const productos=[
        {nroSerie:"1" ,objeto:"remera" ,marca:"nike" ,cantidad:"5" ,precio:"400"},
        {nroSerie:"2" ,objeto:"gorro" ,marca:"adidas",cantidad:"1" ,precio:"200" },
        {nroSerie:"3" ,objeto:"medias" ,marca:"fila" ,cantidad:"2" ,precio:"50" }
        ];
    const [totalVenta, setTotalVenta] = useState(0);
    function crearCarrito(event) {
      var productoAux = {};
      var producto = {nroSerie:"",cantidad:"",precio:""};
      var nroSerie = values.nroSerie;
      var cantidad = values.cantidad;
      productoAux = productos.find(aux => aux.nroSerie === values.nroSerie );
      
      if(productoAux === undefined){
          alert("Inserte numero de serie correcto");
      }
      else{
      var objeto = productoAux.objeto;
      var marca = productoAux.marca;
      var precio = productoAux.precio;  
      producto = {nroSerie,cantidad,precio,objeto,marca};
      carrito.push(producto);
      setTotalVenta (totalVenta + (parseInt(producto.precio) * parseInt(producto.cantidad)));
      }
      event.preventDefault();
    }
    function efectuarVenta(event){
      event.preventDefault();
        venta.monto = totalVenta;
        console.log(venta); //cambiar los datos de los items (cantidad) y mandar a historialVentas
    }
    function cambiarValues(event) {
      setValues({
        ...values,
        [event.target.name] : event.target.value
    })
    }
    function cambiarVenta(event){
      setVenta({
        ...venta,
        [event.target.name] : event.target.value
      })
    }
    return (
      <>
      <br/>
      <div align="center" className="btn-group btn-group-justified">
      <a href="/" className="buttonBlue" role="button" >Inicio</a>
      </div>
    	<br/>
      <div className='container'>
        <form onSubmit={crearCarrito}>
          <div className='form-group'>
            <label htmlFor="nroSerie">Numero de serie</label>
            <input
              name="nroSerie"
              type="text"
              className='form-control'
              value={values.nroSerie}
              onChange={cambiarValues}
            />
          </div>  
          <div className='form-group'>
            <label htmlFor="cantidad">Cantidad</label>
            <input
              name="cantidad"
              type="text"
              className='form-control'
              value={values.cantidad}
              onChange={cambiarValues}
            />
          </div>  
          <button className='buttonBlue' type="submit">Agregar al carrito</button>
        </form>
        <table className="table table-condensed">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
			      <th scope="col">Marca</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
        {carrito.map (row => (
          <tr>
            <td>{row.nroSerie}</td>
            <td>{row.objeto}</td>
            <td>{row.marca}</td>
            <td>{row.cantidad}</td>
            <td>{row.precio}</td>
          </tr>
          ))}
        </tbody>
        <tfoot>
            <tr>
              <th scope="row" colSpan="5">Total de la venta = ${totalVenta}</th>
            </tr>
        </tfoot>
      </table>
        <form onSubmit={efectuarVenta}>
          <div className='form-group'>
            <label htmlFor='fecha'>Fecha</label>
            <input
              name="fecha"
              type="date"
              className='form-control'
              value={venta.fecha}
              onChange={cambiarVenta}
            />
          </div>
          <div className='form-group'>  
            <label htmlFor='nombre'>Nombre</label>
            <input
              name="nombre"
              type="text"
              className='form-control'
              value={venta.nombre}
              onChange={cambiarVenta}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='dni'>DNI</label>
            <input
              name="dni"
              type="text"
              className='form-control'
              value={venta.dni}
              onChange={cambiarVenta}
            />
          </div>
          <button className='buttonBlue' type="submit"> Efectuar Venta</button>
          <br/><br/><br/>
        </form>
      </div>
      </>
    );
  }
export default PaginaVenta;
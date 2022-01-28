function paginaVenta(){
    return(
        <>
        <br/>
	<div align="center" class="btn-group btn-group-justified">
	<a href="/" class="buttonBlue" role="button" >Inicio</a>
	</div>
	<br/>
	<div class="container">
	  <h2>Venta</h2>
	  <form action="venta.php" method="post">
	    <div class="form-group">
	      <label>Fecha:</label>
	      <input type="date" class="form-control" name="fechaVenta" required/>
	    </div>
	    <div class="form-group">  
	      <label>Numero de serie:</label>
	      <input type="text" class="form-control" name="nroSerie" placeholder="Numero de serie" required/>
	    </div>
	    <div class="form-group">
	      <label>Cantidad:</label>
	      <input type="text" class="form-control" name="cantidad" placeholder="Cantidad" required/>
	    </div>
	    <div class="form-group">
	      <label>Numero de DNI:</label>
	      <input type="text" class="form-control" name="DNI" placeholder="Numero de DNI" required/>
	    </div>
	    <div class="form-group">
	      <label>Nombre y apellido:</label>
	      <input type="text" class="form-control" name="nombreApellido" placeholder="Nombre y apellido" required/>
	    </div>
	    <input type="submit" class="buttonBlue" value="Efectuar venta"/>
	  </form>
	</div>
        </>
    );
}
export default paginaVenta
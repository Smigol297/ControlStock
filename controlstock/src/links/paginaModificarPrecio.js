function paginaModificarPrecio(){
    return(
        <>
            <br/>
	<div align="center" class="btn-group btn-group-justified">
	<a href="/" class="buttonBlue" role="button" >Inicio</a>
	</div>
	<br/>
	<div class="container">
	  <h2>Modificar precio</h2>
	  <form action="modificarPrecio.php" method="post">
	    <div class="form-group">
	      <label>Numero de serie:</label>
	      <input type="text" class="form-control" name="nroSerie" placeholder="Numero de serie" required/>
	    </div>
	    <div class="form-group">  
	      <label>Nuevo precio:</label>
	      <input type="text" class="form-control" name="precio" placeholder="Nuevo precio" required/>
	    </div>
	    <input type="submit" class="buttonBlue" value="Modificar precio"/>
	  </form>
	</div>
        </>
    );
}
export default paginaModificarPrecio;
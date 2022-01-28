function paginaAgregarElementos(){
    return(
    <>
    <br/>
	<div align="center" class="btn-group btn-group-justified">
	<a href="/" class="buttonBlue" role="button" >Inicio</a>
	</div>
	<br/>
	<div class="container">
	  <h2 >Agregar elementos a stock</h2>
	  <form action="agregarElementos.php" method="post">
	    <div class="form-group">
	      <label>Numero de serie:</label>
	      <input type="text" class="form-control" name="nroSerie" placeholder="Numero de serie" required/>
	    </div>
	    <div class="form-group">  
	      <label>Cantidad:</label>
	      <input type="text" class="form-control" name="cantidad" placeholder="Cantidad" required/>
	    </div>
	  	<input type="submit" class="buttonBlue" value="Agregar elementos"/>
	  </form>
	</div>
    </>
    );
}
export default paginaAgregarElementos;
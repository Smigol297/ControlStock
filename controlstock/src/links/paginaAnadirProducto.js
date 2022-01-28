function paginaAnadirProducto(){
    return(
        <>
            <br/>
	<div align="center" class="btn-group btn-group-justified">
	<a href="/" class="buttonBlue" role="button" >Inicio</a>
	</div>
	<br/>
	<div class="container">
	<h2>Agregar nuevo producto</h2>
	<form action="anadirproducto.php" enctype="multipart/form-data" method="POST">
	<div class="form-group">
		<label>Nro de serie: </label>
		<input type="text" class="form-control" name="nroSerie" placeholder="Numero de serie" required/>
	</div>
	<div class="form-group">
		<label>Tipo:</label>
		<input type="text" class="form-control" name="tipo" placeholder="Tipo" required/>
	</div>
	<div class="form-group">
		<label>Marca:</label>
		<input type="text" class="form-control" name="marca" placeholder="Marca" required/>
	</div>
	<div class="form-group">
		<label>Modelo:</label>
		<input type="text" class="form-control" name="modelo" placeholder="Modelo" required/>
	</div>
	<div class="form-group">
		<label>Precio:</label>
		<input type="text" class="form-control" name="precio" placeholder="Precio" required/>
	</div>
	<div class="form-group">
		<label>Cantidad:</label>
		<input type="text" class="form-control" name="cantidad" placeholder="Cantidad" required/>
	</div>
	<div class="form-group">
		<label>Color:</label>
		<input type="text" class="form-control" name="color" placeholder="Color" required/>
	</div>
	<div class="form-group">
		<label>Hombr/e/Mujer</label>
		<input type="text" class="form-control" name="h_m" placeholder="Hombr/e/Mujer" required/>
	</div>
	<div class="form-group">
		<label>Imagen:</label>
		<input id="imagen" name="imagen" size="30" type="file" required/>
	</div>
	<input type="submit" class="buttonBlue" value="Agregar producto"/>
	</form>
	</div>
    </>
    )
}

export default paginaAnadirProducto;
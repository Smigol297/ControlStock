<!DOCTYPE html>

<html lang="es">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
 		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
		<title>Agregar nuevo producto</title>
	</head>

	<body >
	<br>
	<div align=center class="btn-group btn-group-justified">
	<a href="Inicio.php" class="btn btn-warning" role="button" >Inicio</a>
	</div>
	<br>
	<div class="container">
	<h2>Agregar nuevo producto</h2>
	<form action="anadirproducto.php" enctype="multipart/form-data" method="POST">
	<div class="form-group">
		<label>Nro de serie: </label>
		<input type="text" class="form-control" name="nroSerie" placeholder="Numero de serie" required>
	</div>
	<div class="form-group">
		<label>Tipo:</label>
		<input type="text" class="form-control" name="tipo" placeholder="Tipo" required>
	</div>
	<div class="form-group">
		<label>Marca:</label>
		<input type="text" class="form-control" name="marca" placeholder="Marca" required>
	</div>
	<div class="form-group">
		<label>Modelo:</label>
		<input type="text" class="form-control" name="modelo" placeholder="Modelo" required>
	</div>
	<div class="form-group">
		<label>Precio:</label>
		<input type="text" class="form-control" name="precio" placeholder="Precio" required>
	</div>
	<div class="form-group">
		<label>Cantidad:</label>
		<input type="text" class="form-control" name="cantidad" placeholder="Cantidad" required>
	</div>
	<div class="form-group">
		<label>Color:</label>
		<input type="text" class="form-control" name="color" placeholder="Color" required>
	</div>
	<div class="form-group">
		<label>Hombre/Mujer</label>
		<input type="text" class="form-control" name="h_m" placeholder="Hombre/Mujer" required>
	</div>
	<div class="form-group">
		<label>Imagen:</label>
		<input id="imagen" name="imagen" size="30" type="file" required>
	</div>
	<input type="submit" class="btn btn-warning" value="Agregar producto">
	</form>
	</div>
	</body>
</html>

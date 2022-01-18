<!DOCTYPE html>

<html lang="es">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
 		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
		<title>Venta</title>
	</head>
	
	<body >
	<br>
	<div align=center class="btn-group btn-group-justified">
	<a href="Inicio.php" class="btn btn-warning" role="button" >Inicio</a>
	</div>
	<br>
	<div class="container">
	  <h2>Venta</h2>
	  <form action="venta.php" method="post">
	    <div class="form-group">
	      <label>Fecha:</label>
	      <input type="date" class="form-control" name="fechaVenta" required>
	    </div>
	    <div class="form-group">  
	      <label>Numero de serie:</label>
	      <input type="text" class="form-control" name="nroSerie" placeholder="Numero de serie" required>
	    </div>
	    <div class="form-group">
	      <label>Cantidad:</label>
	      <input type="text" class="form-control" name="cantidad" placeholder="Cantidad" required>
	    </div>
	    <div class="form-group">
	      <label>Numero de DNI:</label>
	      <input type="text" class="form-control" name="DNI" placeholder="Numero de DNI" required>
	    </div>
	    <div class="form-group">
	      <label>Nombre y apellido:</label>
	      <input type="text" class="form-control" name="nombreApellido" placeholder="Nombre y apellido" required>
	    </div>
	    <input type="submit" class="btn btn-warning" value="Efectuar venta">
	  </form>
	</div>

	</body>
</html>

<!DOCTYPE html>
<?php
include("conexion.php");
?>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >	
	<meta name="viewport" content="width=device-width, initial-scale=0.5">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
 	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
	<title> Historial de ventas </title>
</head>
<body>
	<body >
	<br>
	<div align=center class="btn-group btn-group-justified">
	<a href="Inicio.php" class="btn btn-warning" role="button" >Inicio</a>
	</div>
	<br>
	<input class="form-control" id="myInput" type="text" placeholder="Search..">
	<br>
	<table class="table table-condensed" align =center > 
	<thead>
		<tr class="container-fluid">
			<th class="text-center"> Fecha </th> 
			<th class="text-center"> Nro de serie </th>
			<th class="text-center"> Cantidad </th>
			<th class="text-center"> DNI </th> 
			<th class="text-center"> Nombre y apellido </th> 
		</tr>
	</thead>
	<tbody id="myTable">
		<?php
		$con=conectar();
		$query = "SELECT * FROM venta ORDER BY fechaVenta DESC ";
		$resultado = mysqli_query($con, $query) or die ("Algo paso");
		while ($columna = mysqli_fetch_array($resultado))
				{
		?>
					<tr div align=center class="container-fluid" class="text-center">
						<td><?php echo $columna['fechaVenta'];?></td>
						<td><?php echo $columna['nro_serie'];?></td>
						<td><?php echo $columna['cantidad'];?></td>
						<td><?php echo $columna['DNI'];?></td>
						<td><?php echo $columna['nombreApellido'];?></td>
					</tr>
		<?php
				}
		?>

<script>
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
</script>

</table>
</body>
</html>

